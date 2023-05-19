import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchListShows: [],
};

export const showsSlice = createSlice({
  name: "shows",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions that will be dispatched
  reducers: {
    addShowToWatchList: (state, action) => {
      state.watchListShows.push(action.payload);
    },
    removeShowFromWatchList: (state, action) => {
      state.watchListShows = state.watchListShows.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addShowToWatchList, removeShowFromWatchList } =
  showsSlice.actions;
//used to get values out of the global store(userslice)
export const selectShows = (state) => state.shows.watchListShows;
export default showsSlice.reducer;
