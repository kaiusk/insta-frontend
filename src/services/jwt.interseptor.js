const onRequest = (config) => {
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    if (config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return config;
};

const onRequestError = (error) => {
  return Promise.reject(error);
};

const onResponse = (response) => {
  return response;
};

const onResponseError = async (error) => {
  if (error.response) {
    // Access Token was expired
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return Promise.reject(error);
    }
  }
  return Promise.reject(error);
};

export const setupInterceptorsTo = (axiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};
