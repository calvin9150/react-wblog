import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signup } from "@/actions/user";

export interface User {
  email: string;
  nickname: string;
  password: string;
}

const initialState = {
  user: {
    email: "",
    nickname: "",
    password: "",
  },
  isLoading: false,
  isLoggedIn: false,
  signupDone: false,
  signupError: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state, action) => {})
      .addCase(signup.fulfilled, (state, action) => {
        state.signupDone = true;
      })
      .addCase(signup.rejected, (state, action: PayloadAction<any>) => {
        state.signupError = action.payload;
      });
  },
});

export default userSlice;
