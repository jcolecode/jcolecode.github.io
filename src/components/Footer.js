import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

function YearCopyright() {
  return  <p id="copyright-year">Jacob Cole © {new Date().getFullYear()}</p>;
}

const Footer = () => {
  return (
    <div class="footer">
                <div class="d-flex flex-row my-4 ">
                     <a href="/Resume2023.pdf" target="_blank" rel="noopener noreferrer" class="nav-link mx-2"><DescriptionIcon /></a>
                     <a href="mailto:jacobcole152@gmail.com" target="_blank" rel="noopener noreferrer" class="nav-link mx-2"><EmailIcon /></a>
                     <a href="https://www.linkedin.com/in/jacob-cole-315399149/" target="_blank" rel="noopener noreferrer" class="nav-link mx-2"><LinkedInIcon /></a>
                     <a href="https://github.com/jcolecode" target="_blank" rel="noopener noreferrer" class="nav-link mx-2"><GitHubIcon /></a>
                </div>
        <YearCopyright />
    </div>
  )
}

export default Footer