import React from 'react'
import { Outlet } from 'react-router-dom';

function SharedServerLayout() {
  return (
    <>
        <h2>Products</h2>
        <Outlet/>
    </>
  )
}

export default SharedServerLayout