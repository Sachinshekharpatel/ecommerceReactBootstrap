import React from "react";
import { Navbar, Container } from "react-bootstrap";

function GenericPart() {
  return (
    <Navbar className="mt-1" expand="lg" style={{ backgroundColor: 'grey', height: '200px' }} variant="dark">
      <Container className="d-flex justify-content-center align-items-center h-100">
        <Navbar.Brand href="#home">
          <h1 className="text-center">The Generics</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default GenericPart;
