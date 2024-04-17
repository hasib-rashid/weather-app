import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import "./globals.css"

export default function HomePage() {
	return (
		<div className="font-poppins">
			<Header />
			<div className="m-5">
				<WeatherCard />
			</div>
		</div>
	);
}
