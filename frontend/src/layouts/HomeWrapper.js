import React, { useEffect, useState } from 'react'
import PrivateRoutes from '../Routes/Routes';
import Navbar from "../components/Nabvar&Header/Navbar"
import { Route, Routes } from 'react-router-dom';
import Admin from '../pages/Admin/Admin';
import Dashboard from '../pages/Admin/Dashboard';
import Header from '../components/Nabvar&Header/Header';
import SpecialCase from '../components/SpecialCase/SpecialCase';
import Footer from '../components/Footer/Footer';
import FooterBottom from '../components/Footer/FooterBottom';


const HomeWrapper = () => {
    const [admin, setAdmin] = useState(true)

    return (
        <>
            {
                admin ?
                    <>
                        <Navbar />
                        <Header />
                        <SpecialCase />
                        <PrivateRoutes />
                        <Footer />
                        <FooterBottom />
                    </>
                    :
                    <Routes>
                        <Route path="/admin" element={<Admin />}></Route>
                        <Route path="/dashboard" element={<Dashboard />}></Route>
                    </Routes>
            }
        </>
    )
}

export default HomeWrapper