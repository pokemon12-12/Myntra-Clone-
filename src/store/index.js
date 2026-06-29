import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchingDataStatusSlice from "./fetchStatus";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchDataStatus: fetchingDataStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
