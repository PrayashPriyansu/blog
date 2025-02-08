"use client";

import Lottie from "lottie-react";
import animationData from "@/public/animations/Animation - 1738998049750.json";
function HelloCard() {
  return (
    <div className="col-span-3 md:col-span-4 col-start-1 shadow-md bg-bentoWhite rounded-lg gap-2 flex flex-col items-center justify-center text-center ">
      <Lottie animationData={animationData} className="size-40 z-" />
      <span className="text-bentoGreen font-semibold">
        <div className="text-center">Hello,</div>Prayash Priyansu
      </span>
    </div>
  );
}
export default HelloCard;
