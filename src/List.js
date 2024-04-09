import React, { useContext,useRef, useEffect } from "react";
import { Button, Col, Spinner, Form } from "react-bootstrap";
import CartContext from "./createContext";
import Navbarheader from "./Navbarheader";
import FooterPart from "./thegeneric-footer";
function ShowList() {
  const productList = useContext(CartContext);

const titleRef = useRef();
const OpeningTextRef = useRef();
const ReleaseDateRef = useRef();

  useEffect(() => {
    console.log(productList.listOfItem);
  }, [productList, productList.loading]);

  const addToCartHandler = (item, id) => {
    productList.addItemInCart(item, id);
  };

  const cancelRetryHandler = () => {
    productList.cancelRetry();
  };

  const addMovieButtonHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const OpeningText = OpeningTextRef.current.value;
    const releaseDate = ReleaseDateRef.current.value;
    if (title === "" || OpeningText === "" || releaseDate === "") {
      alert("Please enter valid data");
      return;
    }
    const movieData = {
      title: title,
      OpeningText: OpeningText,
      releaseDate: releaseDate,
    }
    e.preventDefault();
    console.log("Add Movie Button Handler",movieData);
  }
  return (
    <>
      <Navbarheader></Navbarheader>
      <div className="d-flex justify-content-center mb-3">
        <Form>
          <Form.Group className="mb-3" controlId="formReleaseDate">
            <Form.Label>Title : </Form.Label>
            <Form.Control ref={titleRef} type="text" placeholder="Enter release date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formReleaseDate">
            <Form.Label>Opening Text  : </Form.Label>
            <Form.Control ref={OpeningTextRef} type="text" placeholder="Opening Text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formReleaseDate">
            <Form.Label>Release Date : </Form.Label>
            <Form.Control ref={ReleaseDateRef} type="date" placeholder="Enter release date" />
          </Form.Group>
          <div className="d-flex justify-content-center">
          <Button variant="primary" onClick={addMovieButtonHandler} className="text-align-center" type="submit">
            Add Movie
          </Button>
          </div>
        </Form>
      </div>
      <h1 className="text-center" style={{ fontStyle: "italic" }}>
        Music
      </h1>
      <div className="d-flex justify-content-center ">
        {productList.loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "200px" }}
          >
            <Spinner animation="border" role="status">
              <span className="sr-only"></span>
            </Spinner>
            <Button
              onClick={() => cancelRetryHandler()}
              variant="danger"
              className="m-3 p-2 text-center"
            >
              Cancel Retrying
            </Button>
          </div>
        ) : (
          productList.listOfItem.map((item, index) => {
            return (
              <div key={index} className="p-4">
                <Col>
                  <h1>Album {index + 1}</h1>
                  <div className="zoom-out-on-hover">
                    <img
                      src={item.imageUrl}
                      alt="Music album"
                      className="img-fluid hover-zoom"
                    />
                  </div>
                </Col>
                <Col className="text-center">
                  <h3>RS : {item.price}</h3>
                  <Button onClick={() => addToCartHandler(item, item.id)}>
                    Add To Cart
                  </Button>
                </Col>
              </div>
            );
          })
        )}
        {!productList.loading && productList.listOfItem.length === 0 && (
          <h1>No Item Found</h1>
        )}
      </div>
      <div className="d-flex justify-content-center">
        <Button variant="success" className="m-3 p-2 text-center">
          {" "}
          See The Cart
        </Button>
      </div>
      <FooterPart></FooterPart>
    </>
  );
}
export default ShowList;
