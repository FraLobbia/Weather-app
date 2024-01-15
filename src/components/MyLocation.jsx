import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import OverviewCard from "./OverviewCard";
import { token } from "../assets/token";
import { useNavigate } from "react-router";
import { storeForecast, storeWeather } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const MyLocation = (props) => {
	const [searchQuery, setSearchQuery] = useState("");
	const dispatch = useDispatch();

	// const navigate = useNavigate();

	const fetchCityData = async () => {
		const endpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5&appid=${token}`;
		try {
			const resp = await fetch(endpoint);
			if (resp.ok) {
				const response = await resp.json();
				fetchWeather(response[0].lat, response[0].lon);
				fetchWeatherForecast(response[0].lat, response[0].lon);
				console.log("dati città", response);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const fetchWeather = async (lat, lon) => {
		const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${token}&units=metric&lang=it`;
		try {
			const resp = await fetch(endpoint);
			if (resp.ok) {
				const response = await resp.json();
				// props.setWeather(response);
				dispatch(storeWeather(response));
				console.log("dati weather", response);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const fetchWeatherForecast = async (lat, lon) => {
		const endpoint = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${token}&units=metric&lang=it`;
		try {
			const resp = await fetch(endpoint);
			if (resp.ok) {
				const response = await resp.json();
				// props.setForecast(response);
				dispatch(storeForecast(response));
				console.log("dati forecast", response);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;
					fetchWeather(latitude, longitude);
					fetchWeatherForecast(latitude, longitude);
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
			{props.weather && (
				<>
					<h1 className="text-center">
						Attualmente ti trovi a {props.weather.name}
					</h1>
					<OverviewCard weather={props.weather} />
				</>
			)}
		</>
		// <Container>
		// 	<Row className="flex-column align-items-center g-3">
		// 		<Col xs={12} md={4} className="text-center">
		// 			<Form.Group>
		// 				<Form.Control
		// 					type="search"
		// 					placeholder="Search a location"
		// 					value={searchQuery}
		// 					onKeyUp={(e) => {
		// 						if (e.key === "Enter") {
		// 							fetchCityData();
		// 						}
		// 					}}
		// 					onChange={(e) => setSearchQuery(e.target.value)}
		// 				/>
		// 			</Form.Group>
		// 		</Col>
		// 	</Row>
		// </Container>
	);
};

export default MyLocation;
