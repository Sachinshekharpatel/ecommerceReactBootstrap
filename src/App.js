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
import LoginPage from './loginpage';
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
    path: "/:id",
    element: <ProductDetail></ProductDetail>,
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>,
  },

])

 const cartCtx = useContext(CartContext);
  useEffect(() => {
    console.log(cartCtx.idToken);
    console.log(cartCtx.cartArray);
  },[cartCtx.cartArray,cartCtx.idToken])
  return (

    <RouterProvider router={navigation}>
      <div className="App">
        <AboutPage></AboutPage>
      </div>
    </RouterProvider>
  );
}

export default App;
