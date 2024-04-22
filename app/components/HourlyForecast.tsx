import { Card, Paper, SimpleGrid, Text } from "@mantine/core";
import { IconClock, IconSun } from "@tabler/icons-react";
import { AreaChart, LineChart } from '@mantine/charts';
import { getWeatherIcons } from "../lib/weatherIcons";

export default function HourlyForecast() {
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
                data={data}
                dataKey="date"
                series={[
                    { name: "Temperature", color: 'yellow.6' },
                    { name: 'Precipitation', color: 'blue.6' },
                    { name: 'Humidity', color: 'indigo.6' },
                ]}
                curveType="linear"
            />
        </div>
    )
}

const data = [
    {
        date: '6:00 AM',
        Temperature: 2890,
        Precipitation: 2338,
        Humidity: 2452,
    },
    {
        date: 'Mar 23',
        Temperature: 2756,
        Precipitation: 2103,
        Humidity: 2402,
    },
    {
        date: 'Mar 24',
        Temperature: 3322,
        Precipitation: 986,
        Humidity: 1821,
    },
    {
        date: 'Mar 25',
        Temperature: 3470,
        Precipitation: 2108,
        Humidity: 2809,
    },
    {
        date: 'Mar 26',
        Temperature: 3129,
        Precipitation: 1726,
        Humidity: 2290,
    },
];