"use client";
import { Link, Box, Tooltip } from "@chakra-ui/react";
import NextLink from "next/link";

export interface Route {
  name: string;
  link: string;
  icon?: React.ReactNode;
  displayIconInDesktop?: boolean;
  implemented?: boolean;
}

interface NavigationProps {
  routes: Route[];
}

export default function Navigation({ routes }: NavigationProps) {
  return (
    <header>
      <nav>
        <Box
          bg="purple.50"
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
            <Tooltip isDisabled={route.implemented} label="Coming Soon!">
              <Link
                _hover={{ textDecoration: "none", transform: "scale(1.1)" }}
                as={NextLink}
                href={route.implemented ? route.link : "/"}
                key={route.link}
              >
                {route.displayIconInDesktop ? route.icon : route.name}
              </Link>
            </Tooltip>
          ))}
        </Box>
        <Box h="60px" />
      </nav>
    </header>
  );
}
