import { Card, SimpleGrid } from "@mantine/core";
import { IconSunWind } from "@tabler/icons-react";
import { getWeatherIcons } from "../lib/weatherIcons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Forecast(forecast: any) {
    console.log(forecast.forecast.daily)
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
                {forecast.forecast.daily ?
                    forecast.forecast.daily.slice(0, 7).map((day: any) => (
                        <Card>
                            <div key={day} className="">
                                <h3 className="text-[17px] font-bold pt-1 pb-2">{new Date(day.dt * 1000).toLocaleDateString('en-US', {
                                    weekday: 'long',
                                })}</h3>
                                <div className="flex justify-center">
                                    <img
                                        src={getWeatherIcons(day.weather[0].icon)}
                                        alt="Rain"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <h2 className="text-xl font-bold mt-3">{Math.round(day.temp.day - 273.15)}&deg;</h2>
                                <div className="flex">
                                    <h2 className="text-md my-3 mr-4 font-bold">{Math.round(day.temp.max - 273.15)}&deg;</h2>
                                    <h2 className="text-md my-3 brightness-[60%]">{Math.round(day.temp.min - 273.15)}&deg;</h2>
                                </div>
                                <p className="font-semibold">{day.weather[0].main}</p>
                                <p className="font-semibold capitalize brightness-75">{day.weather[0].description}</p>
                            </div>
                        </Card>
                    )) : "Loading"}
            </SimpleGrid>
        </div>
    )
}

function convertToDate(
    timezone: number,
    dt: number,
    weekdayFormat: "short" | "long"
): string {
    let utc_time = new Date(dt * 1000)
    let local_time = new Date(utc_time.getTime() + timezone * 1000)

    const options = { weekday: weekdayFormat }
    const dateFormatter = new Intl.DateTimeFormat("UTC", options)

    return dateFormatter.format(local_time)
}