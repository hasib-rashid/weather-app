import { Card } from "@mantine/core";
import { IconSunHigh, IconSunset2 } from "@tabler/icons-react";

export default function SunInfoCard() {
    return (
        <div>
            <Card className="h-[39vh] pb-9 text-white bg-[#1a1a1a] rounded-lg" >
                {/* Sunrise */}
                <div className="flex items-center mb-3">
                    <IconSunHigh />
                    <h3 className="text-[17px] ml-2 font-semibold">Sunrise</h3>
                </div>
                <div className="flex justify-center text-3xl font-bold">
                    5:15 AM
                </div>
                <br />

                {/* Sunset */}
                <div className="flex items-center mb-3">
                    <IconSunset2 />
                    <h3 className="text-[17px] ml-2 font-semibold">Sunset</h3>
                </div>
                <div className="flex justify-center text-3xl font-bold">
                    6:15 PM
                </div>
            </Card>
        </div>
    )
}