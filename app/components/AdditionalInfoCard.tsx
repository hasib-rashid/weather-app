import { Card } from "@mantine/core";

export default function AdditionalInfoCard() {
    return (
        <div>
            <Card className="w-full h-[39vh] pb-9 text-white bg-[#1a1a1a] rounded-lg" >
                <div className="flex items-center mb-3">
                    <h3 className="text-[20px] ml-3 font-semibold">Lowest Temperature</h3>
                </div>
                <div className="flex justify-center my-[22px] text-5xl font-bold">
                    25&deg;
                </div>
            </Card>
        </div>
    )
}