import { Client,ID,Account } from "appwrite";
import config from "../config/conf";
 
export  class  AuthService{
client = new Client(); // lowercase variable name
account;

constructor(){
this.client
.setEndpoint(config.AppwriteUrl)
.setProject(config.Appwriteprojectid);
this.account=new Account(this.client);
}
async createAccount({email,password,name}){
    try{
        const user = await this.account.create(ID.unique(), email, password, name);
        if(user){
//another method  to be called here
            return this.login({email,password});
        } else {
            return null;
        }
    }catch(error){
        console.error("Error creating account:", error);
        
    }
}
async login({email,password}){
    // eslint-disable-next-line no-useless-catch
    try {
       const log= await this.account.createEmailPasswordSession(email, password);
         if(log){
              return log;
         } else {
              return null;
         }
    } catch (error) {
        console.error("Error logging in to  account:", error);
        throw error;
    }
}
async getuseraccount(){
    try{
   //logout
     const log=await this.account.get();
     if(log){
      return log
    }else{ 
        return null
    }
    }catch(error){
     console.error("Error getting user account:", error);
     throw error;    
     }
}
async logout(){
    // eslint-disable-next-line no-useless-catch
    try{
    return await this.account.deleteSessions()
    }
    catch(error){
       console.error("Error logging out of  account:", error);
        throw error;
    }
}

}
const authservice =new AuthService()
export default authservice;