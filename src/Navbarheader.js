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
            <Link to="/homepage" className="navbar-brand">
              Home
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              Store
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/aboutpage" className="navbar-brand">
              About
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/contactus" className="navbar-brand">
              Contact US
            </Link>
          </Navbar.Brand>
          {cartCtx.idToken === null && (
            <Navbar.Brand>
              <Link to="/login" className="navbar-brand">
                <Button>Login</Button>
              </Link>
            </Navbar.Brand>
          )}
          {cartCtx.idToken !==null && (
            <Navbar.Brand>
            <Link to="/login" className="navbar-brand">
              <Button
                variant="danger"
                onClick={() => {
                  cartCtx.authLogoutHandler();
                }}
              >
                Logout
              </Button>
            </Link>
          </Navbar.Brand>
          )}
          <Button
            onClick={() => {
              cartOpenhandler();
            }}
            style={{ marginLeft: "auto", marginRight: "10px" }}
            className="ml-3 "
          >
            Cart
          </Button>
          <Navbar.Brand className="ml-3">
            Total Product In cart: {totalCartItem}
          </Navbar.Brand>
        </Container>
      </Navbar>

      <GenericPart></GenericPart>
    </>
  );
};

export { Navbarheader as default };
