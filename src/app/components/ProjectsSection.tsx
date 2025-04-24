"use client";

import React from "react";
import { ProjectCard } from "@/app/components/ProjectCard"; // adjust the path as needed

export default function ProjectsSection() {
  const projects = [
    {
      title: "Nike",
      images: ["/img/nike1.png", "/img/nike2.png", "/img/nike3.png", "/img/nike4.png"],
      description:
       " The Nike Product Page is a fully responsive, modern e-commerce interface developed using React.js and Tailwind CSS. It features a minimalistic yet powerful UI where users can explore and purchase Nike shoes. With animated hover effects, dynamic cart integration, and mobile-first responsiveness, the app delivers a seamless shopping experience across devices. This project focuses on clean design, component reusability, and performance optimization.",
      techStack: ["Tailwind CSS", " React.js"],
    },
    {
      title: "AgroBoost",
      images: ["/img/app1.png", "/img/app2.png", "/img/app3.png", "/img/app4.png"],
      description:
        "AgroBoost is a mobile application designed to support and uplift Self-Help Groups (SHGs) in rural agriculture. Developed using Kotlin in Android Studio, this app enables farmers and SHGs to manage crop cycles, track inventory, access government schemes, and receive expert farming tips in a user-friendly interface. With real-time notifications and a multilingual interface, AgroBoost aims to bridge the digital gap in India's agrarian communities and foster sustainable growth.",
      techStack: ["Android Studio", " Android Studio"],
    },
    {
      title: "KiKi Beauty",
      images: ["/img/kk1.png", "/img/kk2.png", "/img/kk3.png", "/img/kk4.png"],
      description:
        "KikiBeauty is a full-fledged e-commerce platform for a premium cosmetics brand specializing in lipsticks and skincare products. Built with React, Next.js, and Node.js, the application includes features like product filtering, SEO optimization, cart functionality, secure checkout, and a content-rich homepage. Styled using Tailwind CSS, the platform combines performance and aesthetics, ensuring users enjoy a fast, intuitive, and elegant shopping experience.",
      techStack: ["Tailwind CSS", " React.js", "Next.js", "Node.js" ],
    },
    
  ];

  return (
    <section className="min-h-screen px-6 py-16 bg-white dark:bg-black space-y-12">
      <h1 className="text-4xl font-bold text-center text-black dark:text-white mb-10">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            images={project.images}
            description={project.description}
            techStack={project.techStack}
          />
        ))}
      </div>
    </section>
  );
}
