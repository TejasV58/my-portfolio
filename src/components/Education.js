import React from 'react';

/* Importing Images */
import eduTriangle from '../images/edutriangles.png'
import line from '../images/educationline.svg'
import endcircle from '../images/endcircle.svg'

/* Importing data */
import educationData from '../data/educationDetails.js'

const Education = () => {
  return (
    <div className='pt-10 m-0 text-center' id="educationnav">
      
        <h1 className="mb-16 mx-auto  text-5xl xs:text-6xl font-bold text-themeviolet">Education</h1>
        <div className='m-auto mx-6 lg:mx-0 ' >
          
          <div className='tracking-widest my-12' data-aos="fade-up" data-aos-duration="1000">
            <h1 className='text-white text-3xl mb-2'>Vellore Institute of Technology, Chennai</h1>
            <h1 className='text-white text-3xl my-2' id="degree">B.Tech in Computer Science and Engineering</h1>
            <h1 className='text-white text-3xl my-2' id="duration">June, 2019 - Present</h1>
            <h1 className='text-white text-3xl mt-8' id="percentage">CGPA: 9.39</h1>
          </div>
          <hr className='w-1/4 h-1/4 bg-gray-500 divide-y divide-yellow-500 text-center m-auto'/>
          <div className='tracking-widest my-12' data-aos="fade-up" data-aos-duration="1000">
            <h1 className='text-white text-3xl mb-2'>SNBP School and Jr. College</h1>
            <h1 className='text-white text-3xl my-2' id="degree">12th Boards</h1>
            <h1 className='text-white text-3xl my-2' id="duration">April, 2018 - April, 2019 </h1>
            <h1 className='text-white text-3xl mt-8' id="percentage">Percentage: 87.5%</h1>
          </div>
        
      </div>
  </div>
  );
};

export default Education;
