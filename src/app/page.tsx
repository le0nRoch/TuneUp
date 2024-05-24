import React from 'react';
import { Box, Heading, Button, Text, useBreakpointValue } from '@chakra-ui/react';

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
    <Box
      as="footer"
      py={4}
      textAlign="center"
      bg="gray.800"
      color="white"
      position="fixed"
      left={0}
      bottom={0}
      width="100%"
    >
      <Text>© 2024 TuneUp. All rights reserved.</Text>
    </Box>
  );
}

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <Footer />
    </Box>
  );
}
