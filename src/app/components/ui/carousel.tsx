"use client";
import { useState, useRef, useEffect, useId } from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";

interface SlideData {
  title: string;
  button: string;
  src: string;
  width: number;
  height: number;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null); // ✅ Fixed type

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = e.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = e.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { src, title, width, height } = slide;

  return (
    <li
      ref={slideRef}
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex-shrink-0 mx-4 transition-all duration-300"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform:
          current !== index ? "scale(0.95) rotateX(5deg)" : "scale(1) rotateX(0deg)",
        transformOrigin: "bottom",
      }}
    >
      <div className="w-full h-full relative bg-[#1D1F2F] rounded-xl overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={width}
          height={height}
          className="object-cover w-full h-full transition-opacity duration-500"
          style={{ opacity: current === index ? 1 : 0.5 }}
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-4 px-6 text-center">
          <h2 className="text-white text-lg font-semibold">{title}</h2>
        </div>
      </div>
    </li>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const handlePreviousClick = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const handleNextClick = () =>
    setCurrent((prev) => (prev + 1) % slides.length);
  const handleSlideClick = (index: number) => setCurrent(index);
  const id = useId();

  return (
    <div
      className="relative"
      aria-labelledby={`carousel-heading-${id}`}
      style={{ width: slides[0].width, height: slides[0].height }}
    >
      <ul
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * (slides[0].width + 32)}px)` }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-between w-full top-1/2 transform -translate-y-1/2 px-4">
        <button
          onClick={handlePreviousClick}
          className="w-10 h-10 bg-neutral-200 dark:bg-neutral-800 rounded-full hover:scale-105 transition"
          title="Previous"
        >
          <IconArrowNarrowRight className="rotate-180 text-neutral-600 dark:text-neutral-200" />
        </button>
        <button
          onClick={handleNextClick}
          className="w-10 h-10 bg-neutral-200 dark:bg-neutral-800 rounded-full hover:scale-105 transition"
          title="Next"
        >
          <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
        </button>
      </div>
    </div>
  );
}
