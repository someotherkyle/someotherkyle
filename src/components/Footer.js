import React, { Component } from 'react'

export default class Footer extends Component {

  render(){
    return(
      <div className='row footer'>
        <div className='col-xs-5 col-sm-5' />
        <div className='col-xs-2 col-sm-2 footer-content'>
          <a href="mailto:kyle@someotherkyle.com"><i className='material-icons'>email</i></a>
          <a rel='noopener noreferrer' target="_blank" href="https://github.com/someotherkyle"><img src="github.png" alt='github octocat' /></a>
          <a rel='noopener noreferrer' target="_blank" href="https://linkedin.com/in/someotherkyle"><img src="linkedin.png" alt='linked in logo' /></a>
        </div>
        <div className='col-xs-5 col-sm-5' />
      </div>
    )
  }
}