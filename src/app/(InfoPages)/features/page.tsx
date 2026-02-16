import PlatformOffers from "@/components/Shared/PlatformOffers";
import SuperchargeCTA from "@/components/Shared/SuperCharge";
import React from "react";

export default function page() {
  return (
    <div className="py-10 sm:py-20 px-2">
      <PlatformOffers />
      <p className="max-w-sm sm:max-w-4xl mx-auto text-start sm:text-center text-[#4A5565]">
        We built the AmpSocial Growth OS to be your digital marketing
        department. We combined high-tier AI (OpenAI), industry-leading social
        infrastructure (Late), and a &quot;compliance-first&quot; engagement
        strategy to give you the presence of a full-scale agency for the price
        of a software subscription.
      </p>
      <SuperchargeCTA />
    </div>
  );
}
