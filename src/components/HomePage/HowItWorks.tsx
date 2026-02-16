/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { FaHeart, FaRegComment } from "react-icons/fa";
import { MdShare } from "react-icons/md";
import process01 from "../../../public/Images/Process01.png";
import process02 from "../../../public/Images/process02.png";
import process03 from "../../../public/Images/process03.png";

const steps = [
  { title: "Create Account", description: "Sign up with email or Google" },
  { title: "Add Business Info", description: "Enter business name & goals" },
  { title: "Upload Assets", description: "Product photos & branding" },
  { title: "Connect Socials", description: "Link your social profiles" },
  { title: "See Results", description: "First week content ready!" },
];

function SocialCard({
  imageSrc,
  imageAlt,
  likes,
}: {
  imageSrc: any;
  imageAlt: string;
  likes?: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-2.5 flex flex-col gap-2 w-36 sm:w-44 relative z-10">
      <div className="relative w-full h-24 sm:h-32 rounded-xl overflow-hidden bg-gray-100">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="bg-[#0F172A] text-white font-bold text-[10px] px-2.5 py-0.5 rounded-full w-fit">
          {likes || "1.0k"}
        </p>
        <div className="flex items-center gap-2.5 px-0.5">
          <FaHeart className="text-[#EF4444] text-xs" />
          <FaRegComment className="text-slate-400 text-xs" />
          <MdShare className="text-slate-400 text-xs" />
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-20 mx-auto">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
            How the{" "}
            <span className="bg-linear-to-r from-[#3d3d3d] to-[#155DFC] bg-clip-text text-transparent">
              process works
            </span>
          </h2>
          <p className="text-[#4A5565] text-sm sm:text-base">
            Get started in 5 minutes
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-40 items-center">
          {/* Left Side - Visuals */}
          <div className="relative w-full flex items-center justify-center">
            {/* Wrapper that establishes height context */}
            <div className="relative w-full" style={{ paddingBottom: "90px" }}>
              {/* Main AI Image — SVG is a sibling so it can overflow the image bounds */}
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-4/3 rounded-2xl overflow-visible shadow-2xl z-10 mx-auto lg:mx-0 lg:mr-20">
                {/* Clip the image itself without clipping the SVG */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image
                    src={process01}
                    alt="AI Process"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* SVG dashed line — starts from right edge of this image, curves to cards below-right.
                    viewBox 0 0 100 100 maps exactly onto this image's bounding box.
                    overflow:visible lets the path extend beyond.
                    Start  : (100, 20)  — right edge, 20% down
                    Curve  : sweeps right → down → back left toward the social cards
                    End    : (118, 105) — below & right of the image, above the cards
                */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  style={{ overflow: "visible", zIndex: 5 }}
                >
                  <path
                    d="M 100 20 C 120 14, 126 50, 118 72 C 111 90, 108 96, 118 105"
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="0.9"
                    strokeDasharray="3 2.8"
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Small arrowhead pointing downward at the end */}
                  <polygon
                    points="115,104 121,104 118,109"
                    fill="#94A3B8"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

              {/* Badge — desktop only */}
              <div className="absolute lg:top-1/4 xl:top-1/3 right-0 lg:-right-[30%] xl:-right-[8%] z-20 hidden lg:block">
                <span className="bg-linear-to-r from-[#0A0A0A] to-[#155DFC] text-white text-[10px] font-semibold px-4 py-1.5 rounded-full shadow-lg">
                  over 1 million
                </span>
              </div>

              {/* Social Cards */}
              <div className="absolute bottom-0 sm:bottom-5 lg:bottom-2 right-0 sm:right-[5%] lg:-right-[35%] xl:-right-[20%] flex z-10">
                {/* Card 1 (Behind) */}
                <div className="transform translate-x-8 translate-y-4 sm:translate-x-10 sm:translate-y-6">
                  <SocialCard
                    imageSrc={process02}
                    imageAlt="User"
                    likes="1.5k"
                  />
                </div>
                {/* Card 2 (Front) */}
                <div className="transform rotate-1 z-20">
                  <SocialCard
                    imageSrc={process03}
                    imageAlt="Cat"
                    likes="1.8k"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4 sm:gap-5">
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-r from-[#0A0A0A] to-[#155DFC] text-white rounded-xl flex items-center justify-center font-bold text-base sm:text-lg shadow-md">
                  {index + 1}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base sm:text-lg leading-tight mb-0.5 sm:mb-1">
                    {step.title}
                  </p>
                  <p className="text-gray-500 text-sm font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
