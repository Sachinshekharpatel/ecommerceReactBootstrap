import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import ShowList from './List';
import FooterPart from './thegeneric-footer';
import Navbarheader from './Navbarheader';
import AboutPage from './about';
import HomePage from './Homepage';
function App() {
  return (
    <div className="App">
      <Navbarheader></Navbarheader>
      <ShowList></ShowList>
      <Button  className='mt-4' variant='success' > See The Cart</Button>
      {/* <AboutPage></AboutPage> */}
      {/* <HomePage></HomePage> */}
      <FooterPart></FooterPart>
    </div>
  );
}

export default App;
