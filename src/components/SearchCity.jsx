import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { token } from "../assets/token";
import MeteoCard from "./OverviewCard";
import CardExample from "./CardPlaceholder";
import OverviewCard from "./OverviewCard";

const SearchCity = (props) => {
	const [searchQuery, setSearchQuery] = useState("");
	const [data, setData] = useState([]);
	const endpointByName = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery},IT&appid=${token}`;
	// const endpointByID = `https://api.openweathermap.org/data/2.5/weather?id=6167865&appid=${token}`;
	const fetchData = async () => {
		try {
			const resp = await fetch(endpointByName);
			if (resp.ok) {
				const response = await resp.json();
				setData(response);
			}
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setTimeout(fetchData, 500);
	}, [searchQuery]);

	// const changeSelectedBook = (data) => {
	// 	setData(data);
	// };
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
									onChange={(e) =>
										setSearchQuery(e.target.value)
									}
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row className="g-2 mt-3">
						{console.log(data)}
						{searchQuery !== "" && data.name !== "Zumpano" ? (
							<Container>
								<Row className=" justify-content-center">
									<OverviewCard
										// book={b}
										data={data}
										// changeSelectedBook={changeSelectedBook}
									/>
								</Row>
							</Container>
						) : (
							<Container>
								<Row className=" justify-content-center">
									{/* <CardExample /> */}
								</Row>
							</Container>
						)}
						{/* {props.books
							.filter((b) =>
								b.title.toLowerCase().includes(searchQuery)
							)
							.map((b) => (
								<Col xs={12} md={4} key={b.data}>
									<ActualMeteo
										book={b}
										data={data}
										// changeSelectedBook={changeSelectedBook}
										city={"Vercelli"}
									/>
								</Col>
							))} */}
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default SearchCity;
