import React,{useContext, useEffect} from "react";
import { Button, Col,Spinner } from "react-bootstrap";
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
      <h1 className="text-center" style={{ fontStyle: "italic" }}>Music</h1>
      <div className="d-flex justify-content-center ">
        {productList.loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
          <Spinner animation="border" role="status">
            <span className="sr-only"></span>
          </Spinner>
        </div>
         ) : productList.listOfItem.map((item, index) => {
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
              <Col className="text-center" >
                <h3>RS : {item.price}</h3>
                <Button onClick={() =>addToCartHandler(item,item.id) }>Add To Cart</Button>
              </Col>
             
            </div>
          );
        })}
        
      </div>
      <div className="d-flex justify-content-center">
      <Button  variant="success" className="m-3 p-2 text-center" > See The Cart</Button>
      </div>
      <FooterPart></FooterPart>
    </>
  );
}
export default ShowList;
