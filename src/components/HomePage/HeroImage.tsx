"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useAnimationFrame,
} from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaStar, FaHeart, FaRegComment } from "react-icons/fa";
import { MdBarChart, MdCalendarToday, MdShare } from "react-icons/md";

/* ─── Design-space constants ─── */
const PHONE_W = 304;
const PHONE_H = 464;

/*
  The full composition (phone + overhanging cards) spans:
    width : left overhang (300) + phone (304) + right overhang (260) = 864
    height: top overhang (80)  + phone (464) + bottom overhang (100) = 644
*/
const COMP_W = 864;
const COMP_H = 644;

/* Phone top-left inside the composition canvas */
const PHONE_LEFT = 300;
const PHONE_TOP = 80;

export default function HeroImage() {
  /* ── Always-on looping tilt ── */
  // Raw motion values driven by useAnimationFrame
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);

  // Spring-smooth the raw values so the motion feels organic
  const spring = { stiffness: 60, damping: 18, mass: 1 };
  const rotateX = useSpring(rawRotateX, spring);
  const rotateY = useSpring(rawRotateY, spring);

  // Derive a roaming shine position from the same tilt values
  const shineX = useTransform(rotateY, [-14, 14], ["20%", "80%"]);
  const shineY = useTransform(rotateX, [-10, 10], ["20%", "80%"]);
  const shineGradient = useTransform(
    [shineX, shineY],
    ([x, y]: string[]) =>
      `radial-gradient(ellipse at ${x} ${y}, rgba(255,255,255,0.13) 0%, transparent 60%)`
  );

  // Drive a Lissajous-style figure-8 path continuously
  useAnimationFrame((t) => {
    const s = t / 1000; // seconds
    // X oscillates at one frequency, Y at a slightly different one
    // → produces a slow, never-exactly-repeating figure-8 motion
    rawRotateX.set(Math.sin(s * 0.55) * 9);
    rawRotateY.set(Math.sin(s * 0.38) * 13);
  });

  /* ── Responsive Scaling Logic ── */
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const parentWidth = containerRef.current.offsetWidth;
        // Clamp scale between 0.2 and 1 to prevent it from getting too small or growing larger than design
        const newScale = Math.min(Math.max(parentWidth / COMP_W, 0.2), 1);
        setScale(newScale);
      }
    };

    // Initial check
    handleResize();

    // Event listener
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    /* Outer shell — vertically centers the composition */
    <div
      ref={containerRef}
      className="relative w-full flex items-center justify-center"
      style={{
        maxWidth: COMP_W,
        height: COMP_H * scale, // Dynamically adjust height to minimize whitespace
        transition: "height 0.1s ease-out",
      }}
    >
      {/*
        Design canvas — always COMP_W × COMP_H px in its own coordinate space,
        centered inside the responsive container and scaled to fit.
      */}
      <div
        className="absolute top-0 left-1/2"
        style={{
          width: COMP_W,
          height: COMP_H,
          marginLeft: -(COMP_W / 2), // Center horizontally
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {/* ── TOP-LEFT: Timer / notification card ── */}
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.9 }}
              animate={{ opacity: 1, y: [0, -11, 0], scale: 1 }}
              transition={{
                opacity: {
                  duration: 0.55,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                },
                scale: {
                  duration: 0.55,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                },
                y: {
                  duration: 4,
                  delay: 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute bg-[#DFE9FF] rounded-2xl p-6 flex flex-col gap-2 shadow-sm"
              style={{ top: PHONE_TOP + 20, left: PHONE_LEFT - 290 }}
            >
              <span className="text-xs font-medium text-[#4A5565] leading-none">
                2:01
              </span>
              <div className="rounded-md bg-[#8EC5FF80] flex items-center justify-center p-4">
                <div className="w-16 h-8 bg-gradient-to-r from-[#51A2FF] to-[#2B7FFF] rounded-sm" />
              </div>
            </motion.div>

            {/* ── LEFT-CENTER: 5-star rating card ── */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.9 }}
              animate={{ opacity: 1, y: [0, -10, 0], scale: 1 }}
              transition={{
                opacity: {
                  duration: 0.55,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                },
                scale: { duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                y: {
                  duration: 5,
                  delay: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute bg-white rounded-2xl shadow-lg p-4 flex items-center gap-1"
              style={{ top: PHONE_TOP + PHONE_H * 0.5, left: PHONE_LEFT - 215 }}
            >
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[#AD46FF] text-[16px]" />
              ))}
            </motion.div>

            {/* ── BOTTOM-LEFT: Engagement card ── */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.9 }}
              animate={{ opacity: 1, y: [0, -13, 0], scale: 1 }}
              transition={{
                opacity: {
                  duration: 0.55,
                  delay: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                },
                scale: {
                  duration: 0.55,
                  delay: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                },
                y: {
                  duration: 6,
                  delay: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute bg-[#FFFBEB] rounded-2xl shadow-[0_8px_32px_rgba(99,102,241,0.10),0_2px_8px_rgba(0,0,0,0.06)] px-4 py-3 flex items-center gap-3"
              style={{
                top: PHONE_TOP + PHONE_H * 0.9,
                left: PHONE_LEFT - 175,
              }}
            >
              <MdBarChart className="text-slate-700 text-[26px] shrink-0" />
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-500 font-normal leading-tight">
                  Engagement
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-[21px] font-bold text-slate-800 leading-tight">
                    40%
                  </span>
                  <span className="text-[14px]">📈</span>
                </div>
              </div>
            </motion.div>

            {/* ── CENTER: Phone mockup with always-on 3-D tilt ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                top: PHONE_TOP,
                left: PHONE_LEFT,
                width: PHONE_W,
                height: PHONE_H,
                perspective: 900,
                zIndex: 10,
              }}
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                  width: "100%",
                  height: "100%",
                  borderRadius: 46,
                  background: "#111111",
                  padding: 10,
                  boxShadow:
                    "0 48px 96px rgba(0,0,0,0.32), 0 12px 32px rgba(99,102,241,0.16), inset 0 0 0 1.5px rgba(255,255,255,0.07)",
                  willChange: "transform",
                  cursor: "default",
                }}
              >
                <div
                  className="w-full h-full overflow-hidden relative"
                  style={{ borderRadius: 36 }}
                >
                  <Image
                    src="/Images/HeroImages/HeroPhone.png"
                    alt="Model"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  {/* Fallback gradient */}
                  <div
                    className="absolute inset-0 -z-10"
                    style={{
                      background:
                        "linear-gradient(170deg,#0d1b2a 0%,#1b263b 20%,#415a77 50%,#778da9 70%,#9dbbd1 100%)",
                    }}
                  />
                  {/* Teal rim */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at 15% 55%, rgba(20,210,200,0.20) 0%, transparent 55%)",
                    }}
                  />
                  {/* Warm highlight */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at 65% 42%, rgba(255,170,100,0.18) 0%, rgba(100,170,220,0.12) 40%, transparent 68%)",
                    }}
                  />
                  {/* Top vignette */}
                  <div
                    className="absolute top-0 left-0 right-0 pointer-events-none"
                    style={{
                      height: "38%",
                      background:
                        "linear-gradient(180deg, rgba(4,4,18,0.72) 0%, transparent 100%)",
                    }}
                  />
                  {/* Bottom vignette */}
                  <div
                    className="absolute bottom-0 left-0 right-0 pointer-events-none"
                    style={{
                      height: "28%",
                      background:
                        "linear-gradient(0deg, rgba(4,4,18,0.58) 0%, transparent 100%)",
                    }}
                  />
                  {/* Specular shine — follows mouse */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: shineGradient,
                      borderRadius: 36,
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* ── TOP-RIGHT: Sales card ── */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.9 }}
              animate={{ opacity: 1, y: [0, -9, 0], scale: 1 }}
              transition={{
                opacity: {
                  duration: 0.55,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                },
                scale: {
                  duration: 0.55,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                },
                y: {
                  duration: 4.5,
                  delay: 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute bg-[#F0FDF4] rounded-2xl shadow-lg px-4 py-4 min-w-40"
              style={{ top: PHONE_TOP + 20, left: PHONE_LEFT + PHONE_W + 100 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[26px] font-bold text-slate-800 leading-none">
                      8
                    </span>
                    <span className="text-[11px] text-slate-400 font-normal">
                      items
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 leading-tight">
                    Sold this week
                  </span>
                  <span className="text-[22px] font-bold text-emerald-500 mt-2 leading-none">
                    $12
                  </span>
                </div>
                <MdCalendarToday className="text-slate-600 text-[18px] mt-0.5 shrink-0" />
              </div>
            </motion.div>

            {/* ── BOTTOM-RIGHT: Profile + like/share card ── */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.9 }}
              animate={{ opacity: 1, y: [0, -10, 0], scale: 1 }}
              transition={{
                opacity: {
                  duration: 0.55,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                },
                scale: { duration: 0.55, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                y: {
                  duration: 5.5,
                  delay: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute bg-white rounded-2xl shadow-lg p-3 flex flex-col gap-3 min-w-40"
              style={{
                top: PHONE_TOP + PHONE_H * 0.82 - 160,
                left: PHONE_LEFT + PHONE_W + 50,
              }}
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src="/Images/HeroImages/HeroImage.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-[#0F172A] px-2 py-0.5 rounded-full z-10">
                  <span className="text-[10px] font-bold text-white">1.5k</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-1">
                <FaHeart className="text-[#EF4444] text-[16px]" />
                <FaRegComment className="text-slate-400 text-[16px]" />
                <MdShare className="text-slate-400 text-[18px]" />
              </div>
            </motion.div>
      </div>
    </div>
  );
}
