import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import toastReducer from "./reducers/toastReducer";
import postReducer from "./reducers/postReducer";
import postUserReducer from "./reducers/postUserReducer";
import mediaReducer from "./reducers/mediaReducer";
/*
  1- sisseloginud kasutaja [SLK] andmed - jwt'st = OK /login
  2- SLK - näitajad (jälgmised, postituste arv)  - OK /users/counters/id
  3- kasutaja andmed (suvaline kasutaja id järgi) - nimi, pilt, jne, näitajad, kasjälgin? - OK /users/profile/id
  4- kasutaja postitutused: id, esimene pilt, piltidearv, asukoht, like, kommentaare, kaslaigin?, autorId, nimi, pilt
 */
const store = configureStore({
  reducer: {
    loginUser: userReducer,
    toast: toastReducer,
    posts: postReducer,
    postUser: postUserReducer,
    media: mediaReducer
  }
});
export default store;
