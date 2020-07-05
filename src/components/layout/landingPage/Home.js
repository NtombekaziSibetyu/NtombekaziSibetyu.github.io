import React from 'react';
import PropTypes from 'prop-types';
import ReactTypingEffect from 'react-typing-effect';

const Home = ({text}) => {
    return (
    <div className='container ' style={{width: '100%', margin: 'auto'}}>
      <ReactTypingEffect
         className='typewriter h1-center' speed='500' eraseDelay='500' typingDelay='250' cursor='|'
         text={text} />
        <div className='block text-center'>
          <p className='card-text'>HTML\ CSS | Bootstrap | JavaScript | React | Python | MySQL | MongoDB</p>
        </div>
    </div>
    );
    
}


Home.defaultProps = {
    text: ['Hello', 'I','am','a','developer']
}
Home.propTypes = {
    text: PropTypes.array.isRequired
}

export default Home;
