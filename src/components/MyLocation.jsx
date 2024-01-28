/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import OverviewCard from "./OverviewCard";
import { useDispatch, useSelector } from "react-redux";
import { getForecast, getWeather } from "../redux/actions/fetches";
import { DotLoader } from "react-spinners";
const MyLocation = () => {
	const dispatch = useDispatch();
	const { actualWeather } = useSelector((state) => state.weather);
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
			{props.weather && (
				<>
					<h1 className="text-center">
						Attualmente ti trovi a {props.weather.name}
					</h1>
					<OverviewCard weather={props.weather} />
				</>
			) : (
				<h1>sto caricando</h1>
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
