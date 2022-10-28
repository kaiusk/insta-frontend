import { createSlice } from "@reduxjs/toolkit";
import { getComments, showSlider } from "../actions/postActions";

const initialState = {
  show: false,
  post: [],
  comments: []
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    //showSlider: state => {
      //state.message = action.payload;
    //  state.show = true;
    //},
    hideSlider: state => {
      state.show = false;
    },
    //setVariant(state, action) {
    //  state.variant = action.payload;
    //}
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
    // get comments
    [getComments.pending]: state => {
      state.comments = []
    },
    [getComments.fulfilled]: (state, { payload }) => {
      state.comments = payload
    },
    [getComments.rejected]: (state, { payload }) => {
      state.comments = []
    },
  }
});
export const { hideSlider } = mediaSlice.actions;
export default mediaSlice.reducer;
