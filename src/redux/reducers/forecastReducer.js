// src/reducers/userReducer.js
const forecastReducer = (state = { forecast: null }, action) => {
	switch (action.type) {
		case "STORE_FORECAST":
			return { forecast: action.payload };
		default:
			return state;
	}
};

export default forecastReducer;
