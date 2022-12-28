import React from 'react'
import { Outlet } from 'react-router';
import NavBar from './NavBar';

export default function SharedLayout() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}
