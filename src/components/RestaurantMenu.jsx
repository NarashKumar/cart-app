import React from "react";
import { Plus } from "lucide-react";
import { RES_IMAGE_URL } from "../utils/constants"; // Ensure this is defined
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/redux/cartSlice"; // Ensure this is defined
const RestaurantMenu = ({restaurant}) => {
  // const restaurant = useSelector((state) => state.selectedRestaurant.selectedRestaurant);
  // Extract menu_items from the first category if available
  const dispatch = useDispatch();
  const { menu_items } = restaurant?.categories?.[0] || { menu_items: [] };
  //console.log(menu_items);

  const handleAdd = (item) => {
    dispatch(
      addToCart({
        menu_id: item.menu_id,
        menu_name: item.menu_name,
        menu_price: item.menu_price,
        restaurantId: restaurant.location_id, // Add restaurant ID
        restaurantName: restaurant.location_name // Add restaurant name
      })
    );
  }
  
  return (
    <div className="res-container bg-gray-200 h-full rounded-lg">
      <div className="bg-[#ff4500] text-white text-center py-3 font-semibold text-2xl rounded-t-lg">
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
                <h3 className="text-lg font-medium truncate">
                  {item.menu_name}
                </h3>
                <p className="text-sm text-gray-600 truncate">
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
};

export default RestaurantMenu;
