import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="padding-container max-container flex flex-col md:flex-row md:items-center xl:pt-8 bg-gradient-to-t from-transparent to-slate-100 dark:to-slate-800 rounded-5xl"
    >
      <div className="w-full padding-container max-container pb-10 xl:pl-5 ">
        <h2 className="mt-8 mb-8 bold-40 lg:bold-64">About Me</h2>
        <p className="uppercase regular-18 mb-8"> </p>
        <p className="bold-18 text-gray-20 mb-8 xl:pr-14 dark:text-gray-400">
          Embarking on the tech scene at the age of 15 with Fuji Xerox, I delved
          into the world of document storage solutions, while managing complex
          server environments. My background is rich in technology and
          electronics, with a passion for computer science and the realm of
          cryptocurrency. Beyond the digital world, my downtime is fueled by the
          thrill of racing and tuning cars, alongside the energy of live music.
        </p>
      </div>

      <div className="w-full px-6">
        <Image
          src="/feature-bg.webp"
          alt="rocket"
          width={720}
          height={480}
          className="rounded-5xl mb-10"
        />
      </div>
    </section>
  );
};

export default About;
