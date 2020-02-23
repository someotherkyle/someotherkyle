import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Home extends Component {

  render(){
    return(
      <div className='Home'>
        <section className='headline'>
          <h1>my name is <strong>kyle</strong>.<br/>
          i <strong>solve</strong> problems.</h1>
          <p className='subtitle'>I am a full stack web developer who loves designing intricate solutions in <strong>code</strong>.</p>
          <img src="/profile.png" alt="Kyle holding his cat. The cat looks great." />
        </section>
        <section className='projects'>
          <div className='project'>
            <h2>someotherkyle.com</h2>
            <p>You're already here but this site is constantly under construction.</p>
          </div>
          <div className='project'>
            <h2><NavLink to="/play2048">2048 Tribute</NavLink></h2>
            <p>A tribute to the popular <a rel='noopener noreferrer' target='_blank' href="http://2048game.com">2048 game</a></p>
          </div>

          <div className='project'>
            <h2>warframe Wiki Scraper</h2>

          </div>
        </section>
      </div>
    )
  }
}
