import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const OverviewCard = (props) => {
	const kelvin = 273.15;
	const city = props.weather.name;
	const actualTemperature = parseFloat(
		(props.weather.main.temp - kelvin).toFixed(1)
	);
	const actualMeteo = props.weather.weather[0].main;
	const actualMeteoDescription = props.weather.weather[0].description;
	const tempMin = parseFloat(
		(props.weather.main.temp_min - kelvin).toFixed(1)
	);
	const tempMax = parseFloat(
		(props.weather.main.temp_max - kelvin).toFixed(1)
	);

	return (
		<Col xs={12} md={6}>
			<Card className="text-center">
				{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
				<Card.Body>
					<Card.Title className="fs-3">{city}</Card.Title>
					<Card.Text>
						<img
							src={`http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`}
							alt="weather icon"
						/>
						<p className="m-0 fs-4">{actualMeteo}</p>
						<p>{actualMeteoDescription}</p>
						<p className="fs-2">
							<span className="fs-6" style={{ color: "#0033cc" }}>
								{tempMin}°
							</span>
							<div className="vr mx-2"></div>
							{actualTemperature}°<div className="vr mx-2"></div>
							<span className="fs-6" style={{ color: "#ff8533" }}>
								{tempMax}°
							</span>
						</p>
					</Card.Text>
					<Link
						to={`/${props.weather.coord.lat}/${props.weather.coord.lon}`}
						className="btn btn-primary">
						Dettagli prossimi 5 giorni
					</Link>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default OverviewCard;
