import { Card, Slider } from "@mantine/core";
import { IconUvIndex } from "@tabler/icons-react";
import { getUVInfo, getUVTitle } from "../lib/getUVInfo";


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
                <div>
                    <h2 className="text-md font-bold">{data.data.current.uv}</h2>
                    <h2 className="text-md">{getUVTitle(data.data.current.uv)}</h2>
                    <Slider value={data.data.current.uv * 10} className="pointer-events-none" marks={marks} color="indigo" />
                </div>
                <footer className="bottom-0 text-sm absolute mb-[10px]">{getUVInfo(data.data.current.uv)}</footer>
            </Card>
        </div>
    )
}