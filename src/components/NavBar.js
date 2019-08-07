import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return(
        <div className='navbar'>
          <div className='dropdown'>
            <NavLink to='/'>About</NavLink>
            <div className='dropdown-content'>
              <NavLink to='/resume'>Resume</NavLink>
            </div>
          </div>
          <NavLink to='/blog'>Blog</NavLink>
          <div className='dropdown'>
            <NavLink to='/projects'>Projects</NavLink>
            <div className='dropdown-content'>
              <NavLink to='/play'>Discount 2048</NavLink>
            </div>
          </div>
          <NavLink to='/contact'>Contact Me</NavLink>
        </div>
    )
}

export default NavBar