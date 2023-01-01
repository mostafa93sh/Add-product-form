import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   title: "",
//   desc: "",
//   addons: "",
//   avaliablity: "",
//   hasVaiants: "",
//   price: "",
//   salePrice: "",
//   costPerItem: "",
//   categoryAndSubIds: [],
//   attributes: [],
// };

const initialState = {
  product: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductInfo(state, action) {
      state.product.push(action.payload);
    },
    clearProductInfo(state) {
      state.product = [];
    },
  },
});

export const { addProductInfo, clearProductInfo } = productSlice.actions;

export default productSlice.reducer;
