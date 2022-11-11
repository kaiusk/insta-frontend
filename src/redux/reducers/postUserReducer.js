import { postUserProfile } from "../actions/userActions";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  pUserInfo: {},
  error: null,
  success: false, // for monitoring the registration process.
  //pProfile: null
};

const postUserSlice = createSlice({
  name: "postuser",
  initialState,
  reducers: {
  },
  extraReducers: {
    // user profile
    [postUserProfile.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [postUserProfile.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.pUserInfo = payload;
    },
    [postUserProfile.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    }
  }
});
export default postUserSlice.reducer;
