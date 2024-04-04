import React, { useEffect,useContext } from 'react';
import './App.css';
import "./CartModal.css";
import {Button} from 'react-bootstrap';
import ShowList from './List';
import FooterPart from './thegeneric-footer';
import Navbarheader from './Navbarheader';
import AboutPage from './about';
import HomePage from './Homepage';
import CartModal from './cart';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import CartContext from './createContext';
function App() {

const navigation = createBrowserRouter([
  {
    path: "/",
    element: <ShowList></ShowList>,
  },
  {
    path: "aboutpage",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "homepage",
    element: <HomePage></HomePage>,
  },

])

 const cartCtx = useContext(CartContext);
  useEffect(() => {
    console.log(cartCtx.cartArray);
  },[cartCtx.cartArray])
  return (

    <RouterProvider router={navigation}>
      <div className="App">
        <AboutPage></AboutPage>
      </div>
    </RouterProvider>
  );
}

export default App;
