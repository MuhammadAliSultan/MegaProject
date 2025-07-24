import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authslice";
import authservice from "../../appwrite/auth";

function LogoutBtn(){
    const dispatch=useDispatch();
    const handleLogout=() => {
      
            authservice.logout()
            .then(()=>dispatch(logout()))
            
        
    };
    return (
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={handleLogout}>
            Logout
        </button>
    );
}

export default LogoutBtn;