"use client";
import type { User } from "@/types/user";
import {
  Avatar,
  Button,
  type ButtonProps,
  chakra,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { Track } from "./Track";
import { CardWrapper } from "./CardWrapper";

interface CardProps {
  user: User;
  onSmash?: () => void;
  onPass?: () => void;
}

export function Card({
  user: { avatar, firstName, lastName, description, tracks },
  onSmash = () => {},
  onPass = () => {},
}: CardProps) {
  return (
    <CardWrapper>
      <VStack gap="inherit">
        <Avatar src={avatar} size="2xl" />
        <Flex
          direction="row"
          justify="center"
          gap={4}
          width={"100%"}
          overflowWrap={"normal"}
        >
          <chakra.h2>{firstName}</chakra.h2>
          <chakra.h2>{lastName}</chakra.h2>
        </Flex>
        <chakra.p textAlign={"center"}>{description.repeat(5)}</chakra.p>
      </VStack>
      <VStack
        overflowY={"hidden"}
        width={"100%"}
        height={"100%"}
        align={"baseline"}
        gap={4}
      >
        {tracks.map((track) => (
          <Track key={track} src={track} />
        ))}
      </VStack>
      <Flex direction="row" justify={"space-between"} width={"100%"} gap={3}>
        <ActionButton colorScheme="red" onClick={onPass}>
          Pass
        </ActionButton>
        <ActionButton colorScheme="green" onClick={onSmash}>
          Smash
        </ActionButton>
      </Flex>
    </CardWrapper>
  );
}

function ActionButton({ onClick, children, ...props }: ButtonProps) {
  return (
    <Button {...props} flexGrow={1} paddingY="10" onClick={onClick}>
      {children}
    </Button>
  );
}
