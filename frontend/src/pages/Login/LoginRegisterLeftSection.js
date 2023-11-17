import React from 'react'
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import shopHubImg from "../../assets/shopHubLogoBlack.png"

const LoginRegisterLeftSection = () => {
    return (
        <div className="w-1/2 hidden  lgl:inline-flex h-full text-white">
            <div className="w-[450px]  bg-primeColor px-6 flex flex-col gap-6 justify-between py-4">
                <Link to="/" className='cursor-default'>
                    <div className='font-dm-sans  text-white w-[200px] cursor-pointer '>
                        <img src={shopHubImg} className="bg-white rounded-lg" alt='imgLogo' />
                    </div>
                </Link>
                <div className="flex flex-col gap-1 -mt-1">
                    <h1 className="font-titleFont text-xl font-medium">
                        Stay sign in for more
                    </h1>
                    <p className="text-base">When you sign in, you are with us!</p>
                </div>
                <div className="w-[350px] flex items-start gap-3">
                    <span className="text-green-500 mt-1">
                        <BsCheckCircleFill />
                    </span>
                    <p className="text-base text-gray-300">
                        <span className="text-white font-semibold font-titleFont">
                            Dive Right into SHOPHUB
                        </span>
                        <br />
                        Every click and every transaction is crafted for your utmost satisfaction.
                    </p>
                </div>
                <div className="w-[350px] flex items-start gap-3">
                    <span className="text-green-500 mt-1">
                        <BsCheckCircleFill />
                    </span>
                    <p className="text-base text-gray-300">
                        <span className="text-white font-semibold font-titleFont">
                            Unlock the SHOPHUB Services
                        </span>
                        <br />
                        From seamless browsing to secure payments, experience a platform designed with your needs in mind.
                    </p>
                </div>
                <div className="w-[350px] flex items-start gap-3">
                    <span className="text-green-500 mt-1">
                        <BsCheckCircleFill />
                    </span>
                    <p className="text-base text-gray-300">
                        <span className="text-white font-semibold font-titleFont">
                            Preferred by Discerning Online Shoppers
                        </span>
                        <br />
                        Thousands have placed their trust in SHOPHUB, and for a good reason.
                    </p>
                </div>
                <div className="flex items-center justify-between mt-10">
                    <Link to="/">
                        <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                            © ShopHub
                        </p>
                    </Link>
                    <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                        Terms
                    </p>
                    <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                        Privacy
                    </p>
                    <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                        Security
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginRegisterLeftSection