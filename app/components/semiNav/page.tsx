"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

function SemiNav() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: "upskill", label: "Upskill" },
    { id: "highlight", label: "Highlight" },
    { id: "campus", label: "Campus" },
    { id: "syllabus", label: "Syllabus" },
    { id: "dm-tool", label: "DM Tool" },
    { id: "learn", label: "Learn" },
    { id: "carrer", label: "Carrer" },
    { id: "alumini", label: "Alumini" },
    { id: "faq", label: "FAQs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const offsetTop = navRef.current.offsetTop;
        const scrollY = window.scrollY;
        if (scrollY + 100 >= offsetTop && !isSticky) {
          setIsSticky(true);
        } else if (scrollY < 600) {
          setIsSticky(false);
        } else if (scrollY < offsetTop && isSticky) {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <>
      <div
        className={`container mx-auto px-4 py-6 max-w-3xl ${
          isSticky ? "fixed top-20 left-0 right-0 z-10" : "static"
        }`}
      >
        <div
          ref={navRef}
          className={`bg-white border-2 border-slate-400 rounded-full shadow-black shadow-2xl p-2 w-full overflow-x-auto scroll-smooth`}
        >
          <div className="flex flex-nowrap gap-4 justify-start">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`font-medium p-1 whitespace-nowrap ${
                  activeTabIndex === index
                    ? "bg-gray-900 text-white rounded-full px-2"
                    : "text-gray-500"
                }`}
              >
                <Link
                  href={`#${tab.id}`}
                  onClick={() => setActiveTabIndex(index)}
                >
                  {tab.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* {tabs.map((tab, index) => (
        <div key={tab.id}  className={`font-bold px-4 py-6 `}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam iure,
            sunt cupiditate cumque consequuntur quidem in officiis possimus
            eligendi, eveniet quod dolore exercitationem quasi perferendis
            provident illum nostrum recusandae! Deserunt at saepe molestias
            laboriosam ducimus consequatur. Blanditiis amet est provident,
            excepturi voluptatum ad soluta maxime quos aliquid velit modi
            magnam.
          </p>
        </div>
      ))} */}
    </>
  );
}

export default SemiNav;
