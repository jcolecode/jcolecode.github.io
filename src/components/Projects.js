import React from 'react';
import seven from "./../images/7.png";
import finance from "./../images/web.png";
import CS50 from "./../images/CS50.png";
import Lilly from "./../images/Lilly.png";

const Projects = () => {
  return (
    <div id="Projects">
      <div class="projects">
        <h1 class="py-5">Latest Projects</h1>
            <div class="container">
              <div class="row">
      
                <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                  <div class="card">
                    <img src={seven} class="card-img-top" alt="seven" />
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">Illinois COVID-19</h5>
                      <p class="card-text mb-4">Dash-Plotly based web application to showcase data.</p>
                      <a a target="blank" rel="noopener noreferrer" href="https://illinoiscovid19-jacobcole152.b4a.run/" class="btn btn-secondary mt-auto align-self-start">Project</a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                  <div class="card">
                    <img src={finance} class="card-img-top" alt="finance" />
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">Finance</h5>
                      <p class="card-text mb-4">Full stack web application which users can "buy" and "sell" stocks.</p>
                      <a a target="blank" rel="noopener noreferrer" href="https://github.com/jcolecode/finance" class="btn btn-secondary mt-auto align-self-start">Project</a>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                  <div class="card">
                    <img src={Lilly} class="card-img-top" alt="Lilly" />
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">Eli Lilly Augmented Reality</h5>
                      <p class="card-text mb-4">Built an application by leveraging Microsoft Power Apps and Power Automate for Eli Lilly's RealWear HMT-1 and Microsoft HoloLens 2.</p>
                          <a target="blank" rel="noopener noreferrer" href="https://youtu.be/HnnlKHKcs-s" class="btn btn-secondary align-self-start">Demo</a>
                          <a target="blank" rel="noopener noreferrer" href="../Eli-Lilly-Report.pdf" class="btn btn-secondary align-self-start">Report</a>
                          <a target="blank" rel="noopener noreferrer" href="https://polytechnic.purdue.edu/capstone-project/91-eli-lilly-and-company" class="btn btn-secondary align-self-start">Project</a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                  <div class="card">
                    <img src={CS50} class="card-img-top" alt="CS50" />
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">Harvard CS50</h5>
                      <p class="card-text mb-4">Completed Harvard's Intro to Computer Science course where I gained knowledge in C, Python, Flask, SQL, HTML, CSS, JavaScript, Data Structures and Algorithms.</p>
                      <a target="blank" rel="noopener noreferrer" href="https://certificates.cs50.io/2cebf8aa-f43d-4b57-a386-9e1f042aebea.pdf?size=letter" class="btn btn-secondary mt-auto align-self-start">Certificate</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Projects