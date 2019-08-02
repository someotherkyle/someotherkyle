import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import BoardContainer from './containers/BoardContainer'
function App() {
  return (
    <Router>
      <div className='App'></div>
      <NavBar />
      <Route exact path='/' component={BoardContainer} />
    </Router>
  );
}

export default App;