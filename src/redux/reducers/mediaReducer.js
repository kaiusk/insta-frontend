import { createSlice } from "@reduxjs/toolkit";
import { showSlider } from "../actions/postActions";

const initialState = {
  show: false,
  post: [],
  comments: []
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    hideSlider: state => {
      state.show = false;
    },
  },
  extraReducers: {
    // show slider
    [showSlider.pending]: state => {
      state.show = false;
    },
    [showSlider.fulfilled]: (state, { payload }) => {
      state.show = true;
      state.post = payload;
    },
    [showSlider.rejected]: (state, { payload }) => {
      state.show = false;
    },
  }
});
export const { hideSlider } = mediaSlice.actions;
export default mediaSlice.reducer;
