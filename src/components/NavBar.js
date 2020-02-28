import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
      <div className='navbar'>
        <span className='material-icons'>menu</span>
        <NavLink to='/' activeClassName='active' className=''>About</NavLink>
        <NavLink to='/blog' activeClassName='active' className=''>Blog</NavLink>
        <NavLink to='/play2048' activeClassName='active' className=''>Play 2048</NavLink>
      </div>
    )
}

export default NavBar
