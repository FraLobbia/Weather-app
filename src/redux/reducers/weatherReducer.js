import { STORE_FORECAST, STORE_WEATHER } from "../actions/actions";

const InitialState = {
	actualWeather: null,
	forecast: null,
};

const weatherReducer = (state = InitialState, action) => {
	switch (action.type) {
		case STORE_WEATHER:
			return { weather: action.payload };
		case STORE_FORECAST:
			return { forecast: action.payload };
		default:
			return state;
	}
};

export default weatherReducer;
