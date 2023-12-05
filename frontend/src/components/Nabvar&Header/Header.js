import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaGripLines, FaShoppingCart } from "react-icons/fa"
import { BsPersonFillDown } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, fetchProductsByCategory, selectProduct } from '../../store/productSlice'
import { SERVER_URL } from '../../constants'


const menuItems = ["Accessories", "Home Appliances", "Clothes", "Electronics", "Jewellery", "All"]


const Header = () => {
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showSearchBar, setShowSearchBar] = useState(false);

    //framer motion details box
    const [details1, setDetails1] = useState(false)
    const [details2, setDetails2] = useState(false)

    //redux-toolkit
    const product = useSelector((state) => state.cart.items)
    const reduxStoreProduct = useSelector((state) => state.product.data.result)


    useEffect(() => {
        const filtered = reduxStoreProduct?.filter((item) => {
            return item?.categoryName?.toLowerCase().includes(searchQuery.toLowerCase());
        })
        setFilteredProducts(filtered)
    }, [searchQuery, reduxStoreProduct])

    // const handleSearchSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(searchProducts(searchQuery))
    //     setSearchQuery("")
    // }

    const handleCategoryClick = (categoryName) => {
        if (categoryName === "All") {
            dispatch(fetchProducts())
        } else {
            dispatch(fetchProductsByCategory(categoryName))
        }
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
                                        <li key={index} className='hover:border-b-[1px] px-4 text-md border-b-[1px] border-b-[#767676] cursor-pointer hover:border-b-[#F0F0F0] pb-2  items-center gap-2  hover:border-gray-400 hover:text-white duration-300'
                                            onClick={() => handleCategoryClick(item)}
                                        >
                                            {item}
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
                <form >
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-black sr-only ">
                        Search
                    </label>
                    <div className="relative">
                        <input type="text" className="block w-full p-4 pl-10 text-sm rounded-lg border-none outline-none" placeholder="Search your products here"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <div
                                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 pl-4 pt-4 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
                            >
                                {searchQuery && filteredProducts?.map((item) => (
                                    <Link to={`/singleProduct/${item?._id}`}
                                        key={item?._id}
                                        className="max-w-[600px] pl-4 bg-gray-100 mb-3 flex items-center gap-3"
                                        onClick={() => {
                                            dispatch(selectProduct(item));
                                            setSearchQuery('')
                                            setShowSearchBar(!showSearchBar)

                                        }}
                                    >
                                        <img className="w-24" src={`${SERVER_URL}/${item?.avatar?.replace(/\\/g, '/')}`} alt="productImg" />
                                        <div className="flex flex-col gap-1">
                                            <p className="font-semibold text-lg">
                                                {item?.title}
                                            </p>
                                            <p className="text-xs">{item?.description}</p>
                                            <p className="text-sm">
                                                Price:{" "}
                                                <span className="text-primeColor font-semibold">
                                                    ${item?.price}
                                                </span>
                                            </p>
                                        </div>
                                    </Link>

                                ))}
                            </div>
                        )}

                    </div>
                </form>
            </div>
            {/*--------------------middle section end-------------- */}


            {/*--------------------last section start-------------- */}
            <div className='flex flex-row gap-3 pr-10 cursor-pointer'>
                <div className='relative z-40' onClick={() => setDetails2(!details2)}>
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

        </section >
    )
}

export default Header