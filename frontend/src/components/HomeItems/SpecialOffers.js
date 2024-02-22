import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa"
import { BsSuitHeartFill } from "react-icons/bs"
import { MdOutlineLabelImportant } from "react-icons/md"
//redux toolkit---react-redux
import { useDispatch, useSelector } from 'react-redux'
import { selectProduct } from '../../store/productSlice'
import { addToCart, addToWishlist } from '../../store/cartSlice'
import CardSkeleton from '../cardSkeleton/CardSkeleton'

const SpecialOffers = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.data.result) || []

    // useEffect(() => {
    //     dispatch(fetchProducts())
    // }, [dispatch])

    return (
        <>
            <div className='py-10 px-5 flex flex-col gap-6 '>
                <h2 className='font-extrabold  text-3xl'>Special Offers</h2>
                <div className='flex flex-col md:flex-row justify-center items-center  gap-6 flex-wrap'>
                    {/*====================================> <BoxComponent /> <====================================== */}
                    {products.length === 0 ? (
                        <CardSkeleton cards={4} />
                    ) : (
                        products?.filter((item) => item.categoryName === "Electronics").slice(5, 9)
                            .map((item) => {
                                return (
                                    <div key={item._id} className='BoxComponent group w-full sm:w-[310px] pb-5 '>
                                        <div className='relative overflow-y-hidden flex justify-center items-center'>
                                            <div className='w-[250px] h-[250px] flex flex-col justify-center items-center p-8'>
                                                <img className='object-cover' src={`${item?.avatar}`} alt="ImgAvatar" />
                                                {/* <img className='object-cover ' src={`${SERVER_URL}/${item?.avatar.replace(/\\/g, '/')}`} alt="" /> */}
                                            </div>
                                            {/* -------hover top----- */}
                                            <div className="absolute top-6 left-8">
                                                <div className="bg-primeColor w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer">New
                                                </div>
                                            </div>

                                            {/* -------hover bottom----- */}
                                            <div className='w-full h-32 absolute z-10 bg-white -bottom-[130px] group-hover:bottom-0 duration-700  '>
                                                <ul className=' h-full flex flex-col items-end justify-center gap-2 sm:w-[310px]  px-2 border-l border-r'>
                                                    <li className='text-[#767676] hover:text-primeColor text-[15px] font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full'>
                                                        <Link to="/cart"
                                                            onClick={() => dispatch(addToCart(item))}
                                                        >
                                                            Add to Cart
                                                        </Link>
                                                        <span><FaShoppingCart /></span>
                                                    </li>

                                                    <li className='text-[#767676] hover:text-primeColor text-[15px] font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full'>
                                                        <Link to={`/singleProduct/${item?._id}`}
                                                            onClick={() => dispatch(selectProduct(item))}
                                                        >
                                                            See Details
                                                        </Link>
                                                        <span className="text-lg"> <MdOutlineLabelImportant /> </span>
                                                    </li>

                                                    <li className='text-[#767676] hover:text-primeColor text-[15px] font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full'>
                                                        <Link
                                                            onClick={() => dispatch(addToWishlist(item))}
                                                        >
                                                            Add to Wishlist
                                                        </Link>
                                                        <span> <BsSuitHeartFill /> </span>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                        <div className=' border-[1px] border-t-0 overflow-hidden flex flex-col h-24 '>
                                            <div className='px-2 flex flex-row justify-between h-full'>
                                                <h2 className='font-bold text-xl '>{`${item?.title.slice(0, 21)}`}</h2>
                                                <p className='text-textGray font-sm'>${item?.price}</p>
                                            </div>
                                            <p className='px-2 text-textGray font-sm'>{item?.categoryName}</p>
                                        </div>
                                    </div>
                                )
                            }))}
                    {/*====================================> <BoxComponent /> <====================================== */}

                </div>
            </div>
        </>
    )
}

export default SpecialOffers