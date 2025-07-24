import React from "react";
import Container from "../container/Container";
import Logo from "../Logo";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";



function Header() {

  const authstatus=useSelector((state) => state.auth.status);

 const navigate=useNavigate();


 const navitems=[
  {
    name: "Home",
    slug: "/",
    isActive: true,
  },
   {
    name: "Login",
    slug: "/login",
    isActive:!authstatus,
  },
  {
    name: " Signup",
    slug: "/signup",
    isActive:!authstatus,
  },
  {
    name: "All Posts",
    slug: "/all-posts",
    isActive:authstatus,
  },
  {
    name: "Add Posts",
    slug: "/add-posts",
    isActive:authstatus,
  },
 ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navitems.map((item) => 
            item.isActive ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authstatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header;
export { Header };