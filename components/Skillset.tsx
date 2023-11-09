import { SKILLSET } from "@/constants";
import Image from "next/image";
import React from "react";

const Skillset = () => {
  return (
    <section
      id="skillset"
      className="flex-col flexCenter overflow-hidden bg-skillset-bg bg-center bg-no-repeat py-24"
    >
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1">
          <Image
            src="/skillsetimg.png"
            alt="logo2"
            width={300}
            height={300}
            className="skillset-image1 rounded-5xl"
          />
          <Image
            src="/skillsetimg2.png"
            alt="logo2"
            width={300}
            height={300}
            className="skillset-image2 rounded-5xl"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="z-20 w-full flex flex-col items-start lg:w-[60%]">
            <div className="relative">
              <h2 className="bold-40 lg:bold-64 mt-4">Skill Set</h2>
            </div>
          </div>

          <ul className="mt-10 grid gap-10 md:grid-col-2 lg:mt-20 ">
            {SKILLSET.map((skillset) => (
              <div>
                <SkillsetItem
                  key={skillset.title}
                  title={skillset.title}
                  icon={skillset.icon}
                  description={skillset.description}
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type SkillsetItem = {
  title: string;
  icon: string;
  description: string;
};

const SkillsetItem = ({ title, icon, description }: SkillsetItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-b from-transparent to-black/10 p-4 rounded-xl border-2 border-transparent hover:border-orange-50 group">
      <div className="rounded-full p-4 lg:p-7 bg-orange-50">
        <Image src={icon} alt={title} width={28} height={28} />
      </div>
      <h2 className="bold-20 sm:bold-32 lg:bold-32 mt-5 capitalize group-hover:bg-transparent bg-white/60 rounded-xl bg-orange-50">
        {title}
      </h2>
      <p className="regular-18 mt-5 text-gray-30 lg:mt-[30px] group-hover:bg-transparent bg-white/60 rounded-xl ">
        {description}
      </p>
    </li>
  );
};

export default Skillset;
