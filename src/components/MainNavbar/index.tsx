import Link from "next/link";
import Logo from "../UI/Logo";
import NavbarList from "./navbarList";

export default function MainHeader() {
  return (
    <div className="relative flex items-center w-full px-4 pt-6 border-b border-border-brown text-text-primary">
      <Link href="/">
        <Logo />
      </Link>
      <NavbarList />
    </div>
  );
}
