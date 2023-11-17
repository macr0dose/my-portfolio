"use client";

import Image from "next/image";
import Button from "./Button";
import ContactForm from "./ContactForm";

import { MouseEvent } from "react";

const smoothScroll = (e: MouseEvent<HTMLButtonElement>, href: string) => {
  e.preventDefault();
  const section = document.querySelector(href);
  if (section) {
    // Scroll to the section smoothly
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-transparent to-slate-50 max-container padding-container flex flex-col gap-20 py-10 lg:pb-40 lg:py-20 xl:p-40 xl:flex-row rounded-5xl shadow-2xl">
      <div className="relative z-20 flex flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">built by</h1>
        <h2 className="text-orange-50 bold-52 lg:bold-88">j b.</h2>
        <p className="bold-20 mt-6 text-gray-30 xl:max-w-[520px]">
          Creating functional projects with passion. Come and discover for
          yourself.
        </p>
        <p className="bold-20 mt-6 text-gray-30 xl:max-w-[520px]">
          Available for Hire
        </p>

        <div className="my-8 flex-col"></div>
        <div className="flex gap-5">
          <Button
            type="button"
            title="My Work"
            icon="/console.svg"
            variant="btn_orange"
            onClick={(e) => smoothScroll(e, "#projects")}
          />
          <ContactForm />
        </div>
      </div>

      <div>
        <Image
          src="/rocketbg.webp"
          alt="rocketbg"
          width={1080}
          height={300}
          className="rounded-5xl"
        />
      </div>
    </section>
  );
};

export default Hero;
