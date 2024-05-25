"use client";
import { UserCard } from "@/components/feed/UserCard";
import { users } from "@/data/users";
import React, { useState } from "react";
import { EmptyCard } from "@/components/feed/EmptyCard";

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
        <UserCard
          user={users[index!]}
          onSmash={handleAction}
          onPass={handleAction}
        />
      ) : (
        <EmptyCard />
      )}
    </main>
  );
}
