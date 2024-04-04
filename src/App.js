import React, { useEffect,useContext } from 'react';
import './App.css';
import "./CartModal.css";
import {Button} from 'react-bootstrap';
import ShowList from './List';
import FooterPart from './thegeneric-footer';
import Navbarheader from './Navbarheader';
import AboutPage from './about';
import HomePage from './Homepage';
import CartModal from './cart';
import CartContext from './createContext';
function App() {
 const cartCtx = useContext(CartContext);
  useEffect(() => {
    console.log(cartCtx.cartArray);
  },[cartCtx.cartArray])
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
