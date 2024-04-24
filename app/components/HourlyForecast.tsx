import { Card, Paper, SimpleGrid, Text } from "@mantine/core";
import { IconClock, IconSun } from "@tabler/icons-react";
import { AreaChart, LineChart } from '@mantine/charts';
import { getWeatherIcons } from "../lib/weatherIcons";
import { useEffect, useState } from "react";

export default function HourlyForecast() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=19.0760&lon=72.8777&cnt=7&appid=3e4be8c4dd9fa225551735e555eb7028&exclude=minutely`;
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data.list));
    }, []);

    const mappedData = data.map((d: any) => {
        return {
            dt: new Date(d.dt * 1000).toLocaleString('default', { hour: '2-digit' }),
            Temperature: Math.round(d.main.temp - 273.15),
            // Humidity: Math.round(d.main.humidity),
            // Precipitation: d.main.pressure / 100,
            weather: getWeatherIcons(d.weather[0].icon)
        };
    });

    return (
        <div className="bg-[#1a1a1a] p-4 rounded-md mt-3">
            {/* Forecast */}
            <div className="flex items-center mb-3 text-white">
                <IconClock />
                <h3 className="text-[20px] ml-3 font-semibold">Hourly Forecast</h3>
            </div>
            <br />
            <AreaChart
                h={300}
                data={mappedData}
                dataKey="dt"
                tooltipAnimationDuration={200}
                series={[
                    { name: "Temperature", color: 'yellow.6', strokeDasharray: 5 },
                ]}
                curveType="linear"
            />

            <div className="flex items-center justify-between mt-3 w-[98%] ml-10">
                {mappedData.map((d, i) => (
                    <img key={i} src={d.weather} className="h-10 mx-2" alt="weather-icon" />
                ))}
            </div>
        </div>
    )
}