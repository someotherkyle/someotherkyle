import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
      <div className='navbar row'>
        <NavLink to='/' activeClassName='active'className='col-xs-12 col-sm-3'>About</NavLink>
        <NavLink to='/blog' activeClassName='active'className='col-xs-12 col-sm-3'>Blog</NavLink>
        <NavLink to='/play2048' activeClassName='active' className='col-xs-12 col-sm-3'>Play 2048</NavLink>
        <NavLink to='/projects' activeClassName='active'className='col-xs-12 col-sm-3'>Projects</NavLink>
      </div>
    )
}

export default NavBar