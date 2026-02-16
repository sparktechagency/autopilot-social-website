import HeroComponent from "@/components/HomePage/Hero/HeroComponent";
import HowItWorks from "@/components/HomePage/HowItWorks";
import InstagramBusines from "@/components/HomePage/InstagramBusiness";
import PlatformOffers from "@/components/HomePage/PlatformOffers";
import Pricing from "@/components/Shared/Pricing";

export default function Home() {
  return (
    <div className="">
      <HeroComponent />
      <PlatformOffers />
      <InstagramBusines />
      <HowItWorks />
      <Pricing />
    </div>
  );
}
