import React from 'react'

import NavLink from './NavLinks';
import { FaGlobeAsia } from "react-icons/fa";
import Searchbar from './Searchbar';
function Navbar() {
  return (
    <>
     <div className='flex justify-between items-center px-10 h-25 shadow-md w-full'>

<div className=' flex items-center'>
        <FaGlobeAsia className='text-blue-500' size={50} />
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-purple-700'>ZyraNews</h1>
      </div>
<div>
  <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-purple-700 font-semibold text-3xl ">Where Technology Meets Journalism</h1>
</div>

    <Searchbar/>
 </div> 

    <div className="flex flex-col w-11/12 mx-auto ">
   
<div className='  mx-auto w-8/12  mt-7'>
   <NavLink/>
    </div>
   </div>
    </>
  )
}

export default Navbar
