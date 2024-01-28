import {
	QUERY,
	STORE_FORECAST,
	STORE_RESPONSE_QUERY,
	STORE_WEATHER,
} from "../actions/actions";

const InitialState = {
	query: "",
	responseQuery: null,
	weatherQuery: {
		actualWeather: null,
		forecast: null,
	},
};

const queryReducer = (state = InitialState, action) => {
	switch (action.type) {
		case QUERY:
			return { ...state, query: action.payload };
		case STORE_RESPONSE_QUERY:
			return { ...state, responseQuery: action.payload };
		case STORE_WEATHER:
			return {
				...state,
				weatherQuery: {
					...state.weatherQuery,
					actualWeather: action.payload,
				},
			};
		case STORE_FORECAST:
			return {
				...state,
				weatherQuery: {
					...state.weatherQuery,
					forecast: action.payload,
				},
			};
		default:
			return state;
	}
};

export default queryReducer;
