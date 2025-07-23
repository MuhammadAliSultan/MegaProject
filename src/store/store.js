import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authslice";
const store=configureStore({
reducer:authReducer
})
export default store;