import React, { Component } from 'react'

export default class About extends Component {

  render(){
    return(
      <div className='about'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 about-image'>
            <img src="/profile.png" alt="my mug" />
          </div>
        </div>
        <div className='row about-text'>
          <div className='col-xs-1 col-sm-1' />
          <div className='col-xs-10 col-sm-10'>
            <h1 id='name'>my name is kyle. i solve problems.</h1>
            <p>I am a full stack web developer with an aptitude for solving unique and challenging problems.  Currently, I am focused on expanding my knowledge 
              and abilities in programming, website development and quality assurance. With experience in Ruby on Rails, JavaScript, React, 
              Redux and a military background, I bring strong skills in team-building and project management that help solve real-world 
              problems.  I am always looking for challenging new projects and opportunities.</p>
            </div>
          <div className='col-xs-1 col-sm-1' />
        </div>
      </div>
    )
  }
}