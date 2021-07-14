import { loadJavascript, loadPosts, loadTravel } from "./../actions/post";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { addPost } from "@/actions/post";

export interface Post {
  title: string | null;
  content: string | null;
  category: string | null;
}

const initialState = {
  mainPosts: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadJavascriptLoading: false,
  loadJavascriptDone: false,
  loadJavascriptError: null,
  loadTravelLoading: false,
  loadTravelDone: false,
  loadTravelError: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state: { addPostLoading: boolean }) => {
        state.addPostLoading = true;
      })
      .addCase(
        addPost.fulfilled,
        (state: { addPostLoading: boolean; addPostDone: boolean }) => {
          state.addPostLoading = false;
          state.addPostDone = true;
        }
      )
      .addCase(addPost.rejected, (state, action: PayloadAction<any>) => {
        state.addPostError = action.payload;
      })
      .addCase(loadPosts.pending, (state: { loadPostLoading: boolean }) => {
        state.loadPostLoading = true;
      })
      .addCase(loadPosts.fulfilled, (state, action: PayloadAction<any>) => {
        state.loadPostLoading = false;
        state.loadPostDone = true;
        state.mainPosts = action.payload.data;
      })
      .addCase(loadPosts.rejected, (state, action: PayloadAction<any>) => {
        state.loadPostLoading = false;
        state.loadPostError = action.payload;
      })
      .addCase(
        loadJavascript.pending,
        (state: { loadJavascriptLoading: boolean }) => {
          state.loadJavascriptLoading = true;
        }
      )
      .addCase(
        loadJavascript.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loadJavascriptLoading = false;
          state.loadJavascriptDone = true;
          state.mainPosts = action.payload.data;
        }
      )
      .addCase(loadJavascript.rejected, (state, action: PayloadAction<any>) => {
        state.loadJavascriptLoading = false;
        state.loadJavascriptError = action.payload;
      })
      .addCase(loadTravel.pending, (state: { loadTravelLoading: boolean }) => {
        state.loadTravelLoading = true;
      })
      .addCase(loadTravel.fulfilled, (state, action: PayloadAction<any>) => {
        state.loadTravelLoading = false;
        state.loadTravelDone = true;
        state.mainPosts = action.payload.data;
      })
      .addCase(loadTravel.rejected, (state, action: PayloadAction<any>) => {
        state.loadTravelLoading = false;
        state.loadTravelError = action.payload;
      });
  },
});

export default postSlice;
