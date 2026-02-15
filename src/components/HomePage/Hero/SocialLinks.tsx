"use client";

import Image from "next/image";
import Link from "next/link";

const socials = [
  { name: "Instagram", src: "/Images/socials/instagram.png" },
  { name: "Facebook", src: "/Images/socials/facebook.png" },
  { name: "LinkedIn", src: "/Images/socials/linkedIn.png" },
  { name: "YouTube", src: "/Images/socials/youtube.png" },
  { name: "TikTok", src: "/Images/socials/tiktok.png" },
];

function SocialChip({ name, src }: { name: string; src: string }) {
  return (
    <Link
      href="/"
      className="flex items-center justify-center gap-1.5 bg-[#ffffffb2] 
      border border-[#E5E5EA] rounded-xl px-4 h-10 sm:h-12 shrink-0 hover:border-[#155DFC]/40 
      hover:shadow-sm transition-all duration-200"
    >
      <Image src={src} width={26} height={26} alt={name} className="shrink-0" />
      <span
        className="bg-linear-to-r from-[#0A0A0A] to-[#155DFC] bg-clip-text
        text-transparent text-xs sm:text-sm font-medium whitespace-nowrap"
      >
        {name}
      </span>
    </Link>
  );
}

export default function SocialLinks() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center justify-center w-full gap-4 md:gap-6 py-4">
      <p
        className="text-xl md:text-3xl font-semibold bg-linear-to-r from-[#0A0A0A] to-[#155DFC]
                    bg-clip-text text-transparent shrink-0 tracking-tight"
      >
        Work with
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
        {socials.map((s) => (
          <SocialChip key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}
