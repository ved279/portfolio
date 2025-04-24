"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

  const words = [
    {
      text: "Crafting",
    },
    {
      text: "structured",
    },
    {
      text: "intelligence",
    },
    {
      text: "from",
    },
    {
      text: "abstraction.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ]; 

export function Skills() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <TypewriterEffectSmooth words={words} />
      <InfiniteMovingCards items={skillsData} direction="right" speed="slow" />
    </div>
  );
}

// ✅ Use proper public path: "/img/..."
const skillsData = [
  {
    title: "Frontend",
    images: [
      { src: "/img/react_native.png", alt: "React Native" },
      { src: "/img/tailwind.png", alt: "Tailwind CSS" },
      { src: "/img/html.png", alt: "HTML5" },
      { src: "/img/css.png", alt: "CSS3" },
    ],
  },
  {
    title: "Backend",
    images: [
      { src: "/img/node.png", alt: "Node.js" },
      { src: "/img/express.png", alt: "Express.js" },
      { src: "/img/mongodb.png", alt: "MongoDB" },
      { src: "/img/mysql.png", alt: "My SQL" },
    ],
  },
  {
    title: "Cloud & DevOps",
    images: [
      { src: "/img/docker.png", alt: "Docker" },
      { src: "/img/kubernetes.png", alt: "Kubernetes" },
      { src: "/img/aws.png", alt: "AWS" },
      { src: "/img/azure.png", alt: "Azure" },
    ],
  },
  {
    title: "Programming Languages",
    images: [
      { src: "/img/c++.png", alt: "C++" },
      { src: "/img/java.png", alt: "Java" },
      { src: "/img/python.png", alt: "Python" },
      // { src: "/img/photoshop.png", alt: "Photoshop" },
    ],
  },
];
