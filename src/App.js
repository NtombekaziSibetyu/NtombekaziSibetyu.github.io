import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/layout/navbar/Navbar';
import Main from './components/Main' ;

const App = () => {

  
  
  return (
    
      <Fragment>
        <Navbar/>
        <div className='container'>
        <Main/>
        </div>
        
      </Fragment>
        
  

    
  );
}

export default App;
