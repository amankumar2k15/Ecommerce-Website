import React, { useState } from "react";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";
import { useDispatch } from "react-redux";
import { fetchProducts, fetchProductsByCategory } from "../../../store/productSlice";

const Category = () => {
    const dispatch = useDispatch()
    const [showSubCatOne, setShowSubCatOne] = useState(false);
    const items = [
        { title: "Accessories", },
        { title: "Home Appliances\"", icons: true, },
        { title: "Clothes" },
        { title: "Electronics", icons: true, },
        { title: "Jewellery", },
        { title: "All", },
    ]

    const handleCategoryClick = (categoryName) => {
        console.log(categoryName)
        if (categoryName === "All") {
            dispatch(fetchProducts())
        } else {
            dispatch(fetchProductsByCategory(categoryName))
        }
    }

    return (
        <div className="w-full">
            <NavTitle title="Shop by Category" icons={false} />
            <div>
                <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">

                    {items.map((item, index) => (
                        <li key={index} className="border-b-[1px] cursor-pointer border-b-[#F0F0F0]  hover:text-primeColor hover:border-gray-400 pb-2 flex items-center justify-between"
                            onClick={() => handleCategoryClick(item.title)}
                        >
                            {item.title}
                            {item.icons && (
                                <span
                                    onClick={() => setShowSubCatOne(!showSubCatOne)}
                                    className="text-[10px] lg:text-xs cursor-pointer text-gray-400  hover:text-primeColor duration-300"
                                >
                                    <ImPlus />
                                </span>
                            )}
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
};

export default Category;
