import type { Metadata } from "next";
import { Providers } from "./providers";
import Navbar, { type Route } from "./components/Navbar";
import { FaBell, FaPlus, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";

export const metadata: Metadata = {
  title: "TuneUp",
  description: "Tinder for music",
};

const routes: Route[] = [
  {
    name: "Feed",
    link: "/feed",
    icon: <FaPlus />,
  },
  {
    name: "Chats",
    link: "/chats",
    icon: <IoIosChatbubbles />,
  },
  {
    name: "Notifications",
    link: "/notifications",
    icon: <FaBell />,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: <FaUser />,
    displayIconInDesktop: true,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar routes={routes} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
