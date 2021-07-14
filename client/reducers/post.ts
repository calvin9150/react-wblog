import { loadPosts } from "./../actions/post";
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
      });
  },
});

export default postSlice;
