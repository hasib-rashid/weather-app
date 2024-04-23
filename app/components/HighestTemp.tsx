import { Card } from "@mantine/core";
import { IconSunHigh } from "@tabler/icons-react";

export default function HighestTemp(data: any) {
    return (
        <div>
            <Card className="pb-9 text-white bg-[#1a1a1a] rounded-lg" >
                <div className="flex items-center mb-3">
                    <IconSunHigh />
                    <h3 className="text-[15px] ml-3 font-semibold">Highest Temperature</h3>
                </div>
                <div className="flex justify-center text-5xl font-bold">
                    {Math.round(data.data.forecast.forecastday[0].day.maxtemp_c)}&deg;
                </div>
            </Card>
        </div>
    )
}