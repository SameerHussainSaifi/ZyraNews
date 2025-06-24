import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Home from './Home';
import Politics from './Politics';
import Education from './Education';
import Tech from './Tech';
import Health from './Health';
import Science from './Science';
import Business from './Business';
import Sports from './Sports';
function NavLinks() {
  return (
    <>
     <div className='flex  justify-around py-2 items-center rounded-xl border-1 border-pink-500  flex-wrap text-purple-500 text-lg'>
      
      
      <NavLink to='/' className={({isActive})=>isActive?'active-link':null}>Home</NavLink>
      <NavLink to='/politics' className={({isActive})=>isActive?'active-link':null}>Politics</NavLink>
      <NavLink to='/education'className={({isActive})=>isActive?'active-link':null}>Education</NavLink>
      <NavLink to='/tech' className={({isActive})=>isActive?'active-link':null}>Tech</NavLink>
      <NavLink to='/health' className={({isActive})=>isActive?'active-link':null}>Health</NavLink>
      <NavLink to='/science' className={({isActive})=>isActive?'active-link':null}>Science</NavLink>
      <NavLink to='/business' className={({isActive})=>isActive?'active-link':null}>Business</NavLink>
      <NavLink to='/sports' className={({isActive})=>isActive?'active-link':null}>Sports</NavLink>
    </div>
    </>
  )
}

export default NavLinks
