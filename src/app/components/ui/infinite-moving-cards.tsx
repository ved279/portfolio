"use client";

import { cn } from "@/app/lib/utils";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

type InfiniteMovingCardsProps = {
  items: {
    title: string;
    images: { src: string; alt: string }[];
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  }, [direction]);

  const getSpeed = useCallback(() => {
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current?.style.setProperty("--animation-duration", duration);
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]); // ✅ Safe now

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[300px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-white px-6 py-5 shadow-md dark:border-zinc-700 dark:bg-zinc-900"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              {item.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {item.images.map((img, i) => (
                <div
                  key={`${item.title}-${i}`}
                  className="relative w-12 h-12"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="48px"
                    className="object-contain rounded-md border border-gray-300 dark:border-zinc-600"
                  />
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
