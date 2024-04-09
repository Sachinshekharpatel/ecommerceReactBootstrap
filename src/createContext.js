import React from "react";

const CartContext = React.createContext({

    listOfItem: [],
    cartArray:[],
    addItemInCart: (item) => {},
    removeItemFromCart: () => {},
    cancelRetry: () => {},
    addMovieToApihandler: () => {},
});



export default CartContext