import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  avaliable: false,
  variant: false,
};
const avaliablitySlice = createSlice({
  name: "avaliable",
  initialState,
  reducers: {
    setAvaliablityTrue(state, action) {
      state.avaliable = true;
    },
    setVariantTrue(state, action) {
      state.variant = true;
    },
  },
});

export const { setAvaliablityTrue, setVariantTrue } = avaliablitySlice.actions;
export default avaliablitySlice.reducer;
