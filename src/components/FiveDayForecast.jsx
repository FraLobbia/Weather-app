import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrows";
import PrevArrow from "./PrevArrow";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import DetailsCard from "./DetailsCard";
import { useSelector } from "react-redux";
import { getForecast, getWeather } from "../redux/actions/fetches";
const FiveDayForecast = () => {
	const { lat, lon } = useParams();
	const { forecast } = useSelector((state) => state.weather);

	useEffect(() => {
		getWeather(lat, lon);
		getForecast(lat, lon);
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
			{forecast ? (
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
