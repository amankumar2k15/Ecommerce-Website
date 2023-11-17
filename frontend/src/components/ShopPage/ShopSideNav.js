import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"
import Category from "./ShopBy/Category";
import Color from "./ShopBy/Color";
import Brand from "./ShopBy/Brand";
import Price from "./ShopBy/Price";

const ShopSideNav = ({ hide, toggleHide }) => {
    return (
        <div className="relative w-full">
            <button data-collapse-toggle="navbar-user" type="button"
                className="z-10 absolute cursor-pointer -left-4 -top-9 hidden lgl:inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-white rounded-lg bg-black focus:outline-none dark:text-black-400"
                onClick={toggleHide}
            >
                {
                    hide ?
                        <RxCross2 size={20} />
                        :
                        <GiHamburgerMenu size={20} />
                }
            </button>
            <div className={`${hide ? "absolute transform -translate-x-[250px]" : "translate-x-0 -z-30"}  transition-all duration-700 ease-in-out w-full flex flex-col gap-6`}>
                <Category icons={false} />
                <Color />
                <Brand />
                <Price />
            </div>
        </div>
    );
};

export default ShopSideNav;
