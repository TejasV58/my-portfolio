import React from 'react';
import Triangles from '../images/triangle.png'

const Main = () => {
  return <div className='grid grid-cols-0 lg:grid-cols-3 gap-0 m-0 pb-10 lg:pb-1' id="mainnav">
      <div className='lg:col-span-2 ml-6 sm:ml-10 md:ml-10 lg:ml-20 mx-auto my-20 ' id="introdiv"> 
        <h1 className='text-white text-6xl lg:text-8xl' >Hello!</h1>
        <h1 className='text-white font-bold text-5xl lg:text-8xl mt-3' id="myname">I'm <p className='lg:hidden'></p> <span className='text-themeviolet'>Tejas Vaichole</span></h1>
        <p className='text-white text-5xl lg:text-6xl my-4'><span className='text-themeviolet'>Web</span>  Developer </p>
        <span className="scroll-btn ml-10 lg:ml-20 mt-20">
          <a href="#aboutnav">
            <span class="mouse">
              <span>
              </span>
            </span>
          </a>
        </span>
      </div>
      
      <div className='hidden lg:place-content-end lg:-my-8 lg:flex lg:w-1/1'> 
        <img src={Triangles} alt="design" className='place-content-end m-0 flex content-end'/>
      </div>
  </div>;
};

export default Main;
