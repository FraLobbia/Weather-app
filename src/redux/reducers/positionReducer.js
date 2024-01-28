import {
	FETCH_POSITION,
	STORE_FORECAST_MY_POSITION,
	STORE_POSITION,
	STORE_WEATHER_MY_POSITION,
} from "../actions/actions";

const InitialState = {
	position: {
		lat: null,
		lon: null,
	},
	fetchMyPosition: false,
	actualWeather: null,
	forecast: null,
};

const positionReducer = (state = InitialState, action) => {
	switch (action.type) {
		case STORE_POSITION:
			return {
				...state,
				position: {
					lat: action.payload.lat,
					lon: action.payload.lon,
				},
			};
		case FETCH_POSITION:
			return {
				...state,
				fetchMyPosition: action.payload,
			};
		case STORE_WEATHER_MY_POSITION:
			return {
				...state,
				actualWeather: action.payload,
			};
		case STORE_FORECAST_MY_POSITION:
			return {
				...state,
				forecast: action.payload,
			};
		default:
			return state;
	}
};

export default positionReducer;
