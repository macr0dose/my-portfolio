"use client";

import React, { useRef, useEffect } from "react";
import "../app/scrollerStyles.css";

const Scroller: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollerEls =
      scrollerRef.current?.querySelectorAll<HTMLDivElement>(".scroller");

    if (scrollerEls) {
      scrollerEls.forEach((scroller) => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          scroller.setAttribute("data-animated", "true");
          const scrollerInner = scroller.querySelector(".scroller__inner");
          if (scrollerInner) {
            const scrollerContent = Array.from(scrollerInner.children);
            scrollerContent.forEach((item) => {
              const duplicatedItem = item.cloneNode(true) as HTMLElement;
              duplicatedItem.setAttribute("aria-hidden", "true");
              scrollerInner.appendChild(duplicatedItem);
            });
          }
        }
      });
    }
  }, []);

  return (
    <>
      <div ref={scrollerRef}>
        <div className="scroller sm:pb-0" data-speed="fast">
          <ul className="tag-list scroller__inner "></ul>
        </div>

        <div
          className="scroller padding-container max-container"
          data-direction="right"
          data-speed="slow"
        >
          <div className="scroller__inner">
            <img src="/html.svg" alt="html" width={150} height={150} />
            <img src="/css.svg" alt="css" width={150} height={150} />
            <img src="/javascript.svg" alt="js" width={150} height={150} />
            <img src="/typescript.svg" alt="ts" width={150} height={150} />
            <img src="/react.svg" alt="react" width={150} height={150} />
            <img src="/nextjs.svg" alt="nextjs" width={150} height={150} />
            <img src="/vite.svg" alt="vite" width={150} height={150} />
            <img src="/tailwindcss.svg" alt="twind" width={150} height={150} />
            <img src="/github.svg" alt="github" width={150} height={150} />
          </div>
          <div ref={scrollerRef}>
            <div
              className="scroller padding-container max-container "
              data-direction="left"
              data-speed="slow"
            >
              <ul className="tag-list scroller__inner regular-18 items-center">
                <li>CSS</li>
                <li>HTML</li>
                <li>Typescript</li>
                <li>React</li>
                <li>NextJS</li>
                <li>Vite</li>
                <li>Tailwind</li>
                <li>Github</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scroller;
