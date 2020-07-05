import React, { Fragment} from 'react';
import './About.css';
import PropTypes from 'prop-types';
import Navbar from '../../layout/navbar/Navbar';


 const About = (props) => {

    return (
        <div className='container'>
            <h1>About Me</h1>
            <div className='row'>
                <div className='col-6'>
                    <img src='' className='round-img' alt="profile" 
                    style={{width:'150px'}}/>  
                </div>
                <div className='col-6'>
                    <p> Full Name: {props.fullname}</p>
                    <p> Date of birth: {props.dob}</p>
                    <p> Gender: {props.gender}</p>
                    <p> Location suburb: {props.suburb}</p>
                    <p> Nationality: {props.nationality}</p>
                    <p> {props.criminalRec}</p>
                </div> 
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
            <p><strong>TERTIARY:</strong>{props.tertiary}</p>
            </Fragment>
            <Fragment>
            <h3><strong>Testimonials</strong></h3> 
            <div className='row'>
                <div className='col-6'>
                    <img src="" alt="" className=""/>
                    <p>Ntombekazi Sibetyu is a wise and committed individual. 
                        I have had the pleasure of working with her and found her
                         to be a really hard working individual. We were put under 
                         a lot of pressure and stress and yet she has kept on going,
                         not given up and tried her best. I believe that Ntombekazi has
                         great potential and will be an asset in the workplace.
                        Viata(Collegeue)</p>
                </div>
                <div className='col-6'>
                    <img src="" alt="" className=""/>
                    <p>
                        Ntombekazi is what I believe to be a hard worker, 
                        she is great to work with and is very creative with 
                        every project she comes up with. 
                        Anam Majikijela(collegue)</p>
                </div>
                <div className='col-6'>
                    <img src="" alt="" className=""/>
                    <p>Ntombekazi is humble, charismatic and confident.
                        Her passion and dedication for her work is truly 
                        remarkable and encouraging. It would be a great honor
                        to have her on board.
                        Yonela Ntsangani -collegue
                    </p>
                </div>
                <div className='col-6'>
                    <img src="" alt="" className=""/>
                    <p></p>
                </div>
            </div>
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