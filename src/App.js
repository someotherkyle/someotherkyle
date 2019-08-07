import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './components/About'
import BoardContainer from './containers/BoardContainer'
import HighScoresContainer from './containers/HighScoresContainer'

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='navbar-wrapper'>
          <NavBar />
        </div>
        <Route exact path='/' component={About} />
        <Route exact path='/play' component={BoardContainer} />
        <Route exact path='/highscores' component={HighScoresContainer} />
      </div>
    </Router>
  );
}

export default App;