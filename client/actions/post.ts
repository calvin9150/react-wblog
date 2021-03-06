import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Post } from "@/reducers/post";
import router from "next/router";

axios.defaults.baseURL = "http://localhost:3005";
axios.defaults.withCredentials = true;

export const addPost = createAsyncThunk(
  "post/addpost",
  async (data: Post, { rejectWithValue }) => {
    try {
      await axios.post("/post", data);
      return router.push("/");
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.result.data);
    }
  }
);

export const deletePost = createAsyncThunk(
  "delete/deletepost",
  async (data: any, { rejectWithValue }) => {
    try {
      const result = await axios.delete(`/post/${data.id}`, data);
      return result;
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

export const loadPost = createAsyncThunk(
  "post/loadpost",
  async (data: any, { rejectWithValue }) => {
    try {
      const result = await axios.post(`/post/${data.postId}/post`, data);
      return result;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.result.data);
    }
  }
);

export const addComment = createAsyncThunk(
  "post/addcomment",
  async (data: any, { rejectWithValue }) => {
    try {
      const result = await axios.post(`/post/${data.postId}/comment`, data);
      // window.location.reload();
      return result;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.result.data);
    }
  }
);

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
