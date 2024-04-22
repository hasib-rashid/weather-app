import { Card, SimpleGrid } from "@mantine/core";
import { IconSunWind } from "@tabler/icons-react";
import { getWeatherIcons } from "../lib/weatherIcons";

export default function Forecast() {
    return (
        <div className="bg-[#1a1a1a] p-4 rounded-md mt-3">
            {/* Forecast */}
            <div className="flex items-center mb-3 text-white">
                <IconSunWind />
                <h3 className="text-[20px] ml-3 font-semibold">7 day Forecast</h3>
            </div>
            <SimpleGrid
                className="grid-cols-2 lg:grid-cols-7 md:grid-cols-3 md:gap-4"
                spacing={4}
            >
                {[0, 1, 2, 3, 4, 5, 6].map((day) => (
                    <Card>
                        <div key={day} className="">
                            <h3 className="text-[17px] font-bold pt-1 pb-2">{new Date(Date.now() + (day * 24 * 60 * 60 * 1000)).toLocaleDateString('en-US', {
                                weekday: 'long',
                            })}</h3>
                            <div className="flex justify-center">
                                <img
                                    src={getWeatherIcons("50d")}
                                    alt="Rain"
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <h2 className="text-xl font-bold mt-3">32&deg;</h2>
                            <div className="flex">
                                <h2 className="text-md my-3 mr-4 font-bold">35&deg;</h2>
                                <h2 className="text-md my-3 brightness-[60%]">27&deg;</h2>
                            </div>
                            <p className="font-semibold">Clouds</p>
                            <p className="font-semibold">Broken Clouds</p>
                        </div>
                    </Card>
                ))}
            </SimpleGrid>
        </div>
    )
}