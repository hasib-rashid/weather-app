import { Card } from "@mantine/core";
import { IconSunHigh, IconSunset2 } from "@tabler/icons-react";

export default function SunInfoCard() {
    return (
        <div>
            <Card className="w-full h-[220px] pb-9 text-white bg-[#1a1a1a] rounded-lg" >
                {/* Sunrise */}
                <div className="flex items-center mb-3">
                    <IconSunHigh />
                    <h3 className="text-[20px] ml-3 font-semibold">Sunrise</h3>
                </div>
                <div className="flex items-center text-2xl font-bold">
                    5:15 AM
                </div>

                {/* Sunset */}
                <br />
                <div className="flex items-center mb-3">
                    <IconSunHigh />
                    <h3 className="text-[20px] ml-3 font-semibold">Sunset</h3>
                </div>
                <div className="flex items-center text-2xl font-bold">
                    6:15 PM
                </div>
            </Card>
        </div>
    )
}