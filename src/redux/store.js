import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

export const Store = configureStore({
  reducer: UserSlice,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
