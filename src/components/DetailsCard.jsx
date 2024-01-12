import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router";
import { token } from "../assets/token";

function DetailsCard() {
	const params = useParams();
	const [weather, setWeather] = useState(null);
	const kelvin = 273.15;

	const fetchData = async (lat, lon) => {
		const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${token}`;
		try {
			const resp = await fetch(endpoint);
			if (resp.ok) {
				const response = await resp.json();
				setWeather(response);
				console.log(response);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData(params.lat, params.lon);
		// const city = weather.name;
		// console.log(city);
		// const actualTemperature = parseFloat(
		// 	(weather.main.temp - kelvin).toFixed(1)
		// );
		// const actualMeteo = weather.weather[0].main;
		// const actualMeteoDescription = weather.weather[0].description;
		// const tempMin = parseFloat((weather.main.temp_min - kelvin).toFixed(1));
		// const tempMax = parseFloat((weather.main.temp_max - kelvin).toFixed(1));
	}, []);

	useEffect(() => {
		// if (weather) {
		// 	const city = weather.name;
		// 	console.log(city);
		// 	const actualTemperature = parseFloat(
		// 		(weather.main.temp - kelvin).toFixed(1)
		// 	);
		// 	const actualMeteo = weather.weather[0].main;
		// 	const actualMeteoDescription = weather.weather[0].description;
		// 	const tempMin = parseFloat(
		// 		(weather.main.temp_min - kelvin).toFixed(1)
		// 	);
		// 	const tempMax = parseFloat(
		// 		(weather.main.temp_max - kelvin).toFixed(1)
		// 	);
		// }
	}, [weather]);

	return (
		<Container>
			<Row className=" justify-content-center">
				<Col xs={12} md={6}>
					<Card className="text-center">
						{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
						<Card.Body>
							<Card.Title className="fs-3">
								{weather.name}
							</Card.Title>
							{/* <Card.Text>
									<img
										src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
										alt="weather icon"
									/>
									<p className="m-0 fs-4">{actualMeteo}</p>
									<p>{actualMeteoDescription}</p>
									<p className="fs-2">
										<span
											className="fs-6"
											style={{ color: "#0033cc" }}>
											{tempMin}°
										</span>
										<div className="vr mx-2"></div>
										{actualTemperature}°
										<div className="vr mx-2"></div>
										<span
											className="fs-6"
											style={{ color: "#ff8533" }}>
											{tempMax}°
										</span>
									</p>
								</Card.Text> */}
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default DetailsCard;
