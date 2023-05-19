import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import showsReducer from "../features/showsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    shows: showsReducer,
  },
});
