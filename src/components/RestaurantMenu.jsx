import React from "react";
import { Plus } from "lucide-react";
import { RES_IMAGE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart } from "../utils/redux/cartSlice";

const RestaurantMenu = ({restaurant}) => {
  const dispatch = useDispatch();
  const { 
    items: cartItems, 
    restaurantId: cartRestaurantId, 
    restaurantName 
  } = useSelector((state) => state.cart);

  // Ensure menu_items exists, default to empty array
  const { menu_items } = restaurant?.categories?.[0] || { menu_items: [] };

  const handleAdd = (item) => {
    // If cart has items from a different restaurant
    if (cartItems.length > 0 && cartRestaurantId && cartRestaurantId !== restaurant.location_id) {
      const confirmSwitch = window.confirm(
        `Your cart contains items from ${restaurantName}.\n` +
        `Do you want to clear it and add items from ${restaurant.location_name}?`
      );
      
      if (confirmSwitch) {
        dispatch(clearCart());
      } else {
        return; // Exit if user cancels
      }
    }
  
    // Add item to cart with full restaurant details
    dispatch(addToCart({
      menu_id: item.menu_id,
      menu_name: item.menu_name,
      menu_price: item.menu_price,
      restaurantId: restaurant.location_id,
      restaurantName: restaurant.location_name,
      restaurantDetails: restaurant // Pass full restaurant object
    }));
  };


  return (
    <div className="res-container bg-gray-200 h-full rounded-lg">
      <div className="bg-[#ff4500] text-white text-center py-3 font-semibold lg:text-2xl md:text-lg rounded-t-lg">
        Menu
      </div>
      <div className="h-full p-4 overflow-auto">
        <div className="space-y-4">
          {menu_items.map((item) => (
            <div
              key={item.menu_id}
              className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm"
            >
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src={RES_IMAGE_URL + item.menu_photo}
                  alt={item.menu_name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow min-w-0">
                <h3 className="lg:text-lg md:text-md text-xs font-medium lg:truncate">
                  {item.menu_name}
                </h3>
                <p className="lg:text-sm md:text-sm  text-xs text-gray-600 lg:truncate">
                  {item.menu_description || ""}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-base font-semibold text-gray-700 whitespace-nowrap">
                  $ {item.menu_price}
                </span>
                <button
                  onClick={() => handleAdd(item)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border-2 border-[#ff4500] text-[#ff4500] hover:bg-[#ff4500] hover:text-white transition-colors hover:cursor-pointer"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>
          ))}
          {menu_items.length === 0 && (
            <p className="text-center text-gray-600">No menu items available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;