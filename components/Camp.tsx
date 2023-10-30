"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

// Dummy PEOPLE_URL array for demonstration
const PEOPLE_URL = ["/person-1.png", "/person-2.png", "/person-3.png"];

// CampProps interface
interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

// CampData array
const campData = [
  {
    backgroundImage: "/img-1.png",
    title: "Emu Creek Camp",
    subtitle: "BBs Hollow",
    peopleJoined: "50+ Joined",
  },
  {
    backgroundImage: "/img-2.png",
    title: "Buranga Farm",
    subtitle: "Verrierdale",
    peopleJoined: "50+ Joined",
  },
  // ... (add more camp data if necessary)
];

// CampSite component
const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  const bgStyle = backgroundImage.startsWith('/')
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <div
      style={bgStyle}
      className={`rounded-5xl overflow-hidden h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl flex flex-col justify-between p-6 lg:px-20 lg:py-10 text-left`}
    >
      <div className="flex gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image src="/folded-map.svg" alt="map" width={28} height={28} />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>
      <div className="flex gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
    </div>
  );
};

// Camp component
const Camp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const goToNextCamp = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % campData.length);
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const firstChild = scrollContainer.firstChild as HTMLElement | null;
      if (firstChild) {
        const campItemWidth = firstChild.offsetWidth;
        const nextScrollPosition =
          ((currentIndex + 1) % campData.length) * campItemWidth;
        scrollContainer.scrollTo({
          left: nextScrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 xl:mb-20">
      <div
        ref={scrollContainerRef}
        className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] relative"
      >
        {campData.map((camp, index) => (
          <CampSite key={index} {...camp} />
        ))}
      </div>
      <button
        onClick={goToNextCamp}
        className="absolute top-1/2 left-10 pb-20 transform -translate-y-1/2 p-4 rounded-full"
      >
        <Image src="/next-icon.png" alt="next" width={50} height={50} />
      </button>
      <div className="flexEnd mt-10 px-6 lg:-mt-10 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost </strong>
            And Unsure Of The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of climbers when first visiting a new
            climbing location, the possibility of getting lost is very high.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
