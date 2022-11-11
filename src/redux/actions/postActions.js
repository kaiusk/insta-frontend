import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const getUserPosts = createAsyncThunk(
  "posts",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/posts/overview");
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
      const { data } = await api.get("/posts/user/" + id);
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
      await api.post("/posts/like/" + id);
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
      await api.delete("/posts/like/" + id);
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
      const { data } = await api.get("/posts/recommend");
      return data;
    } catch (error) {
      return rejectWithValue("Laiki ei saa lisada :(");
    }
  }
);

export const showSlider = createAsyncThunk(
  "posts/media",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/posts/" + id);
      return data;
    } catch (error) {
      return rejectWithValue("postitust ei leia :(");
    }
  }
);

export const addComm = createAsyncThunk(
  "posts/addComm",
  async ({ id, text }, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/posts/comments/" + id, {
        comment: text,
      });
      return data;
    } catch (error) {
      return rejectWithValue("Kommentaari ei saanud lisada :(");
    }
  }
);

export const addPost = createAsyncThunk(
  "posts/addPost",
  async ({ location, files }, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/posts", {
        locationName: location,
        files: files,
      });
      /*if (data && data.affectedRows === 1) {
        const postId = data.insertId;
        for (const f of files) {
          const file = await api.post("/posts/media/" + postId, {
            fileTypeId: 1,
            fileUrl: f.file,
          });
        }
      }*/
      return data;
    } catch (error) {
      return rejectWithValue("Kommentaari ei saanud lisada :(");
    }
  }
);
