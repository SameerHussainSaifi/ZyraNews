import React from 'react'
import globe from '/src/assets/globe2.png'
import NavLink from './NavLinks';
import { FaGlobeAsia } from "react-icons/fa";
import Searchbar from './Searchbar';
function Navbar({Data,setData}) {
  return (
    <>
    
 <div className=' flex  flex-col items-center  justify-evenly  h-25 shadow-md px-20  w-full md:hidden'>

<div className='flex   justify-between   w-full '>
<div className=' flex items-center '>
  
       <img src={globe} alt="" className='w-10 sm:w-15 lg:w-20' />
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-700 text-lg ml-1'>ZyraNews</h1>
      </div>
  
<div >
 
   <Searchbar Data={Data} setData={setData} />
 </div>
  </div>

   <div>
    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-700 font-semibold text-sm sm:text-sm md:text-sm lg:text-lg  py-1">Where Technology Meets Journalism</h1>
    </div>
 </div> 
    

     <div className='hidden md:flex justify-between items-center  px-10 h-25 shadow-md w-full'>

<div className=' flex items-center'>
  
        <img src={globe} alt="" className='w-20'/>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-700 text-lg ml-1'>ZyraNews</h1>
      </div>
<div className='hidden md:block'>
  <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-700 font-semibold text-3xl py-1">Where Technology Meets Journalism</h1>
  </div>


    <Searchbar data={Data} setData={setData}/>
 </div> 

    <div className="flex flex-col w-11/12 mx-auto ">
   
<div className='  mx-auto w-10/12  mt-7'>
   {/* <NavLink/> */}
    </div>
   </div>
    </>
  )
}

export default Navbar
