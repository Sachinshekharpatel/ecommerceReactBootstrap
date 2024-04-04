import React from "react";
import { Navbar, Container, Form, Nav } from "react-bootstrap";

const FooterPart = () => {
  return (
    <>
      <Navbar bg="primary" className="mt-3" data-bs-theme="dark">
        <Container className="justify-content-space-between">
          <Navbar.Brand href="#home">The Generics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.youtube.com">
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
                alt="YouTube"
                style={{ width: "30px", height: "30px", marginRight: "5px" }}
              />
              YouTube
            </Nav.Link>
            <Nav.Link href="https://open.spotify.com/">
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png"
                alt="Spotify"
                style={{ width: "30px", height: "30px", marginRight: "5px" }}
              />
              Spotify
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/">
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png"
                alt="Facebook"
                style={{ width: "30px", height: "30px", marginRight: "5px" }}
              />
              Facebook
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default FooterPart;
