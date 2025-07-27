import React from 'react'
import {useState} from 'react';
function Searchbar({data,setData}) {
  const [searchText,setSearchText]=useState('');
  const [Api,setApi]=useState(null);
const apiKey=import.meta.env.VITE_NEWS_API;

 const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

const formatDate = (d) => d.toISOString().split('T')[0];
const from = formatDate(yesterday);
const to = formatDate(today);

const callHandleInput=(e)=>{
  setApi('true');
setSearchText(e.target.value);
  }

  const handleSelect=(e)=>{
    setApi('false');
setSearchText(e.target.value);
  }

 const handleClick=async()=>{

if(Api=='true'){
  var resp=await fetch(`https://newsapi.org/v2/everything?q=${searchText}&from=${from}&to=${to}&sortBy=popularity&pageSize=30&language=en&apiKey=${apiKey}`);
 }
   if(Api=='false') {
     var resp=await fetch(`https://newsapi.org/v2/top-headlines?sources=${searchText}&apiKey=${apiKey}`);
     }
   data = await resp.json();
  console.log(data);
    if(Array.isArray(data.articles)){
      setData(data.articles);
    }else{
      setData([]);
    }
  }

  return (
    <>
  
    <div className="flex space-x-1">
         <div className='flex items-center space-x-1 border-1  border-pink-500 text-purple-500 rounded-lg px-1 py-1 '>
      <input type="text" placeholder="Search Country "  className=' rounded-lg focus:outline-none focus:border-1 border-pink-500 w-34 pl-1' onChange={callHandleInput} value={searchText}/>
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

// export default Searchbar
// const handleClick = async () => {
//   const today = new Date();
//   const yesterday = new Date(today);
//   yesterday.setDate(today.getDate() - 1);

//   const formatDate = (d) => d.toISOString().split('T')[0];
//   const from = formatDate(yesterday);
//   const to = formatDate(today);

//   let url = "";

//   if (Api === "true") {
//     url = `/api/news?type=everything&query=${searchText}&from=${from}&to=${to}`;
//   } else if (Api === "false") {
//     url = `/api/news?type=top-headlines&query=${searchText}`;
//   }

//   try {
//     const resp = await fetch(url);
//     const result = await resp.json();

//     console.log(result);

//     if (Array.isArray(result.articles)) {
//       setData(result.articles);
//     } else {
//       setData([]);
//     }
//   } catch (err) {
//     console.error("Error fetching news:", err);
//     setData([]);
//   }
// };

