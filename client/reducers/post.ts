import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { addPost } from "@/actions/post";

export interface Post {
  title: string | null;
  content: string | null;
  category: string | null;
}

const initialState = {
  post: <Post>{
    title: null,
    content: null,
    category: null,
  },
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
      .addCase(
        addPost.rejected,
        (state, action: PayloadAction<any, string>) => {
          state.addPostError = action.payload;
        }
      );
  },
});

export default postSlice;
