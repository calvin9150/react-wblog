import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signup, signin, logout } from "@/actions/user";

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
  signupLoading: false,
  signupDone: false,
  signupError: false,
  signinLoading: false,
  signinDone: false,
  signinError: false,
  logoutLoading: false,
  logoutDone:false,
  logoutError: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, ((state:{signupLoading:boolean}) => {
        state.signupLoading = true;
      })
      .addCase(signup.fulfilled, ((state:{signupLoading:boolean, signupDone:boolean}) => {
          state.signupLoading = false;
        state.signupDone = true;
      })
      .addCase(signup.rejected, (state, action: PayloadAction<any, string>) => {
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
      .addCase(signin.rejected, (state, action: PayloadAction<any, string>) => {
        state.isLoading = false;
        state.signinError = action.payload;
      })
      .addCase(logout.pending, () => {})
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action: PayloadAction<any, string>) => {
        state.logoutError = action.payload;
      });
  },
});

export default userSlice;
