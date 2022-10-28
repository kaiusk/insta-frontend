import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../services/api";

export const registerUser = createAsyncThunk(
  // action type string
  "user/register",
  // callback function
  async ({ firstName, email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      // make request to backend
      await axios.post(
        "/api/user/register",
        { firstName, email, password },
        config
      );
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
//In the code block above, we've taken the values from the register form and made a POST request to the register route using Axios. In the event of an error, thunkAPI.rejectWithValue sends the custom error message from the backend as a payload to the reducer. You may notice that the register API is called without referencing the server's base URL. This is possible with the proxy configuration existing in frontend/package.json.

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/v1/users/login",
        {
          username,
          password
        }
      );
      // store user's token in local storage
      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userProfile = createAsyncThunk(
  "user/profile",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(
        "http://localhost:3001/api/v1/users/profile/" + id
      );
      return data[0];
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const postUserProfile = createAsyncThunk(
  "puser/profile",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(
        "http://localhost:3001/api/v1/users/profile/" + id
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const followUser = createAsyncThunk(
    "user/follow",
    async (id , {rejectWithValue}) => {
        try {
            const {data} = await api.post(
                "http://localhost:3001/api/v1/users/follow/" + id
            );
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)
export const unfollowUser = createAsyncThunk(
    "user/unfollow",
    async (id , {rejectWithValue}) => {
        try {
            const {data} = await api.delete(
                "http://localhost:3001/api/v1/users/follow/" + id
            );
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)
/*export const userCounters = createAsyncThunk(
  "user/counters",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(
        "http://localhost:3001/api/v1/users/counters/" + id
      );
      return data[0];
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);*/
