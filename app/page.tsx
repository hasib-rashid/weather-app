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
				<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}
					spacing={{ base: 100, sm: 'xl' }}
					verticalSpacing={{ base: 'md', sm: 'xl' }}
				>
					<WeatherCard />
					<div>
						<AirPollution />
						<SimpleGrid cols={{ base: 2, sm: 2, lg: 2 }}
							verticalSpacing={{ base: 'md', sm: 'xl' }}
							className="w-full h-[40vh] mt-[3vh]"
						>
							<HighestTemp />
							<LowestTemp />
						</SimpleGrid>
					</div>

					<SimpleGrid cols={{ base: 2, sm: 2, lg: 2 }}
						verticalSpacing={{ sm: 'sm' }}
						className="sm:w-[50vw] justify-center items-center lg:m-0 lg:w-[31vw] h-[75vh]"
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
