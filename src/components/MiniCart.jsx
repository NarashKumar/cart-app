import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const MiniCart = () => {
  const {
    items: cartItems,
    restaurantName,
    restaurantDetails,
  } = useSelector((state) => state.cart);
    const totalPrice = cartItems.reduce((price , item) => {
        return price + Number(item.menu_price) * item.quantity;
    },0)

 
  return (
    <>
      <div className="absolute right-0 w-96 mt-2 invisible group-hover:visible transition-all duration-300 opacity-0 group-hover:opacity-100">
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          {/* Restaurant Info */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800">
              {restaurantName || ""}
            </h3>
            <p className="text-sm text-gray-600">
              {restaurantDetails?.location_city || ""}
            </p>
          </div>
          {/* Cart Items */}
          <div className="max-h-96 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                <p>Your cart is empty.</p>
                <p>Start adding some delicious items!</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.menu_id}
                  className="p-4 border-b border-gray-100 hover:bg-gray-50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {/* <div className="h-2 w-2 bg-green-500 rounded-full"></div> */}
                      <span className="font-medium">{item.menu_name}</span>
                        <span className="font-light">x</span>
                      <span className="w-8  font-medium">{item.quantity}</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                   
                    {/*   <div className="flex items-center space-x-1">
                        <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                          +
                        </button>
                      </div> */}
                      <span className="font-medium">
                        ${Number(item.menu_price) * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Subtotal */}
          <div className="p-4 bg-gray-50">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">${totalPrice}</span>
            </div>
            <Link to = "/cart">
                <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 hover:cursor-pointer transition-colors">
                Go to Cart
                </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniCart;
