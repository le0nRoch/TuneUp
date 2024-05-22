import { User } from "@/types/user";

export const users: User[] = [
  {
    id: "1",
    subscription: "free",
    name: {
      first: "John",
      last: "Doe",
    },
    email: "john.doe@hotmail.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    tracks: ["sad-violin.mp3"],
  },
];
