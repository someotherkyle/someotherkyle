import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './components/About'
import Resume from './components/Resume'
import Blog from './components/Blog'
import Projects from './components/Projects'
import BoardContainer from './containers/BoardContainer'
import HighScoresContainer from './containers/HighScoresContainer'

function App() {
  return (
    <Router>
      <div className='App container-fluid'>
        <div className='navbar-wrapper'>
          <NavBar />
        </div>
        <Route exact path='/' component={About} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/play2048' component={BoardContainer} />
        <Route exact path='/play2048/highscores' component={HighScoresContainer} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;