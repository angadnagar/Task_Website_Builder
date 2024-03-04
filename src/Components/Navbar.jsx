import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import '../app.css';
export const Navbar = () => {
  return (

    <div className="NavContainer bg-gray-900 py-4">
    <div className="container mx-auto flex justify-between items-center">

        <div className='NavInput flex ml-40 items-center'>
      

      <input
        type="text"
        className="px-3 py-1 bg-white text-black border-none rounded-md"
        />
       
        
       <SearchIcon className='text-white ml-2 hover:cursor-pointer'/>
      

    
        </div>
      <div className="flex space-x-10 mr-40 NavLinks">
        <a href='/' className=" text-gray-400 hover:text-white">Categories</a>
        <a href='/' className="text-gray-400 hover:text-white">Website Builder</a>
        <a href='/' className="text-gray-400 hover:text-white">Today's Deals</a>
      </div>
    </div>
  </div>
   
  

  )
}







