import { Card } from "@mantine/core";
import { IconWind } from "@tabler/icons-react";
import Compass from "./Compass";

export default function WindCard(data: any) {
    return (
        <div>
            <Card className="w-full h-[220px] text-white bg-[#1a1a1a] rounded-lg" >
                <div className="flex items-center">
                    <IconWind />
                    <h3 className="text-[17px] ml-2 font-semibold">Wind</h3>
                </div>
                <div className="flex justify-center items-center h-full">
                    <Compass deg={data.data.current.wind_degree} speed={data.data.current.wind_kph} />
                </div>
            </Card>
        </div>
    )
}