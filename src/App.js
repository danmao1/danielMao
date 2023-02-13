import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import background from './img/webBackground.jpg'
import Header from './components/header';
import { Container } from "react-bootstrap"
import Home from './pages/home'
import Footer from './components/footer'
import MUItext from './components/inputText';
import RepoCards from "./components/repoCards";


function App() {
  
 
  
  
  return (
    <><div class='back' style={{ backgroundImage: `url(${background})` }}><Header />
    <Container
    className="d-flex align-items-center justify-content-center"
    

  >
    <Home />
    
    </Container>
    </div>
    
    <div id='projects'>
      <p class='subtitle'>PROJECTS</p>
    <RepoCards/>
    <div class='source'>
    <a href='https://github.com/danmao1/danielMao'  target="_blank"  ><button class='source-button' icon='fa fa-download' ><i class='fas fa-code'></i>
    &nbsp;Website Source Code</button></a>
    </div>
    </div>
    
    <Footer id='contact'/>

    
    </>
  );
}

export default App;
