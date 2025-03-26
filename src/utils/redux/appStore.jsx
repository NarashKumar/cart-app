import { configureStore } from "@reduxjs/toolkit";
import { restaurantApiSlice } from "../../services/restaurantApiSlice";
import cartReducer from "./cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
const persistConfig = {
  key: "cart",
  storage, // Saves in localStorage
  /* whitelist: ["cart"] */ // Only persist the cart slice
};

//   const rootReducer = ;

//   const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const appStore = configureStore({
  reducer: combineReducers({
    [restaurantApiSlice.reducerPath]: restaurantApiSlice.reducer,
    cart: persistReducer(persistConfig, cartReducer), // Persist cart
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      restaurantApiSlice.middleware
    ),
});

export const persistor = persistStore(appStore);

export default appStore;
