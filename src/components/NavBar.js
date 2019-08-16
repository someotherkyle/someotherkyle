import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
      <div className='navbar row'>
        <NavLink to='/' activeClassName='active'className='col-xs-12 col-sm-3'>About</NavLink>
        <NavLink to='/blog' activeClassName='active'className='col-xs-12 col-sm-3'>Blog</NavLink>
        <NavLink to='/projects' activeClassName='active'className='col-xs-12 col-sm-3'>Projects</NavLink>
        <NavLink to='/comments' activeClassName='active'className='col-xs-12 col-sm-3'>Comments & Feedback</NavLink>
      </div>
    )
}

export default NavBar