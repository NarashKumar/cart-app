import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantDetails = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const location = useLocation();
  
  const {
    restaurantDetails: cartRestaurantDetails,
    items: cartItems,
  } = useSelector((state) => state.cart);

  // Prioritize location state, then fall back to cart state
  const [restaurant, setLocalRestaurant] = useState(
    location.state?.restaurant || cartRestaurantDetails || null
  );

  useEffect(() => {
    if (!restaurant) {
      // If no restaurant details are available, redirect to home
      navigate("/");
      return;
    }
  }, [restaurant, navigate]);

  // Render loading or error state if no restaurant
  if (!restaurant?.location_id) {
    return (
      <div className="text-center mt-10">
        <h1>No restaurant details available.</h1>
        <p>Please go back to the homepage and select a restaurant.</p>
        <button 
          className="bg-amber-400 p-2 rounded"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    );
  }

  const {
    location_name,
    location_address_1,
    location_address_2,
    location_city,
    location_state,
    location_postcode,
  } = restaurant;

  return (
    <div className="res-details-page flex w-5/6 mx-auto gap-6 justify-center">
      <div className="w-full flex flex-col gap-5">
        <div className="res-details overflow-hidden flex flex-col items-center rounded-lg bg-gray-200 w-full">
          <div className="bg-[#ff4500] w-full text-white rounded-t-lg">
            <h2 className="p-4 text-2xl text-center font-bold">
              {location_name}
            </h2>
          </div>
          <p className="p-2">{location_address_1}</p>
          <p className="p-2">{location_address_2}</p>
          <p className="p-2">
            {location_city} - {location_postcode}
          </p>
          <p className="p-2">{location_state}</p>
        </div>
        <div className="menu-details rounded-lg bg-blue-500 w-full">
          <RestaurantMenu restaurant={restaurant} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;