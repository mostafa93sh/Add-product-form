import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addons: [],
};

const addonsSlice = createSlice({
  name: "addons",
  initialState,
  reducers: {
    addAddons(state, action) {
      state.addons.push(action.payload);
    },
  },
});

export const { addAddons } = addonsSlice.actions;

export default addonsSlice.reducer;
