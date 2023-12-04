import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import Contact from '../pages/Contact'
import ErrorPage from './ErrorPage'
import SingleProduct from "../components/ShopPage/SingleProductSection/SingleProduct"
import Cart from '../pages/cart/Cart'
import Wishlist from '../pages/Wishlist'
import Payment from '../pages/payment/Payment'


// import Loader from './loader/Loader'           // Logic for Loader
// import loadable from "@loadable/component"

// const Home = loadable(() => import("./pages/Home"), {
//   fallback: <Loader />
// });

// const Cart = loadable(() => import("./pages/Cart"), {
//   fallback: <Loader />
// })

// const AllProducts = loadable(() => import("./pages/AllProducts"), {
//   fallback: <Loader />,
// });
// const SingleProduct = loadable(() => import("./pages/SingleProduct"), {
//   fallback: <Loader />,
// });
// const Error = loadable(() => import("./loader/Error"), {
//   fallback: <Loader />,
// });


const PrivateRoutes = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])


    return (
        <>
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path='/singleProduct/:id' element={<SingleProduct />} />
                <Route path='/paymentgateway' element={<Payment />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default PrivateRoutes