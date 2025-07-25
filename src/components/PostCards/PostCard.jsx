import React from 'react'
import {service as appwriteService} from "../appwrite/conf"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold text-gray-500 hover:text-gray-700 transition-all duration-300'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard