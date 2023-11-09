import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter">
      <div className="padding-container max-container w-full flex flex-col mt-8">
        <div className="border"></div>
        <div className="flex flex-col md:flex-row gap-[10%]">
          <div className="flex justify-center md:justify-start w-full">
            <Link href="#navbar">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/macrodose-logo.svg"
                  alt="logo"
                  width={200}
                  height={200}
                  className="opacity-80"
                />
              </div>
            </Link>
          </div>

          <div className="flex gap-20 padding-container justify-center py-10 ">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title} className="text-center ">
                <h4 className="bold-18 mb-4">{section.title}</h4>
                <ul className="regular-18 ">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.value} passHref>
                        <span className="cursor-pointer hover:bold-18">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex padding-container">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                <div className="flex gap-6 lg:flex-row">
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    // The key should be unique for each link, consider using a combination or different identifier
                    <Link href={link.value} key={link.value}>
                      <Image
                        src={link.icon}
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
        <p className="regular-14 my-10 w-full text-center text-gray-30">
          2023 macr0dose | All Rights Reserved
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
