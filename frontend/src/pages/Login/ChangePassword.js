import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri"
import LoginRegisterLeftSection from "./LoginRegisterLeftSection";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { FiMail } from "react-icons/fi"
import { toast } from 'react-toastify'

const SignIn = () => {
    const [hide, setHide] = useState(true)
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const handleInput = (event) => {
        const { id, value } = event.target
        setCredentials(preVal => ({ ...preVal, [id]: value }))
    }

    const validation = () => {
        if (!credentials.email) return { isError: false, message: "Email is missing" }
        else if (!credentials.otp) return { isError: false, message: "Password is missing" }
        else {
            return { isError: true }
        }
    }


    const handleLogin = async () => {
        if (validation().isError) {

        } else {
            toast.error(validation().message)
        }
    }

    return (
        <div className="w-full h-screen flex items-center justify-center font-titleFont">

            {/* -------------------------------------------LeftSection------------------------------------------- */}
            <LoginRegisterLeftSection />

            {/* -----------------------------------------RightSection----------------------------------------- */}
            <div className="w-full md:w-1/2 px-5 md:px-5">

                <form className="w-full lgl:w-[450px] h-screen flex flex-col items-center justify-center">
                    <div className="text-center mb-10">
                        <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-4xl  mb-4">Reset Password</h1>
                        <p>Enter your new password</p>
                    </div>

                    <div className=" w-[300px] sm:w-[340px]">

                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <label htmlFor="" className="font-titleFont text-base font-semibold text-gray-600">Email</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <FiMail />
                                    </div>
                                    <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="johnsmith@example.com"
                                        id='email'
                                        value={credentials.email}
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-12">
                                <label htmlFor="" className="font-titleFont text-base font-semibold text-gray-600"> New Password</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <RiLockPasswordFill />
                                    </div>
                                    <input type={`${hide ? "password" : "text"}`} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-s-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="************"
                                        id='password'
                                        value={credentials.password}
                                        onChange={handleInput}
                                    />
                                    <div onClick={() => setHide(!hide)} className='w-10 h-11 flex justify-center items-center bg-gray-400 rounded-e-lg'>
                                        {hide ?
                                            <AiFillEyeInvisible className='text-black ' size={20} />
                                            :
                                            <AiFillEye className='text-black ' size={20} />
                                        }
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <button className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                                    onClick={handleLogin}
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                        <div className="text-black text-center">Don't have an account? <br />
                            <NavLink to="/register" className='  hover:text-blue-600 duration-300 text-sm'>Sign up</NavLink>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SignIn;

