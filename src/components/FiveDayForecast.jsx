import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrows";
import PrevArrow from "./PrevArrow";
import { Link, useParams } from "react-router-dom";
import OverviewCard from "./OverviewCard";
import { useEffect, useState } from "react";
import { token } from "../assets/token";
import DetailsCard from "./DetailsCard";
const FiveDayForecast = (props) => {
	const { lat, lon } = useParams();
	const [weather, setWeather] = useState(null);
	const [forecast, setForecast] = useState(null);

	const fetchWeather = async (lat, lon) => {
		const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${token}&units=metric&lang=it`;
		try {
			const resp = await fetch(endpoint);
			if (resp.ok) {
				const response = await resp.json();
				setWeather(response);
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
				setForecast(response);
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
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// {
			// 	breakpoint: 480,
			// 	settings: {
			// 		slidesToShow: 2,
			// 		slidesToScroll: 1,
			// 	},
			// },
		],
	};

	return (
		<Slider {...settingsSlider} className=" mt-5">
			{weather &&
				forecast &&
				forecast.list.map((range3hour) => (
					<Link to={`/`}>
						{" "}
						{/* <p>{range3hour.wind.speed}</p> */}
						<DetailsCard
							city={forecast.city.name}
							weather={range3hour}
							key={range3hour.dt_txt}
						/>
						{/* <OverviewCard weather={range3hour} />{" "} */}
					</Link>
				))}
		</Slider>
	);
};

export default FiveDayForecast;
