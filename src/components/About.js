import React from 'react'

const About = () => {
  return (
    <div id="About">
      
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6 col-xm-12">
            <div class ="photo-wrap">
            <img class="profile-img" src="../profile.jpg" alt="profile" />  
            </div>  
          </div>
          <div class="col-lg-6 col-xm-12">
            <h1>Jacob Cole</h1>
            <h4>Programmer, Mechanical Engineer, Purdue Alumn</h4>
            <p>
              Currently working for Siemens as an Associate Project Manager. I am passionate about learning how things work and enjoy the 
              process of coding new technologies that I can apply to my personal projects. Outside of work and coding,
              I enjoy lifting, golfing, skiing, wakeboarding, going to the beach, and watching the Chicago Bears!
            </p>
            <div class ="photo-wrap">
            <img class="pics-img" src="../6.JPEG" alt="6" />  
            <img class="pics-img" src="../2.jpg" alt="2"/> 
            <img class="pics-img" src="../3.jpg" alt="3"/> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About