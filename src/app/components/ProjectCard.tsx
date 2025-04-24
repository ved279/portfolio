"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type ProjectCardProps = {
  title: string;
  images: string[];
  description: string;
  techStack: string[];
};

export function ProjectCard({ title, images, description, techStack }: ProjectCardProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-md p-6 max-w-xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>

      {/* Image carousel */}
      <div className="relative w-full h-56 overflow-hidden rounded-md mb-4">
        <AnimatePresence>
          <motion.div
            key={images[current]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`Project image ${current + 1}`}
              fill
              className="object-cover rounded-md"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
