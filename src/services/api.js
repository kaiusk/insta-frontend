import axios from "axios";
import { setupInterceptorsTo } from "./jwt.interseptor";

const api = setupInterceptorsTo(
  axios.create({
    baseURL: "http://localhost:3001/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
  })
);

export default api;
