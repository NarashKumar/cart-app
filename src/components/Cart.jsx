import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { incrementQuantity,decrementQuantity,removeItem } from "../utils/redux/cartSlice";
import { Trash2 } from 'lucide-react';
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + Number(item.menu_price) * item.quantity;
  }, 0)

  if (cartItems.length === 0) {
    return (
      <>
        <div className="cart-details flex flex-col items-center rounded-lg h-full overflow-hidden ">
          <div className="bg-gray-200 rounded-lg shadow-lg w-full mx-auto h-full">
            <div className="bg-[#ff4500] text-white  rounded-t-lg">
              <h2 className="lg:text-2xl md:text-xl text-md font-semibold text-center p-4 ">My Order</h2>
            </div>
  
            <div className="mt-8 flex flex-col items-center justify-center  h-full">
              <p className="text-gray-600 text-lg h-32">
                There are no menus added in your cart.
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
    // If cart is not empty, show items
  return (
    <div className="cart-details flex flex-col items-center rounded-lg overflow-hidden h-full">
      <div className="bg-gray-200 rounded-lg shadow-lg w-full mx-auto h-full">
        <div className="bg-[#ff4500] text-white rounded-t-lg">
          <h2 className="lg:text-2xl md:text-xl text-md font-semibold text-center p-4">My Order</h2>
        </div>
        <div className="p-4 overflow-auto h-full">
          {cartItems.map((item) => (
            <div
              key={item.menu_id}
              className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm mb-3"
            >
              <div className="flex flex-col w-2/6">
                <h3 className="text-lg font-medium">{item.menu_name}</h3>
                <p className="text-sm text-gray-600">
                  ${item.menu_price} each
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(decrementQuantity(item.menu_id))}
                  className="bg-red-400 hover:cursor-pointer hover:bg-red-600 text-white px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => dispatch(incrementQuantity(item.menu_id))}
                  className="bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white px-2 py-1 rounded"
                >
                  +
                </button>

                <button
                  onClick={() => dispatch(removeItem(item.menu_id))}
                  className="ml-2 bg-gray-200 text-red-600 px-2 py-1 rounded hover:bg-red-500 hover:cursor-pointer hover:text-white transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  ${Number(item.menu_price) * item.quantity}
                </p>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="text-right mt-4">
            <p className="text-xl font-bold">Total: ${totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );

  
  
}

export default Cart;
