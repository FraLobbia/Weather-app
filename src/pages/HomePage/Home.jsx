import { useSelector } from "react-redux";
import Search from "../../components/Search";
import "./home.scss";
import OverviewCard from "../../components/OverviewCard";
import { DotLoader } from "react-spinners";
import FiveDayForecast from "../../components/FiveDayForecast";

const Home = () => {
	const { responseQuery } = useSelector((state) => state.query);
	const isLoading = useSelector((state) => state.loading.loading);
	const { actualWeather, forecast } = useSelector(
		(state) => state.query.weatherQuery
	);

	return (
		<>
			<Search />
			{isLoading && (
				<DotLoader color="#FFD201" className="mx-auto mt-5" />
			)}
			{!responseQuery ? (
				<div className="text-center mt-5">
					<h2 className="fs-1 fw-bold">Benvenuto!</h2>
					<p className="fs-3">Per cominciare cerca la tua città!</p>
				</div>
			) : (
				<>
					<OverviewCard weather={actualWeather} />
					<FiveDayForecast forecast={forecast} />
				</>
			)}
		</>
	);
};
export default Home;
