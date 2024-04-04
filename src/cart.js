import React,{useContext, useEffect} from "react";
import { Button, Table } from "react-bootstrap";
import "./CartModal.css"; 


const CartModal = (props) => {

  const cartArrayCtx = props.cartArray;

   useEffect(() => {
    console.log(cartArrayCtx);
   },[cartArrayCtx])

  return (
    <>   
    <pre>{ console.log(cartArrayCtx)}</pre>
      <div className="modal-overlay" onClick={props.cartClosehandler}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <div className="cart-modal">
              <Table striped bordered hover className="cart-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                 
                  {cartArrayCtx.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.imageUrl}
                          style={{ width: "30px", height: "30px" }}
                          alt={item.title}
                        />
                        {item.title}
                      </td>
                      <td>{item.price}</td>
                      <td>
                        {item.quantity}
                        <Button variant="danger" className="ms-4">
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <h1 className="cart-heading" style={{ marginTop: "20px",backgroundColor:'#f2f2f2',padding:'10px' }}>Total Price: Rs {cartArrayCtx.reduce((total, item) => total + item.price*item.quantity , 0)}</h1>
              <Button
                onClick={props.cartClosehandler}
                variant="danger"
                className="close-button"
              >
                Close
              </Button>
              <Button
                onClick={props.purchaseHandler}
                variant="primary"
                className="close-button"
              >
                Purchase
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
