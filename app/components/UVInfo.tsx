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

export default function UVInfo(data: any) {
    return (
        <div>
            <Card className="w-full h-[210px] pb-9 text-white bg-[#1a1a1a] rounded-lg" >
                <div className="flex items-center mb-3">
                    <IconUvIndex />
                    <h3 className="text-[20px] ml-3 font-semibold">UV Index</h3>
                </div>
                <div className="text-3xl font-bold">
                    <h2 className="text-xl font-bold">5</h2>
                    <h2 className="text-xl font-bold mb-3">Moderate</h2>
                    <Slider value={data.data.current.uv * 10} className="pointer-events-none" marks={marks} color="indigo" />

                </div>
                <footer className="bottom-0 absolute mb-3">Take Precautions</footer>
            </Card>
        </div>
    )
}