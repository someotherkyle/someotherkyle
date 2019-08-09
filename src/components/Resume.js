import React, { Component } from 'react'

export default class Resume extends Component {

  render(){
    return (
      <div className='text-div'>
        <embed src="/resume.pdf" height="850" width="1100"/>
      </div>
    )
  }
}