import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrows";
import PrevArrow from "./PrevArrow";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import DetailsCard from "./DetailsCard";
import { useDispatch, useSelector } from "react-redux";
import { getForecast, getWeather } from "../redux/actions/fetches";
const FiveDayForecast = () => {
	const { lat, lon } = useParams();
	const dispatch = useDispatch();
	const { forecast } = useSelector((state) => state.weather);

	useEffect(() => {
		dispatch(getWeather(lat, lon));
		dispatch(getForecast(lat, lon));
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
			) : (
				<h1>sto caricando</h1>
			)}
		</>
	);
};

export default FiveDayForecast;
