import * as React from 'react';
import Box from '@mui/material/Box';



const TITLE="Daniel Mao";
const hobbies=" I am a multicultural individual who was born and raised in Spain, but with roots from Asia, specifically China. Growing up, I have lived and received education in three different countries, giving me the opportunity to experience and embrace diverse cultures. My background has shaped me into a well-rounded and adaptable person who can effortlessly navigate through different environments and communicate with individuals from various backgrounds. This unique upbringing has allowed me to gain valuable insights and perspectives that I believe will be invaluable in my personal and professional growth.";

export default function BoxSx() {
  return (
    <Box
      className='box'
      sx={{
        width: 'auto',
        height: 'auto',
        backgroundColor: 'transparent',
        margin: 10,
      
        
      }}
    >
        <div class='txt'>
          
        <p class="title"> {TITLE}</p>
        <p class='me'>I am a highly motivated and enthusiastic <b>Computer Science major </b>with a strong background in data structures, algorithms, and machine learning. I am currently working as a <b>Machine Learning Researcher</b>, where I am investigating the impact of machine learning on data privacy and contributing to meaningful projects. I am also eager to expand my technical skills through personal projects in areas such as <b>software and web development</b>, and I am committed to making a positive impact in the field of technology.</p>
        <p class='me'>{hobbies}</p>
        </div>
        <div class='social'> 
        
        <a href='https://www.linkedin.com/in/daniel-mao-44826019b/' target="_blank"  >
        <i class="fa-brands fa-linkedin fa-2x" style={{color:'white'}}></i>
        </a>
        <a href='https://github.com/danmao1' target="_blank"  >
        <i class="fa-brands fa-square-github fa-2x" style={{color:'white',marginLeft:'0.5em'}}></i>
        </a>
        </div>
        <div class='resume' >
          <div>
          <p class='me' style={{fontWeight: 'bold'}}>Resume:</p>
          </div>
          <div class='resume-buttons'>
            <a href='DanielMao_resume.pdf' target="_blank"  ><button class='resume-button' ><i class="fa-regular fa-file-pdf"></i> 
            &nbsp;Preview</button></a>
        

            <a href='DanielMao_resume.pdf' download='DanielMao_resume.pdf'   ><button class='resume-button' ><i class="fa-solid fa-download"></i> 
            &nbsp;Download</button></a>
            </div>
        </div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
        
    </Box>
  );
}