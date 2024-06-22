import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Footer.css"
const Footer = () => {
  return (
    <div className='Footer-Main'>
      <div className="developer">
        <h4>Developer-Arpit Agrahari</h4>
        <h4><a href="mailto:omagrahri55@gmail">E-mail-omagrahri55@gmail</a></h4>
        <h4><a href="tel:+918840689883">Phone-8840689883</a></h4>
        <h4>Location-Delhi,India</h4>
      </div>
      <h2>Copyright © www.HealthBridge.com all rights are reserved!!!</h2>
      <div className="social">
        <div className="media"><FacebookIcon className='Icon' /><a href='https://www.facebook.com/arpit.agrahari.5'>Facebook</a></div>
        <div className="media"><GitHubIcon className='Icon' /><a href='https://github.com/Arpit10110'>Github</a></div>
        <div className="media"><InstagramIcon className='Icon' /><a href='https://www.instagram.com/___arpit_._/'>Instagram</a></div>
        <div className="media"><LinkedInIcon className='Icon' /><a href='https://www.linkedin.com/in/arpit-agrahari-54aa192a1/'>Linkdin</a></div>
      </div>
    </div>
  )
}

export default Footer
