import React from "react";
import { CheckCircle2, Copy, FileText, UserPlus } from "lucide-react";

const activities = [
  {
    id: 1,
    text: "Completed 12 engagement interactions on Instagram",
    time: "2 hours ago",
    icon: CheckCircle2,
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    id: 2,
    text: "New 5-star review received on Google",
    time: "4 hours ago",
    icon: UserPlus,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    id: 3,
    text: "Mails & Letters just launched",
    time: "1 day ago",
    icon: FileText,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    id: 4,
    text: "Posted 'How to Scale Your Business' to TikTok",
    time: "1 day ago",
    icon: Copy,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

export default function ActivityFeed() {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 h-full">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h3>
      <div className="flex flex-col gap-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activity.bg} ${activity.color}`}>
              <activity.icon size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 leading-snug">
                {activity.text}
              </p>
              <span className="text-xs text-gray-400 mt-1 block">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
