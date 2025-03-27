// src/utils/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  restaurantId: null,
  restaurantName: null,
  restaurantDetails: null // Added to store full restaurant object
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { menu_id, menu_name, menu_price, restaurantId, restaurantName, restaurantDetails } = action.payload;
      
      // Set restaurant info on first item added
      if (state.items.length === 0) {
        state.restaurantId = restaurantId;
        state.restaurantName = restaurantName;
        state.restaurantDetails = restaurantDetails; // Store full details
      }

      const existingItem = state.items.find(
        (item) => item.menu_id === menu_id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ menu_id, menu_name, menu_price, quantity: 1 });
      }
    },

    setRestaurant: (state, action) => {
      // Only set if cart is empty (optional safety, though not used after removal from RestaurantDetails)
      if (state.items.length === 0) {
        state.restaurantId = action.payload.restaurantId;
        state.restaurantName = action.payload.restaurantName;
        state.restaurantDetails = action.payload.restaurantDetails;
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.menu_id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.menu_id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.menu_id !== action.payload
          );
          if (state.items.length === 0) {
            state.restaurantId = null;
            state.restaurantName = null;
            state.restaurantDetails = null; // Clear when cart is empty
          }
        }
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.menu_id !== action.payload);
      if (state.items.length === 0) {
        state.restaurantId = null;
        state.restaurantName = null;
        state.restaurantDetails = null; // Clear when cart is empty
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.restaurantId = null;
      state.restaurantName = null;
      state.restaurantDetails = null; // Ensure all details are cleared
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
  setRestaurant
} = cartSlice.actions;

export default cartSlice.reducer;