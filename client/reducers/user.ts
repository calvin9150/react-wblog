import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signup, signin, logout, loadUser } from "@/actions/user";

export interface User {
  id: number | null;
  email: string | null;
  nickname: string | null;
  password: string | null;
}

const initialState = {
  user: <User>{
    email: "",
    nickname: "",
    password: "",
  },
  signupLoading: false,
  signupDone: false,
  signupError: null,
  signinLoading: false,
  signinDone: false,
  signinError: null,
  logoutLoading: false,
  logoutDone: false,
  logoutError: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state: { signupLoading: boolean }) => {
        state.signupLoading = true;
      })
      .addCase(
        signup.fulfilled,
        (state: { signupLoading: boolean; signupDone: boolean }) => {
          state.signupLoading = false;
          state.signupDone = true;
        }
      )
      .addCase(signup.rejected, (state, action: PayloadAction<any, string>) => {
        state.signupError = action.payload;
      })
      .addCase(signin.pending, (state: { signinLoading: boolean }) => {
        state.signinLoading = true;
      })
      .addCase(signin.fulfilled, (state, action: PayloadAction<User>) => {
        state.signinLoading = false;
        state.signinDone = true;
        state.user.email = action.payload.email;
        state.user.nickname = action.payload.nickname;
        state.user.id = action.payload?.id;
      })
      .addCase(signin.rejected, (state, action: PayloadAction<any, string>) => {
        state.signinLoading = false;
        state.signinError = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.logoutLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.logoutLoading = false;
        state.signinDone = false;
      })
      .addCase(logout.rejected, (state, action: PayloadAction<any, string>) => {
        state.logoutLoading = false;
        state.logoutError = action.payload;
      })
      .addCase(loadUser.pending, (state) => {
        state.loadUserLoading = true;
        state.loadUserDone = false;
      })
      .addCase(loadUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loadUserLoading = false;
        state.loadUserDone = true;
        state.user.email = action.payload?.email;
        state.user.nickname = action.payload?.nickname;
        state.user.id = action.payload?.id;
      })
      .addCase(
        loadUser.rejected,
        (state, action: PayloadAction<any, string>) => {
          state.loadUserLoading = false;
          state.loadUserDone = false;
          state.loadUserError = action.payload;
        }
      );
  },
});

export default userSlice;
