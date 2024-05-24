import { Box, Container } from "@chakra-ui/react";

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box height={"calc(100vh - 60px)"} background={"purple.100"}>
      <Container height={"100%"} background={"purple.50"}>
        {children}
      </Container>
    </Box>
  );
}
