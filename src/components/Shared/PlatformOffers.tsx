import React from "react";
import { FaRegCommentDots, FaRegStar } from "react-icons/fa";
import { FiBarChart2, FiCalendar } from "react-icons/fi";
import { RxLightningBolt } from "react-icons/rx";
import { FaArrowTrendUp } from "react-icons/fa6";
import { poppins } from "../utils/FontPoppins";

/* ── Feature data ── */
const features = [
  {
    icon: <RxLightningBolt size={22} color="#374151" />,
    iconBg: "bg-[#A4C1FF]",
    title: "Weekly Content Scheduled",
    desc: "AI-generated shorts and posts created weekly, approval-first workflow ensures quality before publishing.",
  },
  {
    icon: <FaRegCommentDots size={20} color="#374151" />,
    iconBg: "bg-[#BDFFD7]",
    title: "Daily Engagement Targets",
    desc: "Comment drafts ready to copy & paste. Complete your engagement in 15 minutes a day or less.",
  },
  {
    icon: <FaRegStar size={20} color="#374151" />,
    iconBg: "bg-[#FFEDA3]",
    title: "Reviews Inbox + AI Replies",
    desc: "Automatic review monitoring with AI-generated replies. Auto-reply rules for 4-5★ reviews included.",
  },
  {
    icon: <FiBarChart2 size={22} color="#374151" />,
    iconBg: "bg-[#FDAAAA]",
    title: "Analytics Weekly Summary",
    desc: "Track top posts, identify winners, and get executive summaries. No manual stat entry required.",
  },
  {
    icon: <FiCalendar size={20} color="#374151" />,
    iconBg: "bg-[#D79FFF]",
    title: "Growth Calendar",
    desc: "See all scheduled, published, and failed posts in one place. Track engagement and review tasks daily.",
  },
  {
    icon: <FaArrowTrendUp size={20} color="#fff" />,
    iconBg: "bg-[#0A0A0A]",
    title: "Winners Library",
    desc: "Identify best-performing content automatically. AI learns from your winners to create better content.",
  },
];

/* ── Single card ── */
function FeatureCard({
  icon,
  iconBg,
  title,
  desc,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="bg-[#FFFFFF3D] border border-[#E5E7EB] rounded-2xl p-5 flex flex-col
      gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Icon badge */}
      <div
        className={`${iconBg} size-9 sm:size-11 rounded-xl flex items-center justify-center shrink-0`}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3
          className={`${poppins.className} sm:text-lg font-semibold text-[#191919] leading-snug`}
        >
          {title}
        </h3>
        <p className="text-sm text-[#4A5565] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ── Section ── */
export default function PlatformOffers() {
  return (
    <section className="relative w-full py-15 px-4 overflow-hidden">
      {/* ── Header ── */}
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#101828] leading-tight tracking-tight mb-3">
          What the Platform{" "}
          <span
            className="bg-linear-to-r from-[#3d3d3d] to-[#155DFC] bg-clip-text
        text-transparent"
          >
            Offers
          </span>
        </h2>
        <p className="text-xs sm:text-base lg:text-xl text-[#4A5565]">
          A complete Growth OS that runs in ~1 hour/week
        </p>
      </div>

      {/* ── Grid ── */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
