"use client";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

export interface Route {
  name: string;
  link: string;
  icon?: React.ReactNode;
  displayIconInDesktop?: boolean;
}

interface NavigationProps {
  routes: Route[];
}

export default function Navigation({ routes }: NavigationProps) {
  return (
    <header>
      <nav>
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
          zIndex="1"
        >
          {routes.map((route) => (
            <Link href={route.link} key={route.link}>
              {route.displayIconInDesktop ? route.icon : route.name}
            </Link>
          ))}
        </Box>
        <Box h="60px" />
      </nav>
    </header>
  );
}
