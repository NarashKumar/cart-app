// src/utils/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  restaurantId: null,
  restaurantName: null // Each item: { menu_id, menu_name, menu_price, quantity }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {

      const { menu_id, menu_name, menu_price, restaurantId, restaurantName } = action.payload;
      
      // Set restaurant info on first item added
      if (state.items.length === 0) {
        state.restaurantId = restaurantId;
        state.restaurantName = restaurantName;
      }

      // action.payload => { menu_id, menu_name, menu_price }
      const existingItem = state.items.find(
        (item) => item.menu_id === menu_id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({menu_id, menu_name, menu_price, quantity: 1 });
      }
    },

    setRestaurant: (state, action) => {
      state.restaurantId = action.payload.restaurantId;
      state.restaurantName = action.payload.restaurantName;
    },

    incrementQuantity: (state, action) => {
      // action.payload => menu_id
      const item = state.items.find((item) => item.menu_id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      // action.payload => menu_id
      const item = state.items.find((item) => item.menu_id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // If quantity is 1 and user wants to decrement, remove item
          state.items = state.items.filter(
            (item) => item.menu_id !== action.payload
          );
        }
      }
    },
    removeItem: (state, action) => {
      // action.payload => menu_id
      state.items = state.items.filter((item) => item.menu_id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
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
