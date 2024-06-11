import React from 'react'
import { Link } from 'react-router-dom'
// img
import logo from '../img/header/logo.svg'
const Header = () => {
  return (
    <header className='py-8 bg-black '>
      <div className="containerb">
      {/* logo */}
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>
      </div>
    </header>
  )
}

export default Header