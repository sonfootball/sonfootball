import Link from "next/link";
import { Avatar } from "./Avatar";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Link href="/" className="text-xl font-bold">
        SonFootball
      </Link>
      <Avatar />
    </header>
  );
}
