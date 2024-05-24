'use client'
import { useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { NavbarMobile } from './NavbarMobile'
import { NavbarDesktop } from './NavbarDesktop'
export default function Navigation() {

 //   const isMobile = useBreakpointValue({ base: true, md: false });

    let width = "wasd" // screen.width;
    console.log(width)
    return (
        <>
            <NavbarDesktop />
        </>
    )
}