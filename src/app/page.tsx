import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { TimelineDemo } from "./components/TimelineDemo";
import { ThreeDMarqueeDemo } from "./components/ThreeDMarqueeDemo";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <TimelineDemo />
      <ThreeDMarqueeDemo />
    </>
  );
}
