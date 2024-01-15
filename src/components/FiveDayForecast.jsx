import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrows";
import PrevArrow from "./PrevArrow";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { token } from "../assets/token";
import DetailsCard from "./DetailsCard";
import { useDispatch, useSelector } from "react-redux";
import { storeForecast, storeWeather } from "../redux/actions";
const FiveDayForecast = (props) => {
	const { lat, lon } = useParams();
	// const [weather, setWeather] = useState(null);
	// const [forecast, setForecast] = useState(null);
	const dispatch = useDispatch();
	const weather = useSelector((state) => state.weather);
	const forecast = useSelector((state) => state.forecast);

	const fetchWeather = async (lat, lon) => {
		const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${token}&units=metric&lang=it`;
		try {
			const resp = await fetch(endpoint);
			if (resp.ok) {
				const response = await resp.json();
				// setWeather(response);
				dispatch(storeWeather(response));
				console.log("dati weather", response);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const fetchWeatherForecast = async (lat, lon) => {
		const endpoint = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${token}&units=metric&lang=it`;
		try {
			const resp = await fetch(endpoint);
			if (resp.ok) {
				const response = await resp.json();
				// setForecast(response);
				dispatch(storeForecast(response));
				console.log("dati forecast", response);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchWeather(lat, lon);
		fetchWeatherForecast(lat, lon);
	}, []);

	const settingsSlider = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<>
			{weather && forecast && (
				<>
					<h1 className="text-center mt-4">{forecast.city.name}</h1>
					<Slider {...settingsSlider} className="mt-5">
						{forecast.list.map((range3hour) => (
							<Link to={`/`} key={range3hour.dt_txt}>
								<DetailsCard weather={range3hour} />
							</Link>
						))}
					</Slider>
				</>
			)}
		</>
	);
};

export default FiveDayForecast;
