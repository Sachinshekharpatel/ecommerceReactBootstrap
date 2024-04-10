import React, { useEffect,useContext } from 'react';
import './App.css';
import "./CartModal.css";
import ShowList from './List';
import AboutPage from './about';
import HomePage from './Homepage';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import CartContext from './createContext';
import ContactUs from './contactus';
import ProductDetail from './productDetail';
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
  {
    path: "contactus",
    element: <ContactUs></ContactUs>,
  },
  {
    path: "/productdetail",
    element: <ProductDetail></ProductDetail>,
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
