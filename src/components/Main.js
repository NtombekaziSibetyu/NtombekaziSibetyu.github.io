import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './layout/landingPage/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>

    </Switch>
)

export default Main;