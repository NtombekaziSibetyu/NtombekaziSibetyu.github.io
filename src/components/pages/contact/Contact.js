import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'


const Contact = (props) => {
  
    return (
        <div className='contact-body'>
            <h2>Contact Me</h2>
          <div className='container'>
            <div className='row'>
                <div className='col-3'>
                <i class="fas fa-phone-square"></i>
                <p>Call:{props.cellNo}</p>
                </div>
              
                <div className='col-3'>
                <i class="fab fa-github"></i>
                <p><a href={props.github} className="">Github Link</a></p>
                </div>
                <div className='col-3'>
                <i class="fab fa-linkedin-in "></i>
                <p><a href={props.linkedin} className="">LinkedIn</a></p>
                </div>
            </div> 
          </div>
            <form
            action="https://www.googleapis.com/gmail/v1/users/userId/messages/send"
            method="POST">
              <h3>Send an email</h3>
            <div className="form-group">
            <div className="row">
              <div className="col-4 col-md-6 mx-auto">
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  id="name"
                  placeholder="Name"
                />
              </div>
            </div>
          </div>
          <div className="form-group hidden">
            <div className="row">
              <div className="col-4 col-sm-4 col-md-6 mx-auto">
                <input
                  type="email"
                  name="_replyto"
                  className="form-control form-control-lg"
                  id="exampleFormControlInput1"
                  placeholder="Your email"
                />
              </div>
            </div>
          </div>
          <div className="form-group hiddenRight">
            <div className="row">
              <div className="col-4 col-sm-4 col-md-6 mx-auto">
                <textarea
                  name="message"
                  className="form-control form-control-lg"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Write your message..."
                />
              </div>
            </div>
          </div>
          <div className="row text-md-right text-sm-center">
            <div className="col-4 col-sm-4 col-md-6 mx-auto">
              <button type="submit" className="btn btn-primary mb-2 hidden" >
                Send
              </button>
            </div>
          </div>
        </form> 
      </div>
    )
}
Contact.defaultProps = {
  cellNo: '063 044 7645 / 081 348 6222',
  github: 'https://github.com/NtombekaziSibetyu ',
  linkedin: 'https://www.linkedin.com/in/ntombekazi-sibetyu-21a353164 '
}

Contact.propTypes = {
  cellNo: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired
}

export default Contact;
