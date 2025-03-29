import React from "react";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import MiniCart from "./MiniCart";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const { restaurantId, restaurant } = useSelector((state) => state.cart);
  const cartItemCount = cartItems.reduce((count, item) => {
    return count + item.quantity;
  }, 0);
  
  return (
    <>
      {/* Change 1: Updated header styles to be more clean and white */}
      <div className="header fixed top-0 left-0 z-50 flex items-center bg-white w-full h-16 sm:h-20 shadow-sm">
        {/* Change 2: Adjusted width and padding */}
        <div className="header-data flex items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center">
            {/* Change 3: Adjusted logo size and spacing */}
            <div className="logo w-12 sm:w-16">
              <Link to="/">
                <img
                  className="w-full h-auto"
                  src={logo}
                  alt="OrdernEatLogo"
                />
              </Link>
            </div>

            {/* Change 4: Updated title styling */}
            <div className="title font-bold text-xl sm:text-2xl ml-3">
              OrdernEat
            </div>
          </div>

          {/* Change 5: Improved right section layout */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="group relative">
              <Link
                to="/cart"
                state={{
                  restaurantId,
                  restaurantData: restaurant,
                }}
              >
                <div className="relative">
                  {/* Change 6: Updated cart icon styling */}
                  <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 hover:text-gray-900" />
                  <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-orange-500 text-white rounded-full text-xs font-medium">
                    {cartItemCount || 0}
                  </div>
                </div>
              </Link>
              <MiniCart />
            </div>

            {/* Change 7: Updated navigation items */}
            <nav className="flex items-center space-x-4 sm:space-x-6">
              <Link to="/login" className="text-gray-700 hover:text-gray-900 font-medium">
                Login
              </Link>
              <Link to="/register" className="text-gray-700 hover:text-gray-900 font-medium">
                Register
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Change 8: Updated cart notification banner */}
      {cartItems.length >= 1 && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-4">
            <Link to="/cart">
              <div className="bg-green-500 text-white rounded-lg py-3 px-4 flex items-center justify-between shadow-lg">
                <span className="font-medium">
                  {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in cart
                </span>
                <button className="bg-white text-green-500 px-4 py-1.5 rounded-md font-medium hover:bg-gray-50 transition-colors">
                  View Cart
                </button>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;