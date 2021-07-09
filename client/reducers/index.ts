import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "@/reducers/user";
import post from "@/reducers/post";

const reducer = combineReducers({
  user: userSlice.reducer,
  post,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
