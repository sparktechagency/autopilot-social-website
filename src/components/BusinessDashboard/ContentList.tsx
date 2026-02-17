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

export default function ContentList({ items }: ContentListProps) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 h-full">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Top Performing Content</h3>
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <div key={item.id} className="flex items-start gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
            {/* Thumbnail */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-1 right-1 bg-black/50 text-white text-[8px] px-1 rounded-sm backdrop-blur-sm">
                {item.platform}
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-900 truncate mb-2">
                {item.title}
              </h4>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Eye size={12} className="text-purple-500" />
                  <span className="font-medium text-gray-700">{item.views}</span>
                  <span className="text-[10px]">Views</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart size={12} className="text-red-500" />
                  <span className="font-medium text-gray-700">{item.likes}</span>
                  <span className="text-[10px]">Likes</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare size={12} className="text-blue-500" />
                  <span className="font-medium text-gray-700">{item.comments}</span>
                   <span className="text-[10px]">Comments</span>
                </div>
                 <div className="flex items-center gap-1 ml-auto sm:ml-0">
                  <span className="text-green-600 font-bold">{item.engagement}</span>
                  <span className="text-[10px]">Engagement</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
