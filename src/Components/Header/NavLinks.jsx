import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Home from './Home';
import Politics from './Politics';
import Education from './Education';
import Tech from './Tech';
import Health from './Health';
import Science from './Science';
function NavLinks() {
  return (
    <>
     <div className='flex space-x-10 justify-center px-5 py-2 items-center rounded-lg border-1 border-orange-500  flex-wrap text-purple-500'>
      
      
      <NavLink to='/' className={({isActive})=>isActive?'active-link':null}>Home</NavLink>
      <NavLink to='/politics' className={({isActive})=>isActive?'active-link':null}>Politics</NavLink>
      <NavLink to='/education'className={({isActive})=>isActive?'active-link':null}>Education</NavLink>
      <NavLink to='/tech' className={({isActive})=>isActive?'active-link':null}>Tech</NavLink>
      <NavLink to='/health' className={({isActive})=>isActive?'active-link':null}>Health</NavLink>
      <NavLink to='/science' className={({isActive})=>isActive?'active-link':null}>Science</NavLink>
    </div>
    </>
  )
}

export default NavLinks
