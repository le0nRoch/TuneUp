'use server'
import { Box } from '@chakra-ui/react';
import React from 'react';
import { FaHome, FaBell, FaPlus, FaHeart, FaUser } from 'react-icons/fa';
import { IoIosChatbubbles } from "react-icons/io";
import  Link from 'next/link';
export async function NavbarMobile() {
    const icons = [
        {
            icon: <FaBell />,
            link: '/notifications',
        },
        {
            icon: <FaPlus />,
            link: '/feed',
        },
        {
            icon: <IoIosChatbubbles />,
            link: '/chats',
        },
        {
            icon: <FaUser />,
            link: '/profile',
        },
    ];

    return (
        <Box
            bg="white"
            w="100%"
            h="60px"
            position="fixed"
            bottom="0"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            boxShadow="0px -1px 10px rgba(0, 0, 0, 0.1)"
        >
            {icons.map((item, index) => (
                <Link key={index} href={item.link}>
                    {item.icon}
                </Link>
            ))}
        </Box>
    );
}
