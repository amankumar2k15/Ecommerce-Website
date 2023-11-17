import React from 'react'
import Carousal from '../components/Carousal/Carousal'
import HomeSaleImg from '../components/HomeItems/HomeSaleImg'
import { BiSolidTruck } from "react-icons/bi"
import { GiReturnArrow } from "react-icons/gi"
import NewArrivals from '../components/HomeItems/NewArrivals'
import ProductOfYear from '../components/HomeItems/ProductOfYear'
import OurBestSellers from '../components/HomeItems/OurBestSellers'
import SpecialOffers from '../components/HomeItems/SpecialOffers'





const Home = () => {
    return (
        <section>
            {/* --------------------------Carousal Component------------------------- */}
            <Carousal />
            {/* --------------------------Carousal Component------------------------- */}

            <div className=' flex-col py-2 gap-2 md:gap-0 flex-wrap  md:py-10 md:flex-row justify-between items-center border flex border-b-[#2303] '>
                <div className=' px-2 md:px-6 py-1 shadow-testShadow hover:shadow-black flex flex-row gap-4 items-center'>
                    <span className='font-bold'>2</span>
                    <p className='text-textGray'>Two years warranty</p>
                </div>
                <div className=' px-2 md:px-6 py-1 shadow-testShadow hover:shadow-black flex flex-row gap-4 items-center'>
                    <BiSolidTruck />
                    <p className='text-textGray'>Free shipping</p>
                </div>
                <div className=' px-2 md:px-6 py-1 shadow-testShadow hover:shadow-black flex flex-row gap-4 items-center'>
                    <GiReturnArrow />
                    <p className='text-textGray'>Return policy in 30 days</p>
                </div>
            </div>

            <HomeSaleImg />
            <NewArrivals />
            <OurBestSellers />
            <ProductOfYear />
            <SpecialOffers />

        </section>
    )
}

export default Home