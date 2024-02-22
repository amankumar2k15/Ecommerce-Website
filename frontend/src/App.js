import React, { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom'
import HomeWrapper from './layouts/HomeWrapper'
import LoginWrapper from './layouts/LoginWrapper';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!location.pathname || location.pathname === "/") {
  //     navigate("/");
  //   }
  // }, [location, navigate]);

  const homeWrapperRoutes = ["", "/", "/shop", "/about", "/contact", "/cart", "/wishlist", "/paymentgateway"];
  const isHomeRoute = location.pathname.startsWith('/singleProduct') || homeWrapperRoutes.includes(location.pathname);

  return (
    <>
      <ToastContainer position='top-right' newestOnTop={true} autoClose={1500} />

      {isHomeRoute ?
        <HomeWrapper />
        :
        <LoginWrapper />
      }
    </>
  )
}

export default App;
