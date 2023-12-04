import React from 'react'
import PrivateRoutes from '../routes/PrivateRoutes';
import Navbar from "../components/Nabvar&Header/Navbar"
import Header from '../components/Nabvar&Header/Header';
import SpecialCase from '../components/SpecialCase/SpecialCase';
import Footer from '../components/Footer/Footer';
import FooterBottom from '../components/Footer/FooterBottom';


const HomeWrapper = () => {

    return (
        <>
            <Navbar />
            <Header />
            <SpecialCase />
            <PrivateRoutes />
            <Footer />
            <FooterBottom />
        </>
    )
}

export default HomeWrapper