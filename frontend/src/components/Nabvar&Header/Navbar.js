import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineSort } from "react-icons/md"
import { RxCross2 } from "react-icons/rx"
import shopHubImg from "../../assets/shopHubLogo.png"

const Navbar = () => {
    const [hide, setHide] = useState(true)
    const location = useLocation()
    const currentPath = location.pathname

    const menuItem = [
        { to: '/shop', text: "Shop" },
        { to: '/about', text: "About" },
        { to: '/contact', text: "Contact" },
        { to: '/wishlist', text: "Wishlist" },
    ]


    return (
        <>
            <section className='navbar flex  z-50 bg-white shadow-testShadow md:shadow-none fixed md:left-0 top-0 right-0 w-full justify-between px-5 py-6'>
                <div className='flex flex-col md:flex-row gap-6 md:gap-0 justify-between w-full'>

                    <div className='font-dm-sans flex justify-center items-center text-white w-[200px] '>
                        <img src={shopHubImg} alt='imgLogo' />
                    </div>

                    {/* -----List items----- && -----DropMenu----- */}
                    <div className={`font-dm-sans pr-10  mdl:block ${hide ? "hidden" : "visible"}`}>
                        <ul className={` text-lg flex flex-col  md:flex-row gap-5   `}>
                            <li className=" flex justify-center md:border-[#66666] md:border-r-2 px-4 w-24 ">
                                <Link
                                    className={` ${currentPath === "/" ? "text-black font-semibold pb-1 border-black border-b-2 " : "md:text-textGray " ||
                                        currentPath === "/about" ? "text-black hover:font-semibold   hover:border-black hover:border-b-2" : "text-textGray" ||
                                            currentPath === "/shop" ? "text-textGray hover:font-semibold   hover:border-black hover:border-b-2 " : "text-textGray" ||
                                                currentPath === "/contact" ? "text-textGray hover:font-semibold   hover:border-black hover:border-b-2" : "text-textGray"}   flex justify-center  transition transform  hover:scale-x-105`}
                                    to="/"
                                    onClick={() => setHide(!hide)}
                                >
                                    Home
                                </Link>
                            </li>

                            {menuItem && menuItem.map((item, index) => {
                                return (
                                    <li key={index} className=" w-24 flex justify-center md:border-[#66666] md:border-r-2 px-4 ">
                                        <Link
                                            to={item.to}
                                            onClick={() => setHide(!hide)}
                                            className={`${currentPath === item.to ? " text-black font-semibold border-b-2 pb-1 border-black" : "md:text-textGray "}  text-black hover:text-black hover:font-semibold hover:border-b-2 hover:border-black  transition transform hover:scale-x-105`}
                                        >
                                            {item.text}
                                        </Link>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </div>

                <button data-collapse-toggle="navbar-user" type="button"
                    className="  items-center inline-flex mdl:hidden  p-2 w-10 h-10 justify-center text-sm text-black rounded-lg  focus:outline-none  dark:text-black-400  " aria-controls="navbar-user" aria-expanded="false"
                    onClick={() => setHide(!hide)}
                >
                    {
                        hide ?
                            <MdOutlineSort size={20} />
                            :
                            <RxCross2 size={20} />
                    }
                </button>
            </section>
        </>
    )
}

export default Navbar