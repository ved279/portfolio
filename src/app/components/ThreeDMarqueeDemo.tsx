"use client";
import { ThreeDMarquee } from "@/app/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "/img/ARproject.2png.png",
    "/img/ARproject.png",//portfolio\public\img\ARproject.png
    "/img/ARproject3.png",//portfolio\public\img\ARproject3.png
    "/img/MONGO DB DATABASEAR.png",//portfolio\public\img\MONGO DB DATABASEAR.png
    "/img/nike1.png",
    "/img/nike2.png",
    "/img/nike3.png",
    "/img/nike4.png",
    "/img/app1.png",
    "/img/app2.png",
    "/img/app3.png",
    "/img/app4.png",
    "/img/kk1.png",
    "/img/kk2.png",
    "/img/kk3.png",
    "/img/kk4.png",
    "/img/ARproject.2png.png",
    "/img/ARproject.png",//portfolio\public\img\ARproject.png
    "/img/ARproject3.png",//portfolio\public\img\ARproject3.png
    "/img/MONGO DB DATABASEAR.png",//portfolio\public\img\MONGO DB DATABASEAR.png
    "/img/nike1.png",
    "/img/nike2.png",
    "/img/nike3.png",
    "/img/nike4.png",
    "/img/app1.png",
    "/img/app2.png",
    "/img/app3.png",
    "/img/app4.png",
    "/img/kk1.png",
    "/img/kk2.png",
    "/img/kk3.png",
    "/img/kk4.png",
  ];
  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
