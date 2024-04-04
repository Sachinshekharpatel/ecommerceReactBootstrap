import React from "react";

const CartContext = React.createContext({

    listOfItem: [],
    cartArray:[],
    addItemInCart: (item) => {},
    removeItemFromCart: () => {},
});



export default CartContext