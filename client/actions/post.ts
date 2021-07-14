import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Post } from "@/reducers/post";

axios.defaults.baseURL = "http://localhost:3005";
axios.defaults.withCredentials = true;

export const addPost = createAsyncThunk(
  "post/addpost",
  async (data: Post, { rejectWithValue }) => {
    try {
      return await axios.post("/post", data);
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.result.data);
    }
  }
);

export const loadPosts = createAsyncThunk("post/loadposts", async () => {
  try {
    const result = await axios.get("/posts");
    return result;
  } catch (err) {
    console.error(err);
  }
});

export const loadJavascript = createAsyncThunk(
  "post/loadjavascript",
  async () => {
    try {
      const result = await axios.get("/posts/javascript");
      return result;
    } catch (err) {
      console.error(err);
    }
  }
);

export const loadTravel = createAsyncThunk("post/loadtravel", async () => {
  try {
    const result = await axios.get("/posts/travel");
    return result;
  } catch (err) {
    console.error(err);
  }
});
