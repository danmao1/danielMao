import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-white text-lg-left'>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            
      <div class='foot'>
       <div class='contact' id='tog'>
       <p class='p1'><b>Personal email:</b> daniel7-d@hotmail.com</p>          
       <p class='p2'><b>School email:</b> daniel.mao@slu.edu </p>                
       <p class='p3'><b>Phone Number:</b> +1 314-898-(8195)</p>
       </div>

       <div class='footerIcons' id='tog'>
           <a href="https://www.linkedin.com/in/daniel-mao-44826019b/" target="_blank" rel="noreferrer"
         className="linkedin">
           <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{color:'white'}}/>
           </a>
          
          
           <a href="https://github.com/danmao1" target="_blank" rel="noreferrer"
           className="github">
           <FontAwesomeIcon icon={faGithub} size="2x" style={{color:'white'}} />
           </a>
         </div>
        </div>
          </MDBRow>
        </form>
      </MDBContainer>

      
    </MDBFooter>
  );
}




// import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLinkedinIn,
//   faGithub
// } from "@fortawesome/free-brands-svg-icons";

// const Footer = () => {
//   return (

    
//     <div class='footer'>
//       <p>Contacts:</p>
//       <div class='contact'>
//       <p class='p1'>Personal email: daniel7-d@hotmail.com</p>          
//       <p class='p2'>School email: daniel.mao@slu.edu </p>                
//       <p class='p3'>Phone Number: +1 314-898-(8195)</p>
//       </div>
//       <div class='footerIcons'>
//           <a href="" target="_blank" rel="noreferrer"
//         className="linkedin">
//           <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{color:'white'}}/>
//           </a>
          
          
//           <a href="" target="_blank" rel="noreferrer"
//           className="github">
//           <FontAwesomeIcon icon={faGithub} size="2x" style={{color:'white'}} />
//           </a>
//         </div>
//       </div>
//   );
// }
// export default Footer;


