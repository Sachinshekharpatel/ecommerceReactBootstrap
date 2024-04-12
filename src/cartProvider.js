import React, { useEffect, useContext, useState } from "react";
import CartContext from "./createContext";

function CartProvider(props) {
 
  const [cartItem, setCartItem] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
 const [productDetail,setProductDetail] = useState([]);
 const idTokenInLocalStorage = localStorage.getItem("idToken") || null;
 const [idToken ,setIdToken] = useState(idTokenInLocalStorage);
  const purchaseButtonHandler = () => {
    setCartItem([]);
    alert("Item purchased Thank you for shopping with us");
  };

  const cancelRetry = () => {
    console.log("cancel");
    setLoading(false);
    setApiData([...apiData]);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setLoading(false);
        setApiData(
          data.map((item) => {
            return {
              id: item.id,
              title: item.title,
              price: item.price,
              description: item.description,
              category: item.category,
              image: item.image,
              quantity: 1,
            };
          })
        );
      } catch (error) {
        setErrorMessage("Something went wrong...Retrying");
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(apiData);
  }, [loading]);

  const listofCart = {
    listOfItemZero: apiData,
    listOfItem: apiData,
    cartArray: cartItem,
    addMovieToApi: (movieDetails) => {
        console.log('added movie', JSON.stringify(movieDetails))
        const movie = JSON.stringify(movieDetails)
      const fetchnewMovie = async () => {
        try {
          const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: movie,
          });
          if (!response.ok) {
            throw new Error("Something went wrong");
          }
          const data = await response.json();
          const  data1 = {...data,quantity:1}
          console.log(data1);
          setApiData([...apiData, data1]);
        } catch (error) {}
      };
      fetchnewMovie();
    },
    addItemInCart: (item, id) => {
      if (cartItem.length === 0) {
        setCartItem([item]);
      } else {
        if (cartItem.map((item) => item.id).includes(id)) {
          setCartItem(
            cartItem.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
          );
        } else {
          setCartItem([...cartItem, item]);
        }
      }
    },
    removeMovieFromList: (idToDelete) => {
        const deleteMovie = async (idToDelete) => {
            try {
              const response = await fetch(`https://fakestoreapi.com/products/${idToDelete}`, {
                method: "DELETE",
              });
              if (!response.ok) {
                throw new Error("Failed to delete movie");
              }
              console.log("Movie deleted successfully");
              setApiData(apiData.filter((movie) => movie.id !== idToDelete));
            } catch (error) {
              console.error("Error deleting movie:", error);
            }
          };
          
          deleteMovie(idToDelete);
    },
    removeItemFromCart: (id) => {
      setCartItem(cartItem.filter((item) => item.id !== id));
    },
    purchaseButton: purchaseButtonHandler,
    loading: loading,
    errorMessage: errorMessage,
    cancelRetry: cancelRetry,
    itemDetailForProductDetail: productDetail,
    openProductDetailPage: (item) => {
      const array = [item]
      setProductDetail(array);
    },
    idToken : idToken,
    authLoginHandler: (idToken) => {
      setIdToken(idToken);
      console.log("idToken", idToken,'inside Authctxlofg=ginhandler');
      localStorage.setItem("idToken", idToken);
      
    }
  };

  useEffect(() => {
    console.log(listofCart.listOfItem);
  }, [listofCart.listOfItem]);

  return (
    <CartContext.Provider value={listofCart}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartProvider;
