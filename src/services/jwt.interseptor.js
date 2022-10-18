import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_ENDPOINT_AUTH;

const onRequest = config => {
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    if (config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return config;
};

const onRequestError = error => {
  return Promise.reject(error);
};

const onResponse = response => {
  return response;
};

const onResponseError = async error => {
  if (error.response) {
    // Access Token was expired
    if (error.response.status === 401 && error.message === "jwt expired") {
      try {
        const storedToken = JSON.parse(localStorage.getItem("token"));
        const rs = await axios.post(`${API_URL}/auth/refresh`, {
          refresh_token: storedToken.refresh_token
        });

        const { token, user } = rs.data;

        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(user));

        //return ;
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
  }
  return Promise.reject(error);
};

export const setupInterceptorsTo = axiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};
