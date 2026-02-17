"use client";

import SuperchargeCTA from "@/components/Shared/SuperCharge";
import Image from "next/image";

interface MissionCardProps {
  title: string;
  imageSrc: string;
  text: string;
}

function MissionCard({ title, imageSrc, text }: MissionCardProps) {
  return (
    <div className="flex flex-col gap-5 group">
      <div className="relative w-full aspect-4/3 sm:aspect-3/2 lg:aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
        {text}
      </p>
    </div>
  );
}

export default function AboutUs() {
  return (
    <main
      className="relative"
      style={{
        backgroundImage: "url('/Images/HeroImages/blendHero.png')",
        backgroundSize: "contain",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Layer */}

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16 sm:py-10 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl xl:max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
              About Us
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Our mission is to create a seamless platform where artists can
              easily promote their music and influencers can earn by sharing
              music they love.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Images/aboutUs.png"
                alt="About AmpSocial"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-6">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We built the AmpSocial Growth OS to be your digital marketing
                department. We combined high-tier AI, industry-leading social
                infrastructure, and a compliance-first engagement strategy to
                give you the presence of a full-scale agency for the price of a
                software subscription.
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our platform empowers creators with intelligent automation,
                strategic growth tools, and scalable digital systems — all in
                one seamless experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-16 sm:py-10 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl xl:max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
              Our Mission & Vision
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Empowering artists and influencers through scalable growth
              systems.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <MissionCard
              title="Mission"
              imageSrc="/Images/mission.png"
              text="To build the ultimate growth OS that helps creators expand their reach, monetize their audience, and scale sustainably."
            />
            <MissionCard
              title="Vision"
              imageSrc="/Images/vision.png"
              text="To become the global infrastructure powering digital growth for artists, brands, and influencers."
            />
          </div>
        </div>
      </section>

      {/* CTA spacing fix */}
      <div className="mt-2 sm:mt-10">
        <SuperchargeCTA />
      </div>
    </main>
  );
}
