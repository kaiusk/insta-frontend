import { getUserPosts, likePost } from "../actions/postActions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  posts: [],
  likeAdded: false
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    // get user posts
    [getUserPosts.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getUserPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    },
    [getUserPosts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // add like to the posts
    [likePost.pending]: state => {
      state.loading = true;
      state.error = null;
      state.likeAdded = false;
    },
    [likePost.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.likeAdded = true;
      //state.posts = payload;
    },
    [likePost.rejected]: (state, { payload }) => {
      state.loading = false;
      state.likeAdded = false;
      state.error = payload;
    }
  }
});

export default postSlice.reducer;
