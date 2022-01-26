import React from 'react';
import linkedin from '../images/linkedin.svg'
import instagram from '../images/instagram.svg'
import mail from '../images/mail.svg'
import arrow from '../images/arrowtop.svg'

const Footer = () => {
  return (
  <div className='bg-darkblack text-white p-5 text-xl text-center'>
    <div className='m-auto flex justify-center mb-5'>   
        <a href="https://www.linkedin.com/in/tejas-vaichole-049209196/" target="_blank" className='m-1 mx-2' >
        <img src={linkedin} alt="Linkedin Logo" className='h-8' id="social"/>
        </a> 
        <a href="mailto:tejasv515@gmail.com" className='m-1 mx-2' id="social">
        <img src={mail} alt="mail Logo" className='h-8 w-10' id="social"/>
        </a>
        <a href="https://www.instagram.com/tejasvaichole55/" target="_blank" className='m-1 mx-2' id="social">
        <img src={instagram} alt="Instagram Logo" className='h-8' id="social"/>
        </a>
    </div>
    Made with ❤️ by Tejas!
  </div>
  );
};

export default Footer;
