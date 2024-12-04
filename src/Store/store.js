import { configureStore } from "@reduxjs/toolkit";
import productDataReducer from "../Reducer/productDataSlice"

export const store = configureStore({
  reducer: {
    productData: productDataReducer,
  },
});