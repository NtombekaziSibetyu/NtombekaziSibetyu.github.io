import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import {Link} from 'react-router-dom';


const Navbar = ({homeIcon, homeTitle, aboutIcon, aboutTitle,contactIcon, contactTitle}) => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to={'/'}>
                        <i className={homeIcon}/>
                            {homeTitle}
                        </Link>
                </li>
                <li>
                    <Link to={'/about'}>
                        <i className={aboutIcon}/>
                            {aboutTitle}
                        </Link>
                </li>
                <li>
                    <Link to={'/contact'}>
                        <i className={contactIcon}/>
                            {contactTitle}
                        </Link>
                </li>
            </ul>
        </div>
    )
}
Navbar.defaultProps = {
    
    homeTitle: 'Home',
    homeIcon: 'fas fa-home',
    aboutTitle: 'About Me',
    aboutIcon: 'fas fa-info',
    contactTitle: 'Contact Me',
    contactIcon: 'fas fa-phone'
 };
 Navbar.propTypes = {
   
    homeTitle: PropTypes.string.isRequired,
    homeIcon: PropTypes.string.isRequired,
    aboutTitle: PropTypes.string.isRequired,
    aboutIcon: PropTypes.string.isRequired,
    contactTitle: PropTypes.string.isRequired,
    contactIcon: PropTypes.string.isRequired
};


export default Navbar;
