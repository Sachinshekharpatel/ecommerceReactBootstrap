import React,{useContext, useEffect} from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import  CartContext from "./createContext";
import Navbarheader from "./Navbarheader";
import FooterPart from "./thegeneric-footer";
function ShowList() {
  const productList = useContext(CartContext);
  
  useEffect(() => {
      console.log(productList.cartArray);
  },[productList.cartArray])

 const addToCartHandler=(item,id)=>{
    productList.addItemInCart(item,id);
  }

  return (
    <>
    <Navbarheader></Navbarheader>
      <h1 className="text-align-center" style={{ fontStyle: "italic" }}>Music</h1>
      <div className="d-flex justify-content-center ">
        {productList.listOfItem.map((item, index) => {
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
                <Button onClick={() =>addToCartHandler(item,item.id) }>Add To Cart</Button>
              </Col>
             
            </div>
          );
        })}
        
      </div>
      <Button  className='mt-4' variant='success' > See The Cart</Button>
      <FooterPart></FooterPart>
    </>
  );
}
export default ShowList;
