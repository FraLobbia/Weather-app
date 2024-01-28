export const STORE_WEATHER = "STORE_WEATHER";
export const STORE_FORECAST = "STORE_FORECAST";
export const QUERY = "QUERY";
export const STORE_RESPONSE_QUERY = "STORE_RESPONSE_QUERY";

export const storeWeather = (weather) => ({
	type: STORE_WEATHER,
	payload: weather,
});
export const storeForecast = (forecast) => ({
	type: STORE_FORECAST,
	payload: forecast,
});
export const setQuery = (query) => ({
	type: QUERY,
	payload: query,
});
export const setResponseQuery = (response) => ({
	type: STORE_RESPONSE_QUERY,
	payload: response,
});
