import { SimpleGrid } from "@mantine/core";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import "./globals.css"
import AirPollution from "./components/AirPollution";
import HighestTemp from "./components/HighestTemp";
import LowestTemp from "./components/LowestTemp";
import AdditionalInfoCard from "./components/AdditionalInfoCard";
import SunInfoCard from "./components/SunInfoCard";
import WindCard from "./components/WindCard";
import UVInfo from "./components/UVInfo";
import PrecipitationCard from "./components/PrecipitationCard";
import { IconBrandSpeedtest, IconDropletHalf2Filled, IconEye, IconTemperature } from "@tabler/icons-react";
import Forecast from "./components/Forecast";
import HourlyForecast from "./components/HourlyForecast";

export default function HomePage() {
	return (
		<div>
			<Header />
			<div className="m-[1vw]">
				<SimpleGrid
					className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
					verticalSpacing={{ base: 'md', sm: 'xl' }}
				>
					<WeatherCard />
					<div>
						<AirPollution />
						<SimpleGrid
							verticalSpacing={{ base: 'sm', sm: 'xl' }}
							className="w-full mt-[3vh] grid-cols-2"
						>
							<HighestTemp />
							<LowestTemp />
						</SimpleGrid>
					</div>

					<SimpleGrid
						className="justify-center items-center lg:m-0 sm:grid-cols-4 sm:w-[96vw] md:grid-cols-4 md:w-[96vw] lg:w-full lg:grid-cols-2"
					>
						<SunInfoCard />
						<WindCard />
						<UVInfo />
						<PrecipitationCard />
					</SimpleGrid>
				</SimpleGrid>
				<SimpleGrid className="mt-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					<AdditionalInfoCard title="Feels Like" info="40°" footer="Feels warmer than actual temperature" icon={<IconTemperature />} />
					<AdditionalInfoCard title="Humidity" info="74°" footer="Low Humidity, It might feel dry" icon={<IconDropletHalf2Filled />} />
					<AdditionalInfoCard title="Visibility" info="10 km" footer="Its perfectly clear" icon={<IconEye />} />
					<AdditionalInfoCard title="Pressure" info="1008 hPa" footer="Normal pressure with typical weather conditions" icon={<IconBrandSpeedtest />} />
				</SimpleGrid>

				<Forecast />
				<HourlyForecast />
			</div>
		</div >
	);
}
