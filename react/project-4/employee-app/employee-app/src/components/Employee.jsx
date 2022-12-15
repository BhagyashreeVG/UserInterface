import React from 'react'

function Employee(props) {
  return (
    <tr><td>{props.src.id}</td><td>{props.src.name}</td><td>{props.src.dept}</td></tr>
  )
}

export default Employee