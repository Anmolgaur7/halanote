import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Logo from "../images/logo.png";
export default function Navbar() {
  let navigate=useNavigate();
  const handlelogout=()=>{
    localStorage.removeItem('token')
    navigate("/") 
  }
  return (
   <>
   <div>
    <nav>
    <ul className='flex  items-center flex-wrap bg-black'>
    <li>
    <Link to="/"><img src={Logo} alt="some error occured" className='w-76 h-36'  /></Link>
    </li>
    {!localStorage.getItem('token')?<div className='flex ml-auto justify-center items-center'>
    <li>
    <Link to="/login" className='m-5 font-mono text-yellow-300 text-3xl hover:text-yellow-200 '>Login</Link>
    </li>
    <li className='m-5'>
    <button className='bg-yellow-300 text-black font-bold text-4xl border-none rounded-xl p-2  text-center hover:bg-yellow-200'><Link to="/signup"className='m-5'>Get Started</Link></button>
    </li>
    </div>:<button className='bg-yellow-300 text-black font-bold text-4xl ml-auto border-none rounded-xl p-2  text-center hover:bg-yellow-200' onClick={handlelogout}>Log out</button>}
    </ul>
    </nav>
   </div>
   </>
  )
}
