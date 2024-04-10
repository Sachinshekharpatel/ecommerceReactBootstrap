import React, { useContext, useEffect } from "react";
import Navbarheader from "./Navbarheader";
import CartContext from "./createContext";
import Button from "react-bootstrap/Button";
const ProductDetail = () => {
  const cartCtx = useContext(CartContext);
  const itemToBeDisplayed = cartCtx.itemDetailForProductDetail;

  useEffect(() => {
    console.log(cartCtx.itemDetailForProductDetail[0]);
  }, [cartCtx]);

  return (
    <>
      <Navbarheader />
      <div className="container my-5">
        <h1 className="text-center mb-4">Product Details</h1>
        <div className="row justify-content-center">
          {itemToBeDisplayed.map((item) => (
            <div className="col-md-6 mb-4 justify-content-center text-center d-flex" key={item.id}>
              <div className="card text-align-center p-3 ">
                <img
                  style={{paddingLeft:'60px',paddingRight:'60px', height: "200px", width: "auto",textAlign:'center' }}
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text font-weight-bold">
                    Price: ${item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {itemToBeDisplayed.length === 0 ? (
          <h1 className="text-center">No Products Found</h1>
        ) : (
          <>
            <div className="text-center">
              <Button variant="success" className="m-3 p-2 text-center ">

              {" "}
              Add To The Cart
            </Button>
            </div>
            <div className="row mt-5">
              <div className="col-md-6 offset-md-3">
                <h2 className="mb-3">Customer Reviews</h2>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-success">Good Product </h5>
                    <p className="card-text">
                      "Great Product ! Superb quality, stylish design, and
                      comfortable fit. Definitely worth the purchase. Would give
                      it 4 stars!"
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Name : Sachin Patel</small>
                    </p>
                  </div>
                </div>
                <div className="card mt-3">
                  <div className="card-body">
                    <h5 className="card-title text-success">Great Product</h5>
                    <p className="card-text">
                      This Product exceeded my expectations! The material is
                      top-notch, and the attention to detail is impressive. It's
                      both functional and fashionable. Deserves every bit of its
                      5-star rating!"
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Name : Shekhar</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
