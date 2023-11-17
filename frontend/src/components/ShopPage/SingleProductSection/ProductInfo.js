import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";
import { Link } from "react-router-dom";


const ProductInfo = ({ productInfo }) => {
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-semibold">{productInfo?.title}</h2>
            <p className="text-xl font-semibold">${productInfo?.price}</p>
            <p className="text-base text-gray-600">{productInfo?.des}</p>
            <p className="text-sm">Be the first to leave a review.</p>
            <p className="font-medium text-lg">
                <span className="font-normal">Brand:</span> {productInfo?.brand}
            </p>

            <Link to="/cart"
                onClick={() => dispatch(addToCart(productInfo))}
                className="w-full py-4 bg-primeColor hover:bg-black text-center duration-300 text-white text-lg font-titleFont"
            >
                Add to Cart
            </Link>
            <p className="font-normal text-sm">
                <span className="text-base font-medium"> Category:</span> {productInfo?.categoryName}
            </p>
        </div>
    );
};

export default ProductInfo;
