import React from 'react'
import { Outlet } from 'react-router'

function About() {
  return (
      <>
    <h2>About page</h2>
    <Outlet/>
    </>
  )
}

export default About