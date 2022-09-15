import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

const Footer = () => {
  return (
    <div class="footer">
                <div class="d-flex flex-row my-4 ">
                     <a class="nav-link mx-2" target="blank" rel="noopener noreferrer" href="/Resume.pdf"><DescriptionIcon /></a>
                     <a class="nav-link mx-2" target="blank" rel="noopener noreferrer" href="mailto: jacobcole152@gmail.com"><EmailIcon /></a>
                     <a class="nav-link mx-2" target="blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jacob-cole-315399149/"><LinkedInIcon /></a>
                     <a class="nav-link mx-2" target="blank" rel="noopener noreferrer" href="https://github.com/jcolecode"><GitHubIcon /></a>
                </div>
            
        <p>Jacob Cole © 2022</p>
    </div>
  )
}

export default Footer