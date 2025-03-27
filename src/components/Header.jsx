import React from 'react'
import logo from '../assets/logo.png'
import { useSelector } from 'react-redux'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router'

const Header = () => {
    const cartItems = useSelector((state) => state.cart.items)
    const {restaurantId, restaurant} = useSelector((state) => state.cart)
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

                    <div className="right-section flex items-center ml-auto mr-10">
                        <Link to = "/cart" state={{
                            restaurantId,
                            restaurantData: restaurant
                        }}>
                            <div className="relative  mr-6">
                                <ShoppingCart className="w-10 h-10 text-gray-500 hover:text-gray-800 cursor-pointer" />
                                <div className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-orange-600 text-white rounded-full px-2 py-1 text-xs font-semibold">
                                    {cartItems.length}
                                </div>
                            </div>
                        </Link>
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