//actions/index.js

export const storeWeather = (weather) => ({
	type: "STORE_WEATHER",
	payload: weather,
});
export const storeForecast = (forecast) => ({
	type: "STORE_FORECAST",
	payload: forecast,
});
