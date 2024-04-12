import React, { useContext, useRef, useEffect } from "react";
import { Button, Col, Spinner, Form } from "react-bootstrap";
import CartContext from "./createContext";
import Navbarheader from "./Navbarheader";
import FooterPart from "./thegeneric-footer";
import { Link, useNavigate } from "react-router-dom";

function ShowList() {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const productList = useContext(CartContext);
  const titleRef = useRef();
  const OpeningTextRef = useRef();
  const ReleaseDateRef = useRef();
  const PriceRef = useRef();

  useEffect(() => {
    console.log(productList.listOfItem);
    if (cartCtx.idToken === null) {
      navigate("/login");
    }
  }, [productList, productList.loading]);

  const addToCartHandler = async (item, id) => {
    productList.addItemInCart(item, id);
    let email = cartCtx.emailID;
    email = email.replace(/[@.]/g, '');
    // a36e74755e434a5b9f09297beabb5abe if want new api go to browser consle//application/storage/clearsitedata/reload page
    let url = `https://crudcrud.com/api/27cec75a824843b9827e0706d93fab57/carts${email}`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: item.id,
          category: item.category,
          title: item.title,
          description: item.description,
          releaseDate: item.releaseDate,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Data:", data);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelRetryHandler = () => {
    productList.cancelRetry();
  };

  const addMovieButtonHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const OpeningText = OpeningTextRef.current.value;
    const releaseDate = ReleaseDateRef.current.value;
    const price = PriceRef.current.value;
    if (
      title === "" ||
      OpeningText === "" ||
      releaseDate === "" ||
      price === ""
    ) {
      alert("Please enter valid data");
      return;
    }
    const movieData = {
      id: Math.random(),
      category: "movie",
      title: title,
      description: OpeningText,
      releaseDate: releaseDate,
      price: Number(price),
      quantity: Number(1),
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    };
    e.preventDefault();

    productList.addMovieToApi(movieData);
  };

  const deleteMovieHandler = (id) => {
    productList.removeMovieFromList(id);
  };

  const openProductDetailPage = (item) => {
    productList.openProductDetailPage(item);
  };

  return (
    <>
      <Navbarheader></Navbarheader>
      <div className="d-flex justify-content-center mb-3">
        <Form>
          <Form.Group className="mb-3" controlId="formReleaseDate">
            <Form.Label>Title : </Form.Label>
            <Form.Control
              ref={titleRef}
              type="text"
              placeholder="Enter Title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formReleaseDate">
            <Form.Label>Description : </Form.Label>
            <Form.Control
              ref={OpeningTextRef}
              type="text"
              placeholder="Description Text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formReleaseDate">
            <Form.Label>Release Date : </Form.Label>
            <Form.Control
              ref={ReleaseDateRef}
              type="date"
              placeholder="Enter release date"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="priceOfMovie">
            <Form.Label>Price : </Form.Label>
            <Form.Control
              ref={PriceRef}
              type="number"
              placeholder="Enter Price "
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              onClick={addMovieButtonHandler}
              className="text-align-center"
              type="submit"
            >
              Add Product
            </Button>
          </div>
        </Form>
      </div>
      <h1 className="text-center" style={{ fontStyle: "italic" }}>
        Music
      </h1>
      <div className="d-flex flex-wrap justify-content-center ">
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
              <div
                onClick={() => openProductDetailPage(item)}
                key={index}
                className="p-4"
              >
                <Col>
                  <h1>Product {index + 1}</h1>
                  <div className="text-center zoom-out-on-hover">
                    <Link to={`/${item.id}`}>
                      <img
                        style={{ height: "110px", width: "150px" }}
                        src={item.image}
                        alt="Music album"
                        className="img-fluid hover-zoom"
                      />
                    </Link>
                  </div>
                </Col>
                <Col className="text-center">
                  <h3>RS : {item.price}</h3>
                  <Button onClick={() => addToCartHandler(item, item.id)}>
                    Add To Cart
                  </Button>
                  <Button
                    variant="danger"
                    className="m-3 p-2 text-center"
                    onClick={() => deleteMovieHandler(item.id)}
                  >
                    Delete
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
