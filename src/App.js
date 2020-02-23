import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import BlogContainer from './containers/BlogContainer'
import Blog from './components/Blog'
import BoardContainer from './containers/BoardContainer'
import HighScoresContainer from './containers/HighScoresContainer'

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='main-content'>
          <Route exact path='/' component={Home} />
          <Route exact path='/blog' component={BlogContainer} />
          <Route exact path='/blog/:id' component={Blog} />
          <Route exact path='/play2048' component={BoardContainer} />
          <Route exact path='/play2048/highscores' component={HighScoresContainer} />
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
