import { NavbarDesktop } from "../components/NavbarDesktop";
import { NavbarMobile } from "../components/NavbarMobile";



export default function Feed() {
  return (
    <main>
      <NavbarDesktop />
      <p>feed</p>
      TODO: navs currently just in the feed, change it to the layout later and also maybe make the a bit more reusable
      <NavbarMobile />
    </main>
  );
}
