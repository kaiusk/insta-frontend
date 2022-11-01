import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const getUserPosts = createAsyncThunk(
  "posts",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(
        "http://localhost:3001/api/v1/posts/overview/" + id
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

export const getPosts = createAsyncThunk(
  "userposts",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(
        "http://localhost:3001/api/v1/posts/user/" + id
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
      await api.post(
        "http://localhost:3001/api/v1/posts/like/" + id
      );
      return true;
    } catch (error) {
      return rejectWithValue("Laiki ei saa lisada :(");
    }
  }
);

export const unlikePost = createAsyncThunk(
  "posts/unLike",
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(
        "http://localhost:3001/api/v1/posts/like/" + id
      );
      return true;
    } catch (error) {
      return rejectWithValue("Laiki ei saa kustutda :(");
    }
  }
);

export const recommendPosts = createAsyncThunk(
  "posts/recommend",
  async ({ rejectWithValue }) => {
    try {
      const { data } = await api.get(
        "http://localhost:3001/api/v1/posts/recommend"
      );
      return data;
    } catch (error) {
      return rejectWithValue("Laiki ei saa lisada :(");
    }
  }
);

export const showSlider = createAsyncThunk(
    "posts/media",
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await api.get('http://localhost:3001/api/v1/posts/'+ id);
            return data;
        } catch (error) {
            return rejectWithValue("postitust ei leia :(");
        }
    }
);
