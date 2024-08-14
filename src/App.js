import React from 'react';
import { Header, Footer } from './components/Common'; // parent directory 'src', objects within components
import { Home, About, Projects, Contact } from './pages'; // parent directory 'src', objects within components
import { Switch, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  console.log('Location Pathname:', location.pathname);

  return (
    <div className="App">
        <Header />
          <main className='content'>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/about" component={ About } />
              <Route path="/projects" component={ Projects } />
              <Route path="/contact" component={ Contact } />
            </Switch>
          </main>
        <Footer currentPage={location.pathname} />
    </div>
  );
}

export default App;
