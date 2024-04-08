import React, { useEffect,useContext,useState } from "react";
import CartContext from "./createContext";

function CartProvider(props) {
    
    const [cartItem, setCartItem] = useState([]);
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
 const purchaseButtonHandler = () => {   
    setCartItem([]);
    alert('Item purchased Thankl you for shopping with us');
 }


useEffect(() => {

    async function fetchData(){
       try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setLoading(false);
         setApiData(data.slice(0,6).map((item) => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                description: item.description,
                category: item.category,
                image: item.image,
                quantity: 1
            }
         }))
       } catch (error) {
         console.log(error);
       }
    }

    fetchData()
},[])

    const listofCart = {
        listOfItem: apiData,
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
        purchaseButton:purchaseButtonHandler,
        loading:loading,
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