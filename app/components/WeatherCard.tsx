import { Card } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";

export default function WeatherCard(data: any) {
    if (!data) return <h1>Loading</h1>
    return (
        <main>
            <Card className="text-white bg-[#1a1a1a] p-4 rounded-lg" >
                <div className="cardTitle flex justify-between">
                    <h3 className="text-[20px] font-semibold">Tuesday</h3>
                    <h3 className="text-[20px] font-bold">7:00 AM</h3>
                </div>
                <div>
                    <h3 className="text-[17px]">
                        {new Date(data.data.location.localtime).toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" })}
                    </h3>
                </div>
                <div className="flex justify-center my-8 text-7xl font-bold md:py-10">
                    28&deg;
                </div>
                <div className="flex items-center ml-3">
                    <IconMapPin size={"32px"} />
                    <h3 className="text-[20px] font-medium ml-3">{data.data.location.name}, {data.data.location.country}</h3>
                </div>
                <div className="flex items-center">
                    <img width={50} height={50} src="https://cdn.weatherapi.com/weather/64x64/day/113.png" />
                    <h3 className="text-[20px] font-semibold">Sunny</h3>
                </div>
                <div className="flex justify-between mx-5 text-lg">
                    <p className="font-bold">Highest: <span className="font-normal">35&deg;</span></p>
                    <p className="font-bold">Lowest: <span className="font-normal">25&deg;</span></p>
                </div>
            </Card>
        </main>
    )
}