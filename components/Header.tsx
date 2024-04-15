import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { Input } from '@mantine/core';
import Image from 'next/image';

export default function Header() {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Image src={"/logo.png"} width={50} height={50} alt='Logo' />

                <Input radius="md" style={{ width: '300px' }} placeholder="Check Weather" />
            </Container>
        </header>
    );
}