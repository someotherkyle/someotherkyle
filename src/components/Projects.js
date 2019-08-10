import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Projects extends Component {

  render(){
    return (
      <div className='text-div'>
        <a href="http://someotherkyle.com">someotherkyle.com</a>  -you're already here but this site is constantly under construction. 
        If you have any ideas or feedback (good or bad) feel free to drop a <NavLink to="/comments">comment</NavLink> letting me 
        know what you think! <a rel='noopener noreferrer' href="https://github.com/someotherkyle.com/2048-react-front" target="_blank">source</a><br /><br />
        <NavLink to="/play2048">2048 Tribute</NavLink> - a tribute to the popular <a rel='noopener noreferrer' href="http://play2048.com" target="_blank">2048</a> game. Still 
        under construction as I'd like to add animation and some alternate game modes. <a rel='noopener noreferrer' target="_blank" href="https://github.com/someotherkyle/2048-react-front">source</a><br /><br />
        <a rel='noopener noreferrer' href="https://someotherkyle-activity-tracker.herokuapp.com/" target="_blank">Activity Tracker</a> - My Sinatra project from Flatiron School. 
        It's good to look back some times and remember how far you've come. <a rel='noopener noreferrer' href="https://github.com/someotherkyle/activity-tracker" target="_blank">source</a><br /><br />
        Warframe Scraper - My first project for Flatiron School! A simple CLI app written in Ruby that would scrape 
        the <a rel='noopener noreferrer' href="https://warframe.fandom.com/wiki/WARFRAME_Wiki" target="_blank">Warframe Wiki</a> and return pertinent item information to the user. <a rel='noopener noreferrer' href="https://github.com/someotherkyle/wf-scraper" target="_blank">source</a><br /><br />
      </div>
    )
  }
}