import React from 'react'
import "./navbar.css"
import { RxDragHandleHorizontal } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Navbar() {

  const handlebaar=()=>{
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('navbaractive')) {
      sidebar.classList.remove('navbaractive');
      document.querySelector(".handle").style.position = "relative";
      document.querySelector(".handle").style.right = "0px";
      document.querySelector(".handle").style.top = "0px";
    } else {
      sidebar.classList.add('navbaractive');
      document.querySelector(".handle").style.position = "absolute";
      document.querySelector(".handle").style.right = "30px";
      document.querySelector(".handle").style.top = "35px";
    }
  }
    const handleclose=()=>{
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('navbaractive');
      document.querySelector(".handle").style.position = "relative";
      document.querySelector(".handle").style.right = "0px";
      document.querySelector(".handle").style.top = "0px";
  }

  return (
    <> 
    <header className='navbarheader'>
    <div className="navbarcontain">
      <img src="shiv.jpeg" alt="error" />
      <div className="nam">
        <NavLink  to="/home" className={(e)=>{return e.isActive ? "jabnavbaractive" : "navbaractive"}} ><span
            className="h">Shivam-Fitness</span></NavLink>
      </div>
      <span className="handle" onClick={handlebaar}><RxDragHandleHorizontal style={{fontSize:"25px"}} /></span>
      <div class=" nav">
{/*         {(e)=>{return e.isActive ? "jabnavbaractive" : "navbar"}} */}
        <nav>
          <NavLink   className="navbar" to="/about">About</NavLink>
          <NavLink   className={(e)=>{return e.isActive ? "jabnavbaractive" : "navbar"}} to="/service">Services</NavLink>
          <NavLink  className={(e)=>{return e.isActive ? "jabnavbaractive" : "navbar"}} to="/contact">Contact Us</NavLink>
          <NavLink   className="navbar" to="/">Log Out</NavLink>
        </nav>
      </div>
      <div className="navbarhandlecont" id="sidebar" onClick={handleclose}>
          <NavLink  className="navbar" to="/about" > <span>ABOUT</span></NavLink>
          <NavLink  className="navbar" to="/service"><span>SERVICES</span></NavLink>
          <NavLink className="navbar" to="/contact"> <span>CONTACT US</span></NavLink>
          <NavLink className="navbar" to="/"><span>LOG OUT</span></NavLink>
          {/* <!-- <span>ENROLLMENT</span> --> */}
         <NavLink  to="/enroll"><span className='handlearrow'>ENROLLMENT<FaArrowRight className='enroolarrow' /></span></NavLink>  
      </div>
      <div>
       <NavLink to="/enroll"><button className="navbarbutton">Enrollement<FaArrowRight className='enroolarrow' /> </button></NavLink>
      </div>
    </div>
  </header>
    
    </>
  )
}

export default Navbar
