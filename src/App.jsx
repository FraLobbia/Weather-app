import logo from "./logo.png";
import "./assets/dist/css/style.min.css";
import SearchCity from "./components/SearchCity";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/myNav";
import { useEffect, useState } from "react";
import { token } from "./assets/token";
import DetailsCard from "./components/DetailsCard";
function App() {
	// const [data, setData] = useState(null);

	// useEffect(() => {
	// 	fetchData();
	// }, [searchQuery]);

	// useEffect(() => {
	// 	fetchData();
	// }, []);
	return (
		<BrowserRouter>
			<MyNav logo={logo} />
			<Routes>
				<Route path="/" element={<SearchCity />} />
				<Route path="/:lat/:lon" element={<DetailsCard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
