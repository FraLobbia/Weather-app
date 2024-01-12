import { useEffect, useState } from "react";
import { token } from "../assets/token";

const ActualMeteo = (props) => {
	const [data, setData] = useState([]);
	const endpoint = `api.openweathermap.org/data/2.5/forecast?id=524901&appid=${token}`;

	const fetchData = async () => {
		try {
			const resp = await fetch(endpoint);
			if (resp.ok) {
				const response = await resp.json();
				setData(response);
			}
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchData();
		console.log(data);
	}, []);
	return (
		<>
			<h1>meteo</h1>
		</>
	);
};

export default ActualMeteo;
