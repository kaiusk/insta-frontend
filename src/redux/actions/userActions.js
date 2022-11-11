import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/users/login", {
        username,
        password,
      });
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
      const { data } = await api.get("/users/profile/" + id);
      return data[0];
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error);
      }
    }
  }
);

export const postUserProfile = createAsyncThunk(
  "puser/profile",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/users/profile/" + id);
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
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/users/follow/" + id);
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
export const unfollowUser = createAsyncThunk(
  "user/unfollow",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.delete("/users/follow/" + id);
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

export const updateUser = createAsyncThunk(
  "user/update",
  async ({ id, bio, name, profileImageUrl }, { rejectWithValue }) => {
    try {
      const { data } = await api.put("/users/" + id);
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
