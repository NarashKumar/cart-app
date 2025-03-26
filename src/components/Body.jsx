import React from 'react'
import RestaurantCard from './RestaurantCard';
import { useGetNearbyRestaurantsQuery } from '../services/restaurantApiSlice';
import ShimmerRestaurants from './ui/ShimmerRestaurants';


const Body = () => {
  const { data, error, isLoading } = useGetNearbyRestaurantsQuery();
  //console.log("data", data);
  const restaurants = data?.result || [];
  //console.log(restaurants);
  //console.log("Error", error)

  /*   if(isLoading) {
       return (
       <ShimmerRestaurants />
       )
    } */
       window.scrollTo(0, 0);
       
  return (
    // <div className="pt-20">
    <div className="body w-5/6  m-auto">
      <h1 className="p-4 text-3xl font-bold">Restaurants Nearby:</h1>
      <div className=" p-2 restaurants flex flex-wrap justify-between mt-2 perspective-distant">
        {isLoading ? <ShimmerRestaurants />
          : restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant?.location_id} restaurant={restaurant} />
          ))
        }
      </div>
    </div>
    // </div>
  )
}

export default Body