import React, { Component } from 'react'

export default class Resume extends Component {

  render(){
    return (
      <div className='text-div resume'>
        <embed src="/resume.pdf" height="1100" width="850"/>
      </div>
    )
  }
}