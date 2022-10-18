import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  variant: "primary",
  message: ""
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    show(state, action) {
      state.message = action.payload;
      state.show = true;
    },
    hide: state => {
      state.show = false;
    },
    setVariant(state, action) {
      state.variant = action.payload;
    }
  },
  extraReducers: {}
});
export const { show, hide, setVariant } = toastSlice.actions;
export default toastSlice.reducer;
