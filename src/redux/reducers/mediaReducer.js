import { createSlice } from "@reduxjs/toolkit";
import { addComm, showSlider } from "../actions/postActions";

const initialState = {
  show: false,
  post: [],
  commAdded: false
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
    // comment
    [addComm.pending]: state => {
      state.commAdded = false;
    },
    [addComm.fulfilled]: (state, { payload }) => {
      state.commAdded = true;
      //state.post = payload;
    },
    [addComm.rejected]: (state, { payload }) => {
      state.commAdded = false;
    },
  }
});
export const { hideSlider } = mediaSlice.actions;
export default mediaSlice.reducer;
