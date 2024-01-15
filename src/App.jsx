import logo from "./logo.png";
import "./assets/dist/css/style.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNavbar";
import { useState } from "react";
import Search from "./components/Search";
import OverviewCard from "./components/OverviewCard";
import FiveDayForecast from "./components/FiveDayForecast";
import Home from "./components/Home";
import MyLocation from "./components/MyLocation";
import { useDispatch, useSelector } from "react-redux";

function App() {
	// const [weather, setWeather] = useState(null);
	// const [forecast, setForecast] = useState(null);

	const dispatch = useDispatch();
	const weather = useSelector((state) => state.weather);
	const forecast = useSelector((state) => state.forecast);

	return (
		<BrowserRouter>
			<MyNav logo={logo} />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Search />
							<OverviewCard weather={weather.weather} />
						</>
					}
				/>
				<Route
					path="/my-location"
					element={<MyLocation weather={weather.weather} />}
				/>
				<Route path="/:lat/:lon" element={<FiveDayForecast />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
