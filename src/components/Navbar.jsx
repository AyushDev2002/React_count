import React from 'react'
import './Navbar.css'

export default function Navbar({name, age}) {
  return (
    <div className= {name}>
      I am {name} and my age is {age}
    </div>
  )
}
