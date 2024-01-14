import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const BackToHome = () => {
	return (
		<Link to={"/"} className="btn btn-primary me-auto m-2">
			Torna a Home
		</Link>
	);
};

export default BackToHome;
