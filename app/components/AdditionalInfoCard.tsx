import { Card } from "@mantine/core";
import { Component } from "react";

interface AdditionalInfoCardProps {
    icon: any,
    title: string,
    info: string,
    footer: string
}

export default function AdditionalInfoCard({ footer, icon, info, title }: AdditionalInfoCardProps) {
    return (
        <div>
            <Card className="w-full h-[210px] pb-9 text-white bg-[#1a1a1a] rounded-lg" >
                <div className="flex items-center mb-3">
                    {icon}
                    <h3 className="text-[20px] ml-3 font-semibold">{title}</h3>
                </div>
                <div className="flex justify-center my-[20px] text-3xl font-bold">
                    {info}
                </div>
                <footer className="bottom-0 absolute mb-3">{footer}</footer>
            </Card>
        </div>
    )
}