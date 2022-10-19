import { registerUser, userLogin, userProfile } from "../actions/userActions";
import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

// initialize userToken from local storage
const userToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const userInfo = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {};

const initialState = {
  loading: false,
  userInfo,
  userToken, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
  profile: {},

};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: state => {
      state.userInfo = {};
      state.profile = {};
      state.userToken = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  },
  extraReducers: {
    // login user
    [userLogin.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      const tokenContent = jwt_decode(payload.token);
      localStorage.setItem("user", JSON.stringify(tokenContent.data));
      state.loading = false;
      state.userInfo = tokenContent.data;
      state.userToken = payload.token;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // register user
    [registerUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // user profile
    [userProfile.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [userProfile.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.profile = payload;
    },
    [userProfile.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    }
  }
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
