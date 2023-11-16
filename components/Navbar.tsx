"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { Transition } from "@headlessui/react";

import { MouseEvent } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const smoothScroll = (e: MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      // Close the mobile menu
      setIsMenuOpen(false);
      // Scroll to the section smoothly
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav id='navbar' className="flex justify-between items-center max-w-full px-4 py-5 relative z-30 padding-container max-container">
      <Link href="/" onClick={(e) => smoothScroll(e, "#navbar")}>
        <Image src="/techrocket.avif" alt="logo" width={100} height={100} className="cursor-pointer" />
      </Link>
      <ul className="hidden lg:flex h-full gap-12 items-center">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className="text-gray-50 cursor-pointer pb-1.5 transition-all regular-24 hover:bold-24"
          >
            <Link href={link.href} onClick={(e) => smoothScroll(e, link.href)}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex">
        <Button
          type="button"
          title="Soon"
          icon="/dark-mode.svg"
          variant="btn_dark_green"
        />
      </div>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="cursor-pointer"
        />
      </button>

      <Transition
        show={isMenuOpen}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute top-full right-0 mt-2 bg-slate-50 text-black rounded-xl lg-hidden "
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li
              key={link.key}
              className="py-2 px-4 hover:bg-gray-100 rounded-xl"
            >
              <Link
                href={link.href}
                onClick={(e) => smoothScroll(e, link.href)}
              >
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
