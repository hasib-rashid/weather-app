import { SimpleGrid } from "@mantine/core";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import "./globals.css"
import AirPollution from "./components/AirPollution";
import HighestTemp from "./components/HighestTemp";
import LowestTemp from "./components/LowestTemp";
import AdditionalInfoCard from "./components/AdditionalInfoCard";
import SunInfoCard from "./components/SunInfoCard";

export default function HomePage() {
	return (
		<div className="font-poppins">
			<Header />
			<div className="m-[1vw]">
				<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}
					spacing={{ base: 100, sm: 'xl' }}
					verticalSpacing={{ base: 'md', sm: 'xl' }}
					w={"98vw"}
				>
					<WeatherCard />
					<div>
						<AirPollution />
						<SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}
							spacing={{ base: 10, sm: 'xl' }}
							verticalSpacing={{ base: 'md', sm: 'xl' }}
							className="w-full h-[40vh] mt-[3vh]"
						>
							<HighestTemp />
							<LowestTemp />
						</SimpleGrid>
					</div>

					<SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}
						spacing={{ sm: 'sm' }}
						verticalSpacing={{ sm: 'sm' }}
						className="lg:w-[31vw] h-[75vh]"
					>
						<SunInfoCard />
						<AdditionalInfoCard />
						<AdditionalInfoCard />
						<AdditionalInfoCard />

					</SimpleGrid>

				</SimpleGrid>
			</div>
		</div >
	);
}
