import React from "react";
import { Box, Heading, Button, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
