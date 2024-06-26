import React from "react";
import { Box, Heading, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

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
        <Link href="/feed" passHref>
          <Button size="lg" colorScheme="purple">
            Get Started
          </Button>
        </Link>
      </Box>
    </main>
  );
}
