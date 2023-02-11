import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import background from './img/webBackground.jpg'
import Header from './components/header';
import { Container } from "react-bootstrap"
import Home from './pages/home'
import Footer from './components/footer'
import MUItext from './components/inputText';
function App() {
  return (
    <><div class='back' style={{ backgroundImage: `url(${background})` }}><Header /><Container
    className="d-flex align-items-center justify-content-center"
    

  >
    <Home/>
    
    </Container>
    <div class='inputText'>
    <MUItext />
    </div>
    <Footer path='/Contacts'/>
    </div>
    </>
  );
}

export default App;
