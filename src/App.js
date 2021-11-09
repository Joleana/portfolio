import React from 'react';
import { Header } from './components/common';

import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/contact/Contact'
import Projects from './components/Projects'
import Resume from './components/resume/Resume'
import Home from './components/home/Home'

import { Route, Switch } from "react-router-dom";


import './sassStyles/global.scss';



function App() {
  return (
    <div className="App">
        < Header />
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/blog' component={ Blog } />
        <Route path='/contact' component={ Contact } />
        <Route path='/projects' component={ Projects } />
        <Route path='/Resume' component={ Resume } />
      </Switch>
    </div>
  );
}

export default App;
