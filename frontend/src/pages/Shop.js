import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ShopSideNav from "../components/ShopPage/ShopSideNav";
import ProductBanner from "../components/ShopPage/ProductSection/ProductBanner";
import Products from "../components/ShopPage/ProductSection/Products";

const Shop = () => {
    const [hide, setHide] = useState(false)
    // const [itemsPerPage, setItemsPerPage] = useState(12);
    // const itemsPerPageFromBanner = (itemsPerPage) => {
    //     setItemsPerPage(itemsPerPage);
    // };



    return (
        <div className="max-w-container mx-auto px-2">
            <Breadcrumb title="Products" />
            {/* ================= Products Start here =================== */}
            <div className="w-full h-full flex pb-20 gap-2">
                <div className={`${hide ? "w-[0%] " : "lgl:w-[35%]"}  hidden lgl:inline-flex h-full pl-2 pr-6 `}>
                    <ShopSideNav toggleHide={() => setHide(!hide)} hide={hide} />
                </div>
                <div className={`w-full justify-between  ${hide ? "mdl:w-[100%]" : "mdl:w-full"} h-full flex flex-col gap-4`}>
                    <ProductBanner />
                    <Products />

                </div>
            </div>
            {/* ================= Products End here ===================== */}
        </div>
    );
};

export default Shop;
