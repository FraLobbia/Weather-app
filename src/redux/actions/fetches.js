import { useDispatch } from "react-redux";
import { endLoading, startLoading } from "../reducers/loadingReducer";
import { token } from "../../assets/token";
import { setResponseQuery, storeForecast, storeWeather } from "./actions";

export const getCityData = (searchQuery) => {
	return async (dispatch, getState) => {
		dispatch(startLoading());

		const endpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5&appid=${token}`;
		try {
			const resp = await fetch(endpoint);
			if (resp.ok) {
				const response = await resp.json();
				dispatch(setResponseQuery(response));
				await dispatch(getWeather(response[0].lat, response[0].lon));
				await dispatch(getForecast(response[0].lat, response[0].lon));
				dispatch(endLoading());
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getWeather = (lat, lon) => {
	return async (dispatch, getState) => {
		const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${token}&units=metric&lang=it`;
		try {
			const resp = await fetch(endpoint);
			if (resp.ok) {
				const response = await resp.json();
				dispatch(storeWeather(response));
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getForecast = (lat, lon) => {
	return async (dispatch, getState) => {
		const endpoint = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${token}&units=metric&lang=it`;
		try {
			const resp = await fetch(endpoint);
			if (resp.ok) {
				const response = await resp.json();
				dispatch(storeForecast(response));
			}
		} catch (error) {
			console.log(error);
		}
	};
};
