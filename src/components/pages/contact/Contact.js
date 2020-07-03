import React from 'react';
import axios from 'axios';

const Contact = () => {
    return (
        <div className='contact-body'>
            <h2>Contact Me</h2>
            <div className='row'>
                <div className='col'>
                <i class="fas fa-phone-square-alt">0630447645</i>
                </div>
                <div className='col'>
                <i class=""></i>
                </div>
                <div className='col'>
                <i class="fab fa-github"></i>
                </div>
                <div className='col'>
                <i class="fab fa-linkedin-in"></i>
                </div>
            </div> 
            <form
            action="Put email reference here"
            method="POST">
            <div className="form-group">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 mx-auto">
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
              <div className="col-12 col-sm-12 col-md-6 mx-auto">
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
              <div className="col-12 col-sm-12 col-md-6 mx-auto">
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
            <div className="col-12 col-sm-12 col-md-6 mx-auto">
              <button type="submit" className="btn btn-primary mb-2 hidden">
                Submit
              </button>
            </div>
          </div>
        </form> 
        </div>
    )
}

export default Contact;
