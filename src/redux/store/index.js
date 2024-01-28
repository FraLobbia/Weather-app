// src/store/index.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../reducers/weatherReducer";
import { loadingReducer } from "../reducers/loadingReducer";
import queryReducer from "../reducers/queryReducer";

// qui assemblo nella variabile "rootReducer" tutti i reducer
const rootReducer = combineReducers({
	weather: weatherReducer,
	loading: loadingReducer,
	query: queryReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
