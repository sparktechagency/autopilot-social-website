import React from "react";
import { Sparkles } from "lucide-react";

export default function PromoBanner() {
  return (
    <div className="w-full bg-[#FCF5FF] border border-[#F3E5F9] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-purple-100 rounded-full text-purple-600 shrink-0">
          <Sparkles size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Let a Rep Do This For You</h3>
          <p className="text-sm text-gray-500 mt-1 max-w-xl">
            Upgrade to Managed Services and our team will execute all these daily tasks while you focus on running your business. Full transparency in your dashboard.
          </p>
        </div>
      </div>
      
      <button className="bg-[#A855F7] hover:bg-[#9333EA] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md transition-colors whitespace-nowrap">
        Upgrade to Managed Services →
      </button>
    </div>
  );
}
