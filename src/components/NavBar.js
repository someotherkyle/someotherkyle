import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return(
        <div className='navbar'>
          <NavLink to='/'>About</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/play'>Poor Man's 2048</NavLink>
          <NavLink to='/highscores'>High Scores</NavLink>
        </div>
    )
}

export default NavBar