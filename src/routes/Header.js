import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
 

// import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul className='headernav'>
      <Link to="/"><li>Main</li></Link>
      <Link to="/about"><li>About</li></Link>
      <Link to="/Login"><li>Login</li></Link>
      </ul>

    </div>
  )
}

export default Header
