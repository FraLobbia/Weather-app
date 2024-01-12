import logo from "./logo.png";
import "./assets/dist/css/style.min.css";
import MyNav from "./components/MyNav";
import ActualMeteo from "./components/MyNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<MyNav logo={logo} />
			<Routes>
				<Route path="/home" element={<ActualMeteo />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
