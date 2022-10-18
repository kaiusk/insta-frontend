import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import toastReducer from "./reducers/toastReducer";
import postReducer from "./reducers/postReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    toast: toastReducer,
    posts: postReducer
  }
});
export default store;
