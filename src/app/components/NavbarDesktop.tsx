'use server'
import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FaUser } from 'react-icons/fa'

export async function NavbarDesktop() {

    const routes = [
        {
            name: 'Feed',
            link: '/feed',
        },
        {
            name: 'Chats',
            link: '/chats',
        },
        {
            name: 'Notifications',
            link: '/notifications',
        }
    ]
    const profile = {
        name: 'Profile',
        link: '/profile',
        icon: <FaUser />,
    }
    return (
        <>
            <Box
                bg="white"
                w="100%"
                h="60px"
                position="fixed"
                top="0"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                boxShadow="0px 1px 10px rgba(0, 0, 0, 0.1)"
                zIndex="999"
            >
                {routes.map((route, index) => (
                    <Link href={route.link} key={index}>
                        {route.name}
                    </Link>
                ))}
                <Link href={profile.link}>
                    {profile.icon}
                </Link>
            </Box>
            <Box h="60px" />
        </>
    )
}