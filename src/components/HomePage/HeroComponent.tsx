import React from "react";
import { poppins } from "../utils/FontPoppins";

export default function HeroComponent() {
  return (
    <div
      style={{
        backgroundImage: "url('/Images/HeroImages/blendHero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-[80vh] flex flex-col items-center justify-center"
    >
      <p className={`${poppins.className} font-semibold text-5xl`}>
        <span className="text-[#191919]">Use AI to </span>
        <span className="bg-linear-to-r from-[#0A0A0A] to-[#155DFC] bg-clip-text text-transparent font-bold">
          Grow on Social
        </span>
      </p>
      <p className="text-[#666666] text-xl max-w-xl text-center">
        Stop spending hours on content creation and spk using AI to grow on
        Instagram, TikTok & YouTube Shorts
      </p>
    </div>
  );
}
