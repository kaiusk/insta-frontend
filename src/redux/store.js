import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import toastReducer from "./reducers/toastReducer";
import postReducer from "./reducers/postReducer";
import postUserReducer from "./reducers/postUserReducer";

const store = configureStore({
  reducer: {
    loginUser: userReducer,
    toast: toastReducer,
    posts: postReducer,
    postUser: postUserReducer
  }
});
export default store;
