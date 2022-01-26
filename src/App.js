import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

/* Componenets */
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import About from "./components/About"
import Education from "./components/Education"
import Work from "./components/Work"
import Skills from "./components/Skills"
import Project from "./components/Project"

import menuicon from './images/menu.svg'

AOS.init({once: true});

function App() {

  return (
   <>
      <Navbar></Navbar>
      <Main />
      <About/>
      <Education />
      <Work />
      <Skills />
      <Project />
      <Footer></Footer> 
   </>
  );
}

export default App;
