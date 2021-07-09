import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signup, signin } from "@/actions/user";

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
  signinError: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, () => {})
      .addCase(signup.fulfilled, (state) => {
        state.signupDone = true;
      })
      .addCase(signup.rejected, (state, action: PayloadAction<any>) => {
        state.signupError = action.payload;
      })
      .addCase(signin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signin.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user.email = action.payload.email;
        state.user.nickname = action.payload.nickname;
      })
      .addCase(signin.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.signinError = action.payload;
      });
  },
});

export default userSlice;
