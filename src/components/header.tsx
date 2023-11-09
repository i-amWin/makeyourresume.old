import Link from "next/link";
import { ThemeToggler } from "./theme-toggler";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-[999] border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-2 lg:px-0">
        <Link href="/" className="text-xl font-semibold sm:text-2xl ">
          MakeYourResume
        </Link>

        <ThemeToggler />
      </div>
    </header>
  );
}
