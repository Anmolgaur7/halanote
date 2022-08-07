import React from 'react'
import Logo from "../images/logo.png";
export default function Navbar() {
  return (
   <>
   <div>
    <nav>
    <ul className='flex  items-center flex-wrap bg-black'>
    <li>
    <img src={Logo} alt="some error occured" className='w-76 h-36'  />
    </li>
    <li className='ml-auto '>
  <a href="/" className='m-5 font-mono text-yellow-300 text-3xl hover:text-yellow-200 '>Login</a>
    </li>
    <li className='m-5'>
    <button className='bg-yellow-300 text-black font-bold text-4xl border-none rounded-xl p-2  text-center hover:bg-yellow-200'><a href="/"className='m-5'>Get Started</a></button>
    </li>
    </ul>
    </nav>
   </div>
   </>
  )
}
