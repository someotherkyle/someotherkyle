import React, { Component } from 'react'

export default class About extends Component {

  render(){
    return(
      <div className='about-wrapper'>
        <div className='about-content'>
          <img src="/profile.png" alt="my mug" />
          <div className='text-div'>
            <h1 id='name'>i'm kyle. i solve problems.</h1>
            <p>Full stack web developer with an aptitude for solving unique and challenging problems.  Focused on expanding my knowledge 
              and abilities in programming, website development and quality assurance. With experience in Ruby on Rails, JavaScript, React, 
              Redux and a military background, I bring strong skills in team-building and project management that help solve real-world 
              problems.  I am looking for challenging projects and opportunities.</p>
          </div>
        </div>
      </div>
    )
  }
}