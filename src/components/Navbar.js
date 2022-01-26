import React from "react";
import menuicon from '../images/menu.svg'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
    
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  mb-3 bg-darkblack" id='navbar'>
        <div className="container px-4 lg:mx-12 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none "
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img src={menuicon} alt="" className="h-8"/>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none " id="navitems">
              <li className="nav-item">
                <a
                  className="px-3 py-2 mx-3 flex items-center text-sm font-bold uppercase leading-snug text-white hover:text-themeviolet"
                  href="#aboutnav"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex mx-3  items-center text-sm font-bold uppercase leading-snug text-white hover:text-themeviolet"
                  href="#educationnav"
                >
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex mx-3  items-center text-sm font-bold uppercase leading-snug text-white hover:text-themeviolet"
                  href="#worknav"
                >
                Work Experience
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex mx-3  items-center text-sm font-bold uppercase leading-snug text-white hover:text-themeviolet"
                  href="#skillsnav"
                >
                Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex mx-3  items-center text-sm font-bold uppercase leading-snug text-white hover:text-themeviolet"
                  href="#projectnav"
                >
                Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}