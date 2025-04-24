"use client";

import { Carousel } from "@/app/components/ui/carousel";
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Azure AZ 104",
      src: "/img/azcf.png",
    },
    {
      title: "MERN-Stack by Programming Patshala",
      src: "/img/ppcf.png",
    },
    {
      title: "Object-Oriented C++",
      src: "/img/c++cf.png",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20 px-4">
      <div className="mb-10 text-center rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative">
        <TypewriterEffectSmooth
          words={[
            { text: "Certificates" },
            { text: "And" },
            {
              text: "Certifications",
              className: "text-blue-500 dark:text-blue-500",
            },
          ]}
        />
      </div>

      <div className="mx-auto">
        <Carousel
          slides={slideData.map((slide) => ({
            ...slide,
            width: 900,
            height: 620,
            button: "",
          }))}
        />
      </div>
    </div>
  );
}
