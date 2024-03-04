import React from 'react'
import "../app.css"

const Footer = () => {
  return (
    
    <div className='bg-gray-900 flex flex-row justify-center gap-56 py-20'>
        <div className='text-white flex flex-col gap-4'>
            <h2 className='text-xl mb-2'>CATEGORIES</h2>
            <a href="/" className=' text-sm text-gray-400 '>Web Builder</a>
            <a href="/" className='text-sm text-gray-400 '>Hosting</a>
            <a href="/" className='text-sm text-gray-400 '>Data Center</a>
            <a href="/" className='text-sm text-gray-400 '>Robotic-Automation</a>
        </div>
       
        <div className='text-white flex flex-col gap-4'>
            <h2 className='text-xl mb-2'>CONTACT</h2>
            <a href="/" className=' text-sm text-gray-400 '>Contact</a>
            <a href="/" className=' text-sm text-gray-400'>Privacy Policy</a>
            <a href="/" className=' text-sm text-gray-400 '>Terms of Service</a>
            <a href="/" className=' text-sm text-gray-400'>Categories</a>
            <a href="/" className=' text-sm text-gray-400 '>About</a>
            
        </div>
      
        <select name="" id="" className='h-10 bg-inherit text-gray-400 text-sm mt-10 '>
            <option value="United States" defaultChecked>United States</option>
            <option value="United States">India</option>
            <option value="United States">Germany</option>
        </select>
    </div>

//     <div className='bg-gray-900 flex flex-col lg:flex-row'>
//   <div className='text-white'>
//     <h2 className='text-white px-20 py-8'>Categories</h2>
//     <div className='flex flex-col px-20 py-20 mb-40'>
//       <a href="/">Web Builder</a>
//       <a href="/">Hosting</a>
//       <a href="/">Data Center</a>
//       <a href="/">Robotic Automation</a>
//     </div>
//   </div>
//   <div className='text-white'>
//     <h2 className='text-white px-20 py-8'>Contacts</h2>
//     <div className='flex flex-col px-20 py-20'>
//       <a href="/">Contact</a>
//       <a href="/">Privacy Policy</a>
//       <a href="/">Terms of Service</a>
//       <a href="/">About</a>
//     </div>
//   </div>
//   <select className='text-white' name="" id="">
//     <option value="United States" defaultChecked>United States</option>
//     <option value="India">India</option>
//     <option value="Germany">Germany</option>
//   </select>
// </div>
  )
}

export default Footer