import { Flex } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

export function CardWrapper({ children }: PropsWithChildren<object>) {
  return (
    <Flex
      as="section"
      direction={"column"}
      justify={"space-between"}
      align={"center"}
      paddingY={5}
      paddingX={3}
      gap={10}
      height={"100%"}
    >
      {children}
    </Flex>
  );
}
