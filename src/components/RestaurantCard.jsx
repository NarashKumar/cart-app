import React from 'react'
import { RES_IMAGE_URL } from '../utils/constants'
import deliveryTime from '../assets/clock.png'
import locationImg from '../assets/google-maps.png'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'


const RestaurantCard = ({restaurant}) => {
    const navigate = useNavigate();
 const { 
    items: cartItems,
    restaurantId: cartRestaurantId,
  } = useSelector((state) => state.cart);

   const {
        location_id,
        location_name,
        delivery_time,
        location_city,
        profile_image,
      } = restaurant;


    const handleClick = () => {
        //   /*   const confirmSwitch = window.confirm(
        //         `Your cart contains items from ${cartRestaurantName}. ` +
        //         `Do you want to discard your selection and add items from ${location_name}?`
        //     ) */

        //     /* if (!confirmSwitch) {
        //         return;
        //     } */
        //     // else{
        //        /*  dispatch(clearCart());  */
        //     // }
        // } 
        // // dispatch(setSelectedRestaurant(restaurant));
        navigate(`/restaurant/${location_id}`, { state: {restaurant } });
  };

     /*  console.log(location_name, delivery_time, location_city) */
  return (
    
        <div 
        onClick={handleClick}
        className="restaurant-card flex flex-col justify-between  bg-gray-200 shadow-lg rounded-lg p-4 m-2 lg:w-84 h-80
        transition-transform duration-300 ease-in-out transform hover:scale-95 hover:shadow-xl cursor-pointer
        md:w-[47%] sm:w-[47%] w-full">
            <div className="image-container w-full h-44">
                <img className="rounded-lg w-full h-full object-cover" src={RES_IMAGE_URL+profile_image} alt={location_name} />
                <h2 className="pt-3 text-xl font-semibold">{location_name}</h2>
            </div>
            <div className="res-data flex justify-between items-center ">
                <div className="flex items-center space-x-2">
                    <img className="w-7 object-cover" src={deliveryTime} alt="delivery time" />
                    <p className="text-gray-600">{delivery_time} minutes</p>
                </div>
                <div className="flex flex-wrap items-center space-x-1">
                    <img className="w-7 object-cover" src={locationImg} alt="city" />
                    <p className="text-gray-600">{location_city}</p>
                </div>
            </div>
        </div>
  )
}

export default RestaurantCard