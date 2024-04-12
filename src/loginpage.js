import React, { useRef,useContext } from "react";
import Navbarheader from "./Navbarheader";
import { Button, Form } from "react-bootstrap";
import CartContext from "./createContext";
import {useNavigate} from 'react-router-dom';
const LoginPage = ()=> {
  const history = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cartCtx = useContext(CartContext);
  const handleLogin =  (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log("Login button clicked");
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFjPtZRv42asMyN8Ts4xm18_mYVEaJACA";
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response)=>{
        if(response.ok){
          return response.json();
        }else {
            const data_1 = response.json();
            let errorMessage = "Authentication failed!";
            if (data_1 && data_1.error && data_1.error.message) {
              errorMessage = data_1.error.message;
            }
            throw new Error(errorMessage);
          }
      }).then((data) => {
        console.log(data);
        cartCtx.authLoginHandler(data.idToken);
        history("/");
        //here AUTHENTICATION IS SUCCESSFULLY DONE IF WE NEED TO WRITE LOG IN CONTEXT API
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      <Navbarheader></Navbarheader>
      <Form className="d-flex flex-column align-items-center mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Enter password :</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Enter password"
            required
          />
        </Form.Group>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </>
  );
}

export default LoginPage;
