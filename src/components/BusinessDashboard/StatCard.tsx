import React from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  label: string;
  value: string | number;
  subValue?: string; // e.g. " Reviews Repled"
  trend?: string; // e.g. "8.9%"
  trendUp?: boolean;
}

export default function StatCard({
  icon: Icon,
  iconColor,
  iconBgColor,
  label,
  value,
  subValue,
  trend,
}: StatCardProps) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-full min-h-[140px]">
      <div className="flex justify-between items-start">
        <div
          className={`p-2.5 rounded-xl flex items-center justify-center`}
          style={{ backgroundColor: iconBgColor, color: iconColor }}
        >
          <Icon size={20} />
        </div>
        {/* Placeholder for a sparkline or decorative element if needed */}
        {trend && (
            <div className="flex flex-col items-end">
                 <span className="text-gray-500 text-xs font-medium">{label}</span>
                 <span className="text-sm font-bold text-gray-900">{trend}</span>
            </div>

        )}
      </div>

      <div className="mt-4">
        {!trend && <p className="text-gray-500 text-xs font-medium mb-1">{label}</p>}
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
         {subValue && (
            <p className="text-xs text-gray-400 mt-1">{subValue}</p>
         )}
      </div>
    </div>
  );
}
