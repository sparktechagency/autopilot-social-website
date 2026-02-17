import React from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  iconColor: string;
  circleColor: string;
  label: string;
  value: string | number;
  subValue?: string;
  trend?: string;
  trendUp?: boolean;
}

export default function StatCard({
  icon: Icon,
  iconColor,
  circleColor,
  label,
  value,
  subValue,
  trend,
}: StatCardProps) {
  return (
    <div className="relative bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-full min-h-[140px]">
      {/* Overflow wrapper so the ball clips to card corners without hiding card content */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div
          style={{
            backgroundColor: circleColor,
            position: "absolute",
            top: -30,
            right: -15,
            width: 100,
            height: 100,
            borderRadius: "9999px",
          }}
        />
      </div>

      <div className="relative flex justify-between items-start">
        <div
          className="p-2.5 rounded-xl flex items-center justify-center"
          style={{ color: iconColor }}
        >
          <Icon size={20} />
        </div>

        {trend && (
          <div className="flex flex-col items-end">
            <span className="text-gray-500 text-xs font-medium">{label}</span>
            <span className="text-sm font-bold text-gray-900">{trend}</span>
          </div>
        )}
      </div>

      <div className="relative mt-4">
        {!trend && (
          <p className="text-gray-500 text-xs font-medium mb-1">{label}</p>
        )}
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        {subValue && <p className="text-xs text-gray-400 mt-1">{subValue}</p>}
      </div>
    </div>
  );
}
