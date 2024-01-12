import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function MyNav(props) {
	const navBarConfig = [
		{
			name: "Home",
			link: "/",
		},
		// {
		// 	name: "Your City",
		// 	link: "/your-city",
		// },
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

				<Navbar.Collapse
					id="myNavbar"
					className="text-center justify-content-between ">
					<hr className="d-md-none" />

					<Nav>
						{navBarConfig.map((navItem, index) => {
							return (
								<NavLink
									to={navItem.link}
									key={`navItem-${index}`}
									className="nav-link">
									{navItem.name}
								</NavLink>
							);
						})}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNav;
