"use client";
import { Card } from "@/components/feed/Card";
import { CardWrapper } from "@/components/feed/CardWrapper";
import { users } from "@/data/users";
import { Center } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Page() {
  const [index, setIndex] = useState<number | null>(0);

  function handleAction() {
    if ((index ?? 0) >= users.length - 1) {
      setIndex(null);
      return;
    }

    setIndex((index ?? 0) + 1);
  }

  return (
    <main
      style={{
        height: "inherit",
      }}
    >
      {index != null ? (
        <Card
          user={users[index!]}
          onSmash={handleAction}
          onPass={handleAction}
        />
      ) : (
        <CardWrapper>
          <Center>
            <h1>There are no more users to show</h1>
          </Center>
        </CardWrapper>
      )}
    </main>
  );
}
