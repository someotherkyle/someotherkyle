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
            <p>I am a graduate of <a href="https://flatironschool.com">Flatiron School</a> who decided to pursue a career in code after years of working with my hands. I am a full stack web developer but my interest doesn't stop there. While in school, I rigged a webcam to a <a href="https://www.raspberrypi.org/">Raspberry Pi</a> powered by a portable phone charger and used it to figure out which of my cats was not using the litter box. Later in the course, I wrote a bash script that would scan my network for my phone and connect it automatically to scrcpy. I will often try to incorporate technology and code into mundane tasks to make them easier or at least more interesting.</p>
            <p>I naively started Flatiron 'looking down on' web development, placing compiled languages on some sort of pedestal. I wanted to transition quickly to C++ and pursue extreme optimization and performance by getting 'close to the metal' and working on complex code bases to create the next big game or must have program. I've since realized how silly this mentality was as things have been transitioning more and more to the cloud and web based applications are only growing in their intricacy. I will continue to study and use C++ where appropriate, but JavaScript has piqued my interest for the immediate future.</p>
            <p>I am focused on growing as a programmer and look forward to a career of constant learning. As such, I am always looking for challenging new projects and opportunities. Thanks for stopping by!</p>
            </div>
          <div className='col-xs-1 col-sm-1' />
        </div>
      </div>
    )
  }
}