import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return(
        <div className='navbar'>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/'>Play</NavLink>
            <NavLink to='/highscores'>High Scores</NavLink>
        </div>
    )
}

export default NavBar