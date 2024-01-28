import logo from "./assets/logo.png";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNavbar";
import FiveDayForecast from "./components/FiveDayForecast";
import MyLocation from "./pages/MyLocationPage/MyLocation";
import Home from "./pages/HomePage/Home";

function App() {
	return (
		<BrowserRouter>
			<MyNav logo={logo} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/my-location" element={<MyLocation />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
