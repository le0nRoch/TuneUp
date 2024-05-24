import React from 'react';
import { ChakraProvider, Box, Flex, Heading, Button, Text, useBreakpointValue } from '@chakra-ui/react';
import { NavbarDesktop } from '../components/NavbarDesktop';
import { NavbarMobile } from '../components/NavbarMobile';

function Navbar() {
  return <NavbarDesktop /> 
}

function HeroSection() {
  return (
    <Box textAlign="center" py={{ base: 20, md: 36 }}>
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to TuneUp
      </Heading>
      <Text fontSize="xl" mb={8}>
        Connect with other artist to create new and original music.
      </Text>
      <Button size="lg" colorScheme="teal">
        Get Started
      </Button>
    </Box>
  );
}

function Footer() {
  return (
    <Box as="footer" py={4} textAlign="center" bg="gray.800" color="white">
      <Text>© 2024 Our Awesome App. All rights reserved.</Text>
    </Box>
  );
}

export default function Page() {
  return (
      <Box>

      </Box>
  );
}
