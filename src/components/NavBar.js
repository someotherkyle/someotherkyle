import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return(
        <div className='navbar'>
            <NavLink to='/'>Play</NavLink>
            <NavLink to='/highscores'>High Scores</NavLink>
        </div>
    )
}

export default NavBar