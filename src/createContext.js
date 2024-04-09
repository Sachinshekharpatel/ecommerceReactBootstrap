import React from "react";

const CartContext = React.createContext({

    listOfItem: [],
    cartArray:[],
    addItemInCart: (item) => {},
    removeItemFromCart: () => {},
    cancelRetry: () => {},
});



export default CartContext