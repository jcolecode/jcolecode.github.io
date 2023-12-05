import React from 'react';
import seven from "./../images/7.png";
import finance from "./../images/web.png";
import Lilly from "./../images/Lilly.png";
import estate from "./../images/estate.jpg"

const Projects = () => {
  return (
    <div id="Projects">
      <div class="projects">
        <h1 class="py-5">Latest Projects</h1>
            <div class="container">
              <div class="row">
      
              <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                  <div class="card">
                    <img src={estate} class="card-img-top" alt="estate" />
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">Real Estate</h5>
                      <p class="card-text mb-4">Web scraper for real estate agents by automating lead extraction and data input.</p>
                      <a target="blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=oE_LSbI6z_0" class="btn btn-secondary mt-auto align-self-start">Project</a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                  <div class="card">
                    <img src={seven} class="card-img-top" alt="seven" />
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">Illinois COVID-19</h5>
                      <p class="card-text mb-4">Data visualizer to provide helpful insights for Illinois residents.</p>
                      <a a target="blank" rel="noopener noreferrer" href="https://illinoiscovid19-jacobcole152.b4a.run/" class="btn btn-secondary mt-auto align-self-start">Project</a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                  <div class="card">
                    <img src={finance} class="card-img-top" alt="finance" />
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">Financial Trading</h5>
                      <p class="card-text mb-4">Full stack web application which users can simulate stock trading.</p>
                      <a a target="blank" rel="noopener noreferrer" href="https://github.com/jcolecode/financial-trading" class="btn btn-secondary mt-auto align-self-start">Project</a>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-4 mb-3 d-flex align-items-stretch">
                  <div class="card">
                    <img src={Lilly} class="card-img-top" alt="Lilly" />
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">Eli Lilly Augmented Reality</h5>
                      <p class="card-text mb-4">Microsoft Power Apps and Power Automate application for Eli Lilly's RealWear HMT-1 and Microsoft HoloLens 2.</p>
                          <a target="blank" rel="noopener noreferrer" href="https://youtu.be/HnnlKHKcs-s" class="btn btn-secondary align-self-start">Demo</a>
                          <a target="blank" rel="noopener noreferrer" href="../Eli-Lilly-Report.pdf" class="btn btn-secondary align-self-start">Report</a>
                          <a target="blank" rel="noopener noreferrer" href="https://polytechnic.purdue.edu/capstone-project/91-eli-lilly-and-company" class="btn btn-secondary align-self-start">Project</a>
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