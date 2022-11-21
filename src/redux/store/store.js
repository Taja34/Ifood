import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { countReducers } from "../reducers/countReducer";
import { platosReducers } from "../reducers/platosReducers";
import { productReducers } from "../reducers/productReducers";
import { userReducer } from "../reducers/userReducers";

const reducer = {
  userStore: userReducer,
  products: productReducers,
  platos:platosReducers,
  count:countReducers
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