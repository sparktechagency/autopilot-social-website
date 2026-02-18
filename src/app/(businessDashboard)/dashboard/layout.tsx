/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { ReactNode, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

const tabs = [
  { name: "Overview", href: "/dashboard", icon: "⊞" },
  { name: "Daily To-Do", href: "/dashboard/daily-to-do", icon: "✓" },
  { name: "Content", href: "/dashboard/content", icon: "◈" },
  { name: "Calendar", href: "/dashboard/calendar", icon: "◷" },
  { name: "Engagement", href: "/dashboard/engagement", icon: "◉" },
  { name: "Reviews", href: "/dashboard/reviews", icon: "★" },
  { name: "Team", href: "/dashboard/team", icon: "◎" },
  { name: "Billing", href: "/dashboard/billing", icon: "◇" },
];

// ─── Drawer nav item ───────────────────────────────────────────────────────────
function DrawerNavItem({
  tab,
  active,
  index,
  drawerOpen,
}: {
  tab: (typeof tabs)[number];
  active: boolean;
  index: number;
  drawerOpen: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const itemStyle: React.CSSProperties = {
    opacity: drawerOpen ? 1 : 0,
    transform: drawerOpen ? "translateX(0)" : "translateX(20px)",
    transition: "opacity 0.32s ease, transform 0.32s ease",
    transitionDelay: drawerOpen ? `${0.08 + index * 0.042}s` : "0s",
    background: active
      ? "linear-gradient(135deg,#ffffff 0%,#dbeafe 100%)"
      : hovered
        ? "rgba(255,255,255,0.065)"
        : "transparent",
    boxShadow: active
      ? "0 0 0 1px rgba(37,99,235,0.35), 0 6px 24px rgba(21,93,252,0.22)"
      : "none",
  };

  return (
    <Link
      href={tab.href}
      style={itemStyle}
      className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 mb-3 ${active ? "text-[#111827]" : "text-white"
        }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="flex-1">{tab.name}</span>
    </Link>
  );
}

// ─── Drawer rise-in wrapper ────────────────────────────────────────────────────
function DrawerRise({
  children,
  open,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  open: boolean;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        transitionDelay: open ? `${delay}s` : "0s",
      }}
    >
      {children}
    </div>
  );
}

// ─── Main layout ──────────────────────────────────────────────────────────────
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div
      className="pt-24"
      style={{
        backgroundImage: "url('/Images/HeroImages/blendHero.png')",
        backgroundSize: "contain",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* TOP NAV */}
      <div className="sticky top-20 z-30 ">
        <div className="px-4 lg:px-2 py-3.5 shadow-xl bg-linear-to-r from-[#0A0A0A] to-[#155DFC]">
          <div className="flex items-center max-w-7xl mx-auto">
            {/* Desktop tabs */}
            <div
              className="hidden md:flex gap-1 items-center w-full justify-between overflow-x-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {tabs.map((tab) => {
                const active = pathname === tab.href;
                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    className={`px-4 lg:px-8 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 ${
                      active
                        ? "bg-white text-[#191919] shadow-lg shadow-blue-500/25"
                        : "bg-[#FFFFFF3D] border border-[#E5E5EA] text-white hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {tab.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile bar */}
            <div className="flex md:hidden w-full gap-3">
              {/* Hamburger */}
              <button
                onClick={() => setOpen((v) => !v)}
                className="shrink-0 flex flex-col justify-center items-center gap-1.25 w-10 h-10 rounded-xl transition-all duration-200"
                style={{
                  background: open
                    ? "rgba(255,255,255,0.18)"
                    : "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.13)",
                  boxShadow: open ? "0 0 0 3px rgba(21,93,252,0.25)" : "none",
                }}
              >
                <GiHamburgerMenu className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ BACKDROP (sm/md only) ══════════ */}
      <div
        className="fixed inset-0 z-50 lg:hidden"
        aria-hidden="true"
        onClick={() => setOpen(false)}
        style={{
          background: "rgba(2,4,18,0.75)",
          backdropFilter: "blur(8px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.4s ease",
        }}
      />

      {/* ══════════ DRAWER (sm/md only) ══════════ */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 z-50 h-full flex flex-col lg:hidden"
        style={{
          width: 300,
          maxWidth: "88vw",
          background:
            "linear-gradient(175deg,#0b0f20 0%,#0a1235 40%,#0c1e50 100%)",
          borderLeft: "1px solid rgba(255,255,255,0.07)",
          boxShadow:
            "-20px 0 80px rgba(0,0,0,0.7), -1px 0 0 rgba(21,93,252,0.15)",
          transform: open ? "translateX(0)" : "translateX(110%)",
          transition: "transform 0.42s cubic-bezier(0.22,0.72,0,1.02)",
          willChange: "transform",
        }}
      >
        {/* Corner glow */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 pointer-events-none"
          style={{
            width: 180,
            height: 180,
            background:
              "radial-gradient(circle at top right,rgba(21,93,252,0.18) 0%,transparent 70%)",
          }}
        />

        {/* Header */}
        <DrawerRise
          open={open}
          delay={0.04}
          className="flex items-center justify-between px-6 pt-8 pb-5 mb-6 relative"
        >
          <p className="text-white text-[9px] uppercase tracking-[0.22em] font-semibold mb-1">
            Dashboard
          </p>

          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center size-10 rounded-xl"
          >
            <IoClose className="text-white font-bold" />
          </button>
        </DrawerRise>

        {/* Nav links */}
        <nav
          className="flex flex-col gap-1 px-3 flex-1 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {tabs.map((tab, i) => (
            <DrawerNavItem
              key={tab.href}
              tab={tab}
              active={pathname === tab.href}
              index={i}
              drawerOpen={open}
            />
          ))}
        </nav>
      </div>

      {/* ══════════ PAGE CONTENT ══════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {children}
      </div>
    </div>
  );
}
