import logo from "./logo.png";
import "./style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNavbar";
import Search from "./components/Search";
import OverviewCard from "./components/OverviewCard";
import FiveDayForecast from "./components/FiveDayForecast";
import Home from "./components/Home";
import MyLocation from "./components/MyLocation";
function App() {
	const [weather, setWeather] = useState(null);
	const [forecast, setForecast] = useState(null);
	return (
		<BrowserRouter>
			<MyNav logo={logo} />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Search
								setWeather={setWeather}
								setForecast={setForecast}
							/>
							{weather ? (
								<OverviewCard weather={weather} />
							) : (
								<Home />
							)}
						</>
					}
				/>
				<Route
					path="/my-location"
					element={
						<MyLocation
							setWeather={setWeather}
							setForecast={setForecast}
							weather={weather}
						/>
					}
				/>
				<Route path="/:lat/:lon" element={<FiveDayForecast />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
