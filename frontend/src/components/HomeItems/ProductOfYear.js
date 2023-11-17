import React from 'react'
import productImg from "../../assets/ProductOfYear/product.webp"
import { Link } from 'react-router-dom'

const ProductOfYear = () => {
    return (
        <div className="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-dm-sans">
            <img
                className="w-full h-full object-cover hidden md:inline-block"
                src={productImg}
                alt="Img"
            />
            <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
                <h1 className="text-3xl font-semibold text-primeColor">
                    Product of The year
                </h1>
                <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
                    cupiditate modi amet! Facilis, aperiam quaerat.
                </p>
                <Link to="/shop">
                    <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
                        Shop Now
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default ProductOfYear