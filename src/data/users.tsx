import type { User } from "@/types/user";

export const users: User[] = [
  {
    id: "1",
    subscription: "free",
    firstName: "John",
    lastName: "Doe",
    description: "I am gay and I love it",
    email: "john.doe@hotmail.com",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    tracks: ["sad-violin.mp3"],
  },
  {
    id: "2",
    subscription: "premium",
    firstName: "Jane",
    lastName: "Doe",
    description: "Music is my life",
    email: "s",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    tracks: ["sad-violin.mp3"],
  },
  {
    id: "3",
    subscription: "platinum",
    firstName: "Alice",
    lastName: "Doe",
    description: "I am a music producer",
    email: "w",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    tracks: ["sad-violin.mp3"],
  },
];
