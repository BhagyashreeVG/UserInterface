import React from 'react'
import { Outlet } from 'react-router'

export default function SharedProductLayout() {
  return (
    <>
        <h2>Products</h2>
        <Outlet/>
    </>
  )
}
