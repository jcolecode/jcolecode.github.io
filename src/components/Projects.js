import React from 'react';

const Projects = () => {
  return (
    <div id="Projects">
    <div class="projects">
        <h1 class="py-5">Latest Projects</h1>
            <div class="container">
                <div class="row">
                <div class="col-md-3 col-sm-6">
                        <div class="card">
                            <img class="card-img-top" src="../1.jpg" alt="#" />
                            <div class="card-body">
                                <h5 class="card-title">Website Portfolio</h5>
                                <p class="card-text">My website designed from the ground up.</p>
                                <a target="blank" rel="noopener noreferrer" href="www.youtube.com" class="btn btn-secondary">Project</a>
                            </div>
                        </div>
                    </div>

                <div class="col-md-3 col-sm-6">
                        <div class="card">
                            <img class="card-img-top" src="../CS50.png" alt="#" />
                            <div class="card-body">
                                <h5 class="card-title">Harvard CS50</h5>
                                <p class="card-text">Completed Harvard's Intro to Computer Science course where I gained knowledge in C, Python, Flask, SQL, HTML, CSS, JavaScript, Data Structures and Algorithms.</p>
                                <a target="blank" rel="noopener noreferrer" href="https://certificates.cs50.io/2cebf8aa-f43d-4b57-a386-9e1f042aebea.pdf?size=letter" class="btn btn-secondary">Project</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <div class="card">
                            <img class="card-img-top" src="../Lilly.png" alt="#" />
                            <div class="card-body">
                                <h5 class="card-title">Eli Lilly Augmented Reality</h5>
                                <p class="card-text">Built an application by leveraging Microsoft PowerApps and Power Automate for Eli Lilly's RealWear HMT-1 and Microsoft HoloLens 2.</p>
                                <a target="blank" rel="noopener noreferrer" href="https://polytechnic.purdue.edu/capstone-project/91-eli-lilly-and-company" class="btn btn-secondary">Project</a>
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