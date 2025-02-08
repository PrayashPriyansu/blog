"use client";

import dynamic from "next/dynamic";
import animationData from "@/public/animations/Animation - 1738998049750.json";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false, // This will disable server-side rendering for this component
});

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
