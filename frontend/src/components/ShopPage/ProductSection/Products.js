import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa"
import { BsSuitHeartFill } from "react-icons/bs"
import { MdOutlineLabelImportant } from "react-icons/md"
import { useEffect } from 'react'
//redux toolkit---react-redux
import { STATUSES, fetchProducts, selectProduct } from '../../../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, addToWishlist } from "../../../store/cartSlice"
import ErrorPage from '../../../routes/ErrorPage'
import { SERVER_URL } from '../../../constants'


const Products = () => {
  const dispatch = useDispatch()
  const { result: products, status } = useSelector((state) => state.product.data)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])



  if (status === STATUSES.LOADING) {
    return <div className='flex justify-center text-4xl text-black mt-10'>Loading...</div>
  }
  if (status === STATUSES.ERROR) {
    return <ErrorPage />
  }

  return (
    <>


      <div className="flex flex-row flex-wrap w-full pt-2 gap-1 justify-evenly bg-[#f5f5f3b8] ">

        {products && products?.map((product, index) => {
          return (
            < div key={index} className='BoxComponent group w-full sm:w-[310px] my-5 bg-white ' >
              <div className='relative overflow-y-hidden flex items-center justify-center self-center'>
                <div className='w-[250px] h-[260px] p-4 flex justify-center items-center '>
                  <img className='object-cover' src={`${SERVER_URL}/${product?.avatar.replace(/\\/g, '/')}`} alt="ImgAvatar" />
                </div>
                {/* -------hover top----- */}
                <div className="absolute top-6 left-8">
                  {product.isnew &&
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
                      <Link to={`/singleProduct/${product?._id}`}
                        onClick={() => dispatch(selectProduct(product))}
                      >
                        See Details
                      </Link>
                      <span className="text-lg"> <MdOutlineLabelImportant /> </span>
                    </li>

                    <li className='text-[#767676] hover:text-primeColor text-[15px] font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full'>
                      <Link
                        onClick={() => dispatch(addToWishlist(product))}
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
                  <h2 className='font-bold text-xl '>{`${product?.title.slice(0, 21)}`}</h2>
                  <p className='text-textGray font-sm'>${product?.price}</p>
                </div>
                <p className='px-2 text-textGray font-sm'>{product?.categoryName}</p>
              </div>
            </div>

          )
        })}
      </div>

      {/* <div>
        aman
      </div> */}
    </>
  )
}

export default Products