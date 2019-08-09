import React from 'react'
import { NavLink } from 'react-router-dom'

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
              <NavLink to='/play2048'>2048 Tribute</NavLink>
              <a href='http://someotherkyle-activity-tracker.herokuapp.com' rel='noopener noreferrer' target="_blank">Activity Tracker</a>
            </div>
          </div>
          <NavLink to='/comments'>Comments & Feedback</NavLink>
        </div>
    )
}

export default NavBar