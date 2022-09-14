import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div class="footer">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <div class="container">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" target="blank" rel="noopener noreferrer" href="/Resume.pdf">Resume</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" target="blank" rel="noopener noreferrer" href="mailto: jacobcole152@gmail.com">Contact</a>
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
        <p>Jacob Cole © 2022</p>
    </div>
  )
}

export default Footer