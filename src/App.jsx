import logo from "./logo.png";
import "./assets/dist/css/style.min.css";
import SearchCity from "./components/SearchCity";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/myNav";
function App() {
	return (
		<BrowserRouter>
			<MyNav logo={logo} />
			<Routes>
				<Route path="/home" element={<SearchCity />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
