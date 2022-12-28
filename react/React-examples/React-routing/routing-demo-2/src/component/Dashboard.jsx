import React from 'react'

export default function Dashboard({ user }) {
    console.log(user)
  return (
    <h2>Welcome { user.name }</h2>
  )
}
