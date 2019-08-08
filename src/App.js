import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './components/About'
import Resume from './components/Resume'
import Blog from './components/Blog'
import Contact from './components/Contact'
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
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/playdiscount2048' component={BoardContainer} />
        <Route exact path='/playdiscount2048/highscores' component={HighScoresContainer} />
        <Route exact path='/contact' component={Contact} />
      </div>
    </Router>
  );
}

export default App;