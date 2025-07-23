import { Client,ID,Storage,Query, Databases} from "appwrite";
import config from "../config/conf";
export class Service{
client=new Client();
database;
bucket;
constructor(){
    this.client
.setEndpoint(config.AppwriteUrl)
.setProject(config.Appwriteprojectid);
this.database=new Databases(this.client);
this.bucket=new Storage(this.client);
}

async createPost({title,slug,featuredimage,status,userid,content}) {
 try{

    await this.database.createDocument(
        config.Appwritedatabaseid,
        config.Appwritecollectionid,
        slug,
        {
            title,
            featuredimage,
            status,
            userid,
            content
        }
    )
 }catch(error){
    console.error("Error creating post:", error);
    throw error;
 }
}
//update
async updatePost({title,slug,featuredimage,status,content}) {
    
    try {
        await this.database.updateDocument(
            config.Appwritedatabaseid,
            config.Appwritecollectionid,
            slug,
            {
                title,
                featuredimage,
                status,
                content
            }
        );
    } catch (error) {
        console.error("Error updating post:", error);
        throw error;
    }
    }

    async deletePost({slug}) {
    
    try {
        await this.database.deleteDocument(
            config.Appwritedatabaseid,
            config.Appwritecollectionid,
            slug
        );
        return true; // Return true to confirm deletion
    } catch (error) {
        console.error("Error updating post:", error);
         return false;
        // Return false if deletion fails
    }
    }

    async getPost({slug}){
        try {
            return await this.database.getDocument(
                config.Appwritedatabaseid,
                config.Appwritecollectionid,
                slug,
            );
        } catch (error) {
             console.error("Error Getting post:", error);
        throw error; 
        }

    }

    async getPosts(){
        try {
            return await this.database.listDocuments(
                config.Appwritedatabaseid,
                config.Appwritecollectionid,
                Query.equal("status", "Active"),
            );
        } catch (error) {
             console.error("Error Getting posts:", error);
        throw error; 
        }

    }


    //  file methods 


    async uploadFile({file}) {
        try {
             await this.bucket.createFile(
                config.Appwritebucketid,
               ID.unique(),
                file
            );
            return false
        } catch (error) {
            console.error("Error uploading file:", error);
            return false
        }
    }

     async deleteFile({fileId}) {
        try {
             await this.bucket.createFile(
                config.Appwritebucketid,
                fileId
            );
            return true;
        } catch (error) {
            console.error("Error deleting file:", error);
            return false
        }
    }

     getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.Appwritebucketid,
            fileId
        )
     }
}
const service = new Service();
export default service;
