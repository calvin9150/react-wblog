import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { User } from "@/reducers/user";
import router from "next/router";

axios.defaults.baseURL = "http://localhost:3005";
axios.defaults.withCredentials = true;

export const signup = createAsyncThunk(
  "user/signup",
  async (data: User, { rejectWithValue }) => {
    try {
      const result = await axios.post("/user", data);
      return result.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.result.data);
    }
  }
);

export const signin = createAsyncThunk(
  "user/signin",
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const result = await axios.post("/user/login", data);
      console.log("로그인");
      console.log(result.data);
      router.back();
      return result.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.result.data);
    }
  }
);

export const logout = createAsyncThunk("/user/logout", async () => {
  try {
    const result = await axios.post("/user/logout");
    return result.data;
  } catch (err) {
    console.error(err);
  }
});

export const loadUser = createAsyncThunk("/user/load", async () => {
  try {
    const result = await axios.get("/user");
    console.log("유저로드");
    console.log(result.data);
    return result.data;
  } catch (err) {
    return console.log(err);
  }
});
