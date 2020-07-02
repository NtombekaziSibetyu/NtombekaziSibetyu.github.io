import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import About from './components/pages/About';

const App = () => {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
