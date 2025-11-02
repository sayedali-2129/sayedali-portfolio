"use client";

import CloseIcon from "@/assets/icons/close-icon.png";
import Logo from "@/assets/icons/logo.png";
import MenuIcon from "@/assets/icons/menu.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const openMenu = () => {
    setShowMenu(!showMenu);
  };

  const navBarItemClass =
    "text-TextColor sm:font-RalewayRegular sm:text-lg text-[16px] font-RalewaySemiBold tracking-wide hover:cursor-pointer hover:text-TextBlue transition-colors duration-200";

  return (
    <div className="z-50 md:h-24 h-20 w-full fixed xl:px-52 md:px-32 sm:px-16 px-4 flex flex-row items-center justify-between backdrop-blur-md bg-black/30 border-b border-white/10">
      <ul className="flex gap-2 items-center">
        <li>
          <Link href="/">
            <Image
              src={Logo}
              alt="SAYED ALI MH LOGO"
              className="md:h-12 md:w-12 h-10 w-10"
            />
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="ml-1 text-TextColor md:text-xl text-[16px] font-RalewayBold tracking-wide hover:text-TextBlue transition-colors"
          >
            SAYED ALI MH
          </Link>
        </li>
      </ul>

      <ul className="hidden sm:flex flex-row xl:gap-20 md:gap-14 sm:gap-9">
        <li>
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "text-TextBlue underline underline-offset-8 drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
                : "text-TextColor"
            } sm:font-RalewayRegular sm:text-lg text-[16px] font-RalewaySemiBold tracking-wide hover:cursor-pointer hover:text-TextBlue transition-colors`}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className={`${
              pathname === "/about"
                ? "text-TextBlue underline underline-offset-8 drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
                : "text-TextColor"
            } sm:font-RalewayRegular sm:text-lg text-[16px] font-RalewaySemiBold tracking-wide hover:cursor-pointer hover:text-TextBlue transition-colors`}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact"
                ? "text-TextBlue underline underline-offset-8 drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
                : "text-TextColor"
            } sm:font-RalewayRegular sm:text-lg text-[16px] font-RalewaySemiBold tracking-wide hover:cursor-pointer hover:text-TextBlue transition-colors`}
          >
            Contact
          </Link>
        </li>
      </ul>
      <Image
        src={MenuIcon}
        alt="Menu Icon"
        onClick={openMenu}
        className="flex sm:hidden h-8 w-8 hover:cursor-pointer"
      />
      {mounted && (
        <>
          <div
            className={`fixed inset-0 bg-black/50 transition-opacity duration-300 sm:hidden ${
              showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={openMenu}
          />
          <div
            className={`z-50 flex sm:hidden flex-col gap-2 rounded-xl absolute top-24 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md border border-white/10 p-3 w-60 items-center transition-all duration-300 ${
              showMenu
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="flex flex-row justify-end w-full">
              <Image
                src={CloseIcon}
                alt="Menu Close Icon"
                onClick={openMenu}
                className="h-6 w-6 hover:cursor-pointer"
              />
            </div>
            <Link href="/" className={navBarItemClass}>
              Home
            </Link>

            <Link href="/about" className={navBarItemClass}>
              About
            </Link>
            <Link href="/contact" className={navBarItemClass}>
              Contact
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
