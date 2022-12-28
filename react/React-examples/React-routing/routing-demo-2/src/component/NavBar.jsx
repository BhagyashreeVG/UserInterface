import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css';

export default function NavBar() {

  const navLinkStyle = ({ isActive })=> { 
    return { 
        fontSize : isActive ? '1.6rem' : '1.2rem',
        color: isActive ? '#ff5c82' : '#ffffff' 
    }
  }
  return (
    <nav>
        <NavLink to='/' style={navLinkStyle}>Home</NavLink>
        <NavLink to='/about' style={navLinkStyle}>About</NavLink>
        <NavLink to='/products' style={navLinkStyle}>Products</NavLink>
        <NavLink to='/login' style={navLinkStyle}>Login</NavLink>
        <NavLink to='/serverProduct' style={navLinkStyle}>Server Products</NavLink>
    </nav>
  )
}
