"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { BsLightningChargeFill } from "react-icons/bs";
import { poppins } from "../utils/FontPoppins";

/* ─── Orbit icon definitions ────────────────────────────────────────── */
// Every icon has its OWN radius, duration, direction & starting angle.

/* ─── Orbit icon definitions ────────────────────────────────────────── */
// Every icon has its OWN radius, duration, direction & starting angle.

const icons = [
  {
    id: "facebook",
    icon: <FaFacebookF size={20} />,
    angle: -90,
    radius: 190, // Reduced from 250
    duration: 22,
    direction: 1 as 1 | -1,
    bg: "#1877F2",
    color: "#fff",
    size: 35,
    rounded: "rounded-full",
  },
  {
    id: "youtube",
    icon: <FaYoutube size={22} />,
    angle: 190,
    radius: 100, // Reduced from 130
    duration: 17,
    direction: -1 as 1 | -1,
    bg: "#FF0000",
    color: "#fff",
    size: 35,
    rounded: "rounded-full",
  },
  {
    id: "linkedin",
    icon: <FaLinkedinIn size={18} />,
    angle: 20,
    radius: 140, // Adjusted
    duration: 14,
    direction: 1 as 1 | -1,
    bg: "#0A66C2",
    color: "#fff",
    size: 35,
    rounded: "rounded-xl",
  },
  {
    id: "instagram",
    icon: <FaInstagram size={22} />,
    angle: 80,
    radius: 70, // Inner orbit
    duration: 11,
    direction: -1 as 1 | -1,
    bg: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
    color: "#fff",
    size: 35,
    rounded: "rounded-full",
  },
  {
    id: "tiktok",
    icon: <SiTiktok size={17} />,
    angle: -40,
    radius: 165, // Adjusted
    duration: 8,
    direction: 1 as 1 | -1,
    bg: "#010101",
    color: "#fff",
    size: 35,
    rounded: "rounded-full",
  },
];

interface OrbitIconProps {
  icon: React.ReactNode;
  angle: number;
  radius: number;
  bg: string;
  color: string;
  size: number;
  rounded?: string;
  duration: number;
  direction?: 1 | -1;
}

function OrbitIcon({
  icon,
  angle,
  radius,
  bg,
  color,
  size,
  rounded = "rounded-full",
  duration,
  direction = 1,
}: OrbitIconProps) {
  const x = useMotionValue(radius * Math.cos((angle * Math.PI) / 180));
  const y = useMotionValue(radius * Math.sin((angle * Math.PI) / 180));
  const elapsed = useRef(0);
  const startAngle = (angle * Math.PI) / 180;

  useAnimationFrame((_t, delta) => {
    elapsed.current += delta;
    const angularSpeed = (2 * Math.PI) / (duration * 1000);
    const currentAngle =
      startAngle + direction * angularSpeed * elapsed.current;
    x.set(radius * Math.cos(currentAngle));
    y.set(radius * Math.sin(currentAngle));
  });

  return (
    <motion.div
      className="absolute flex items-center justify-center pointer-events-none"
      style={{
        width: size,
        height: size,
        top: "50%",
        left: "50%",
        marginTop: -size / 2,
        marginLeft: -size / 2,
        x,
        y,
      }}
    >
      <div
        className={`flex items-center justify-center shadow-lg ${rounded}`}
        style={{
          width: size,
          height: size,
          background: bg,
          color,
          fontSize: size * 0.4,
        }}
      >
        {icon}
      </div>
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────── */
export default function SuperchargeCTA() {
  return (
    <section
      className="w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, #fce4d8 0%, #fdf0e8 25%, #eef6ed 65%, #ddf0e8 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* ── Left: Copy ── */}
        <div className="flex-1 max-w-xl space-y-5">
          <p
            className={`${poppins.className} text-2xl sm:text-4xl font-semibold text-[#0d1b2a] leading-tight tracking-tight`}
          >
            Ready to supercharge your{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1d4ed8, #2563eb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              social media?
            </span>
          </p>

          <p className="text-[#4A5565] text-base sm:text-lg">
            From setup to growth in 4 simple steps
          </p>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-2 inline-flex items-center gap-2 bg-linear-to-r from-[#0A0A0A] to-[#155DFC] text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow-md transition-colors duration-200 cursor-pointer"
          >
            Try AmpSocial Free
          </motion.button>
        </div>

        {/* ── Right: Orbit Diagram ── */}
        <div
          className="shrink-0 relative flex items-center justify-center"
          style={{ width: "100%", maxWidth: 500, height: 500 }}
        >
          {/* One ring per icon — each at its own unique radius */}
          {icons.map((item) => (
            <div
              key={`ring-${item.id}`}
              className="absolute rounded-full border border-[#E0E0E0]"
              style={{
                width: item.radius * 2,
                height: item.radius * 2,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}

          {/* Center orb */}
          <motion.div
            className="relative z-20 flex items-center justify-center rounded-full shadow-2xl"
            style={{
              width: 50,
              height: 50,
              background: "linear-gradient(135deg, #0A0A0A, #155DFC)",
            }}
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <BsLightningChargeFill size={25} color="#fff" />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)",
                scale: 1.8,
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Each icon orbits its own ring */}
          {icons.map((item) => (
            <OrbitIcon
              key={item.id}
              icon={item.icon}
              angle={item.angle}
              radius={item.radius}
              bg={item.bg}
              color={item.color}
              size={item.size}
              rounded={item.rounded}
              duration={item.duration}
              direction={item.direction}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
