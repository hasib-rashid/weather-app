import { Card } from "@mantine/core";
import { IconMist, IconSunLow } from "@tabler/icons-react";

export default function LowestTemp() {
    return (
        <div>
            <Card className="w-full pb-9 text-white bg-[#1a1a1a] rounded-lg" >
                <div className="flex items-center mb-3">
                    <IconSunLow />
                    <h3 className="text-[15px] ml-3 font-semibold">Lowest Temperature</h3>
                </div>
                <div className="flex justify-center text-5xl font-bold">
                    25&deg;
                </div>
            </Card>
        </div>
    )
}