import { Nav, Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
function MyNavbar(props) {
	return (
		<Navbar expand="md" collapseOnSelect>
			<Container
				fluid
				className="flex-column flex-md-row align-items-center">
				<LinkContainer to={"/"}>
					<Navbar.Brand>
						<img
							src={props.logo}
							className="App-logo mb-3"
							alt="logo"
							style={{ height: "150px" }}
						/>
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="myNavbar" />

				<Navbar.Collapse id="myNavbar" className="text-center">
					<hr className="d-md-none" />

					<Nav className=" align-items-center ">
						<LinkContainer to={"/"}>
							<Nav.Link className="nav-link mx-1 fs-1">
								Home
							</Nav.Link>
						</LinkContainer>

						<LinkContainer to={"my-location"}>
							<Nav.Link className={"nav-link mx-1 fs-1"}>
								My Location
							</Nav.Link>
						</LinkContainer>

						<div className="vr mx-3 d-none d-md-block"></div>

						<Nav.Link
							href="https://openweathermap.org/"
							className="nav-link mx-1"
							target="_blank" // Apri il link in una nuova finestra
						>
							OpenWeather API
						</Nav.Link>

						<Nav.Link
							href="https://github.com/FraLobbia"
							className="nav-link mx-1"
							target="_blank" // Apri il link in una nuova finestra
						>
							My GitHub
						</Nav.Link>

						<Nav.Link
							href="https://www.linkedin.com/in/francesco-lobbia/"
							className="nav-link mx-1"
							target="_blank" // Apri il link in una nuova finestra
						>
							My LinkedIn
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNavbar;
