import Hero from "@/components/HomePage/HeroComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-linear-to-r from-[#FFEBEB] via-[#FFFBEB] via-[#F0FFF6] to-[#DFE9FF]">
      <Hero />
    </div>
  );
}
