import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  subCategory: "",
};

const categoryAndSubSlice = createSlice({
  name: "categoryAndSub",
  initialState,
  reducers: {
    addCategory(state, action) {
      const [cat, subCat] = action.payload;
      console.log(cat, subCat);
      state.category += cat;
      state.subCategory += subCat;
    },
  },
});

export const { addCategory } = categoryAndSubSlice.actions;

export default categoryAndSubSlice.reducer;
