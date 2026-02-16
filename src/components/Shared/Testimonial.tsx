"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { poppins } from "../utils/FontPoppins";

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < testimonials.length - 1) setIndex(index + 1);
  };
  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="relative w-full flex justify-center h-full pt-5 md:pt-16 pb-30 md:pb-56">
      <div className="relative w-full md:w-[90%] h-32.5">
        {testimonials.map((item, i) => {
          const isActive = i === index;
          const isGone = i < index;

          // Correct alternating rotation based on relative position
          const rotation = isActive ? 0 : (i - index) % 2 === 0 ? -2 : 5;

          return (
            <motion.div
              key={i}
              className="absolute top-0 left-0 w-full bg-white/21 backdrop-blur-xl shadow-lg border border-white/50 shadow-white/10 rounded-3xl p-6 md:p-8"
              style={{ zIndex: testimonials.length - i }}
              animate={{
                rotate: isGone ? -50 : rotation,
                y: isGone ? -500 : isActive ? -10 : 0, // active card moves slightly up
                opacity: isGone ? 0 : 1,
                scale: isActive ? 1 : 0.95,
              }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
            >
              <p className="text-xs sm:text-md lg:text-lg text-[#1E1E1E] mb-6 leading-relaxed">
                {item.text}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-10 h-10 sm:w-16 sm:h-16 md:w-15 md:h-15">
                  <Image
                    src="/Images/testimonial.png"
                    alt={item.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm md:text-2xl font-bold">{item.name}</h3>
                  <p className="text-xs md:text-[#525252]">{item.role}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="absolute z-99 w-4/5 bottom-0 flex justify-center gap-4">
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="p-1 md:p-3 bg-white shadow text-black rounded-full disabled:opacity-30 cursor-pointer"
        >
          <ArrowLeft className="text-md md:text-lg" />
        </button>

        <button
          onClick={handleNext}
          disabled={index === testimonials.length - 1}
          className="p-1 md:p-3 bg-white shadow text-black rounded-full disabled:opacity-30 cursor-pointer"
        >
          <ArrowRight className="text-md md:text-lg" />
        </button>
      </div>
    </div>
  );
};

const testimonials = [
  {
    text: `“As an influencer, Musiconic gave me the opportunity to collaborate with incredible artists and get paid for content I truly believe in. It’s the perfect platform for creators who want to promote great music and earn while doing it!”r creators who want to promote great music and earn while doing it!””`,
    name: "Jake Moore",
    role: "Music Influencer",
    img: "/mnt/data/9c929182-9ecc-4713-8365-e840861eeec4.png",
  },
  {
    text: `“As an influencer, Musiconic gave me the opportunity to collaborate with incredible artists and get paid for content I truly believe in. It’s the perfect platform for creators who want to promote great music and earn while doing it!”`,
    name: "Emily Carter",
    role: "Lifestyle Creator",
    img: "/mnt/data/portrait1.png",
  },
  {
    text: `“As an influencer, Musiconic gave me the opportunity to collaborate with incredible artists and get paid for content I truly believe in. It’s the perfect platform for creators who want to promote great music and earn while doing it!”`,
    name: "Liam Anderson",
    role: "Independent Artist",
    img: "/mnt/data/portrait2.png",
  },
  {
    text: `“As an influencer, Musiconic gave me the opportunity to collaborate with incredible artists and get paid for content I truly believe in. It’s the perfect platform for creators who want to promote great music and earn while doing it!”`,
    name: "Sophia Reyes",
    role: "Content Creator",
    img: "/mnt/data/portrait3.png",
  },
  {
    text: `“As an influencer, Musiconic gave me the opportunity to collaborate with incredible artists and get paid for content I truly believe in. It’s the perfect platform for creators who want to promote great music and earn while doing it!”`,
    name: "Daniel Brooks",
    role: "Music Promoter",
    img: "/mnt/data/portrait4.png",
  },
];

const Testimonial = () => (
  <div className="max-w-7xl mx-auto px-2" id="testimonial">
    <div className="text-center">
      <p
        className={`${poppins.className} text-2xl sm:text-4xl font-semibold text-[#0d1b2a] leading-tight tracking-tight`}
      >
        What Our Users Are{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #1d4ed8, #2563eb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Saying
        </span>
      </p>
      <p className="text-[#4A5565] text-center max-w-6xl mx-auto">
        From setup to growth in 4 simple steps
      </p>
    </div>
    <div className="w-full md:w-4/5 mx-auto mt-10 bg-linear-to-r from-[#155DFC] to-[#0A0A0A] rounded-xl">
      <div className="bg-secondary p-2 md:p-4 w-full md:w-4/5 mx-auto sm:p-10 rounded-2xl ">
        <TestimonialCarousel />
      </div>
    </div>
  </div>
);

export default Testimonial;
