import React from 'react';

import html from '../images/Skills/html.svg';
import css from '../images/Skills/css.svg';
import git from '../images/Skills/git.svg';
import github from '../images/Skills/github.svg';
import react from '../images/Skills/react.svg';
import node from '../images/Skills/node.svg';
import tailwind from '../images/Skills/tailwind.svg';
import java from '../images/Skills/java.svg';
import cpp from '../images/Skills/c++.svg';
import python from '../images/Skills/python.svg';
import javascript from '../images/Skills/javascript.svg';
import sql from '../images/Skills/mysql.svg';


const Skills = () => {
  const technicalSkills = [html, css, tailwind, react, node,git, github ,cpp, java, python, javascript, sql];
  return <div className='pt-10 m-auto' id="skillsnav">
      <h1 className=" text-5xl xs:text-6xl text-center font-bold text-themeviolet">My Skills</h1>
      <div className='mx-8 lg:mx-auto '>
        <div className='grid grid-cols-2 gap-8 gap-x-2 md:grid-cols-3  lg:gap-4 lg:gap-y-10 lg:grid-cols-6 lg:w-2/3 m-auto justify-center mt-16' data-aos="zoom-in" data-aos-duration="1200" >
          { 
              technicalSkills.map((skill)=>{
                return <img src={skill} className='m-auto' id='skillslogo'  />
              })
          }
          
        </div>
      </div>
  </div>;
};

export default Skills;
