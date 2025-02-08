"use client";
import Lottie from "lottie-react";
import animationData from "@/public/animations/Animation - 1738998049750.json";
import { ArrowDown, Dot } from "lucide-react";
function Hero() {
  return (
    <div className="py-32">
      <div className="container grid md:grid-cols-12 grid-cols-6  gap-2 mx-auto px-4 text-bentoOneText ">
        <div className="col-span-3 bg-bentoWhite rounded gap-2 flex flex-col items-center justify-center text-center ">
          <Lottie animationData={animationData} className="size-40 z-" />
          <span className="text-bentoGreen font-semibold">
            <div className="text-center">Hello,</div>Prayash Priyansu Here
          </span>
        </div>

        <div
          className="col-span-6 bg-bentoBlue  px-1 flex flex-col items-center  justify-center text-bentoSWhite rounded-md
        "
        >
          <h1
            className="font-serif text-2xl text-center tracking-wide
           "
          >
            Building Exceptional User Experiences
          </h1>
          {/* <p>
            I’m a product designer with 3+ years of experience driving impactful
            design initiatives at Duolingo and Meta. I’ve led efforts in
            education, real-time communication, and creating intuitive,
            user-centered experiences that empower millions of users.
          </p> */}
        </div>
        <div className=" rounded-md grid col-start-4 row-start-1 grid-rows-4   col-span-3 gap-1">
          <div className="row-span-2 gap-1 bg-bentoGreen rounded-md  flex items-center justify-center">
            <div className="bg-green-400 size-2.5 rounded-full"></div>
            <div className="text-bentoWhite">Available for Work</div>
          </div>

          <button className="row-span-2 group bg-bentoLightBlue text-bentoWhite rounded-md  flex items-center justify-center group">
            <span className="group-hover:-rotate-6 transition group-hover:scale-110">
              Explore My Projects
            </span>
            <ArrowDown className="transition stroke-3 group-hover:-translate-y-5 group-hover:rotate-6 group-hover:scale-110" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
