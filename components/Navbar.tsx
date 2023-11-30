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
    setTheme("light");
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
            className="cursor-pointer pb-1.5 transition-all regular-24 dark:text-white hover:shadow-effect"
          >
            <Link href={link.href} onClick={(e) => smoothScroll(e, link.href)}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <DarkModeToggle/>
      </div>

      <div ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
          aria-label="Menu"
        >
          <div
            className={`hamburger ${isMenuOpen ? "open" : ""} ${
              theme === "dark" ? "dark-mode" : ""
            }`}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <span className="visually-hidden">Toggle Menu</span>
        </button>

        <Transition
          show={isMenuOpen}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full" // Starts from the right edge
          enterTo="translate-x-0" // Ends at the current position
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0" // Starts from the current position
          leaveTo="translate-x-full" // Moves to the right edge
          className="absolute top-full right-0 mt-2 lg:hidden shadow-lg text-center rounded-2xl"
        >
          <ul className="shadow-2xl shadow-black border-2 dark:border-orange-50 rounded-2xl bg-slate-200 p-2">
            {/* <h2 className="bold-24 pt-2">Navigation</h2> */}
            {NAV_LINKS.map((link) => (
              <li
                key={link.key}
                className="p-2 bold-20 text-black border-orange-50"
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
