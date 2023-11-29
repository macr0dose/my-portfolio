"use client";

import React, { useRef, useEffect } from "react";

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
        <div className="scroller sm:pb-0 " data-speed="fast">
          <ul className="tag-list scroller__inner "></ul>
        </div>

        <div
          className="scroller padding-container max-container"
          data-direction="right"
          data-speed="slow"
        >
          <div className="scroller__inner ">
            <img src="/html.svg" alt="html" width={150} height={150} />
            <img src="/css.svg" alt="css" width={150} height={150} />
            <img src="/javascript.svg" alt="js" width={150} height={150} />
            <img src="/typescript.svg" alt="ts" width={150} height={150} />
            <img src="/react.svg" alt="react" width={150} height={150} />
            <img src="/nextjs.svg" alt="nextjs" width={150} height={150} />
            <img src="/vite.svg" alt="vite" width={150} height={150} />
            <img
              src="/tailwindcss.svg" alt="tailwind" width={150} height={150} />
            <img src="/github.svg" alt="github" width={150} height={150} />
          </div>
          <div ref={scrollerRef}>
            <div
              className="scroller padding-container max-container"
              data-direction="left"
              data-speed="slow"
            >
              <ul className="tag-list scroller__inner regular-18 items-center ">
                <li className="border-2 px-2">HTML</li>
                <li className="border-2 px-2">CSS</li>
                <li className="border-2 px-2">Typescript</li>
                <li className="border-2 px-2">React</li>
                <li className="border-2 px-2">NextJS</li>
                <li className="border-2 px-2">Vite</li>
                <li className="border-2 px-2">Tailwind</li>
                <li className="border-2 px-2">Github</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Add your CSS styles here */}
      <style jsx>{`
        .scroller {
          max-width: 1024px;
        }

        .scroller__inner img {
          width: auto; /* Adjust if you are setting width directly on img */
          height: 100px; /* Default height */
        }

        @media (max-width: 600px) {
          .scroller__inner img {
            height: 50px; /* Smaller height on mobile devices */
          }
        }

        .scroller__inner {
          padding-block: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .scroller[data-animated="true"] {
          overflow: hidden;
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
          mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
        }

        .scroller[data-animated="true"] .scroller__inner {
          width: max-content;
          flex-wrap: nowrap;
          animation: scroll var(--_animation-duration, 20s)
            var(--_animation-direction, forwards) linear infinite;
        }

        .scroller[data-direction="right"] {
          --_animation-direction: reverse;
        }

        .scroller[data-direction="left"] {
          --_animation-direction: forwards;
        }

        .scroller[data-speed="fast"] {
          --_animation-duration: 10s;
        }

        .scroller[data-speed="slow"] {
          --_animation-duration: 30s;
        }

        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 0.5rem));
          }
        }

        /* general styles */

        :root {
          --clr-neutral-100: hsl(0, 0%, 100%);
          --clr-primary-100: hsl(205, 15%, 58%);
          --clr-primary-400: hsl(215, 25%, 27%);
          --clr-primary-800: hsl(217, 33%, 17%);
          --clr-primary-900: hsl(218, 33%, 9%);
        }

        html {
          color-scheme: dark;
        }

        body {
          display: grid;
          min-block-size: 100vh;
          place-content: center;
          font-family: inter;
          font-size: 1.125rem;
          background-color: var(--clr-primary-800);
        }

        .tag-list {
          margin: 0;
          padding-inline: 0;
          list-style: none;
        }

        .tag-list li {
          padding: 1rem;
          background: #f1f5f9;
          border-radius: 0.5rem;
          box-shadow: 0 2.5px 5px rgba(0, 0, 0, 0.2);
          color: black; // Default text color
        }

        /* for testing purposed to ensure the animation lined up correctly */
        .test {
          background: red !important;
        }
      `}</style>
    </>
  );
};

export default Scroller;
