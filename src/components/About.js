import React from 'react';

import myimage from '../images/my_image.png'
import myimage2 from '../images/my_image2.png'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import instagram from '../images/instagram.svg'



const About = () => {
  return (
  <div className='py-10 my-20 lg:my-10 lg:flex bg-darkgrey'  id="aboutnav"  data-aos="fade-up" data-aos-duration="700">
      <div className='mx-auto lg:my-10 lg:w-2/5' data-aos="zoom-in" data-aos-duration="1000">
        <img src={myimage} alt="Tejas's Image" className='w-1/3 lg:w-2/3 m-auto hidden lg:block md:block'/>
        <img src={myimage2} alt="Tejas's Image" className='lg:w-2/3 m-auto block lg:hidden md:hidden'/>
      </div>
      <div className=' text-center mx-5 lg:m-0 lg:w-3/5 lg:text-left py-2 lg:py-0' data-aos="zoom-in" data-aos-duration="1200">
        <h1 className="mt-12 lg:mt-10 text-5xl xs:text-6xl font-bold text-themeviolet">About Me</h1>
        <div className='whitespace-pre-line text-white text-lg xs:text-2xl my-5 lg:w-4/5 ' id="description">I am a curious computer science student, always looking for opportunities to learn and explore new things. Deep Learning and Machine Learning fascinates me. Its ability to mimic human cognition and vast usage in real life astounds me. I have adequate experience in web development using various technologies. With a keen sense of design, I am able to build attractive user interfaces. I am currently pursuing B.Tech in computer science from VIT Chennai and in third year.
        
        </div>
        <div className='flex mt-8 justify-evenly flex-col xs:flex-row'>
          <div className='grid grid-cols-3 gap-3 place-items-center'> 
            <a href="https://www.linkedin.com/in/tejas-vaichole-049209196/" target="_blank" className='m-1 mx-2' >
              <img src={linkedin} alt="Linkedin Logo" className='h-10' id="social"/>
            </a> 
            <a href="https://github.com/TejasV58" target="_blank" className='m-1 mx-2' id="social">
              <img src={github} alt="github Logo" className='h-10 w-10' id="social"/>
            </a>
            <a href="https://www.instagram.com/tejasvaichole55/" target="_blank" className='m-1 mx-2' id="social">
              <img src={instagram} alt="Instagram Logo" className='h-10' id="social"/>
            </a>
          </div>
          <a href="https://drive.google.com/file/d/1OlvtU2cnFqfpLylQWmlF3yHcJ-6AQ6SC/view?usp=sharing" target="_blank" className=' px-4 py-2 sm:px-8 sm:py-3 text-xl text-white m-5  lg:m-auto rounded-md bg-themeviolet hover:bg-themedarkviolet'>
            Resume
          </a>
        </div>
      </div>
  </div>
  );
};

export default About;
