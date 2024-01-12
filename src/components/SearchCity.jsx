import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import CardExample from "./CardPlaceholder";
import OverviewCard from "./OverviewCard";
import { token } from "../assets/token";

const SearchCity = (props) => {
	const [searchQuery, setSearchQuery] = useState("");
	const [weather, setWeather] = useState(null);

	const fetchCityData = async () => {
		const endpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5&appid=${token}`;
		try {
			const resp = await fetch(endpoint);
			if (resp.ok) {
				const response = await resp.json();
				fetchData(response[0].lat, response[0].lon);

				console.log(response);
			}
		} catch (error) {
			console.log(error);
		}
	};

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

	return (
		<Container>
			<Row>
				<Col>
					<Row className="justify-content-center mt-5">
						<Col xs={12} md={4} className="text-center">
							<Form.Group>
								<Form.Control
									type="search"
									placeholder="Search a location"
									value={searchQuery}
									onKeyUp={(e) => {
										if (e.key === "Enter") {
											fetchCityData();
										}
									}}
									onChange={(e) =>
										setSearchQuery(e.target.value)
									}
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row className="g-2 mt-3">
						{weather ? (
							<Container>
								<Row className=" justify-content-center">
									<OverviewCard weather={weather} />
								</Row>
							</Container>
						) : (
							<Container>
								<Row className="justify-content-center text-center">
									{/* <CardExample />
									<h1>ciao</h1> */}
								</Row>
							</Container>
						)}
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default SearchCity;
