import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function MyNavbar(props) {
	const navBarConfig = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "OpenWeather API",
			link: "https://openweathermap.org/",
		},
		{
			name: "My GitHub",
			link: "https://github.com/FraLobbia",
		},
	];

	return (
		<Navbar expand="md">
			<Container fluid className="p-0">
				<Navbar.Brand href="#">
					<img
						src={props.logo}
						className="App-logo ms-4"
						alt="logo"
						style={{ height: "150px" }}
					/>
				</Navbar.Brand>
				<Navbar.Toggle
					className="ms-auto me-2"
					aria-controls="myNavbar"
				/>

				<Navbar.Collapse id="myNavbar" className="text-center">
					<hr className="d-md-none" />

					<Nav>
						{navBarConfig.map((navItem, index) =>
							index === 1 ? (
								<>
									<div className="vr"></div>
									<NavLink
										to={navItem.link}
										key={`navItem-${index}`}
										className="nav-link"
										target={index > 0 ? "_blank" : ""}>
										{console.log(index)}
										{navItem.name}
									</NavLink>
								</>
							) : (
								<NavLink
									to={navItem.link}
									key={`navItem-${index}`}
									className="nav-link"
									target={index > 0 ? "_blank" : ""}>
									{navItem.name}
								</NavLink>
							)
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNavbar;
