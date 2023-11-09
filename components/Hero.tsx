"use client";

import Image from "next/image";
import Button from "./Button";
import ContactForm from "./ContactForm";

const smoothScroll = (e, href) => {
  // Prevent default anchor click behavior
  e.preventDefault();
  const section = document.querySelector(href);
  if (section) {
    // Scroll to the section smoothly
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-transparent to-slate-50 max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:p-20 xl:flex-row rounded-5xl">
      <div className="relative z-20 flex flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">built by</h1>
        <h2 className="text-orange-50 bold-52 lg:bold-88">macr0dose</h2>
        <p className="bold-20 mt-6 text-gray-30 xl:max-w-[520px]">
          Creating functional projects with passion. Come and discover for
          yourself.
        </p>
        <p className="bold-20 mt-6 text-gray-30 xl:max-w-[520px]">
          Live, Learn & Level Up.
        </p>

        <div className="my-8 flex-col"></div>
        <div className="flex gap-5">
          <Button
            type="button"
            title="View My Work"
            icon="/console.svg"
            variant="btn_orange"
            onClick={(e) => smoothScroll(e, "#projects")}
          />
          <ContactForm />
        </div>
      </div>

      <div className="">
        <Image
          src="/rocketbg.png"
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
