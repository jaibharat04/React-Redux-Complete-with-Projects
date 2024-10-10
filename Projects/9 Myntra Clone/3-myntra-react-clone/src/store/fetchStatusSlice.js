import { createSlice } from "@reduxjs/toolkit";

export const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, // false: PENDING and true: DONE
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true; // Mutating the state directly
    },
    markFetchingStart: (state) => {
      state.currentlyFetching = true; // Mutating the state directly
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false; // Mutating the state directly
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;

