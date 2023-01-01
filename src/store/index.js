import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import variantionsSlice from "./variantionsSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    variations: variantionsSlice,
  },
});

export default store;
