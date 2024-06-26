import { Card } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import { useState, useEffect } from "react";

export default function WeatherCard(data: any) {
    const [time, setTime] = useState("")
    if (!data) return <h1>Loading</h1>

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', timeZone: data.data.location.tz_id }))
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <main>
            <Card className="text-white bg-[#1a1a1a] p-4 rounded-lg" >
                <div className="cardTitle flex justify-between">
                    <h3 className="text-[20px] font-semibold">{new Date(data.data.location.localtime).toLocaleDateString('en-us', { weekday: "long" })}</h3>
                    <h3 className="text-[20px] font-bold">{time}</h3>
                </div>
                <div>
                    <h3 className="text-[17px]">
                        {new Date(data.data.location.localtime).toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" })}
                    </h3>
                </div>
                <div className="flex justify-center my-8 text-7xl font-bold md:py-10">
                    {Math.round(data.data.current.temp_c)}&deg;
                </div>
                <div className="flex items-center ml-3">
                    <IconMapPin size={"32px"} />
                    <h3 className="text-[20px] font-medium ml-3">{data.data.location.name}, {data.data.location.country}</h3>
                </div>
                <div className="flex items-center">
                    <img width={50} height={50} src={data.data.current.condition.icon} />
                    <h3 className="text-[20px] font-semibold">{data.data.current.condition.text}</h3>
                </div>
                <div className="flex justify-between mx-5 text-lg">
                    <p className="font-bold">Highest: <span className="font-normal">{data.data.forecast.forecastday[0].day.maxtemp_c}&deg;</span></p>
                    <p className="font-bold">Lowest: <span className="font-normal">{data.data.forecast.forecastday[0].day.mintemp_c}&deg;</span></p>
                </div>
            </Card>
        </main>
    )
}