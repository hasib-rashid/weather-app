import { ActionIcon, Button, Group, TextInput } from "@mantine/core";
import React from "react";
import { IconBrandGithub, IconMapPin, IconSearch } from "@tabler/icons-react";

export default function Header() {
    return (
        <header className="flex justify-between items-center h-[64px] border-solid border-b-2 border-[#2E2E2E] px-5">
            <Group>

            </Group>

            <Group>
                <TextInput
                    radius="xl"
                    size="md"
                    className="focus:outline-none"
                    w={350}
                    placeholder="Search City..."
                    rightSectionWidth={42}
                    leftSection={<IconSearch style={{ width: "18px", height: "18px" }} stroke={1.5} />}
                    rightSection={
                        <ActionIcon size={32} radius="xl" color="dark" variant="filled">
                            <IconMapPin style={{ width: "18px", height: "18px" }} stroke={1.5} />
                        </ActionIcon>
                    }
                />
                <Button
                    leftSection={<IconBrandGithub color="black" style={{ width: '1rem', height: '1rem' }} />}
                    className="bg-[#fff] text-black"
                >Support Project</Button>
            </Group>
        </header>
    )
}