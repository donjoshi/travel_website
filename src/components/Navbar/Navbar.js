import React from 'react'
import './Navbar.css'
import {useState} from 'react'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'



export default function Navbar() {


  const [active,setActive]=useState('navBar')
 
 
  //toggle navbar

 const showNav=()=>{
      setActive('navBar activeNavbar')
 }

 //close navbar

 const removeNavbar=()=>{
  setActive('navBar')
}

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><MdOutlineTravelExplore className="icon"/>
              Travel
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItems">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItems">
              <a href="#" className="navLink">Packages</a>
            </li>
            
            <li className="navItems">
              <a href="#" className="navLink">Shop</a>
            </li>
            
            <li className="navItems">
              <a href="#" className="navLink">About</a>
            </li>
            
            <li className="navItems">
              <a href="#" className="navLink">Pages</a>
            </li>
            
            <li className="navItems">
              <a href="#" className="navLink">News</a>
            </li>
            
            <li className="navItems">
              <a href="#" className="navLink">Contact</a>
            </li>

            <button className="btn">
              <a href="#">Book Now</a>

            </button>

            <div className="closeNavBar" onClick={removeNavbar} >
              <AiFillCloseCircle className="icon"/>
            </div>
          </ul>
        </div>

        <div className="toggleNavbar" onClick={showNav}>
            <TbGridDots className="icon"/>
        </div>

      </header>      

    </section>
  )
}
