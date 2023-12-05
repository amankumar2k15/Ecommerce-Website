import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa"
import { ImCross } from "react-icons/im";
import { MdOutlineLabelImportant } from "react-icons/md"
import { SERVER_URL } from '../constants';
//redux toolkit---react-redux
import { useDispatch, useSelector } from 'react-redux'
import { selectProduct } from "../store/productSlice"
import { addToCart, removeToWishlist } from "../store/cartSlice"
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'


const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.cart.wishlistItems)
    // const reduxCartProduct = useSelector((state) => state.cart.wishlistItems);


    return (
        <div className="flex flex-row flex-wrap w-full gap-2 justify-center ">
            <Breadcrumb title="Wishlist" />
            {products.length === 0 ? (
                <div className="font-bold mt-5 h-[200px] text-xl sm:text-3xl">No items in the wishlist</div>
            ) : (products?.map((product, index) => {
                return (
                    <div key={index} className='BoxComponent group w-full  sm:w-[310px] py-5 '>
                        <div className='relative overflow-y-hidden flex items-center justify-center self-center'>
                            <div onClick={() => dispatch(removeToWishlist(product._id))}>
                                <ImCross
                                    className="text-primeColor hover:text-red-500 absolute top-0 right-0 duration-300 cursor-pointer"
                                />
                            </div>
                            <div className='w-[250px] h-[250px] '>
                                <img className='object-cover' src={`${SERVER_URL}/${product?.avatar.replace(/\\/g, '/')}`} alt="Imageee" />
                            </div>
                            {/* -------hover top----- */}
                            <div className="absolute top-6 left-8">
                                {product.isNew &&
                                    <div className="bg-primeColor w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer">
                                        New
                                    </div>
                                }
                            </div>

                            {/* -------hover bottom----- */}
                            <div className='w-full h-32 absolute z-10 bg-white -bottom-[130px] group-hover:bottom-0 duration-700  '>
                                <ul className=' h-full flex flex-col items-end justify-center gap-2 w-[260px] sm:w-[310px]  px-2 border-l border-r'>
                                    <li className='text-[#767676] hover:text-primeColor text-[15px] font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full'>
                                        <Link to="/cart"
                                            onClick={() => dispatch(addToCart(product))}
                                        >
                                            Add to Cart
                                        </Link>
                                        <span><FaShoppingCart /></span>
                                    </li>

                                    <li className='text-[#767676] hover:text-primeColor text-[15px] font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full'>
                                        <Link
                                            to={`/singleProduct/${product?._id}`}
                                            onClick={() => dispatch(selectProduct(product))}
                                        >
                                            See Details
                                        </Link>
                                        <span className="text-lg"> <MdOutlineLabelImportant /> </span>
                                    </li>

                                </ul>
                            </div>

                        </div>
                        <div className=' border-[1px] border-t-0 overflow-hidden flex flex-col h-24 '>
                            <div className='px-2 flex flex-row justify-between h-full'>
                                <h2 className='font-bold text-xl '>{`${product?.title.slice(0, 24)}`}</h2>
                                <p className='text-textGray font-sm'>{product?.price}</p>
                            </div>
                            <p className='px-2 text-textGray font-sm'>{product?.category}</p>
                        </div>

                    </div>

                )
            }))}

        </div>
    )
}

export default Products