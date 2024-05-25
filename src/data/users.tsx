import type { User } from "@/types/user";

export const users: User[] = [
  {
    id: "1",
    subscription: "free",
    firstName: "Ben",
    lastName: "Dover",
    description: "Music is my passion",
    email: "john.doe@hotmail.com",
    avatar: "https://randomuser.me/api/portraits/men/0.jpg",
    tracks: ["/songs/seinfeld.mp3"],
  },
  {
    id: "2",
    subscription: "platinum",
    firstName: "Aakash",
    lastName: "Sethi",
    description: "Music is my life",
    email: "sethi@gmail.com",
    avatar:
      "https://i0.wp.com/namasteswitzerland.ch/wp-content/uploads/2019/11/Facetune-02-11-2019-11-03-50.jpg?resize=225%2C300&ssl=1",
    tracks: [
      "/songs/dingidingi.mp3",
      "/songs/hindi.mp3",
      "/songs/trollolol.mp3",
    ],
  },
  {
    id: "3",
    subscription: "platinum",
    firstName: "Alice",
    lastName: "Doe",
    description: "I am a music producer",
    email: "w",
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
    tracks: ["/songs/naruto-sad.mp3", "/songs/sad-violin.mp3"],
  },
  {
    id: "4",
    subscription: "free",
    firstName: "Francois",
    lastName: "Pierre",
    description: "Vive la musique!",
    email: "",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    tracks: ["/songs/french.mp3", "/songs/crab.mp3"],
  },
  {
    id: "5",
    subscription: "free",
    firstName: "Top",
    lastName: "G",
    description: "Music is my passion",
    email: "",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    tracks: [
      "/songs/outro.mp3",
      "/songs/spiderman.mp3",
      "/songs/we-got-him.mp3",
    ],
  },
];
