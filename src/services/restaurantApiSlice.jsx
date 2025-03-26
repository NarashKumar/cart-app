import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CORS_PROXY_URL, RESTAURANT_API_URL } from "../utils/constants";
const RESTAURANT_KEY = import.meta.env.VITE_RESTAURANT_API_KEY;
export const restaurantApiSlice = createApi({
  reducerPath: "restaurantApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: `${CORS_PROXY_URL}${RESTAURANT_API_URL}`,
    prepareHeaders: (headers) => {
        headers.set("Content-Type", "application/json");
        headers.set('x-api-key', RESTAURANT_KEY); 
        return headers;
    }, 
}),
  endpoints: (builder) => ({
    getNearbyRestaurants: builder.query({
      query: () => ({
        url: "restaurantsList/getNearByRestaurants",
        method: "POST",
        body: {
            c_lat: 9.9208067,
            c_lng: 78.0925759,
            customer_id: "7",
            distance: "nearest",
            favorite: 0,
            food_type: [],
            free_delivery: "",
            keyword: "",
            language: "en",
            location_type: 0,
            offer_collection: "",
            open_now: "",
            page: 0,
            price: "",
            rating: 0
          },
      }),
      keepUnusedDataFor: 5 * 60, // 5 minutes
    }),
    /* getRestaurantDetails: builder.query({
      query: (id) => `restaurant/getRestaurantDetails/${id}`,
    }), */
  }),
});

export const { useGetNearbyRestaurantsQuery } = restaurantApiSlice;