import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const DetailsCard = (props) => {
	// const actualTemperature = props.weather.main.temp;
	// const actualMeteo = props.weather.weather[0].main;
	// const actualMeteoDescription = props.weather.weather[0].description;
	// const tempMin = props.weather.main.temp_min;
	// const tempMax = props.weather.main.temp_max;
	const orario = props.weather.dt_txt;
	const dateObject = new Date(orario);
	// Ottenere il giorno della settimana (0 = Domenica, 1 = Lunedì, ..., 6 = Sabato)
	const dayOfWeek = dateObject.toLocaleDateString("it-IT", {
		weekday: "long",
	});

	// Ottenere l'ora e i minuti
	const hours = dateObject.getHours();
	// const minutes = dateObject.getMinutes();
	const dayOfMonth = dateObject.getDate();

	useEffect(() => {}, []);

	return (
		<Container>
			<Row className=" justify-content-center">
				<Col xs={12} md={10}>
					<Card className="text-center">
						<Card.Body className=" ">
							<Card.Title className="fs-1 text-capitalize fw-bold">{`${dayOfWeek} ${dayOfMonth}`}</Card.Title>
							<Card.Text>
								{`Orario: ${hours}:00`}
								<img
									className="mx-auto"
									src={`http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`}
									alt="weather icon"
								/>
								<p className="m-0 fs-4">
									{props.weather.weather[0].main}
								</p>
								<p className=" text-capitalize">
									{props.weather.weather[0].description}
								</p>
								<p className="fs-2">
									<span
										className="fs-6"
										style={{ color: "#0033cc" }}>
										{props.weather.main.temp_min}°
									</span>
									<span className="vr mx-2"></span>
									{props.weather.main.temp}°
									<span className="vr mx-2"></span>
									<span
										className="fs-6"
										style={{ color: "#ff8533" }}>
										{props.weather.main.temp_max}°
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
