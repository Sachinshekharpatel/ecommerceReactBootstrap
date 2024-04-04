import React,{useEffect,useState} from "react";
import {Button, Container, Navbar} from 'react-bootstrap';
import GenericPart from "./Thgenericpart";
import CartModal from "./cart";


const Navbarheader = () => {
  
  const [cart, setCart] = useState(false);
  
  useEffect(() => {
    console.log('inside use effect');
  },[cart])
  const cartOpenhandler=()=>{
       console.log('inside Cart Handler');    
       setCart(true);
   }
   
   const cartClosehandler=()=>{
    console.log('inside Cart Close Handler');    
    setCart(false);
}

const purchaseHandler=()=>{
  console.log('inside Cart Close Handler');    
  setCart(false);
  alert('Item purchased Thankl you for shopping with us');
}
    return (
     <>
       {cart && <CartModal cartClosehandler={cartClosehandler} purchaseHandler={purchaseHandler}></CartModal>}
      <Navbar expand="lg" bg='dark' variant='dark' fixed="top">
                <Container>
                <Navbar.Brand href="C:\Users\Sachin Shekhar\Downloads\ecommerce-bootstrap\ecommerce\src\about.js">Home</Navbar.Brand>
                <Navbar.Brand href="#home">Store</Navbar.Brand>
                <Navbar.Brand href="#home">About</Navbar.Brand> 
                <Button onClick={() => {cartOpenhandler()}} style={{marginLeft:'50px'}}>Cart</Button>
                <Navbar.Brand href="#home">Total Product In cart: 0</Navbar.Brand>
                </Container>
       </Navbar>
      
       <GenericPart></GenericPart>
      
</>
    )
}

export { Navbarheader as default };