import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "./Home";
import { useSelector } from "react-redux";

const OverviewCard = () => {
	const { actualWeather } = useSelector((state) => state.weather);
	return (
		<>
			{actualWeather ? (
				<Container className="mt-3">
					<Row className=" justify-content-center">
						<Col xs={12} md={10} lg={6}>
							<Card className="text-center">
								<Card.Body>
									<Card.Title className="fs-3">
										{actualWeather.name}
									</Card.Title>
									<Card.Text>
										<img
											src={`http://openweathermap.org/img/w/${actualWeather.weather[0].icon}.png`}
											alt="weather icon"
										/>
										<p className="m-0 fs-4">
											{actualWeather.weather[0].main}
										</p>
										<p>
											{
												actualWeather.weather[0]
													.description
											}
										</p>
										<p className="fs-2">
											<span
												className="fs-6"
												style={{ color: "#0033cc" }}>
												{actualWeather.main.temp_min}°
											</span>
											<span className="vr mx-2"></span>
											{actualWeather.main.temp}°
											<span className="vr mx-2"></span>
											<span
												className="fs-6"
												style={{ color: "#ff8533" }}>
												{actualWeather.main.temp_max}°
											</span>
										</p>
									</Card.Text>
									<Link
										to={`/${actualWeather.coord.lat}/${actualWeather.coord.lon}`}
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
