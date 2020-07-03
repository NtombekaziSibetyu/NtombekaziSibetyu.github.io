import React from 'react';
import PropTypes from 'prop-types';
import ReactTypingEffect from 'react-typing-effect';

const Home = ({text}) => {
    return (
    <div className='container ' style={{width: '100%', margin: 'auto'}}>
      <ReactTypingEffect
         className='typewriter' speed='500' eraseDelay='500' typingDelay='250' cursor='|'
         text={text} />
     <p> HTML\ CSS | Bootstrap | JavaScript | React | Python | MySQL | MongoDB</p>
    </div>
    );
    
}


Home.defaultProps = {
    text: ['Hello', 'I', 'Am', 'Ntombekazi', 'Sibetyu', 'I','am','a','developer']
}
Home.propTypes = {
    text: PropTypes.array.isRequired
}

export default Home;
