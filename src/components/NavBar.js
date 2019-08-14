import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <div className='navbar'>
          <div className='navbar-links'>
            <div className='dropdown'>
              <NavLink to='/' activeClassName='active'>About</NavLink>
              <div className='dropdown-content'>
                <NavLink to='/resume' activeClassName='active'>Resume</NavLink>
              </div>
            </div>
            <NavLink to='/blog' activeClassName='active'>Blog</NavLink>
            <div className='dropdown'>
              <NavLink to='/projects' activeClassName='active'>Projects</NavLink>
              <div className='dropdown-content'>
                <NavLink to='/play2048' activeClassName='active'>2048 Tribute</NavLink>
                <a rel='noopener noreferrer' href='http://someotherkyle-activity-tracker.herokuapp.com' target="_blank">Activity Tracker</a>
              </div>
            </div>
            <NavLink to='/comments' activeClassName='active'>Comments & Feedback</NavLink>
          </div>
        </div>
    )
}

export default NavBar