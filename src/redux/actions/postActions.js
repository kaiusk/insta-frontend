import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const getUserPosts = createAsyncThunk(
  "posts",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(
        "http://localhost:3001/api/v1/posts/" + id
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

export const likePost = createAsyncThunk(
  "posts/addLike",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "http://localhost:3001/api/v1/posts/like/" + id
      );
      return true;
    } catch (error) {
      //console.log(error);
      return rejectWithValue("Laiki ei saa lisada :(");
    }
  }
);