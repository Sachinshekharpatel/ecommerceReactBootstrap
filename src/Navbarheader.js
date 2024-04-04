import React, { useEffect, useState, useContext } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import GenericPart from "./Thgenericpart";
import CartModal from "./cart";
import CartContext from "./createContext";
import { Link } from "react-router-dom";

const Navbarheader = () => {
  const cartCtx = useContext(CartContext);
  const [cart, setCart] = useState(false);
  const totalCartItem = cartCtx.cartArray.reduce(
    (total, item) => total + item.quantity,
    0
  );
  useEffect(() => {
    console.log(cartCtx.cartArray);
  }, [cartCtx, cart]);
  const cartOpenhandler = () => {
    console.log("inside Cart Handler");
    if (cartCtx.cartArray.length === 0) {
      alert("Cart is Empty");
      return;
    } else {
      setCart(true);
    }
  };

  const cartClosehandler = () => {
    console.log("inside Cart Close Handler");
    setCart(false);
  };

  const purchaseHandler = () => {
    console.log(" Purchase Button Handler");
    setCart(false);
    cartCtx.purchaseButton();
  };
  return (
    <>
      {cart && (
        <CartModal
          cartArray={cartCtx.cartArray}
          cartClosehandler={cartClosehandler}
          purchaseHandler={purchaseHandler}
        ></CartModal>
      )}
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand>
            
            <Link to="/">Store</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/homepage">Home</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/aboutpage">About</Link>
          </Navbar.Brand>
          <Button
            onClick={() => {
              cartOpenhandler();
            }}
            style={{ marginLeft: "50px" }}
          >
            Cart
          </Button>
          <Navbar.Brand href="#home">
            Total Product In cart: {totalCartItem}
          </Navbar.Brand>
        </Container>
      </Navbar>

      <GenericPart></GenericPart>
    </>
  );
};

export { Navbarheader as default };
