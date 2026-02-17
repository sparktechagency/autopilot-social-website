"use client";

import Image from "next/image";
import { FiTarget, FiEye } from "react-icons/fi";

interface MissionCardProps {
  title: string;
  imageSrc: string;
  text: string;
}

function MissionCard({ title, imageSrc, text }: MissionCardProps) {
  return (
    <div className="flex flex-col gap-4 group">
      {/* Image */}
      <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Bottom gradient */}
        {/* <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" /> */}
      </div>

      {/* Title */}
      <p className="text-lg sm:text-3xl font-semibold text-[#1C1C1C]">
        {title}
      </p>

      {/* Text */}
      <p className="text-[#4A5565] text-sm sm:text-base leading-relaxed">
        {text}
      </p>
    </div>
  );
}

export default function AboutUs() {
  return (
    <main
      className="py-10"
      style={{
        backgroundImage: "url('/Images/HeroImages/blendHero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="relative w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-20 overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
              About Us
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Our mission is to create a seamless platform where artists can
              easily promote their music and influencers can earn by sharing
              music they love.
            </p>
          </div>

          {/* Content: image + text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left — image */}
            <div className="w-full lg:w-[40%] shrink-0">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Images/aboutUs.png"
                  alt="About AmpSocial"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay at bottom */}
                {/* <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" /> */}
              </div>
            </div>

            {/* Right — text */}
            <div className="w-full lg:w-[55%] flex flex-col gap-5 justify-center lg:pt-2">
              <p className="text-[#4A5565] text-sm sm:text-base leading-relaxed">
                We built the AmpSocial Growth OS to be your digital marketing
                department. We combined high-tier AI (OpenAI), industry-leading
                social infrastructure (Late), and a &quot;compliance-first&quot;
                engagement strategy to give you the presence of a full-scale
                agency for the price of a software subscription.
              </p>
              <div
                className="w-12 h-0.5 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #155DFC, #60a5fa)",
                }}
              />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We built the AmpSocial Growth OS to be your digital marketing
                department. We combined high-tier AI (OpenAI), industry-leading
                social infrastructure (Late). We built the AmpSocial Growth OS
                to be your digital marketing department. We combined high-tier
                AI (OpenAI), industry-leading social infrastructure (Late).
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-20 overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
              Our Mission &amp; Vision
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Our mission is to create a seamless platform where artists can
              easily promote their music
            </p>
          </div>

          {/* Two cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            <MissionCard
              title="Mission"
              imageSrc="/Images/mission.png"
              text="We built the AmpSocial Growth OS to be your digital marketing department."
            />
            <MissionCard
              title="Vision"
              imageSrc="/Images/vision.png"
              text="We built the AmpSocial Growth OS to be your digital marketing department."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
