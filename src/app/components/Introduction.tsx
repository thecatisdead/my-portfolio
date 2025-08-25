"use client";

import { TypeAnimation } from "react-type-animation";
import photo from "@/app/images/profile.png";

export default function Introduction() {
  return (
    <section className="min-h-[420px] bg-[#0F111A] flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 gap-10">
      <div className="flex-1 text-center md:text-left">
        <p className="text-3xl sm:text-4xl md:text-4xl min-h-[96px] md:min-h-[150px] font-bold">
          <span className=" md:text-6xl sm:text-5xl bg-gradient-to-r from-[#00FFF7] via-[#FF00A8] to-[#9D4EDD] bg-clip-text text-transparent">
            Hello there!
          </span>
          <span className="flex items-bottom text-cyan-400 font-semibold tracking-wide drop-shadow-lg drop-shadow-cyan-400/30">
            <TypeAnimation
              sequence={[
                "I'm Regeryl",
                1000,
                "I'm a Software Developer",
                1000,
                "I build Web & Mobile apps",
                1000,
              ]}
              speed={70}
              deletionSpeed={60}
              cursor={true}
              repeat={Infinity}
              style={{ whiteSpace: "pre-line", display: "inline-block" }}
            />
          </span>
        </p>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl md:max-w-lg animate-slidUp">
          A passionate software developer who builds modern web apps and
          scalable SaaS platforms.
        </p>
      </div>

      {/* Right Column - Image */}

      <div className="relative flex flex-col items-center mt-8 md:mt-0">
        {/* Top line
  <div
    className="absolute left-1/2 bg-cyan-500 z-0 image-underline-glow "
    style={{ top: "-18px", height: "20px", width: "2px", transform: "translateX(-50%)" }}
  ></div>

<div
    className="absolute left-1/2 bg-cyan-500 z-0 image-underline-glow "
    style={{ top: "-32px", left:"108px", height: "18px", width: "2px", transform: "translateX(-50%)" }}
  ></div>


<div
    className="absolute left-1/2 bg-cyan-500 z-0 image-underline-glow "
    style={{ top: "-16px", left:"104px", height: "15px", width: "2px", transform: "translateX(-40%) rotate(30deg)" }}
  ></div>


 <div
    className="absolute left-1/2 bg-cyan-500 z-0 image-underline-glow "
    style={{ top: "-16px", left:"96px", height: "12px", width: "2px", transform: "translateX(-40%) rotate(140deg)" }}
  ></div>

 <div
    className="absolute left-1/2 bg-cyan-500 z-0 image-underline-glow "
    style={{ top: "-36px", left:"92px", height: "22px", width: "2px", transform: "translateX(-40%)" }}
  ></div>

  
<div
    className="absolute left-1/2 bg-cyan-500 z-0 image-underline-glow "
    style={{ top: "-10px", left:"92px", height: "12px", width: "2px", transform: "translateX(-40%) rotate(140deg)" }}
  ></div>

<div
    className="absolute left-1/2 bg-cyan-500 z-0 image-underline-glow "
    style={{ top: "-16px", left:"81px", height: "15px", width: "2px", transform: "translateX(-40%) rotate(90deg)" }}
  ></div>

<div
    className="absolute left-1/2 bg-cyan-500 z-0 image-underline-glow "
    style={{ top: "-10px", left:"70px", height: "12px", width: "2px", transform: "translateX(-40%) rotate(40deg)" }}
  ></div>

<div
    className="absolute left-1/2 bg-cyan-500 z-0 image-underline-glow "
    style={{ top: "-30px", left:"81px", height: "22px", width: "2px", transform: "translateX(-40%)" }}
  ></div> */}

        {/*
<div
    className="absolute left-1/2 bg-cyan-500 z-0 image-underline-glow "
    style={{ top: "-27px", left:"101px", height: "15px", width: "2px", transform: "translateX(-50%)" }}
  ></div>

<div
    className="absolute left-1/2 bg-cyan-500 z-0 image-underline-glow "
    style={{ top: "-20px", left:"130px", height: "14px", width: "2px", transform: "translateX(-50%) rotate(40deg)" }}
  ></div>


<div
    className="absolute left-1/2 bg-cyan-500 z-0 image-underline-glow "
    style={{ top: "-10px", left:"118px", height: "12px", width: "2px", transform: "translateX(-50%)  rotate(40deg)" }}
  ></div>

<div
    className="absolute left-1/2 bg-cyan-500 z-0 image-underline-glow "
    style={{ top: "-16px", left:"130px", height: "20px", width: "2px", transform: "translateX(-50%)  rotate(100deg)" }}
  ></div>


  
<div
    className="absolute left-1/2 bg-cyan-500 z-0 image-underline-glow "
    style={{ top: "-15px", left:"97px", height: "15px", width: "2px", transform: "translateX(-50%)  rotate(82deg)" }}
  ></div> */}
        {/* Bottom line */}

        {/*<div
    className="absolute left-1/2 bg-cyan-500 z-0"
    style={{ bottom: "-32px", height: "32px", width: "3px", transform: "translateX(-50%)" }}
  ></div>
  {/* Left line 
  <div
    className="absolute top-1/2 bg-cyan-500 z-0"
    style={{ left: "-32px", width: "32px", height: "3px", transform: "translateY(-50%)" }}
  ></div>
  {/* Right line 
  <div
    className="absolute top-1/2 bg-cyan-500 z-0 "
    style={{ right: "-32px", width: "32px", height: "3px", transform: "translateY(-50%)"  }}
  ></div>
  {/* Your image and border */}
        <img
          src={photo.src}
          alt="Photo"
          className="w-38 h-38 sm:w-46 sm:h-46 md:w-52 md:h-52 rounded-full border-2 border-cyan-500 shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform relative z-10 object-cover"
        />
        <div className="absolute inset-0 rounded-full border border-cyan-500 z-10 "></div>
      </div>
    </section>
  );
}
