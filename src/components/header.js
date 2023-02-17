import React, {useState } from "react";

import { Link, animateScroll as scroll } from "react-scroll";
import dm from '../img/logo.png';

export default function Navbar() {
  
  
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  // const [isNavExpanded, setIsNavExpanded] = useState(false);
  // const burgerExpand = () =>{
  //   if (isNavExpanded){
  //     setIsNavExpanded(!isNavExpanded);
  //   }
  // }


  
  return (
      <nav className="navigation" id="navbar">
        <img
            src={dm}
            className="nav-logo"
            alt="Logo"
            onClick={scrollToTop}
          />
        
        {/* <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <i class="fa-solid fa-bars"></i>
      </button>
        
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                onClick={() => {
                  burgerExpand();
                  scrollToTop();
                }}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                onClick={() => {
                  burgerExpand();
                }}
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                PROJECTS
              </Link>
            </li>
            
            
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  burgerExpand();
                }}
              >
                CONTACT
              </Link>
            </li>

           
          </ul>
        </div> */}
      </nav>
    );
}




// import React,{useRef} from 'react';
// import { Link } from "react-scroll";
// import 'bootstrap/dist/js/bootstrap.bundle';

// const Header = () => {
  

//   return (

//     <nav class ='header' className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
//         <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="navbar-collapse collapse" id="navbar">
//         <ul class="navbar-nav">
//             <li  class="nav-item"><Link 
//                 activeClass="active"
//                 to="section1"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >&nbsp;ABOUT </Link></li>
//             <li  class="nav-item"><a href="/Contacts" class="nav-link"> &nbsp;Contact</a></li>
//         </ul>
//     </div>
//     </nav>
//   );
// };

// export default Header;