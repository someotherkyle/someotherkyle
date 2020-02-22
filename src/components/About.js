import React, { Component } from 'react'

export default class About extends Component {

  render(){
    return(
      <section id='about'>
        <div id='headline'>
          <h1>my name is <strong>kyle.</strong></h1>
          <h1>i <strong>solve</strong> problems.</h1>
          <p className='subtitle'>I am a full stack web developer who loves designing intricate solutions in <strong>code</strong>.</p>
          <img src="/profile.png" alt="Kyle holding his cat, looking magestic" />
        </div>
      </section>
    )
  }
}