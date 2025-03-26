import { useEffect, useRef } from "react";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, setRestaurant } from "../utils/redux/cartSlice";

import { useLocation, useNavigate } from "react-router";
import RestaurantMenu from "./RestaurantMenu";
/* import { clearSelectedRestaurant } from "../utils/redux/selectedRestaurantSlice"; */
const RestaurantDetails = () => {
  window.scrollTo(0, 0);
  /* const { resId } = useParams(); */
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const hasInitialized = useRef(false);
  const {
    items: cartItems,
    restaurantId: cartRestaurantId,
    restaurantName: cartRestaurantName,
  } = useSelector((state) => state.cart);
  const restaurant = location.state?.restaurant;

  // const { pathname } = location;
/* 
  console.log("pathname", pathname); */

  // const [loading, setLoading] = useState(true);

  // Flag to check if loading is already set

  //const hasClearedCart = useRef(false);
  useEffect(() => {
    // Set loading to true when restaurant changes
    // Set loading to true when restaurant changes
     if (!restaurant || hasInitialized.current) return;
    // Only run if not already initialized
   

    // if (cartItems.length > 0) {
    //   // hasLoading.current = false;
    //   if (cartRestaurantId && cartRestaurantId !== restaurant.location_id) {
    //     // hasLoading.current = false; // Set loading to false if user cancels
    //     const confirmSwitch = window.confirm(
    //       `Your cart contains items from ${cartRestaurantName}. ` +
    //         `Do you want to discard your selection and add items from ${restaurant.location_name}?`
    //     );

    //     if (confirmSwitch) {
    //       dispatch(clearCart());
    //       dispatch(
    //         setRestaurant({
    //           restaurantId: restaurant.location_id,
    //           restaurantName: restaurant.location_name,
    //         })
    //       );
    //       hasInitialized.current = true; // Set flag so it doesn't run again
    //     } else {
    //       // setLoading(false); // Set loading to false if user cancels
    //       // navigate("/");
    //       // setTimeout(() => {
    //       // window.history.back(); // Go back to the previous page
    //       // }, 1000); // Delay for 1 second
    //       // Go back to the previous page
    //       // Go back if user cancels
    //       dispatch(clearCart());
    //       dispatch(
    //         setRestaurant({
    //           restaurantId: restaurant.location_id,
    //           restaurantName: restaurant.location_name,
    //         })
    //       );
    //       hasInitialized.current = true;
    //     }
    //     hasInitialized.current = true; // Set flag so it doesn't run again
    //   } else {
    //     dispatch(
    //       setRestaurant({
    //         restaurantId: restaurant.location_id,
    //         restaurantName: restaurant.location_name,
    //       })
    //     );
    //     hasInitialized.current = true;
    //     // Set loading to false if user cancels
    //   }
    // } else {
      // If cart is empty, simply set the restaurant data


      if(cartRestaurantId && cartRestaurantId !== restaurant.location_id){
        /* navigate("/"); */ // Redirect to home if someone forces URL
        return;
        /* hasInitialized.current = true;
        dispatch(
          clearCart()
        ); */
      }

      dispatch(
        setRestaurant({
          restaurantId: restaurant.location_id,
          restaurantName: restaurant.location_name,
        })
      );
      hasInitialized.current = true;
    // }
  }, [
    restaurant?.location_id,
    cartItems,
    cartRestaurantId,
    cartRestaurantName,
    dispatch,
    navigate,
    restaurant,
  ]);

  /*   useEffect(() => {
    // Clear cart whenever the restaurant changes
    dispatch(clearCart());
  }, [restaurant, dispatch]); // Runs every time the restaurant changes
 */
  //console.log(restaurant);
  /* const restaurant = useSelector(
    (state) => state.selectedRestaurant.selectedRestaurant
  ); */

  if (!restaurant) {
    return (
      <div className="text-center mt-10">
        <h1>No restaurant details available.</h1>
        <p>Please go back to the homepage and select a restaurant.</p>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    );
  }

  // if(!hasInitialized.current) {
  //   return (
  //     <div className="text-center mt-10">
  //       <h1>Loading...</h1>
  //       <p>Please wait while we load the restaurant details.</p>
  //     </div>
  //   );
  // }


  const {
    location_name,
    location_address_1,
    location_address_2,
    location_city,
    location_state,
    location_postcode,
  } = restaurant || {};

  return (
    <>
      <div className="res-details-page  flex w-5/6 mx-auto gap-6 justify-center ">
        <div className="w-[50%] flex flex-col gap-5  ">
          <div className="res-details overflow-hidden flex flex-col items-center rounded-lg bg-gray-200 w-full">
            <div className="bg-[#ff4500] w-full text-white rounded-t-lg">
              <h2 className="p-4 text-2xl text-center  font-bold">
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
          <div className="menu-details rounded-lg  bg-blue-500 w-full">
            <RestaurantMenu restaurant={restaurant} />
          </div>
        </div>

        <div className="w-[50%] h-full flex">
          <div className="cart w-full rounded-lg ">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );

  //   const { resId } = useParams();
};

export default RestaurantDetails;
