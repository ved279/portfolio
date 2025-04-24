"use client";

import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function Hero() {
  const testimonials = [
    {
      quote:
        "Hello, I'm a passionate Computer Science student from Lovely Professional University, Phagwara.",
      name: "Vedant Singh Rajput",
      designation: "Full-Stack Development | Cloud",
      src: "/img/ved.jpg",
    },
    {
      quote:
        "I specialize in Fullstack Web Development, Cloud Computing, and Mobile App Development.",
      name: "Vedant Singh Rajput",
      designation: "Full-Stack Development | Cloud",
      src: "/img/ved.jpg",
    },
    {
      quote:
        "I love turning ideas into reality using technology—whether it's building intuitive web apps or cloud-based systems.",
      name: "Vedant Singh Rajput",
      designation: "Full-Stack Development | Cloud",
      src: "/img/ved.jpg",
    },
  ];

  return (
    <section id="about" className="flex flex-col items-center justify-center py-20 px-8 scroll-mt-20">
      <AnimatedTestimonials testimonials={testimonials} />

      {/* ✅ Download CV Button */}
      <a
        href="/img/vedcv.pdf"
        download
        className="mt-10 inline-block px-6 py-3 text-white bg-black border border-transparent rounded-md hover:border-white transition duration-300"
      >
        Download CV
      </a>
    </section>
  );
}
