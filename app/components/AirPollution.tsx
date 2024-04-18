import { Card, Slider } from "@mantine/core";
import { IconMist } from "@tabler/icons-react";

export default function AirPollution() {
    const marks = [
        { value: 0, label: '0%' },
        { value: 25, label: '25%' },
        { value: 50, label: '50%' },
        { value: 75, label: '75%' },
        { value: 100, label: '100%' },
    ];

    return (
        <div>
            <Card className="w-full h-[39vh] p-10 text-white bg-[#1a1a1a] rounded-lg" >
                <div className="flex items-center mb-3">
                    <IconMist />
                    <h3 className="text-[20px] ml-3 font-semibold">Air Pollution</h3>
                </div>
                <Slider value={70} className="pointer-events-none" marks={marks} color="red" />
                <h3 className="mt-12">Air Quality is quite bad</h3>
            </Card>
        </div>
    )
}