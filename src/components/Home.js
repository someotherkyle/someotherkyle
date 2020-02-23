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

          <div className='project secondary'>
            <h2><NavLink to="/blog">Blog</NavLink></h2>
	    <p>A simple blog with comments connected to a <strong>Postgres</strong> database though <strong>Ruby on Rails</strong> and a <strong>React</strong> front end.</p>
	    <a rel='noopener noreferrer' target='_blank' href='https://github.com/someotherkyle/someotherkyle'><i class="fas fa-code"></i></a>
          </div>

          <div className='project primary'>
            <h2><NavLink to="/play2048">2048 Tribute</NavLink></h2>
            <p>A tribute to the popular <a rel='noopener noreferrer' target='_blank' href="http://2048game.com">2048 game</a>. State is managed with <strong>Redux</strong> and high scores are persisted in the <strong>Postgres</strong> database.</p>
	    <a rel='noopener noreferrer' target='_blank' href="https://github.com/someotherkyle/someotherkyle"><i class="fas fa-code"></i></a>
          </div>

          <div className='project secondary'>
            <h2><a rel='noopener noreferrer' target='_blank' href='https://someotherkyle-activity-tracker.herokuapp.com'>Activity Tracker</a></h2>
	    <p>My very first <strong>web application</strong>. It was built in <strong>Sinatra</strong> and was built with a <strong>SQLite</strong> database.</p>
	    <a rel='noopener noreferrer' target='_blank' href="https://github.com/someotherkyle/activity-tracker"><i class="fas fa-code"></i></a>
          </div>
        </section>
      </div>
    )
  }
}
