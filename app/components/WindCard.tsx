import { Card } from "@mantine/core";
import { IconWind } from "@tabler/icons-react";
import Compass from "./Compass";

export default function WindCard() {
    return (
        <div>
            <Card className="w-full h-[39vh] text-white bg-[#1a1a1a] rounded-lg" >
                <div className="flex items-center">
                    <IconWind />
                    <h3 className="text-[17px] ml-2 font-semibold">Wind</h3>
                </div>
                <div className="flex justify-center items-center h-full">
                    <Compass deg={170} speed={2.5} />
                </div>
            </Card>
        </div>
    )
}