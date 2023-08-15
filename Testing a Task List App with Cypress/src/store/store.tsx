import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../reducer/reducers";

export const store = configureStore({
  reducer: {
    storedList: todoSlice.reducer, // can be any name just used by useSelector hook
  },
});
