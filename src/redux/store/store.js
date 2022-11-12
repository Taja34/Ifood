import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productReducers } from "../reducers/productReducers";
import { userReducer } from "../reducers/userReducers";

const reducer = {
  user: userReducer,
  products: productReducers
};
const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;