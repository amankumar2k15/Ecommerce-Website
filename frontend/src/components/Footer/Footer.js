import React, { useState } from 'react'
import { BiLogoFacebookSquare, BiLogoLinkedinSquare, BiLogoGithub } from "react-icons/bi"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import paymentImg from "../../assets/paymentCard.png"

const Footer = () => {
    const [handleEmail, setHandleEmail] = useState("")
    const [subscription, setSubscription] = useState(false)
    const accountItem = ["Profile", "Orders", "Addressess", "Account Details", "Payment Options"]
    const menuItem = ["Accessories", "Clothes", "Electronics", "Home appliances", "Jewellery",]


    const handleSubscrible = (e) => {
        e.preventDefault()

        const emailValidation = /[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{3,}/

        if (handleEmail && emailValidation.test(handleEmail)) {
            setSubscription(true);
            setHandleEmail("");
        }
    }


    return (
        <section className='footer'>
            <div className='py-20 bg-[#f5f5f3]'>
                <div className='max-w-container mx-auto flex flex-col xl:flex-row w-full justify-between px-5 gap-10 xl:gap-0'>

                    {/* Left div----------------------------------------------------------------------------------- */}
                    <div className=' w-full xl:w-3/12 flex flex-col gap-5'>
                        <p className='font-semibold text-xl'>More about ShopHub</p>
                        <div>Explore ShopHub and discover not just products, but stories, values, and a commitment to excellence that makes online shopping not just easy, but also delightful.</div>
                        <div className='flex flex-row'>
                            <BiLogoFacebookSquare size={30} />
                            <BiLogoLinkedinSquare size={30} />
                            <BiLogoGithub size={30} />
                        </div>
                    </div>

                    {/* Middle div----------------------------------------------------------------------------------- */}
                    <div className='flex flex-row w-full xl:w-4/12 justify-between gap-4'>
                        <div className='flex flex-col gap-8'>
                            <p className=' text-xl font-semibold'>Shop</p>
                            <div>
                                <ul>
                                    {menuItem.map((item, index) => {
                                        return (
                                            <li key={index} className='text-[#767676] hover:text-primeColor text-[16px] font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center py-1 gap-2 hover:cursor-pointer pb-1 duration-300 w-full'>
                                                <Link to="/shop">{item}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className='flex flex-col gap-8'>
                            <p className=' text-xl font-semibold'>Your account</p>
                            <div>
                                <ul>
                                    {accountItem.map((item, index) => {
                                        return (
                                            <li key={index} className='text-[#767676] hover:text-primeColor text-[16px] font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center py-1 gap-2 hover:cursor-pointer pb-1 duration-300 w-full'>
                                                {item}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>

                    {/* Last div------------------------------------------------------------------------------------ */}
                    <div className=' w-full text-center xl:text-normal xl:w-3/12 flex flex-col'>
                        <div>
                            <p className=' text-xl font-semibold'>Subscribe to our newsletter.</p>
                            <div>Get exclusive access, special offers, and a dose of the hottest trends right in your inbox.</div>
                        </div>
                        <form>
                            <div className="relative z-0 w-full mb-6 group flex items-center xl:items-start flex-col xl:flex-row gap-4">
                                {subscription ? (
                                    <motion.p
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full text-center mt-2 text-base font-titleFont font-semibold text-green-600"
                                    >
                                        Subscribed Successfully !
                                    </motion.p>
                                ) : (
                                    <>
                                        <input className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  text-black focus:outline-none focus:ring-0  peer" placeholder="Insert your Email..." required
                                            type="email" name="floating_email"
                                            id='email'
                                            value={handleEmail}
                                            onChange={(e) => setHandleEmail(e.target.value)}
                                        />
                                        <button className='bg-white px-2 text-lightText w-[30%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide '
                                            onClick={handleSubscrible}
                                        >
                                            Subscribe
                                        </button>
                                    </>
                                )}

                            </div>
                            <img className="w-[80%] lg:w-[70%] mx-auto mt-6" src={paymentImg} alt='ImgPayment' />
                        </form>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default Footer