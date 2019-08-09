import React, { Component } from 'react'

export default class Floater extends Component {

  render(){
    return(
      <div id='floater'>
        <i class='material-icons'>menu</i>
        <div id='floater-content'>
          <a href="https://github.com/someotherkyle"><img src="github.png" alt='github octocat' /></a>
          <a href="https://linkedin.com/in/someotherkyle"><img src="linkedin.png" alt='linked in logo' /></a>
          <a href="mailto:kyle@someotherkyle.com"><i class='material-icons'>email</i></a>
        </div>
      </div>
    )
  }
}