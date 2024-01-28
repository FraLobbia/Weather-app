/* eslint-disable react-hooks/exhaustive-deps */
import "./myLocation.scss";
import { useEffect } from "react";
import OverviewCard from "../../components/OverviewCard";
import { useDispatch, useSelector } from "react-redux";
import { getForecast, getWeather } from "../../redux/actions/fetches";
import { DotLoader } from "react-spinners";
import { fetchMyPosition, storePosition } from "../../redux/actions/actions";
import FiveDayForecast from "../../components/FiveDayForecast";
const MyLocation = () => {
	const dispatch = useDispatch();
	const { actualWeather, forecast } = useSelector(
		(state) => state.actualPosition
	);
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					console.log(position);
					dispatch(
						storePosition({
							lat: position.coords.latitude,
							lon: position.coords.longitude,
						})
					);
					await dispatch(fetchMyPosition(true));
					const lat = position.coords.latitude;
					const lon = position.coords.longitude;
					await dispatch(getWeather(lat, lon));
					await dispatch(getForecast(lat, lon));
					dispatch(fetchMyPosition(false));
				},
				(error) => {
					console.error(
						`Errore durante l'ottenimento delle coordinate: ${error.message}`
					);
				}
			);
		} else {
			console.error("Geolocalizzazione non supportata dal tuo browser");
		}
	}, []);

	return (
		<>
			{actualWeather ? (
				<>
					<h1 className="text-center">
						Attualmente ti trovi a {actualWeather.name}
					</h1>
					<OverviewCard weather={actualWeather} />
					<FiveDayForecast forecast={forecast} />
				</>
			) : (
				<DotLoader color="#FFD201" className="mx-auto mt-5" />
			)}
		</>
	);
};

export default MyLocation;
