import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import userSlice from "@/reducers/user";
import postSlice from "@/reducers/post";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default:
      const combinedReducer = combineReducers({
        user: userSlice.reducer,
        post: postSlice.reducer,
      });
      return combinedReducer(state, action);
  }
};

// const reducer = combineReducers({
//   index: (state = {}, action) => {
//     switch (action.type) {
//       case HYDRATE:
//         console.log("HYDRATE", action);
//         return action.payload;
//       default:
//         return state;
//     }
//   },
//   user: userSlice.reducer,
//   post: postSlice.reducer,
// });

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
