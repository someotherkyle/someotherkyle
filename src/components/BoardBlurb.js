import React, { Component } from 'react'

export default class BoardBlurb extends Component {

  render(){
    return(
      <div>
        <div className='project-details'>
          <h3><a rel='noopener noreferrer' href='http://2048game.com'>2048</a> Tribute</h3>
          <p>The aim of 2048 is to combine tiles with the same value until you create a 2048 tile. Use your arrow keys, wasd, or hjkl to collapse tiles up, down, left and right. How high can you go? Replace 'Enter Name' with your name to claim your high score. 
            Click on the score to view all high scores. I would like to point out that I <strong><em>DID NOT</em></strong> come up with this game or its rules. I simply challenged myself to reproduce 
            it for my final project at <a rel='noopener noreferrer' href='https://flatironschool.com'>Flatiron School</a>.</p>
          <p>To graduate, I had to create a project that could be anything I wanted. Struggling to find something I was interested in, I started playing <a rel='noopener noreferrer' href='http://2048game.com'>2048</a> on 
            my phone to pass some time and here we are. I had a difficult time at the beginning of this project and I noticed that trend with most of the projects at Flatiron. I suspect it is the lack of a defined 
            goal that makes it tricky to get started. How can you get somewhere if you don't know where somewhere is? At this point, I had an okay idea of what I had hoped to accomplish but 
            really wasn't too sure how to go about it. Couple that with the fact that I've never made a game this complicated before and I was feeling the pressure...</p>
          <p>Now that its done, I'm very glad that I chose to challenge myself with this project versus simply aiming for completion. I was able to learn about the canvas API and am excited
            to explore its capabilities. I leaned very heavily on Redux for state management and was forced to really gain an understanding of both how it works as well as when you may not
            want to utilize it. All in all, I'm pretty pleased with how it turned out and have a few things I'd still like to implement.
          </p>
          <p>Continuing work on this project, I hope to add functionality to allow this game to be played on mobile and to add animations through requestAnimationFrame().
            Thanks for checking out my project! You're welcome to take a look at the <a rel='noopener noreferrer' href='https://github.com/someotherkyle/2048-react-front'>source</a>.</p>
        </div>
      </div>
    )
  }
}