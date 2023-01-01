import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: "",
  salePrice: "",
  cost: "",
};

const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    addPriceInfo(state, action) {
      const { price, salePrice, cost } = action.payload;
      state.price = price;
      state.salePrice = salePrice;
      state.cost = cost;
    },
  },
});

export const { addPriceInfo } = priceSlice.actions;

export default priceSlice.reducer;
