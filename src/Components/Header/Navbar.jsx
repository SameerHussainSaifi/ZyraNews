import React from 'react'

import NavLink from './NavLinks';
import { FaGlobeAsia } from "react-icons/fa";
import Searchbar from './Searchbar';
function Navbar() {
  return (
    <>
    <div className="flex flex-col w-11/12 mx-auto ">
    <div className='flex justify-between items-center px-10 h-25'>

<div className=' flex items-center'>
        <FaGlobeAsia className='text-blue-500' size={50} />
        <h1 className=''>ZyraNews</h1>
      </div>
<div>
  <h1>Where Technology Meets Journalism</h1>
</div>

    <Searchbar/>
 </div> 
<div className='border-1 px-5 py-2 mx-auto w-8/12'>
   <NavLink/>
    </div>
   </div>
    </>
  )
}

export default Navbar
