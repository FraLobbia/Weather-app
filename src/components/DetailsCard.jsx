import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router";
import { token } from "../assets/token";
import BackToHome from "./BackToHome";
import FiveDayForecast from "./FiveDayForecast";

const DetailsCard = (props) => {
	const city = props.city;
	const actualTemperature = props.weather.main.temp;
	const actualMeteo = props.weather.weather[0].main;
	const actualMeteoDescription = props.weather.weather[0].description;
	const tempMin = props.weather.main.temp_min;
	const tempMax = props.weather.main.temp_max;

	useEffect(() => {
		console.log(props);
	}, []);

	return (
		<Container>
			<Row className=" justify-content-center">
				<Col xs={12} md={10}>
					<Card className="text-center">
						<Card.Body className=" ">
							<Card.Title className="fs-1">{city}</Card.Title>
							<Card.Text>
								<img
									src={`http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`}
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
									<span className="vr mx-2"></span>
									{actualTemperature}°
									<span className="vr mx-2"></span>
									<span
										className="fs-6"
										style={{ color: "#ff8533" }}>
										{tempMax}°
									</span>
								</p>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default DetailsCard;
