import { userProfile } from "../actions/userActions";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  pUserInfo: {},
  error: null,
  success: false, // for monitoring the registration process.
  pProfile: null
};

const postUserSlice = createSlice({
  name: "postuser",
  initialState,
  reducers: {
  },
  extraReducers: {
    // user profile
    [userProfile.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [userProfile.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.pUserInfo = payload;
    },
    [userProfile.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    }
  }
});
export default postUserSlice.reducer;
