import React from 'react';
import PropTypes from 'prop-types';
import ReactTypingEffect from 'react-typing-effect';

const Home = ({text}) => {
    return (
    <div className='land-page' style={{width: '100%', margin: 'auto'}}>
        <div className='block text-center'>
        <ReactTypingEffect
         className='typewriter h1' speed='500' eraseDelay='200' typingDelay='250' cursor='|'
         text={text} />
          <p className='card-text'>HTML\ CSS | Bootstrap | JavaScript | React | Python | MySQL | MongoDB</p>
        </div>
    </div>
    );
    
}


Home.defaultProps = {
    text: ['Hello', 'I AM A WEB DEVELOPER','WELCOME TO MY PORTFOLIO']
}
Home.propTypes = {
    text: PropTypes.array.isRequired
}

export default Home;
