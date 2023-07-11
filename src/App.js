import React from 'react';
import { Header, Footer } from './components'; // parent directory 'src', objects within components
import { Home, About, Projects, Contact } from './pages'; // parent directory 'src', objects within components

import './App.scss';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/projects" component={ Projects } />
            <Route path="/contact" component={ Contact } />
          </Switch>
        <Footer />
    </div>
  );
}

export default App;
