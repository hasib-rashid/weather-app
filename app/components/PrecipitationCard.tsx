import { Card } from "@mantine/core";
import { IconCloudRain } from "@tabler/icons-react";

export default function PrecipitationCard() {
    return (
        <div>
            <Card className="w-full h-[39vh] pb-9 text-white bg-[#1a1a1a] rounded-lg" >
                <div className="flex items-center mb-6">
                    <IconCloudRain />
                    <h3 className="text-[17px] ml-2 font-semibold">Precipitation</h3>

                </div>
                <h2 className="text-xl font-bold">0 mm</h2>
                <h2 className="text-xl font-bold mb-3">In last 3 hours</h2>
                <h3 className="mt-7">Conditions are dry</h3>
            </Card>
        </div>
    )
}