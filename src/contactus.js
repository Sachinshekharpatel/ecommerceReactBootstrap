import React, { useRef } from "react";
import Navbarheader from "./Navbarheader";
import { Button, Form } from "react-bootstrap";
const ContactUs = () => {
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();


    const submitButtonHandler = (e) => {
      e.preventDefault();
      const name = nameRef.current.value;
      const phone = phoneRef.current.value;
      const email = emailRef.current.value;
      if( name === "" ||  phone === "" ||  email === "" ){
        alert("Please enter valid data");
        return;
      }
      const contactData = {
        id: Math.random(),
        name: name,
        phone: phone,
        email: email
      };
      e.preventDefault();
      console.log(contactData);
      //i can write logic about post method here but i dont know in which url i have to send that data if isend data in previos product url they will also be displayed in store page
      nameRef.current.value = "";
      phoneRef.current.value = "";
      emailRef.current.value = "";
    }
  return (
    <>
      <Navbarheader></Navbarheader>
      <h1 className="text-center mt-5" style={{ color: 'grey' }}>Contact Us</h1>
      <Form className="d-flex flex-column align-items-center">
        <label>UserName :</label>
        <input type="text" ref={nameRef} placeholder="Name" />

        <label>Phone :</label>
        <input type="number" ref={phoneRef} placeholder="Phone number" />

        <label>Email :</label>
        <input type="email" ref={emailRef} placeholder="Email" />
        <Button
          className="mt-3"
          onClick={submitButtonHandler}
          variant="primary"
          type="submit"
        >
          {" "}
          Submit
        </Button>
      </Form>
    </>
  );
};
export default ContactUs;
