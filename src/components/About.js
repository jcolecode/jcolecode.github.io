import React from 'react';
import profile from "./../images/profile.jpg";
import six from "./../images/6.JPEG";
import two from "./../images/2.jpg";
import three from "./../images/3.jpg";

const About = () => {
  return (
    <div id="About">
      
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6 col-xm-12">
            <div class ="photo-wrap">
            <img class="profile-img" src={profile} alt="profile" />  
            </div>  
          </div>
          <div class="col-lg-6 col-xm-12">
            <h1>Jacob Cole</h1>
            <h4>Software Engineer, Ex-Mechanical Engineer, Purdue Alumn</h4>
            <p>
              I am a graduate student at Georgia Tech where I am earning a Master's Degree in
              Computer Science. I am passionate about learning computer science principles and enjoy the 
              process of coding new technologies that I can apply to my personal projects. Outside of work and coding,
              I enjoy lifting, golfing, skiing, wakeboarding, going to the beach, and watching the Chicago Bears!
            </p>
            <div class ="photo-wrap">
            <img class="pics-img" src={six} alt="six" />  
            <img class="pics-img" src={two} alt="two"/> 
            <img class="pics-img" src={three} alt="three"/> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About