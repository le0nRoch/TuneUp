import { Box, Text } from "@chakra-ui/react";

export function Footer() {
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
