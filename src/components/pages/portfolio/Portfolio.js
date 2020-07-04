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
                    <div className='card'>
                        <img className='card-img' src='\contact-keeper.ng'></img>
                        <div>
                            <p>A React App for keeping contacts of a user. A registered user can log in
                                and view their contacts, filter through them, add a new contact, update 
                                a contact or delete a contact
                                <a href="" className="">More</a> </p>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='card-img' src='\website.png'></img>
                        <body></body>
                    </div>
                </div>
                <div className='row'>
                <div className='card'>
                        <img className='card-img' src='\github.png'></img>
                        <body></body>
                    </div>
                </div>
                <div className='card'>
                        <img className='card-img' src='\it-logger.png'></img>
                        <body></body>
                    </div>
            </div>
        </div>
    )
}

export default Portfolio;
