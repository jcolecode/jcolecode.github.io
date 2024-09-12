import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

function YearCopyright() {
  return  <p id="copyright-year" class="fs-4">Jacob Cole © {new Date().getFullYear()}</p>;
}

const Footer = () => {
  return (
    <div className='bg-light p-5'>
      <div class="footer">
                  <div class="d-flex flex-row my-4">
                      <a href="/Jacob_Cole_Resume.pdf" target="_blank" rel="noopener noreferrer" class="nav-link mx-2"><DescriptionIcon style={{ fontSize: 60 }} /></a>
                      <a href="mailto:jacobcole152@gmail.com" target="_blank" rel="noopener noreferrer" class="nav-link mx-2"><EmailIcon style={{ fontSize: 60 }} /></a>
                      <a href="https://www.linkedin.com/in/jacobrcole" target="_blank" rel="noopener noreferrer" class="nav-link mx-2"><LinkedInIcon style={{ fontSize: 60 }} /></a>
                      <a href="https://github.com/jcolecode" target="_blank" rel="noopener noreferrer" class="nav-link mx-2"><GitHubIcon style={{ fontSize: 60 }} /></a>
                  </div>
          <YearCopyright />
      </div>
    </div> 
  )
}

export default Footer