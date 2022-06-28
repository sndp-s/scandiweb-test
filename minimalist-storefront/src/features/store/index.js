///////// libs /////////
import { configureStore } from "@reduxjs/toolkit";
///////// reducers /////////
import rootReducer from "./rootReducer";

const store = configureStore({ reducer: rootReducer });

export default store;
