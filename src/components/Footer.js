import React, { Component } from 'react'

export default class Footer extends Component {

  render(){
    return(
      <div className='footer'>
        <a href="mailto:kyle@someotherkyle.com"><i className='material-icons'>email</i></a>
        <a rel='noopener noreferrer' target="_blank" href="https://github.com/someotherkyle"><img src="github.png" alt='github octocat' /></a>
        <a rel='noopener noreferrer' target="_blank" href="https://linkedin.com/in/someotherkyle"><img src="linkedin.png" alt='linked in logo' /></a>
      </div>
    )
  }
}