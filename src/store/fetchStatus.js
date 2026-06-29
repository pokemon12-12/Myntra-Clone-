import { createSlice } from "@reduxjs/toolkit";
const fetchingDataStatusSlice = createSlice({
  name: "items",
  initialState: {
    fetchDone: false, //at initial stage it has not returned the value
    currentlyFetching: false,
  },
  reducers: {
    markFetched: (state) => {
      state.fetchDone = true;
      state.currentlyFetching = false;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingDone: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchingStatusAction = fetchingDataStatusSlice.actions;
export default fetchingDataStatusSlice;
