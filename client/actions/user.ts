import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import router from "next/router";

import { User } from "@/reducers/user";

axios.defaults.baseURL = "http://localhost:3005";
axios.defaults.withCredentials = true;

export const signup = createAsyncThunk(
  "user/signup",
  async (data: User, { rejectWithValue }) => {
    try {
      const result = await axios.post("/user", data);
      router.back();
      alert("회원가입이 완료되었습니다.");
      return result.data;
    } catch (err) {
      alert(err.response.data);
      return rejectWithValue(err.response.data);
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
      router.push("/");
      return result.data;
    } catch (err) {
      alert("이메일 또는 비밀번호가 틀렸습니다.");
      return rejectWithValue(err.response.data);
    }
  }
);

export const logout = createAsyncThunk("/user/logout", async () => {
  try {
    const result = await axios.post("/user/logout");
    alert("로그아웃 되었습니다.");
    window.location.reload();
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
