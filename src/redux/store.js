import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import toastReducer from "./reducers/toastReducer";
import postReducer from "./reducers/postReducer";
import postUserReducer from "./reducers/postUserReducer";
import mediaReducer from "./reducers/mediaReducer";

const store = configureStore({
  reducer: {
    loginUser: userReducer,
    toast: toastReducer,
    posts: postReducer,
    postUser: postUserReducer,
    media: mediaReducer,
  },
});
export default store;
