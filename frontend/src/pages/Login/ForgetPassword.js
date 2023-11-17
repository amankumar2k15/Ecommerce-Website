import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri"
import LoginRegisterLeftSection from "./LoginRegisterLeftSection";
import { AiFillEyeInvisible, AiFillEye, AiOutlineSend } from "react-icons/ai"
import { FiMail } from "react-icons/fi"
import { toast } from 'react-toastify'

const SignIn = () => {
    const [changeScreen, setChangeScreen] = useState(true)
    const navigate = useNavigate()
    const [initialData, setInitialData] = useState({
        email: ""
    })

    const [credentials, setCredentials] = useState({
        email: "",
        otp: ""
    })

    const sendOTPtoMail = (e) => {
        e.preventDefault();
        setChangeScreen(!changeScreen)
    }

    const enterOTP = (e) => {
        e.preventDefault();
        navigate("/changePassword")
    }


    return (
        <div className="w-full h-screen flex items-center justify-center font-titleFont">
            {/* -------------------------------------------LeftSection------------------------------------------- */}
            <LoginRegisterLeftSection />

            {/* -----------------------------------------RightSection----------------------------------------- */}
            <div className="w-full md:w-1/2 px-5 md:px-5">

                <form className="w-full lgl:w-[450px] h-screen flex flex-col items-center justify-center">
                    <div className="text-center mb-10">
                        <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-4xl  mb-4">Forget Password</h1>
                        <p>Please Enter your OTP</p>
                    </div>

                    <div className=" w-[300px] sm:w-[340px]">

                        {/* ========================================< Email >======================================== */}
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <label htmlFor="" className="font-titleFont text-base font-semibold text-gray-600">Email</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <FiMail />
                                    </div>

                                    {changeScreen ?
                                        <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="johnsmith@example.com"
                                            id='email'
                                            value={initialData.email}
                                        // onChange={handleInput}
                                        />
                                        :
                                        <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="johnsmith@example.com"
                                            id='email'
                                            value={credentials.email}
                                        // onChange={handleInput}
                                        />
                                    }

                                </div>
                            </div>
                        </div>

                        {/* ========================================< OTP >======================================== */}
                        <div className="flex -mx-3">
                            {changeScreen ?
                                <div></div>
                                :
                                <div className="w-full px-3 mb-12">
                                    <label htmlFor="" className="font-titleFont text-base font-semibold text-gray-600">OTP</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <AiOutlineSend />
                                        </div>
                                        <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900"
                                            id='text'
                                            placeholder="4848"
                                            value={credentials.otp}
                                        // onChange={handleInput}
                                        />

                                    </div>
                                </div>
                            }
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                {changeScreen ?
                                    <button className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                                        onClick={sendOTPtoMail}
                                    >
                                        Send OTP
                                    </button>
                                    :
                                    <button className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                                        onClick={enterOTP}
                                    >
                                        Enter OTP
                                    </button>

                                }
                            </div>
                        </div>
                        <div className="text-black text-center"> Have an account? <br />
                            <NavLink to="/register" className='  hover:text-blue-600 duration-300 text-sm'>Sign in</NavLink>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SignIn;

