import React from 'react'
import RestaurantCard from './RestaurantCard';
import { useGetNearbyRestaurantsQuery } from '../services/restaurantApiSlice';
import ShimmerRestaurants from './ui/ShimmerRestaurants';


const Body = () => {
  const { data, isLoading } = useGetNearbyRestaurantsQuery();
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
    <div className="body flex lg:w-5/6 lg:m-auto md:w-5/6 md:flex-wrap sm:w-5/6 sm:flex-wrap flex-wrap">
      <h1 className="p-4 text-3xl font-bold lg:ml-0 md:ml-12">Restaurants Nearby:</h1>
      <div className=" restaurants flex flex-wrap md:justify-around md:relative md:left-15 md:right-15 lg:static lg:left-0 lg-right-0 lg:justify-between lg:mt-2 lg:perspective-distant">
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