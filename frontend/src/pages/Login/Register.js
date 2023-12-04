import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { HiOutlineUser } from "react-icons/hi"
import { FiMail } from "react-icons/fi"
import { RiLockPasswordFill } from "react-icons/ri"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { SERVER_URL } from '../../constants'
import axios from 'axios'
import Toast from "../../common/Toast"
import LoginRegisterLeftSection from './LoginRegisterLeftSection'


const Register = () => {
    const navigate = useNavigate()
    const [hide, setHide] = useState(true)
    const [initialData, setInitialData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })


    const handleInput = (event) => {
        const { value, id } = event.target;
        setInitialData((preVal) => ({ ...preVal, [id]: value }))
    }

    const validation = () => {
        const validationEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
        const validationPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{8,}$/;

        if (!initialData.firstname.length) return { isError: false, message: "First-name is missing" };
        if (!initialData.lastname.length) return { isError: false, message: "Last-name is missing" };
        if (!initialData.email.length) return { isError: false, message: "Email is missing" };
        if (!validationEmail.test(initialData.email)) return { isError: false, message: "Invalid email" };
        if (!initialData.password.length) return { isError: false, message: "Password is missing" };
        if (initialData.password.length <= 0) return { isError: false, message: alert("Password must be") }
        if (!validationPassword.test(initialData.password)) return { isError: false, message: "Invalid password" };
        return {
            isError: true
        }

    }


    const handleRegister = async (e) => {
        e.preventDefault()
        if (validation().isError) {
            try {
                let res = await axios.post(`${SERVER_URL}/user/create-user`, initialData)
                console.log(res)
                Toast(false, res.data.message)
                navigate("/login")

            } catch (error) {
                Toast(true, error.response.data.message)
            }
        } else {
            Toast(true, validation().message)
        }
    }


    return (
        <>
            <div className="w-full h-screen flex items-center justify-center font-titleFont">

                {/* -------------------------------------------LeftSection------------------------------------------- */}
                <LoginRegisterLeftSection />

                {/* -------------------------------------------RightSection------------------------------------------- */}
                <div className="w-full lgl:w-1/2 px-5 md:px-10 ">

                    <form className="w-full lgl:w-[450px] h-screen flex flex-col items-center justify-center">
                        <div className="text-center mb-10">
                            <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-4xl mb-4">Sign up</h1>
                            <p>Enter your information to register</p>
                        </div>
                        <div>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
                                    <label htmlFor="" className="font-titleFont text-base font-semibold text-gray-600"> First name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <HiOutlineUser />
                                        </div>
                                        <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="John"
                                            id='firstname'
                                            value={initialData.firstname}
                                            onInput={handleInput} />
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                    <label htmlFor="" className="font-titleFont text-base font-semibold text-gray-600">Last name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <HiOutlineUser />
                                        </div>
                                        <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="Smith"
                                            id='lastname'
                                            value={initialData.lastname}
                                            onInput={handleInput} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor="" className="font-titleFont text-base font-semibold text-gray-600">Email</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <FiMail />
                                        </div>
                                        <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="johnsmith@example.com"
                                            id='email'
                                            value={initialData.email}
                                            onInput={handleInput} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <label htmlFor="" className="font-titleFont text-base font-semibold text-gray-600">Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <RiLockPasswordFill />
                                        </div>
                                        <input type={`${hide ? "password" : "text"}`} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-s-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="************"
                                            id='password'
                                            value={initialData.password}
                                            onInput={handleInput} />

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
                                        onClick={handleRegister}>
                                        Sign up
                                    </button>
                                </div>
                            </div>
                            <div className="text-black text-center">Already have an account? <br />
                                <NavLink to="/login" className='hover:text-blue-600 duration-300 text-sm' >Sign in</NavLink>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Register

