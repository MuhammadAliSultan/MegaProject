
import './App.css'
import React, { useEffect, useState } from 'react';
import {  useDispatch } from 'react-redux';
import { Header, Footer } from './components/index.js';
import authservice from './appwrite/auth';
import { login,logout } from './store/authslice';

function App() {
  const [loading ,setLoading]=useState(true);
const dispatch=useDispatch();
  useEffect(() => {
    authservice.getuseraccount()
    .then((user) => {
      if(user){
        dispatch(login());
      }else{
         dispatch(logout());
      }
    })
    .finally(() => {
      setLoading(false);
    });

  },[])

  return (!loading)?(
    <div className="text-center text-2xl text-amber-300 background-gray-800 min-h-screen">
      <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4">Welcome to My App</h1>
      <div className="mb-4 text-amber-950 border-2 border-amber-950 p-4 rounded-lg text-bold">
      <Header />
      </div>
      <br/>
      <p className="text-lg mb-8">You can add your content here.</p>
      <h1>React with AppWrite</h1>
      <br/>

     
      <Footer />
      </div>
    </div>
  ):null;
}


export default App
