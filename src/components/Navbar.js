import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="containerLanding">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#About">About<span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Experience">Experience</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" target="blank" rel="noopener noreferrer" href="../Resume2023.pdf">Resume</a> 
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" target="blank" rel="noopener noreferrer" href="mailto:jacobcole152@gmail.com">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" target="blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jacob-cole-315399149/"><LinkedInIcon /></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" target="blank" rel="noopener noreferrer" href="https://github.com/jcolecode"><GitHubIcon /></a>
                    </li>
                </ul> 
            </div>
        </div>
    </nav>
)
}

export default Navbar