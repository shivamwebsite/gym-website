import { useState } from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Contact from './components/Contact'
import Home from './components/Home'
import Profile from './components/Profile'
import Enroll from './components/Enroll'
import Register from './components/Register'

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/home",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/contact",
      element:<><Navbar/><Contact/></>
    },
    {
      path:"/service",
      element:<><Navbar/><Service/></>
    },
    {
      path:"/about",
      element:<Profile/>
    },
    {
      path:"/enroll",
      element:<><Navbar/><Enroll/></>
    },
    {
      path:"/register",
      element:<Register/>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
{/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
