import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function ShowList() {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
      <h1 className="text-align-center" style={{ fontStyle: "italic" }}>Music</h1>

      <div className="d-flex justify-content-center ">
        {productsArr.map((item, index) => {
          return (
            <div className="p-4">
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
              <Col >
                <h3>RS : {item.price}</h3>
                <Button>Add To Cart</Button>
              </Col>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ShowList;
