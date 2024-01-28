export const STORE_WEATHER = "STORE_WEATHER";
export const STORE_WEATHER_MY_POSITION = "STORE_WEATHER_MY_POSITION";
export const STORE_FORECAST = "STORE_FORECAST";
export const STORE_FORECAST_MY_POSITION = "STORE_FORECAST_MY_POSITION";
export const QUERY = "QUERY";
export const STORE_RESPONSE_QUERY = "STORE_RESPONSE_QUERY";
export const STORE_POSITION = "STORE_POSITION";
export const FETCH_POSITION = "FETCH_POSITION";

export const storeWeather = (weather) => ({
	type: STORE_WEATHER,
	payload: weather,
});
export const storeWeatherMyPosition = (weather) => ({
	type: STORE_WEATHER_MY_POSITION,
	payload: weather,
});
export const storeForecast = (forecast) => ({
	type: STORE_FORECAST,
	payload: forecast,
});
export const storeForecastMyPosition = (forecast) => ({
	type: STORE_FORECAST_MY_POSITION,
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
export const storePosition = ({ lat, lon }) => ({
	type: STORE_POSITION,
	payload: { lat, lon },
});

export const fetchMyPosition = (boolean) => ({
	type: FETCH_POSITION,
	payload: boolean,
});
