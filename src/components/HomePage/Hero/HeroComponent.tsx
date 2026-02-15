import React from "react";
import { poppins } from "../../utils/FontPoppins";
import { Button } from "@mui/material";
import SocialLinks from "./SocialLinks";
import HeroImage from "./HeroImage";

export default function HeroComponent() {
  return (
    <div
      style={{
        backgroundImage: "url('/Images/HeroImages/blendHero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-[70vh] flex flex-col gap-6 md:gap-8 items-center justify-center py-12 px-4 md:py-20 md:px-8 text-center"
    >
      <p
        className={`${poppins.className} font-semibold text-2xl md:text-5xl lg:text-6xl tracking-tight`}
      >
        <span className="text-[#191919]">Use AI to </span>
        <span className="bg-linear-to-r from-[#0A0A0A] to-[#155DFC] bg-clip-text text-transparent font-bold">
          Grow on Social
        </span>
      </p>
      <p className="text-[#666666] text-xs md:text-lg lg:text-xl max-w-2xl text-center leading-relaxed">
        Stop spending hours on content creation and start using AI to grow on
        Instagram, TikTok & YouTube Shorts
      </p>
      <Button
        sx={{
          background: "linear-gradient(to right, #0A0A0A, #155DFC)",
          color: "#fff",
          fontWeight: "600",
          fontSize: { xs: "14px", md: "18px" },
          padding: { xs: "10px 30px", md: "12px 50px" },
          borderRadius: "100px",
          textTransform: "none",
          boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "linear-gradient(to right, #155DFC, #0A0A0A)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
            transform: "translateY(-2px)",
          },
        }}
      >
        Let&apos;s Start
      </Button>

      <div className="w-full max-w-5xl">
        <HeroImage />
      </div>

      <SocialLinks />

      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 text-xs lg:text-sm">
        <p className="text-[#0a0a0a]">14-day free trial</p>
        {/* <p className="hidden md:block text-gray-300">•</p> */}
        <p className="text-[#0a0a0a]">No credit card required</p>
        {/* <p className="hidden md:block text-gray-300">•</p> */}
        <p className="text-[#0a0a0a]">Cancel Anytime</p>
      </div>
      <p className="text-[#4A5565] w-full max-w-md md:max-w-3xl lg:max-w-5xl text-center text-sm md:text-base leading-relaxed">
        We built the AmpSocial Growth OS to be your digital marketing
        department. We combined high-tier AI (OpenAI), industry-leading social
        infrastructure (Late), and a &quot;compliance-first&quot; engagement
        strategy to give you the presence of a full-scale agency for the price
        of a software subscription.
      </p>
    </div>
  );
}
