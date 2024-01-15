import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "./Home";

const OverviewCard = (props) => {
	return (
		<>
			{props.weather ? (
				<Container className="mt-3">
					<Row className=" justify-content-center">
						<Col xs={12} md={10} lg={6}>
							<Card className="text-center">
								{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
								<Card.Body>
									<Card.Title className="fs-3">
										{props.weather.name}
									</Card.Title>
									<Card.Text>
										<img
											src={`http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`}
											alt="weather icon"
										/>
										<p className="m-0 fs-4">
											{props.weather.weather[0].main}
										</p>
										<p>
											{
												props.weather.weather[0]
													.description
											}
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
									<Link
										to={`/${props.weather.coord.lat}/${props.weather.coord.lon}`}
										className="btn btn-primary">
										Dettagli prossimi 5 giorni
									</Link>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			) : (
				<Home />
			)}
		</>
	);
};

export default OverviewCard;
