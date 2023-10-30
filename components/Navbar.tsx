"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center max-w-full px-4 py-5 relative z-30">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} className="cursor-pointer" />
      </Link>

      <ul className="hidden lg:flex h-full gap-12 items-center">
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold">
            <Link href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex items-center">
        <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
      </div>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
        <Image src="/menu.svg" alt="menu" width={32} height={32} className="cursor-pointer" />
      </button>

      <Transition
        show={isMenuOpen}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute top-full right-0 mt-2 bg-white text-black lg:hidden"
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="py-2 px-4 hover:bg-gray-100">
              <Link href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Transition>
    </nav>
  );
};

export default Navbar;
