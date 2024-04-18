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

export default function HomePage() {
	return (
		<div className="font-poppins">
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
							verticalSpacing={{ base: 'md', sm: 'xl' }}
							className="w-full h-[40vh] mt-[3vh] grid-cols-2"
						>
							<HighestTemp />
							<LowestTemp />
						</SimpleGrid>
					</div>

					<SimpleGrid
						verticalSpacing={{ sm: 'sm' }}
						className="justify-center items-center lg:m-0 sm:grid-cols-4 sm:w-[96vw] md:grid-cols-4 md:w-[96vw] lg:w-full lg:grid-cols-2"
					>
						<SunInfoCard />
						<WindCard />
						<UVInfo />
						<PrecipitationCard />
					</SimpleGrid>

				</SimpleGrid>
			</div>
		</div >
	);
}
