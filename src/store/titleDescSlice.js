import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  desc: "",
};
const titleDescSlice = createSlice({
  name: "titleDesc",
  initialState,
  reducers: {
    addTitleDesc(state, action) {
      console.log(action.payload.title, action.payload.desc);
      state.title = action.payload.title;
      state.desc = action.payload.desc;
    },
  },
});

export const { addTitleDesc } = titleDescSlice.actions;

export default titleDescSlice.reducer;
