import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { FlipWords } from "./ui/flip-words";
import { Camera, ThumbsUp, Banana } from "lucide-react";
import { MojoCard } from "./MojoCard";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden z-10">
      <BackgroundGradientAnimation />
      <div className="absolute inset-0 flex flex-col lg:flex-row justify-between p-6 md:p-12 lg:p-20">
        <div className="flex flex-col justify-center lg:w-1/2">
          <div className="mb-4">
            <h1 className="font-bold font-greyQo text-3xl sm:text-4xl md:text-6xl text-rose-500 inline">
              Blog
            </h1>
            <FlipWords />
          </div>
          <h2 className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl">
            Sharing the experiences and adventures that inspire me and open up new perspectives.
          </h2>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center items-center">
          <MojoCard />
        </div>
      </div>
      <div className="absolute top-4 right-4 md:top-8 md:right-8 text-rose-600">
        <Camera className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-4" />
        <div className="flex gap-4">
          <ThumbsUp className="hidden sm:flex sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 transform translate-y-4 " />
          <Banana className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
        </div>
      </div>
    </div>
  );
};

export default Hero;