// src/store/index.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "../reducers/loadingReducer";
import queryReducer from "../reducers/queryReducer";

import positionReducer from "../reducers/positionReducer";

// qui assemblo nella variabile "rootReducer" tutti i reducer
const rootReducer = combineReducers({
	loading: loadingReducer,
	query: queryReducer,
	actualPosition: positionReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
