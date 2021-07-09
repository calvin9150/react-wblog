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
