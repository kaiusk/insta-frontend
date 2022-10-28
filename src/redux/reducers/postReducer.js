import { getPosts, getUserPosts, likePost, recommendPosts, unlikePost } from "../actions/postActions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  posts: [],
  discover: [],
  likeAdded: false,
  likeRemoved: false
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
    [getPosts.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    },
    [getPosts.rejected]: (state, { payload }) => {
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
    },
    // delete like from the posts
    [unlikePost.pending]: state => {
      state.loading = true;
      state.error = null;
      state.likeRemoved = false;
    },
    [unlikePost.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.likeRemoved = true;
    },
    [unlikePost.rejected]: (state, { payload }) => {
      state.loading = false;
      state.likeRemoved = false;
      state.error = payload;
    },
    // add like to the posts
    [recommendPosts.pending]: state => {
      state.loading = true;
      state.error = null;

    },
    [recommendPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.discover = payload;
    },
    [recommendPosts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.discover = [];
    }
  }
});

export default postSlice.reducer;
