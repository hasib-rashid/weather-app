import { Card } from "@mantine/core";
import { IconCloudRain } from "@tabler/icons-react";

export default function PrecipitationCard() {
    return (
        <div>
            <Card className="w-full h-[210px] pb-9 text-white bg-[#1a1a1a] rounded-lg" >
                <div className="flex items-center mb-3">
                    <IconCloudRain />
                    <h3 className="text-[20px] ml-3 font-semibold">Precipitation</h3>
                </div>
                <div className="my-[20px] text-3xl font-bold">
                    <h2 className="text-xl font-bold">0 mm</h2>
                    <h2 className="text-xl font-bold lg:mb-3">In last 3 hours</h2>
                </div>
                <footer className="bottom-0 absolute mb-3">Conditions are dry</footer>
            </Card>
        </div>
    )
}