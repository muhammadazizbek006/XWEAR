import React from 'react'
// data 
import { links } from '../data/data'
import { Link } from 'react-router-dom'
// img
import logo from '../img/logo.svg'
const Header = () => {
  return (
    <header className='py-8 bg-black '>
      <div className="containerb flex justify-between ">
      {/* logo */}
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>
        {/* center */}
        <ul className='flex space-x-12 items-center'>
         {
          links.map((e)=>{
            return(
              <li className='text-white text-sm font-semibold flex ' key={e.id}>
                <Link to={e.URL}>{e.link}</Link>
                {/* <img src={e.img} alt={e.link} /> */}
              </li> 
            )
          })
         }
        </ul>
        {/* right */}
        
      </div>
    </header>
  )
}

export default Header