import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import userSlice from "@/reducers/user";
import post from "@/reducers/post";

const reducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return action.payload;
      default:
        return state;
    }
  },
  user: userSlice.reducer,
  post,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
