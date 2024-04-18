import { Card } from "@mantine/core";
import { IconMist } from "@tabler/icons-react";

export default function HighestTemp() {
    return (
        <div>
            <Card className="h-[38vh] pb-9 text-white bg-[#1a1a1a] rounded-lg" >
                <div className="flex items-center mb-3">
                    <h3 className="text-[20px] ml-3 font-semibold">Highest Temperature</h3>
                </div>
                <div className="flex justify-center my-[42px] text-5xl font-bold">
                    35&deg;
                </div>
            </Card>
        </div>
    )
}