// src/reducers/index.js
import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import forecastReducer from "./forecastReducer";

const rootReducer = combineReducers({
	weather: weatherReducer,
	forecast: forecastReducer,
});

export default rootReducer;
