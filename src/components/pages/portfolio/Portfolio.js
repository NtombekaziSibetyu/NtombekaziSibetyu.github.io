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
                          <h4>Contact keeper app</h4>
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
                          <h4>Company employees profile website</h4>
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
                    <img className='card-img' 
                    src='https://lh3.googleusercontent.com/c8NfJTeTWPRRbdSLqz0cffdsgjUAgDVkNJJxlUuIVLw8ydNidYXv8YlDW3yQ0mOkulG6RWQHrdc2gZ0jaxM1udsxaKflUau_RYfBL1zNVwdxChp77dGi_8V8R-Qi2BNyppJtmXWu8quOUI8sH2kVR3lApIspLogNX8QvvkRSwli94Evzk0rNLmVh74qikF5-EjesJTTyoQzrBifPN5VCOXCpahOi3X1Z8BKDpXk9L9axjDDpSfKM3s4zznGf4aD9a1FjPuKLaeYUg5suB5dE1AYvULAdhRoerVkOZxjBFIWMsoopQZXryjXEihi3wJg0_iymngYZIhLaC9YY9EynJPxEwRrP-7-VXvyhlFYLY0Syu0Z4Vch7e6HmoBxJhlkzQpXRJtnzHbfDW96afdov_MXM81sp3ZJWkaYFxDllHlTWhrY0VqKOy-RVZItazTHm8QvE_9cXl_tmJS0ZPcEbJqdcfWsT78WbigThYMMB3zqiwAJ3ksCBxC8Dap3Z1wYO3OO11eY9i0GRYhz9LXV-tZN1X7dYo1bEdXYFmN_07lZ5UuAObzHjQx86LF3k2vNgt5jlzJrINSXF3tKxGgVt2mEONtWDddDXEQc1oJ3qgcouTqr2dTKwaTxRNoQoGoKOEnejSYQqMoJx9grCuEfEYXdAyCov8Ys_-Doq7HS6gbcJoLomW3zKRM9x7gc=w522-h225-no?authuser=0'></img>
                      <h4>Github searcher App</h4>
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
                    src='https://lh3.googleusercontent.com/E4l-DpcZBlBaguyPZ9WMFKiBoVPPb44vpmKYj8rlMYzpKJ0HxWF7JXpGR9urdUioWreKXsMXEkamgVKbazGaIHXiqtSXXUsCbnnbmjMjZojCtf-V49YWuP5LQ1JKoIQQvEPRPy4B_m7sY5_JQHZTUGhv2u1PfVgim2wMiRK44qlupdeO_l8n23tn0YZ3l-IWnhlVciaob9MSxhH-Yn7h4yDrcqjzsnW4zrTtLRpWkXer0S1We8anrY663kcgNdvd47S6Wcn0s9LFzsxzp2w_Udd137ScHt4x8-bdQRjJgcfErR8958zBptbixA-Fl5TGGKR_Jx_tCjj_3iQ32vlAe0n5ovLLhsnGCVIhy2QVAF16MOHJeKaQwcz9bK60jVPxV6ixVP7wdVD1szLWzCU_pBEQOKWzAIyqApoAaT4VtEf1tibA9mGy5Et_pLocXiNZoCZ7ay2mbRUsxIeuWudVbO-VFNnjjdbUzigd2StuTK-FwXqp6WM7BSUzniO_XrdRbwbIN02yRNMLoQPW8X_uCCx_DfTbQho5WBGkKLzzOuynEF317ZT8O2L1AwhLKwBZ3LDgK_pwEL2Z-Xi-iICpAoQpgkk-G9RKGvihkdmOP1jO_2f2xym4Fj0pvj6R231G5VvaBrm705KB486IhA18UZOS8Mmq5-NoD4YbCOZg0sXpN-0mO23lRh0MgY0=w1366-h581-no?authuser=0'></img>
                    <h4>Technicians Log System</h4>
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
