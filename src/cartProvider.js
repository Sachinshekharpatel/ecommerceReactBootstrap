import React, { useEffect,useContext } from "react";
import CartContext from "./createContext";

function CartProvider(props) {
    
    const [cartItem, setCartItem] = React.useState([]);
   
 const purchaseButtonHandler = () => {   
    setCartItem([]);
    alert('Item purchased Thankl you for shopping with us');
 }

    const listofCart = {
        listOfItem: [
            {
              title: "Colors",
              price: 100,
              id:1,
              quantity:1,
              imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
            },
            {
              title: "Black and white Colors",
              price: 50,
              id:2,
              quantity:1,
              imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
            },
        
            {
              title: "Yellow and Black Colors",
              price: 70,
              id:3,
              quantity:1,
              imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
            },
        
            {
              title: "Blue Color",
              price: 100,
              quantity:1,
              id:4,
              imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
            },
          ],
        cartArray: cartItem,
        addItemInCart: (item,id) => {

            if(cartItem.length===0){
                setCartItem([item]);
            }else {
                if(cartItem.map((item) => item.id).includes(id)){
                    setCartItem(cartItem.map((item) => item.id === id ? {...item, quantity: item.quantity + 1} : item));
                }
                else{
                    setCartItem([...cartItem, item]);
                }
            }
           
        },
        removeItemFromCart: (id) => {
            setCartItem(cartItem.filter((item) => item.id !== id));
        },
        purchaseButton:purchaseButtonHandler
    }

    useEffect(() => {
        console.log(listofCart.listOfItem);
    },[listofCart.listOfItem])

    return (
        <CartContext.Provider value={listofCart}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider