// src/reducers/cartReducer.js
const weatherReducer = (state = { weather: null }, action) => {
	switch (action.type) {
		case "STORE_WEATHER":
			return { weather: action.payload };
		default:
			return state;
	}
};

export default weatherReducer;
