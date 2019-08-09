import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Projects extends Component {

  render(){
    return (
      <div className='text-div'>
        <a href="http://someotherkyle.com">someotherkyle.com</a>  -you're already here but this site is constantly under construction. 
        If you have any ideas or feedback (good or bad) feel free to drop a <NavLink to="/comments">comment</NavLink> letting me 
        know what you think! <a href="https://github.com/someotherkyle.com/2048-react-front">source</a><br /><br />
        <NavLink to="/play2048">2048 Tribute</NavLink> - a tribute to the popular <a href="http://play2048.com">2048</a> game. Still 
        under construction as I'd like to add animation and some alternate game modes. <a href="https://github.com/someotherkyle/2048-react-front">source</a><br /><br />
        <a href="https://someotherkyle-activity-tracker.herokuapp.com/">Activity Tracker</a> - My Sinatra project from Flatiron School. 
        It's good to look back some times and remember how far you've come. <a href="https://github.com/someotherkyle/activity-tracker">source</a><br /><br />
        Warframe Scraper - My first project for Flatiron School! A simple CLI app written in Ruby that would scrape 
        the <a href="https://warframe.fandom.com/wiki/WARFRAME_Wiki">Warframe Wiki</a> and return pertinent item information to the user. <a href="https://github.com/someotherkyle/wf-scraper">source</a><br /><br />
      </div>
    )
  }
}