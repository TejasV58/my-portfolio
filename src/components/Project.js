import React from 'react';

import projectData from '../data/projectsDetails'

const Project = () => {
  return <div className=' bg-darkgrey pb-20 pt-5 mt-20' id="projectnav">
      <h1 className=" my-20 mt-10 text-5xl xs:text-6xl text-center font-bold text-themeviolet">Projects</h1>
      <div className='lg:w-2/3 m-8 lg:m-auto'>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 lg:gap-20 mx-auto'>

              {
                  projectData.map(({title,techstack,image,details}) =>{
                      return (
                        <div className='relative m-auto' id='container' data-aos="fade-up" data-aos-duration="1200">
                            <img src={image} id='image' />
                            <div className='w-60 h-1/1 table' id='overlay'>
                                <div className='table-cell align-middle'>
                                    <h1 className='text-2xl font-bold text-white'>{title}</h1>
                                    <div className='text-slate-500 text-lg '>{techstack}</div>
                                    <p className='text-gray-400 mt-4'>
                                        {details}
                                    </p>     
                                </div>    
                            </div>
                        </div>
                      );
                  })
              }
            
          </div>
        
      </div>
  </div>;
};

export default Project;
