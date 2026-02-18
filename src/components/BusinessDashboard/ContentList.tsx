import React from "react";
import Image from "next/image";
import { Eye, Heart, MessageSquare, ExternalLink } from "lucide-react";

interface ContentItem {
  id: string;
  thumbnail: string;
  title: string;
  platform: "Youtube" | "Instagram" | "Tiktok" | "Linkedin";
  views: string;
  likes: string;
  comments: string;
  engagement: string;
}

interface ContentListProps {
  items: ContentItem[];
}

const platformColors: Record<ContentItem["platform"], string> = {
  Youtube: "#FF0000",
  Instagram: "#E1306C",
  Tiktok: "#010101",
  Linkedin: "#0A66C2",
};

export default function ContentList({ items }: ContentListProps) {
  return (
    <div className="bg-[#FFFFFF99] p-4 sm:p-6 rounded-3xl shadow-sm border border-gray-100 h-full">
      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">
        Top Performing Content
      </h3>

      <div className="flex flex-col divide-y divide-gray-100">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 sm:gap-4 py-4 first:pt-0 last:pb-0 group"
          >
            {/* Thumbnail */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Platform badge */}
              <span
                className="absolute bottom-1 left-1 text-white text-[8px] font-semibold px-1.5 py-0.5 rounded-sm leading-none"
                style={{ backgroundColor: platformColors[item.platform] }}
              >
                {item.platform}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 flex flex-col gap-2">
              {/* Title row */}
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2 leading-snug">
                  {item.title}
                </h4>
                <a
                  href="#"
                  className="shrink-0 text-gray-300 hover:text-gray-500 transition-colors mt-0.5"
                  aria-label="Open content"
                >
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <Stat
                  icon={<Eye size={11} className="text-purple-400" />}
                  value={item.views}
                  label="Views"
                />
                <Stat
                  icon={<Heart size={11} className="text-red-400" />}
                  value={item.likes}
                  label="Likes"
                />
                <Stat
                  icon={<MessageSquare size={11} className="text-blue-400" />}
                  value={item.comments}
                  label="Comments"
                />

                {/* Engagement pill — pushed right on sm+ */}
                <div className="ml-auto sm:ml-0 flex items-center gap-1 bg-green-50 text-green-600 rounded-full px-2 py-0.5">
                  <span className="text-[10px] sm:text-xs font-bold leading-none">
                    {item.engagement}
                  </span>
                  <span className="text-[9px] hidden sm:inline font-medium opacity-80">
                    Eng.
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1">
      {icon}
      <span className="text-[11px] sm:text-xs font-semibold text-gray-700 leading-none">
        {value}
      </span>
      <span className="text-[10px] text-gray-400 leading-none hidden sm:inline">
        {label}
      </span>
    </div>
  );
}
