import React from 'react';
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'

const Portfolio = () => {
    
    return (
        <div className='container'>
            <h1>SKILLS</h1>
            <ProgressBar />
            <br></br>
            <div className='container'>
              <h2>My Projects</h2>
                <div className='row'>
                    <div className='col-6'>
                        <img className='card-img' src='\contact-keeper.jpeg'></img>
                          <p>A React App for keeping contacts of a user. A registered 
                              user can log in and view their contacts, filter through them, 
                              add a new contact, update a contact or delete a contact.
                            <a href="https://github.com/NtombekaziSibetyu/Contact-Keeper" 
                              className="">More</a> 
                          </p>
                    </div>
                    <div className='col-6'>
                        <img className='card-img' src='.\website.jpeg'></img>
                          <p>A website that displays company employees profiles 
                             with an option to create a new profile
                            <a href="https://github.com/NtombekaziSibetyu/webDesignProject"
                             className="">See more</a>
                          </p>                      
                    </div>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <img className='card-img' src='.\github.jpeg'></img>
                      <p>
                         A React App that enables a user to search for the github user profile
                          <a href="" className="https://github.com/NtombekaziSibetyu/search-github-users">More</a>   
                      </p>
                  </div>
                  <div className='col-6'>
                    <img className='card-img' src='.\it-logger.jpeg'></img>
                        <p>
                          A React log system App for technicians that enables adding 
                          system logs, updating and deleting them.
                          You can also add or delete the technicians 
                          <a href="https://github.com/NtombekaziSibetyu/IT-Logger" className="">Github</a>
                        </p>
                  </div>
                </div>
              </div>
          </div>
  )
}



export default Portfolio;
