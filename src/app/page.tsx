import HeroComponent from "@/components/HomePage/Hero/HeroComponent";
import InstagramBusines from "@/components/HomePage/InstagramBusiness";
import PlatformOffers from "@/components/HomePage/PlatformOffers";

export default function Home() {
  return (
    <div className="">
      <HeroComponent />
      <PlatformOffers />
      <InstagramBusines />
    </div>
  );
}
