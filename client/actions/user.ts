import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { User } from "@/reducers/user";

axios.defaults.baseURL = "http://localhost:3005";
axios.defaults.withCredentials = true;

export const signup = createAsyncThunk(
  "user/signup",
  async (data: User, { rejectWithValue }) => {
    try {
      const response = await axios.post("/user", data);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const signin = createAsyncThunk(
  "user/signin",
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/user/login", data);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const logout = createAsyncThunk("/user/logout", async () => {
  await axios.post("/logout");
});
