import React from 'react'
import {useState} from 'react';
function Searchbar() {
  const [searchText,setSearchText]=useState('');
const apiKey='d354ff507dc64a6a9fae9d39d857eca5';
 const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

const from = yesterday.toISOString().split('T')[0]; 
const to = today.toISOString().split('T')[0]; 
  let subject=null;

const handleInput=(e)=>{
setSearchText(e.target.value);
  }
  const handleSelect=(e)=>{
setSearchText(e.target.value);
  }

 const handleClick=async()=>{
    // const resp=await fetch(`https://newsapi.org/v2/everything?q=${subject}&from=${from}&to=${to}&sortBy=popularity&apiKey=${apiKey }`);
    const resp=await fetch(`https://newsapi.org/v2/top-headlines?sources=${searchText}&apiKey=${apiKey}`);
    
   const data = await resp.json();
   console.log(data.articles[5].description);
   console.log(data);
    // console.log(data.articles[0].description);
     
  }
   
  return (
    <>
   
    <div className="flex space-x-1">
         <div className='flex items-center space-x-1 border-1  border-pink-500 text-purple-500 rounded-lg px-1 py-1 '>
      <input type="text" placeholder="Search "  className=' rounded-lg focus:outline-none focus:border-1 border-pink-500 w-34 pl-1' onChange={handleInput} value={searchText}/>
      <select className="rounded-md border-1 border-pink-500  focus:outline-none " onChange={handleSelect}>
        <option value="" >Search Channel</option>
        <option value="the-hindu">The Hindu</option>
        <option value="the-times-of-india">The Times Of India</option>
        <option value="al-jazeera-english">Al Jazeera English</option>
        <option value="cnn">CNN News</option>
        <option value="fox-news">Fox News</option>
        <option value="google-news-in">Google News (India)</option>
        
      </select>
      
    </div>
    <button className=' border-pink-500 bg-gradient-to-r from-pink-500 to-purple-700 rounded-lg px-3 py-1 text-white' onClick={handleClick}>Search </button>
</div>
    </>
  )
}

export default Searchbar
