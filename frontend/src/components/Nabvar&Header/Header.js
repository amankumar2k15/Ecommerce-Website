import React from 'react'
import { useState } from 'react'
import { FaGripLines, FaSearch, FaShoppingCart } from "react-icons/fa"
import { BsPersonFillDown } from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, fetchProductsByCategory, searchProducts } from '../../store/productSlice'


const Header = () => {
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = useState("")
    const [details1, setDetails1] = useState(false)
    const [details2, setDetails2] = useState(false)

    const product = useSelector((state) => state.cart.items)

    const menuItems = [
        { title: "Accessories", },
        { title: "Home Appliances" },
        { title: "Clothes" },
        { title: "Electronics" },
        { title: "Jewellery", },
        { title: "All", },

    ]

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(searchProducts(searchQuery))
        setSearchQuery("")
    }

    return (
        <section className='w-full bg-[#f5f5f3] mt-20 py-6 flex flex-col flex-wrap gap-4 sm:gap-4 lg:gap-2 sm:flex-row sm:items-center font-dm-sans px-5 justify-between'>
            <div className='flex relative flex-row gap-2 items-center' onClick={() => setDetails1(!details1)}>
                <FaGripLines className='cursor-pointer' size={15} />
                <div className={` absolute top-32 left-0 right-0 w-full z-20  ${details1 ? "block" : "hidden"} `}>
                    {details1 && (
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >

                            <ul className='flex bg-primeColor font-semibold text-md px-2 z-50 py-4 w-[220px] leading-tight flex-col gap-4 lg:text-base text-[#767676]'>
                                {menuItems.map((item, index) => {
                                    return (
                                        <li key={index} className='hover:border-b-[1px] px-4 text-md border-b-[1px] border-b-[#767676] hover:border-b-[#F0F0F0] pb-2  items-center gap-2  hover:border-gray-400 hover:text-white duration-300'
                                        >
                                            <Link to="/shop">
                                                {item.title}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </div>

            <div className='text-sm'>Shop By Category</div>

            {/*--------------------middle section start-------------- */}
            <div className='w-full sm:w-[650px]'>
                <>
                    {/* Hello world */}
                    <form >
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-black sr-only ">
                            Search
                        </label>
                        <div className="relative">
                            <input type="search" className="block w-full p-4 pl-10 text-sm rounded-lg border-none outline-none" placeholder="Search your products here"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type="submit"
                                className="text-black absolute right-2.5 bottom-2.5 0 font-medium rounded-lg text-sm px-4 py-2 "
                                onClick={handleSearchSubmit}
                            >
                                <FaSearch size={20} />
                            </button>

                        </div>
                    </form>
                </>
            </div>
            {/*--------------------middle section end-------------- */}


            {/*--------------------last section start-------------- */}
            <div className='flex flex-row gap-3 pr-10 cursor-pointer'>
                <div className='relative z-20' onClick={() => setDetails2(!details2)}>
                    <BsPersonFillDown className='' size={22} />
                    <div className={` absolute top-10 left-0 right-0 w-full ${details2 ? "block" : "hidden"} `}>

                        {details2 && (
                            <motion.div
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <ul className='flex bg-[#262626] px-2 py-1 w-[80px] flex-col gap-4 text-sm lg:text-base text-[#767676]'>
                                    <Link to="/login" className='hover:border-b-[1px] border-b-[1px] border-b-[#767676] hover:border-b-[#F0F0F0] pb-2 flex items-center gap-2  hover:border-gray-400 hover:text-white duration-300' >Login</Link>
                                    <Link to="/register" className='hover:border-b-[1px] border-b-[1px] border-b-[#767676] hover:border-b-[#F0F0F0] pb-2 flex items-center gap-2  hover:border-gray-400 hover:text-white duration-300' >Register</Link>
                                    <Link to="/profile" className='hover:border-b-[1px] border-b-[1px] border-b-[#767676] hover:border-b-[#F0F0F0] pb-2 flex items-center gap-2  hover:border-gray-400 hover:text-white duration-300' >Profile</Link>
                                </ul>

                            </motion.div>
                        )}
                    </div>
                </div>
                <div className='relative'>
                    <Link to="/cart" >
                        <FaShoppingCart className='cursor-pointer' size={22} />
                    </Link>
                    {product.length > 0 &&
                        <div className='bg-black absolute flex justify-center items-center -right-3 -bottom-2 text-[11px] text-white font-bold w-5 h-5 rounded-3xl'>
                            {product?.length}
                        </div>
                    }
                </div>
            </div>
            {/*--------------------last section end-------------- */}

        </section>
    )
}

export default Header