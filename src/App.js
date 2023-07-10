import React from 'react';
import './App.scss';



import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/projects' component={ Projects } />
          <Route path='/contact' component={ Contact } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
