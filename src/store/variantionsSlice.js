import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const variantionSlice = createSlice({
  name: "varaition",
  initialState,
  reducers: {
    addVaritionsInfo(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addVaritionsInfo } = variantionSlice.actions;

export default variantionSlice.reducer;
