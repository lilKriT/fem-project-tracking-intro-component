"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="z-10 fixed top-0 left-0 w-full flex justify-center items-center">
      <div className="relative max-w-7xl w-full flex justify-between items-center mx-8 mt-16">
        {/* Logo */}
        <Image
          src={"/logo.svg"}
          alt="Our Logo"
          width={32}
          height={32}
          className="h-10 w-auto"
        />

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex">
          <ul className="flex justify-center items-center gap-8">
            <li>
              <Link href={"/#"} className="navLink">
                Product
              </Link>
            </li>

            <li>
              <Link href={"/#"} className="navLink">
                Features
              </Link>
            </li>

            <li>
              <Link href={"/#"} className="navLink">
                Pricing
              </Link>
            </li>

            <li>
              <div className="rounded-full bg-gray-300 w-2 aspect-square mt-1"></div>
            </li>

            <li>
              <Link href={"/#"} className="navLink navLink--faded">
                Login
              </Link>
            </li>
          </ul>
        </nav>

        {/* Navigation - hamburger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <Image
              src={"/icon-close.svg"}
              alt="Menu hamburger"
              width={24}
              height={16}
            />
          ) : (
            <Image
              src={"/icon-hamburger.svg"}
              alt="Menu hamburger"
              width={24}
              height={16}
            />
          )}
        </button>

        {/* Navigation - mobile */}
        <nav
          id="mobile-menu"
          className={`${!open && "hidden"} md:hidden absolute left-0 right-0 top-full bg-white`}
        >
          <ul className="flex flex-col">
            <li>
              <Link href={"/#"} className="">
                Product
              </Link>
            </li>

            <li>
              <Link href={"/#"} className="">
                Features
              </Link>
            </li>

            <li>
              <Link href={"/#"} className="">
                Pricing
              </Link>
            </li>

            <li>
              <div className="rounded-full bg-gray-300 w-2 aspect-square mt-1"></div>
            </li>

            <li>
              <Link href={"/#"} className="">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
