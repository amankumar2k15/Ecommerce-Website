import React from "react";
import ProductOnSale from "./ProductOnSale";
import ProductInfo from "./ProductInfo"
import Breadcrumbs from "../../Breadcrumb/Breadcrumb";
import { useSelector } from "react-redux";
import { SERVER_URL } from "../../../constants";

const SingleProduct = () => {
    const reduxProduct = useSelector((state) => state.product.selectedProduct)
    console.log(reduxProduct)


    return (
        <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
            <div className="max-w-container mx-auto px-4">
                <div className="xl:-mt-10 -mt-7">
                    <Breadcrumbs title="" />
                </div>

                <div key={reduxProduct?._id} className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-white p-4">
                    <div className="h-full">
                        <ProductOnSale />
                    </div>
                    <div className="h-full xl:col-span-2 flex justify-center items-center">
                        <img
                            className="w-full rounded-[50%]object-cover"
                            src={`${SERVER_URL}/${reduxProduct?.avatar.replace(/\\/g, '/')}`}
                            alt="imgProduct"
                        />
                    </div>
                    <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
                        <ProductInfo productInfo={reduxProduct} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleProduct;
