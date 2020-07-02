import React from 'react';
import PropTypes from 'prop-types'
import ReactTypingEffect from 'react-typing-effect';

const Home = ({text}) => {
    return (
    <div >
      <ReactTypingEffect
        text={text} className='type-effect' speed='5000s' eraseDelay='5000s' typingDelay='2500s' cursor='|'
      />
    </div>
    );
    
}


Home.defaultProps = {
    text: ['Hello', 'I', 'Am', 'Ntombekazi']
}
Home.propTypes = {
    text: PropTypes.array.isRequired
}

export default Home;
