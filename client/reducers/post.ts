import {
  addComment,
  loadJavascript,
  loadPost,
  loadPosts,
  loadTravel,
} from "./../actions/post";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { addPost } from "@/actions/post";

export interface Post {
  id: number | null;
  title: string | null;
  content: string | null;
  category: string | null;
}

const initialState = {
  mainPosts: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
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
      .addCase(loadPosts.pending, (state: { loadPostsLoading: boolean }) => {
        state.loadPostsLoading = true;
      })
      .addCase(loadPosts.fulfilled, (state, action: PayloadAction<any>) => {
        state.loadPostsLoading = false;
        state.loadPostsDone = true;
        state.mainPosts = action.payload.data;
      })
      .addCase(loadPosts.rejected, (state, action: PayloadAction<any>) => {
        state.loadPostsLoading = false;
        state.loadPostsError = action.payload;
      })
      .addCase(loadPost.pending, (state: { loadPostLoading: boolean }) => {
        state.loadPostLoading = true;
      })
      .addCase(loadPost.fulfilled, (state, action: PayloadAction<any>) => {
        state.loadPostLoading = false;
        state.loadPostDone = true;
        const arr: any = [];
        arr.push(action.payload.data);
        state.mainPosts = arr;
      })
      .addCase(loadPost.rejected, (state, action: PayloadAction<any>) => {
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
      })
      .addCase(addComment.pending, (state, action: PayloadAction) => {
        state.addCommentLoading = true;
        state.addCommentError = null;
      })
      .addCase(addComment.fulfilled, (state, action: PayloadAction<any>) => {
        state.addCommentLoading = false;
        const post = state.mainPosts.find(
          (i) => i.id === action.payload.PostId
        );
        state.addCommentDone = true;
        state.addCommentError = action.payload;
      })
      .addCase(addComment.rejected, (state, action: PayloadAction<any>) => {
        state.addCommentLoading = false;
        state.addCommentError = action.payload;
      });
  },
});

export default postSlice;
