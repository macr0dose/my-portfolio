"use client";

import React, { useState, useEffect, useRef, MouseEvent } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import DarkModeToggle from "./DarkModeToggle";

import { useTheme } from "next-themes";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme('light');
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setTheme]);

  const smoothScroll = (e: MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      setIsMenuOpen(false);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClickOutside = (event: Event) => {
    const target = event.target as Node;

    if (menuRef.current && !menuRef.current.contains(target)) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      id="navbar"
      className="flex justify-between items-center max-w-full px-4 py-5 relative z-30 padding-container max-container"
    >
      <Link href="/" onClick={(e) => smoothScroll(e, "#navbar")}>
        <Image
          src="/jblogo.webp"
          alt="logo"
          width={125}
          height={125}
          className="cursor-pointer custom-logo"
        />
      </Link>

      <ul className="hidden lg:flex h-full gap-12 items-center">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className="text-gray-50 cursor-pointer pb-1.5 transition-all regular-24 hover:bold-24 dark:text-white"
          >
            <Link href={link.href} onClick={(e) => smoothScroll(e, link.href)}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <DarkModeToggle />
      <div ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
        >
          {theme === "dark" ? (
            <Image
              src="/menu-dark.webp" // Path to white hamburger icon for dark mode
              alt="menu"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          ) : (
            <Image
              src="/menu.webp" // Path to default hamburger icon for light mode
              alt="menu"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          )}
        </button>

        <Transition
          show={isMenuOpen}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="absolute top-full right-0 mt-2 bg-slate-200 rounded-xl lg:hidden shadow-lg"
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li
                key={link.key}
                className="p-2 px-8 rounded-xl regular-24 text-black"
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
      </div>
    </nav>
  );
};

export default Navbar;
