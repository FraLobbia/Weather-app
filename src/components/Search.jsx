import { Col, Container, Form, Row } from "react-bootstrap";
import OverviewCard from "./OverviewCard";
import { token } from "../assets/token";
import { useNavigate } from "react-router";

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
									fetchCityData();
								}
							}}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</Form.Group>
				</Col>
			</Row>
		</Container>
	);
};

export default Search;
