import React from 'react'
import Home from './Components/Header/Home.jsx';
import Politics from './Components/Header/Politics.jsx';
import Education from './Components/Header/Education.jsx';
import Tech from './Components/Header/Tech.jsx';
import Health from './Components/Header/Health.jsx';
import Science from './Components/Header/Science.jsx';
import Navbar from './Components/Header/Navbar.jsx';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<div>
        <Navbar/>
      <Home/>
      </div>
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
        <Science/>
      </div>
    }
  ]
);

function App() {
  return (
    <>
    
   <RouterProvider router={router}/>
      
     
    </>
  )
}

export default App
