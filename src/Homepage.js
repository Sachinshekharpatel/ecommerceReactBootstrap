import React from "react";
import Navbarheader from "./Navbarheader";
import FooterPart from "./thegeneric-footer";
import {Nav, Container,Button, Navbar } from "react-bootstrap";
const HomePage = () => {
  return (
    <>
    <h1>HomePage</h1>
      <Navbarheader ></Navbarheader>
        <Navbar  expand="lg" style={{backgroundColor:'grey',alignItems:'center',height:'100px'}} variant='dark'>
        <Container className="d-flex flex-column align-items-center ">
            <Button variant='success'className="mb-3">Get The Latest album</Button>
            <Button variant='warning' className="mb-3">play-button</Button>
        </Container>
       </Navbar>

       
       <Navbar bg="secondary" className="mt-3" data-bs-theme="dark">
        <Container className="justify-content-space-between">
          <Navbar.Brand href="#home">The Generics</Navbar.Brand>
          <Nav className="me-auto">
         
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default HomePage;
