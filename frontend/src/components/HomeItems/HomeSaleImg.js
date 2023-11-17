import React from 'react'
import saleImg1 from "../../assets/saleImg/saleImg1.webp"
import saleImg2 from "../../assets/saleImg/saleImg2.webp"
import saleImg3 from "../../assets/saleImg/saleImg3.webp"
import { Link } from 'react-router-dom'

const HomeSaleImg = () => {
    return (
        <div className='flex flex-col md:flex-row gap-9 py-16 max-w-container justify-between '>
            <Link to="/shop">
                <div>
                    <img className='object-cover cursor-pointer' src={saleImg1} alt='Img1' />
                </div>
            </Link>
            <Link to="/shop">
                <div className=' flex justify-between flex-col gap-5 md:gap-0'>
                    <img className='object-cover cursor-pointer' src={saleImg3} alt='Img3' />
                    <img className='object-cover cursor-pointer' src={saleImg2} alt='Img2' />
                </div>
            </Link>
        </div>
    )
}

export default HomeSaleImg