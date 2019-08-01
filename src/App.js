import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className='App'></div>
      <NavBar />
      <Route exact path='/' component={Home} />
    </Router>
  );
}

export default App;
