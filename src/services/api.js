import axios from "axios";
import { setupInterceptorsTo } from "./jwt.interseptor";

const api = setupInterceptorsTo(
    axios.create({
        baseURL: process.env.API_ENDPOINT,
        headers: {
            "Content-Type": "application/json",
        },
    })
);

export default api;