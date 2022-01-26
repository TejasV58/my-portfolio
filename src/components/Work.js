import React from 'react';
import workData from '../data/workDetails.js'


const Work = () => {
  return (
    <div className='pt-10 m-0 text-center' id="worknav">
     
        <div className=' m-auto mx-6 lg:mx-0'>
        <h1 className="text-5xl xs:text-6xl mb-16 font-bold text-themeviolet">Work Experience</h1>
            <div className='mx-auto '>
            {
                workData.map(({id,company,role,duration,details}) => {
                        const length = workData.length;
                        return (
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <div className='tracking-widest my-12 mx-auto' key={id}>
                                    <h1 className='text-white text-3xl mb-2'>{company}</h1>
                                    
                                        <div className='mx-auto flex flex-col lg:flex-row text-center justify-center'>
                                            <h1 className='text-white text-2xl mb-2' id="role">{role}</h1>
                                            <span className='rounded px-1 h-2 hidden lg:inline lg:mx-4 my-auto bg-gray-500 '></span>
                                            <h1 className='text-white text-2xl mb-2' id="duration">{duration}</h1>
                                        </div>
                                    
                                    <div className='lg:w-3/5 mx-auto mt-6 text-gray-300 text-2xl text-center ' style={{fontFamily: 'Source Sans Pro'}}>
                                       {details}
                                    </div>
                                </div>
                                {(id<length) && <hr className='w-1/4 h-1/4 bg-gray-500 text-center m-auto'/>}
                            </div> 
                        );
                })
                }
            </div>
        
        </div>
    </div>
  );
};

export default Work;
