import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import toastReducer from "./reducers/toastReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    toast: toastReducer
  }
});
export default store;

/*import { createStore } from "redux";
import allReducers from "./reducers";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.getState();
export default store;
 */
