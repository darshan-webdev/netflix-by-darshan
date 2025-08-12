import React, { useEffect, useRef } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import search_logo from '../../assets/search_icon.svg'
import bell_logo from '../../assets/bell_icon.svg'
import profile_img  from '../../assets/profile_img.png'
import cart_icon  from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'
const Navbar = () => {

  const navref  = useRef()

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navref.current.classList.add('nav-dark')
      }
      else{
          navref.current.classList.remove('nav-dark')
      }
    })

    
  },[])
  return (
    <div ref={navref} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv-shows</li>
          <li>Movies</li>
          <li>New & popular</li>
          <li> My List</li>
          <li>Browse my language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_logo} alt=""  className='icons'/>
        <p>Childern</p>
          <img src={bell_logo} alt=""  className='icons'/>
          <div className="Navbar-profile">
             <img src={profile_img} alt=""  className='profile'/>
             <img src={cart_icon} alt=""  />

             <div className="dropdown">
              <p onClick={logout}> sign out of netflix</p>
             </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar