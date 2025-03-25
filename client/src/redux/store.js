import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import authReducer from "./authSlice";
import taskReducer from "./taskSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
