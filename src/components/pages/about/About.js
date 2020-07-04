import React, { Fragment} from 'react';
import './About.css';
import PropTypes from 'prop-types';
import Navbar from '../../layout/navbar/Navbar';


 const About = (props) => {

    return (
        <div className='container'>
             <div className='card grid-2'>
                <img src='' className='round-img' alt="image" 
                style={{width:'150px'}}/>
                <h1>About Me</h1>
             <p> Full Name: {props.fullname}</p>
            <p> Date of birth: {props.dob}</p>
            <p> Gender: {props.gender}</p>
            <p> Location suburb: {props.suburb}</p>
            <p> Nationality: {props.nationality}</p>
            <p> {props.criminalRec}</p>
            </div> 
            <h3><strong>Bio</strong></h3>
            <p>
            I am an innovative person who is always willing to learn and expand my skills and 
            knowledge. I am an ambitious individual driven by the desire to succeed and advance 
            my capabilities. Aspiring to pursue a career in web development and hopefully become 
            a full-stack developer. I am passionate about finding different and innovative solutions
            to problems.</p>
            <p>
            I was introduced to the tech space in high school in grade 10 Information technology. The
             realization that I could create programs that could work and produce results was 
             fascinating for me. I love the fact that I am able to take part and have a role in 
             producing solutions for problems using technology.
            </p>
            <Fragment>
            <h3><strong>Passion Board</strong></h3>
            <ul>
                <li>Reading fiction and nonfiction and history books </li>
                <li>Drawing</li>
                <li>Watching movies and series</li>
                <li>Writing</li>
            </ul>
            </Fragment>
            <Fragment>
            <h3><strong>Education</strong></h3>
            <p><strong>MATRIC:</strong>{props.school}</p>
            <p><strong>OTHER:</strong>{props.tertiary}</p>
            </Fragment>
            <Fragment>
            <h3><strong>Testimonials</strong></h3>  
            </Fragment>
        </div>
            
      
    )
}

About.defaultProps = {
    fullname:'Ntombekazi Sibetyu',
    dob: '1997/02/01',
    gender: 'female',
    suburb: 'Khayelitsha, Cape Town',
    nationality: 'South African',
    criminalRec: 'No criminal record',
    school: 'COSAT : Center of Science and Technology',
    tertiary: 'BSc Biotechnology UWC (2015-2018) '
}

About.propTypes = {
    fullname: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    surbub: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    criminalRec: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    tertiary: PropTypes.string.isRequired,
}

export default About;