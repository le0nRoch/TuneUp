import { Box, Container } from "@chakra-ui/react";

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box minHeight={"calc(100vh - 60px)"} background={"purple.100"}>
      <Container minHeight={"calc(100vh - 60px)"} background={"purple.50"}>
        {children}
      </Container>
    </Box>
  );
}
