import { setLoading } from "../reducers/loadingReducer";
import { token } from "../../assets/token";
import {
	setResponseQuery,
	storeForecast,
	storeForecastMyPosition,
	storeWeather,
	storeWeatherMyPosition,
} from "./actions";

export const getCityData = (searchQuery) => {
	return async (dispatch, getState) => {
		dispatch(setLoading(true));

		const endpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5&appid=${token}`;
		try {
			const resp = await fetch(endpoint);
			if (resp.ok) {
				const response = await resp.json();
				dispatch(setResponseQuery(response));
				await dispatch(getWeather(response[0].lat, response[0].lon));
				await dispatch(getForecast(response[0].lat, response[0].lon));
				dispatch(setLoading(false));
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getWeather = (lat, lon) => {
	return async (dispatch, getState) => {
		const fetchPosition = getState().actualPosition.fetchPosition;
		const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${token}&units=metric&lang=it`;
		try {
			const resp = await fetch(endpoint);

			if (resp.ok) {
				const response = await resp.json();
				if (fetchPosition) {
					dispatch(storeWeatherMyPosition(response));
				} else {
					dispatch(storeWeather(response));
				}
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getForecast = (lat, lon) => {
	return async (dispatch, getState) => {
		const fetchPosition = getState().actualPosition.fetchPosition;
		const endpoint = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${token}&units=metric&lang=it`;
		try {
			const resp = await fetch(endpoint);

			if (resp.ok) {
				const response = await resp.json();
				if (fetchPosition) {
					dispatch(storeForecastMyPosition(response));
				} else {
					dispatch(storeForecast(response));
				}
			}
		} catch (error) {
			console.log(error);
		}
	};
};
