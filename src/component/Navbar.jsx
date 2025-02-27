import React from 'react'
import { Link, useLocation } from "react-router-dom"; 
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-[#E4E6F1] grid grid-cols-3 border-b-gray-600 py-4'>
      <div className='text-left'>
       <h1 className='text-2xl font-bold pl-10'>
        FoodLand<span className='text-red-500'>.</span>
       </h1>
      </div>

      <div className=''>
        <ul className='flex space-x-6 p-2 font-bold'>
         <Link rel="stylesheet" href="" >
         <li>Home</li>
         </Link>

         <Link rel="stylesheet" href="" >
         <li>Recipes</li>
         </Link> 

         <Link rel="stylesheet" href="" >
         <li>Blog</li>
         </Link>

         <Link rel="stylesheet" href="" >
         <li>Contact</li>
         </Link>

         <Link rel="stylesheet" href="" >
         <li>About Us</li>
         </Link>
        </ul>
       
      </div>
      <div>
      <div className='justify-center text-2xl  flex gap-8 p-2 text-black'>
        <Link>
        <FaFacebook className='text-black' />
        </Link>
        <Link>
        <FaInstagram className='text-black' />
        </Link>
        <Link>
        <FaTwitter className='text-black' />
        </Link>
      
    </div>
      </div>
      
      
     
    </div>
  )
}

export default Navbar
