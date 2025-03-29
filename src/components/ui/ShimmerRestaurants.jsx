import React from 'react';

const ShimmerRestaurants = () => {
  // Create an array with 6 items to render 6 shimmer cards
  const shimmerCards = new Array(6).fill(0);
  
  return (
    <>
      {shimmerCards.map((_, index) => (
        <div
          key={index}
          className="restaurant-card flex flex-col justify-between bg-gray-200 shadow-lg rounded-lg p-4 m-2 w-102 sm:w-[47%] md:w-76 lg:w-84 h-70 animate-pulse"
        ></div>
      ))}
    </>
  );
};

export default ShimmerRestaurants;



/* import React from 'react'

const ShimmerRestaurants = () => {
  return (
    <>
         
            <div className="restaurant-card bg-gray-200 shadow-lg rounded-lg p-4 m-2 w-84 h-52 animate-pulse"></div>
            <div className="restaurant-card bg-gray-200 shadow-lg rounded-lg p-4 m-2 w-84 h-52 animate-pulse"></div>
            <div className="restaurant-card bg-gray-200 shadow-lg rounded-lg p-4 m-2 w-84 h-52 animate-pulse"></div>
            <div className="restaurant-card bg-gray-200 shadow-lg rounded-lg p-4 m-2 w-84 h-52 animate-pulse"></div>
            <div className="restaurant-card bg-gray-200 shadow-lg rounded-lg p-4 m-2 w-84 h-52 animate-pulse"></div>
            <div className="restaurant-card bg-gray-200 shadow-lg rounded-lg p-4 m-2 w-84 h-52 animate-pulse"></div>
    </>
  )
}

export default ShimmerRestaurants */