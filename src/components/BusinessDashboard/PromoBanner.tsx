import React from "react";
import { Sparkles } from "lucide-react";

export default function PromoBanner() {
  return (
    <div className="w-full bg-linear-to-r from-[#FAF5FF] to-[#FDF2F8] border border-[#E9D4FF] rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 shadow-sm">
      <div className="flex items-start gap-3 sm:gap-4 w-full sm:w-auto">
        <div className="p-2 sm:p-3 bg-purple-100 rounded-full text-[#9810FA] shrink-0">
          <Sparkles size={20} className="sm:w-6 sm:h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-bold text-gray-900">
            Let a Rep Do This For You
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Upgrade to Managed Services and our team will execute all these
            daily tasks while you focus on running your business. Full
            transparency in your dashboard.
          </p>
        </div>
      </div>

      <button className="bg-[#9810FA] hover:bg-[#9333EA] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-colors whitespace-nowrap w-full sm:w-auto">
        Upgrade to Managed Services →
      </button>
    </div>
  );
}
