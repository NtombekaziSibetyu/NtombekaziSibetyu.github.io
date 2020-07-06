import React from 'react';
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar';
import './portfolio.css'


const Portfolio = () => {
    
    return (
        <div className='portfolio-content' >
            <h1>SKILLS</h1>
            <ProgressBar />
            <br></br>
            <div>
              <h2>My Projects</h2>
                <div className='row'>
                    <div className='col-6'>
                        <img className='card-img' 
                        src='https://lh3.googleusercontent.com/_1ggpo-tN6e8ymcESINO1QvdoUzU-CCMdHh1Cnalje6eUCge7kHvI3tpx-9igdi0O3bHxwuiv2LuiThgq4LY36kHB9mxAVivtgLqqKatcFN-f2VBGvlwRuPdvkd46iDuHrRSXSyLo1HHcRN_Gwf2HH7l9Rp6M2rRnDg4-Yi0c4EObxZRYUHNEEmCGzC9X8tcQGnsiqBjVOdW7_LoIhti3T2oFUe5egeGKbnIUS9-xeLAtd7NLjcyiVB_n_GniFVENMAQ0mqgTLr0AxLQ1riHoxYco2UR3wDzB8lYGbpuGJj1gS8dAsw9djKDysy1yrk8FBSIVGo4ESijJwU1VJDzaIXE50zWzez-SUH1zLy8sPuBCyENIrH6YToWoJNdL7de53U5-iZMLia6tkN4QSoJmfXMqGmr3VaBnJ2deSzV1ltcn-AXTg4gfEXQpJJuOI_jfMDd5s41n_1HdyPrrSnPUEWRcG-9u-omf5Y0axRRI3ECLi6ZqFGiENEeHPeBkysZcak3RC_k4Jr_-Ip8lySGq7k4Uk70UfrQlhUpoq64JgIp3kB7uUS9tHz7n-RrwkLVSMp-dlErSZ8b697YE_WUXyQrM26fz8mgJR4QM9bHuQKo3XUGQ7KBckXkK5bftXj-pjKKtFd1HOl2yEgZnQa7efJXCS1_YjPcMgAKOw4zVBK1bCLPbiqgleMsfk4=w1132-h593-no?authuser=0'></img>
                          <p>A React App for keeping contacts of a user. A registered 
                              user can log in and view their contacts, filter through them, 
                              add a new contact, update a contact or delete a contact. 
                          </p>
                          <p>
                          <a href="https://github.com/NtombekaziSibetyu/Contact-Keeper" 
                              className="">Github link</a>
                          </p>
                    </div>
                    <div className='col-6'>
                        <img className='card-img' src='https://lh3.googleusercontent.com/7yWHuElLDjoag9vtdiEXVtgGXkWeoGnn92eLsNgqdDMUQik32pNNS5vfTnQXWx1FdTtKDVugEdcLe6xkVL1H3yyRn0ubPMBpeGAFEhjR02_naIXpzzWVj9vzBGEKEbvnP2qhRIFKhaaIhSvf1UOBXm64O04Waug5AAsDqD_e22D3EAErDcTboHhtUUe38xgukizR1mLGG5swCPjoi92GeE3xMK9ZQ_2iCJNoTuYzb5Kow1CAgqLklLzkNtSxwaDTQ-s6ZoR6h517lI12sV5JoS5KnU_h30uXqZigZPbo3Xd1HWJnVbNx-nd6CegdYbl6UL4_K0V29dGiofX9gD4F6bxGgHuvOVabiSO5C9Ulb4S6QwbQueQsC5h6AItoR2MfemWu1RfIFp9l93NzOHYujEXeMVyOynIEACEC2gy0j4Yu0PDR-UY20ECe64TpbK7eGknDe6Vo9thwPSZ9CioFTzP6YR8HjzLpW33AYM7Us5IRCwEes8hUApAK0dfmsh8O3wVzxisqCV5coIhZq0fD3OK8Uu01fSmTN6shu0bf0gu7e03GAtY9svbdZeN_pBhVHlKHjEnCUn5Z3p--8kKzADErydtds4cxIkWE8ckooOf0qmOab0ruvye83w2cXzu7Y1ugSkI5TuauNIZwNqFnx-IJ_Fwp_Ezt4dXorRKCNJ1EgFjtYweTFm9L2M8=w1366-h526-no?authuser=0'></img>
                          <p>A website that displays company employees profiles 
                             with an option to create a new profile
                          </p> 
                          <p><a href="https://github.com/NtombekaziSibetyu/webDesignProject"
                             className="">Github link</a>
                          </p>                     
                    </div>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <img className='card-img' src='./github.jpeg'></img>
                      <p>
                         A React App that enables a user to search for the github user profile
                      </p>
                      <p><a href="" 
                      className="https://github.com/NtombekaziSibetyu/search-github-users">
                        Github link</a>   
                      </p>
                  </div>
                  <div className='col-6'>
                    <img className='card-img' 
                    src=''></img>
                        <p>
                          A React log system App for technicians that enables adding 
                          system logs, updating and deleting them.
                          You can also add or delete the technicians 
                        </p>
                        <p><a href="https://github.com/NtombekaziSibetyu/IT-Logger" className="">
                          Github link</a>
                        </p>
                  </div>
                </div>
              </div>
          </div>
  )
}



export default Portfolio;
