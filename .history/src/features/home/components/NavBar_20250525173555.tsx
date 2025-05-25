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
    "text-TextColor sm:font-RalewayRegular sm:text-lg text-[16px] font-RalewaySemiBold tracking-wide hover:cursor-pointer hover:text-TextBlue";

  return (
    <div className="z-50 md:h-24 h-20 w-full bg-BackGroundColor fixed xl:px-52 md:px-32 sm:px-16 px-4 flex flex-row items-center justify-between">
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
            className="ml-1 text-TextColor md:text-xl text-[16px] font-RalewayBold tracking-wide"
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
                ? "text-TextBlue underline underline-offset-8"
                : "text-TextColor"
            } sm:font-RalewayRegular sm:text-lg text-[16px] font-RalewaySemiBold tracking-wide hover:cursor-pointer hover:text-TextBlue`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`${"text-TextColor"} sm:font-RalewayRegular sm:text-lg text-[16px] font-RalewaySemiBold tracking-wide hover:cursor-pointer hover:text-TextBlue`}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className={`${
              pathname === "/about"
                ? "text-TextBlue underline underline-offset-8"
                : "text-TextColor"
            } sm:font-RalewayRegular sm:text-lg text-[16px] font-RalewaySemiBold tracking-wide hover:cursor-pointer hover:text-TextBlue`}
          >
            About
          </Link>
        </li>

        <li>
          <a
            href="mailto:sayedalimh@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={navBarItemClass}
          >
            Contact
          </a>
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
            className={`z-50 flex sm:hidden flex-col gap-2 rounded-xl absolute top-24 left-1/2 transform -translate-x-1/2 bg-BackGroundColor p-3 w-60 items-center transition-all duration-300 ${
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
            <Link href="/" className={navBarItemClass}>
              Projects
            </Link>
            <Link href="/about" className={navBarItemClass}>
              About
            </Link>
            <a
              href="mailto:sayedalimh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={navBarItemClass}
            >
              Contact
            </a>
          </div>
        </>
      )}
    </div>
  );
}
