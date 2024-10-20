"use client";

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobileMenu";
import { usePathname } from "next/navigation";
import AuthButton from "../buttons/authButton";

export type MenuItemType = {
  displayText: string;
  href: string;
  isMobileOnly: boolean;
  isExternal?: boolean;
};

const MENU_ITEMS: MenuItemType[] = [
  { displayText: "CareHippos", href: "/", isMobileOnly: true },
  {
    displayText: "Play",
    href: "/play",
    isMobileOnly: false,
  },
  {
    displayText: "Leaderboard",
    href: "/leaderboard",
    isMobileOnly: false,
  },
  { displayText: "FAQ", href: "/faq", isMobileOnly: false },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="h-20 w-full bg-black">
      <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-between px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:px-8">
        <div>
          <Link className="flex w-20 items-center" href="/">
            <Image
              src="/images/logos/carehippos-logo.png"
              alt="CareHippos logo"
              width={256}
              height={256}
              className="h-12 w-12 transition duration-300 ease-in-out hover:scale-90"
            />
            <span className="sr-only">CareHippos</span>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <nav className="hidden gap-6 lg:flex">
            {MENU_ITEMS.filter((menuItem) => !menuItem.isMobileOnly).map(
              (menuItem, index) => (
                <Link
                  key={`${menuItem.displayText}-menuItem-${index}`}
                  className={`inline-flex items-center justify-center px-4 py-2 text-lg font-medium text-background transition-colors hover:text-primary focus:text-primary focus:outline-none ${
                    pathname === menuItem.href &&
                    "pointer-events-none underline decoration-primary decoration-[1.5px] underline-offset-[6px] hover:!text-primary"
                  }`}
                  href={menuItem.href}
                  target={menuItem.isExternal ? "_blank" : ""}
                >
                  {menuItem.displayText}
                </Link>
              )
            )}
          </nav>
        </div>
        <div className="hidden lg:flex lg:justify-end">
          <AuthButton />
        </div>
        <MobileMenu menuItems={MENU_ITEMS} pathname={pathname} />
      </div>
    </header>
  );
}
