import React from "react";
import NavTitle from "./NavTitle";
import { useDispatch } from "react-redux";
import { fetchProductsByPriceRange } from "../../../store/productSlice";

const Price = () => {
    const dispatch = useDispatch()
    const priceList = [
        { priceOne: 200.0, priceTwo: 399.99, },
        { priceOne: 400.0, priceTwo: 599.99, },
        { priceOne: 600.0, priceTwo: 1000.0, },
        { priceOne: 1000.0, priceTwo: 1500.0, },
        { priceOne: 1500.0, priceTwo: 2000.0, },
    ];


    const handlePriceRangeClick = (priceOne, priceTwo) => {
        dispatch(fetchProductsByPriceRange({ minPrice: priceOne, maxPrice: priceTwo }));

        window.scrollTo({
            top: 100,
            behavior: 'smooth' // Optional: Makes the scrolling smooth
        });

    }

    return (
        <div>
            <NavTitle title="Shop by Price" icons={false} />
            <div className="font-titleFont">
                <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">

                    {priceList.map((item, index) => (
                        <li key={index} className="border-b-[1px] cursor-pointer border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
                            onClick={() => handlePriceRangeClick(item.priceOne, item.priceTwo)}
                        >
                            ${item.priceOne.toFixed(2)} - ${item.priceTwo.toFixed(2)}
                        </li>
                    ))}

                </ul>
            </div>
        </div >
    );
};

export default Price;
