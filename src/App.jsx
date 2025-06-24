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
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import Searchbar from './Components/Header/Searchbar.jsx';


 
function App() {
  const [useData,setUseData]=useState('Zyra news');
 
  const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<>
        <Navbar/>
      <Home/>
      </>
    },
    {
      path:'/politics',
      element:<div>
        <Navbar/>
      <Politics/>
      </div>
    },
    {
      path:'/education',
      element:<div>
        <Navbar/>
      <Education/>
      </div>
    },
    {
      path:'/tech',
      element:<div>
        <Navbar/>
        <Tech/>
      </div>
    },
    {
      path:'/health',
      element:<div>
        <Navbar/>
        <Health/>
      </div>
    },
    {
      path:'/science',
      element:<div>
        <Navbar/>
        <Science  />
      </div>
    },
    {
      path:'/business',
      element:<div>
        <Navbar/>
        <Business/>
      </div>
    },
    {
      path:'/sports',
      element:<div>
        <Navbar/>
        <Sports/>
      </div>
    },
    {
      path:'*',
      element:<PageNotFound/>
    },
    
  ]
);
 
return (
  <>
<RouterProvider router={router}/>

</>
);

}

export default App;

