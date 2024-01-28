import { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import OverviewCard from "./OverviewCard";
import { useDispatch, useSelector } from "react-redux";
import { getForecast, getWeather } from "../redux/actions/fetches";
const MyLocation = () => {
	const dispatch = useDispatch();
	const { actualWeather, forecast } = useSelector((state) => state.weather);
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;
					dispatch(getWeather(latitude, longitude));
					dispatch(getForecast(latitude, longitude));
					console.log(
						`Coordinate attuali: ${latitude}, ${longitude}`
					);
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
					<OverviewCard />
				</>
			) : (
				<h1>sto caricando</h1>
			)}
		</>
	);
};

export default MyLocation;
