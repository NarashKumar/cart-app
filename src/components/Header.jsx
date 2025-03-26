import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <>
            <div className="header fixed top-0 left-0  z-50 flex items-center  bg-gray-100 rounded-lg shadow-lg w-full h-26">
                <div className="header-data flex items-center w-5/6 m-auto">
                    <div className="logo container p-3 w-25">
                        <img className="logo w-[100%]" src={logo} alt="OrdernEatLogo" />
                    </div>

                    <div className="title font-semibold text-xl">
                        OrdernEat
                    </div>

                    <div className="right-section flex ml-auto mr-10">
                        <ul className="flex space-x-2">
                            <li className="p-3 text-gray-500 hover:text-gray-800 cursor-pointer">Login</li>
                            <li className="p-3 text-gray-500 hover:text-gray-800 cursor-pointer">Register</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header