import logo from "./logo.png";
import "./assets/dist/css/style.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsCard from "./components/DetailsCard";
import MyNav from "./components/MyNavbar";
import { useState } from "react";
import Search from "./components/Search";
import OverviewCard from "./components/OverviewCard";
import FiveDayForecast from "./components/FiveDayForecast";
import Home from "./components/Home";
function App() {
	const [weather, setWeather] = useState(null);
	const [forecast, setForecast] = useState(null);
	return (
		<BrowserRouter>
			<MyNav logo={logo} />
			<Search setWeather={setWeather} setForecast={setForecast} />
			<Routes>
				<Route
					path="/"
					element={
						<>
							{weather ? (
								<OverviewCard weather={weather} />
							) : (
								<Home />
							)}
						</>
					}
				/>
				<Route path="/:lat/:lon" element={<FiveDayForecast />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
