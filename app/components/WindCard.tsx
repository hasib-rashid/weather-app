import { Card } from "@mantine/core";
import { IconWind } from "@tabler/icons-react";
import Compass from "./Compass";

export default function WindCard() {
    return (
        <div>
            <Card className="w-full h-[39vh] pb-9 text-white bg-[#1a1a1a] rounded-lg" >
                {/* Sunrise */}
                <div className="flex items-center mb-12">
                    <IconWind />
                    <h3 className="text-[17px] ml-2 font-semibold">Wind</h3>
                </div>
                <Compass deg={170} speed={2.5} />
            </Card>
        </div>
    )
}