import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";
import { useDispatch } from "react-redux";
import { fetchProducts, fetchProductsByBrand } from "../../../store/productSlice";

const Brand = () => {
    const dispatch = useDispatch()
    const [showBrands, setShowBrands] = useState(true);
    const brands = ["Apple", "Samsung", "Canon", "Lewis", "All",];

    const handleBrandClick = (brandName) => {
        if (brandName === "All") {
            dispatch(fetchProducts())
        } else {
            dispatch(fetchProductsByBrand(brandName))
        }

        window.scrollTo({
            top: 100,
            behavior: 'smooth' // Optional: Makes the scrolling smooth
        });

    }

    return (
        <div>
            <div
                onClick={() => setShowBrands(!showBrands)}
                className="cursor-pointer"
            >
                <NavTitle title="Shop by Brand" icons={true} />
            </div>
            {showBrands && (
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
                        {brands.map((item, index) => (
                            <li
                                key={index}
                                className="border-b-[1px] border-b-[#F0F0F0] cursor-pointer pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
                                onClick={() => handleBrandClick(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    );
};

export default Brand;
