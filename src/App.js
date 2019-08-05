import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'
import BoardContainer from './containers/BoardContainer'
import HighScoresContainer from './containers/HighScoresContainer'

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Route exact path='/' component={BoardContainer} />
        <Route exact path='/highscores' component={HighScoresContainer} />
      </div>
    </Router>
  );
}

export default App;