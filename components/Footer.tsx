"use client";

import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();

  const getIconPath = (icon: string) => {
    if (theme === "dark") {
      // Check for specific icons and replace them for dark mode
      if (icon.includes("mail.svg")) {
        return icon.replace("mail.svg", "mail-dark.svg");
      }
      if (icon.includes("twitter.svg")) {
        return icon.replace("twitter.svg", "twitter-dark.svg");
      }
    }
    return icon; // Default icon for light mode
  };

  return (
    <footer className="flexCenter">
      <div className="padding-container max-container w-full flex flex-col mt-8">
        <div className="border"></div>
        <div className="flex flex-col md:flex-row gap-[10%]">
          <div className="flex flexCenter md:justify-start w-full">
            <Link href="#navbar">
              <Image
                src="/jblogo.webp"
                alt="logo"
                width={150}
                height={150}
                className="py-8"
              />
            </Link>
          </div>

          <div className="flex gap-20 padding-container py-10 ">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title} className="text-center ">
                <h4 className="bold-18 mb-4">{section.title}</h4>
                <ul className="regular-18 ">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.value}
                        className="cursor-pointer hover:bold-18"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex padding-container">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                <div className="flex gap-6 lg:flex-row">
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link href={link.value} key={link.value}>
                      <Image
                        src={getIconPath(link.icon)} // Use getIconPath function
                        alt={`${link.label} icon`}
                        width={40}
                        height={40}
                        className="hover:scale-110"
                      />
                    </Link>
                  ))}
                </div>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border" />
        <p className="regular-14 my-10 w-full text-center text-gray-20">
          2023 builtByJB | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
