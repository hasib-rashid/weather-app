import { Card, Slider } from "@mantine/core";
import { IconUvIndex } from "@tabler/icons-react";


const marks = [
    { value: 0, label: '0' },
    { value: 20, label: '2' },
    { value: 40, label: '4' },
    { value: 60, label: '6' },
    { value: 80, label: '8' },
    { value: 100, label: '10' },
];

export default function UVInfo() {
    return (
        <div>
            <Card className="w-full h-[39vh] pb-9 text-white bg-[#1a1a1a] rounded-lg" >
                <div className="flex items-center mb-6">
                    <IconUvIndex />
                    <h3 className="text-[17px] ml-2 font-semibold">UV Index</h3>

                </div>
                <h2 className="text-xl font-bold">5</h2>
                <h2 className="text-xl font-bold mb-3">Moderate</h2>
                <Slider value={70} className="pointer-events-none" marks={marks} color="violet" />
                <h3 className="md:mt-96 lg:mt-7">Take Precautions</h3>
            </Card>
        </div>
    )
}