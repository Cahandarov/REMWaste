import { configureStore } from "@reduxjs/toolkit";

import routerReducer from "../pages/routerSlice";
import skipReducer from "../pages/select/selectSlice";

export const store = configureStore({
  reducer: {
    page: routerReducer,
    selectedSkip: skipReducer,
  },
});
