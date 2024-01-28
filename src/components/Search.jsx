import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCityData } from "../redux/actions/fetches";
import { setQuery } from "../redux/actions/actions";

const Search = () => {
	const dispatch = useDispatch();
	const { query } = useSelector((state) => state.query);

	return (
		<Container>
			<Row className="flex-column align-items-center g-3">
				<Col xs={12} md={4} className="text-center">
					<Form.Group>
						<Form.Control
							type="search"
							placeholder="Search a location"
							onKeyUp={(e) => {
								if (e.key === "Enter") {
									dispatch(getCityData(query));
								}
							}}
							onChange={(e) => dispatch(setQuery(e.target.value))}
						/>
					</Form.Group>
				</Col>
			</Row>
		</Container>
	);
};

export default Search;
