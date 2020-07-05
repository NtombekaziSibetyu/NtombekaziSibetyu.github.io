import React from 'react'

const Portfolio = () => {
    const ProgressBar = ({percentage, color}) => {
        const textLocation = `${percentage + 2}%` ;
        const fillerPercentage =  `${percentage}%`;
        
        return (
            <div className="progress-bar">
              <div className="text">
                <span style={{marginLeft: textLocation, color: color}}>
                  {fillerPercentage}
                </span>
              </div>
              <div className="display">
                <Filler percentage={percentage} color={color} />
              </div>
            </div>
          )
      }
      
      const Filler = ({percentage, color}) => (
        <div className="filler" style={{ width: `${percentage}`, backgroundColor: color}} />
      );
      
      const Skill = ({name, percentage, color}) => (
        <div> 
          <div className="skill-name">
            {name}
          </div>
          <ProgressBar percentage={percentage} color={color} />
        </div>
      );
      
    return (
        <div className='container'>
            <h1>SKILLS</h1>
            <Skill name="HTML5" percentage={90} color="#1DA598"/>
            <Skill name="CSS" percentage={80} color="#1DA598"/>
            <Skill name="Bootstrap" percentage={80} color="#1DA598"/>
            <Skill name="Python" percentage={90} color="#1DA598"/>
            <Skill name="MySQL" percentage={90} color="#1DA598"/>
            <Skill name="JavaScript" percentage={70} color="#1DA598"/>
            <Skill name="React" percentage={70} color="#1DA598"/>
            <h2>My Projects</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <img className='card-img' src='\contact-keeper.ng'></img>
                          <p>A React App for keeping contacts of a user. A registered 
                              user can log in and view their contacts, filter through them, 
                              add a new contact, update a contact or delete a contact.
                            <a href="https://github.com/NtombekaziSibetyu/Contact-Keeper" 
                              className="">More</a> 
                          </p>
                    </div>
                    <div className='col-6'>
                        <img className='card-img' src='\website.png'></img>
                          <p>A website that displays company employees profiles 
                             with an option to create a new profile
                            <a href="https://github.com/NtombekaziSibetyu/webDesignProject"
                             className="">See more</a>
                          </p>                      
                    </div>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <img className='card-img' src='\github.png'></img>
                      <p>
                         A React App that enables a user to search for the github user profile
                          <a href="" className="https://github.com/NtombekaziSibetyu/search-github-users">More</a>   
                      </p>
                  </div>
                  <div className='col-6'>
                    <img className='card-img' src='\it-logger.png'></img>
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
