import React, { Component } from 'react'

export default class About extends Component {

  render(){
    return(
      <div id='about'>
        <div id='headline'>
          <h1>my name is <span>kyle.</span></h1>
          <h1>i solve <span>problems.</span></h1>
        </div>
        <p>I am a full stack web developer who loves solving problems through <span>code</span>.</p>
      </div>
    )
  }
}