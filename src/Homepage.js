import React from "react";
import Navbarheader from "./Navbarheader";
import FooterPart from "./thegeneric-footer";
import {Nav, Container,Button, Navbar } from "react-bootstrap";
const HomePage = () => {
  const array = [{
    date:'Jul 16',
    place:'Detroit,MI',
    about:'DTE ENERGY MUSIC Theater'
  },
  {
    date:'Jul 19',
    place:'Toranto ON',
    about:'Budweiser stage'
  },
  {
    date:'JUl 22',
    place:'Bristow,VA',
    about:'Jiggle Lube Live'
  }
  ,
  {
    date:'JUL 29',
    place:'Phoenix,AZ',
    about:'Ak- chin pavillion'
  }

  ,
  {
    date:'AUG 2',
    place:'LAs Vegas,NV',
    about:'T-Mobile Arena '
  }

  ,
  {
    date:'AUG 7',
    place:'Concord,CA',
    about:'Concord pavillion'
  }
]

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
       <div className="mt-3 mb-3 ">

        {array.map((item)=>{
          return(
            <div key={item.date} className="d-flex p-3 justify-content-between mb-3 border-bottom border-dark">
                <h1 >{item.date}</h1>
                <h1 style={{color:'grey'}}>{item.place}</h1>
                <h1 style={{color:'grey'}}>{item.about}</h1>
              <Button variant="primary" >But The Ticket</Button>
            </div>
          )
        })}
       </div>
       
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
