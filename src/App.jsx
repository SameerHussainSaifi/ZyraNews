import React from 'react'
import {useState} from "react";
import Home from './Components/Header/Home.jsx';
import Politics from './Components/Header/Politics.jsx';
import Education from './Components/Header/Education.jsx';
import Tech from './Components/Header/Tech.jsx';
import Health from './Components/Header/Health.jsx';
import Science from './Components/Header/Science.jsx';
import Navbar from './Components/Header/Navbar.jsx';
import Business from './Components/Header/Business.jsx';
import Sports from './Components/Header/Sports.jsx';
import PageNotFound from './Components/PageNotFound.jsx';
// import {createBrowserRouter,RouterProvider} from "react-router-dom";

// import Searchbar from './Components/Header/Searchbar.jsx';


 
function App() {
  const [useData,setUseData]=useState('Zyra News web app');
  

//   const router=createBrowserRouter(
//   [
//     {
//       path:'/',
//       element:<>
//         <Navbar Data={useData} setData={setUseData}/>
//       <Home/>
//       </>
//     },
//     {
//       path:'/politics',
//       element:<div>
//          <Navbar Data={useData} setData={setUseData}/>
//       <Politics/>
//       </div>
//     },
//     {
//       path:'/education',
//       element:<div>
//          <Navbar Data={useData} setData={setUseData}/>
//       <Education/>
//       </div>
//     },
//     {
//       path:'/tech',
//       element:<div>
//        
//         <Tech/>
//       </div>
//     },
//     {
//       path:'/health',
//       element:<div>
//         <Navbar Data={useData} setData={setUseData}/>
//         <Health/>
//       </div>
//     },
//     {
//       path:'/science',
//       element:<div>
//         <Navbar Data={useData} setData={setUseData}/>
//         <Science  />
//       </div>
//     },
//     {
//       path:'/business',
//       element:<div>
//         <Navbar Data={useData} setData={setUseData}/>
//         <Business/>
//       </div>
//     },
//     {
//       path:'/sports',
//       element:<div>
//          <Navbar Data={useData} setData={setUseData}/>
//         <Sports/>
//       </div>
//     },
//     {
//       path:'*',
//       element:<PageNotFound/>
//     }
  
//   ]
// );
// //  {useData.map((article, index) => {
// //   const publishedDate = new Date(article.publishedAt);
// //   const formattedDate = publishedDate.toLocaleString('en-US', {
// //     weekday: 'long',   // e.g. Monday
// //     year: 'numeric',
// //     month: 'long',
// //     day: 'numeric',
// //     hour: 'numeric',
// //     minute: '2-digit',
// //     hour12: true,
// //   });
return (
  <>
 <Navbar Data={useData} setData={setUseData}/>
{/* <RouterProvider router={router}/> */}
 <div className=" flex flex-wrap space-x-20   justify-center  sm:justify-around overflow-x-hidden">
        {Array.isArray(useData) && useData.length > 0 ? (
          useData.map((articles, index) => (
            
            <div key={index} className="flex flex-col mx-auto mt-5 mb-30  w-110 h-80 text-justify ">
              <div className='border-2 rounded-xl mb-2'>
              <img src={articles.image} alt="image loading..." className='rounded-xl'/>
              <h2 className="font-semibold px-3">{articles.title}</h2>
             </div>
              
              
              <p>{articles.description}</p>
              <a href={articles.url} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
            
          ))
        ) : (
          <p className="text-gray-500">Search for news using the bar above.</p>
        )
        
        }
      </div>
</>
);
}
export default App;

