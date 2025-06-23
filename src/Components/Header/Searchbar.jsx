import React from 'react'

function Searchbar() {
  return (
    <>
    <div className="flex space-x-1">
         <div className='flex items-center space-x-1 border-1 rounded-lg px-1'>
      <input type="text" placeholder="Search"  className=' rounded-lg pl-3 py-1 w-25' />
      <select className="rounded-md border-1 w-25">
        <option value="The Hindu">The Hindu</option>
        <option value="Prabhat Khabar" >Prabhat Khabar</option>
        <option value="Dainik Jagaran">Dainik Jagaran</option>
      </select>
    </div>
    <button className='border-1 bg-amber-600 rounded-lg px-2 py-1 '>Search</button>
</div>
    </>
  )
}

export default Searchbar
