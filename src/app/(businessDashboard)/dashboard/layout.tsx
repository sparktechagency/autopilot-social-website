"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

const tabs = [
  { name: "Overview", href: "/dashboard" },
  { name: "Daily To-Do", href: "/dashboard/daily-to-do" },
  { name: "Content", href: "/dashboard/content" },
  { name: "Calendar", href: "/dashboard/calendar" },
  { name: "Engagement", href: "/dashboard/engagement" },
  { name: "Reviews", href: "/dashboard/reviews" },
  { name: "Team", href: "/dashboard/team" },
  { name: "Billing", href: "/dashboard/billing" },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  return (
    <div
      className="pt-24"
      style={{
        backgroundImage: "url('/Images/HeroImages/blendHero.png')",
        backgroundSize: "contain",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ================= TOP NAV ================= */}
      <div className="sticky top-20 z-30 bg-linear-to-r from-[#0A0A0A] to-[#155DFC] border-b border-white/10 px-4 sm:px-8 py-4 shadow-sm mx-4">
        <div className="flex items-center justify-between">
          {/* Simple Logo Placeholder or similar if needed, though usually sidebar handles this. 
                For this specific request, "navigating bar common" suggests this horizontal bar.
             */}

          <div className="flex gap-2 items-center overflow-x-auto scrollbar-hide w-full max-w-7xl mx-auto justify-between">
            {tabs.map((tab) => {
              const active = pathname === tab.href;

              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`
                    whitespace-nowrap px-5 py-2 rounded-lg text-sm font-medium
                    transition-all duration-200 border
                    ${
                      active
                        ? "bg-white border-[#2563EB] text-[#191919] shadow-md shadow-blue-500/20"
                        : "bg-[#FFFFFF3D] border-[#333] text-white hover:bg-[#2A2A2A] hover:text-gray-200 hover:border-gray-600"
                    }
                    `}
                >
                  {tab.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= PAGE CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {children}
      </div>
    </div>
  );
}
