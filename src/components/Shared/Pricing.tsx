import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for getting started",
    price: {
      monthly: 49,
      yearly: 39,
    },
    period: "per month",
    featured: false,
    cta: "Start free trial",
    features: [
      "5 social accounts",
      "50 posts per month",
      "Basic analytics",
      "2 team members",
      "Content calendar",
      "Email support",
      "Mobile app access",
      "Basic templates",
    ],
  },
  {
    name: "Growth",
    tagline: "Best for growing businesses",
    price: {
      monthly: 149,
      yearly: 139,
    },
    period: "per month",
    featured: true,
    cta: "Start free trial",
    features: [
      "20 social accounts",
      "Unlimited posts",
      "Advanced analytics",
      "10 team members",
      "AI content suggestions",
      "Priority support",
      "Custom branding",
      "Engagement tracking",
      "Competitor analysis",
      "Bulk scheduling",
    ],
  },
  {
    name: "Scale",
    tagline: "For large teams & enterprises",
    price: {
      monthly: 249,
      yearly: 239,
    },
    period: "per month",
    featured: false,
    cta: "Start free trial",
    features: [
      "Unlimited accounts",
      "Unlimited posts",
      "Enterprise analytics",
      "Unlimited members",
      "Dedicated manager",
      "24/7 phone support",
      "White-label reports",
      "API access",
      "SSO & compliance",
      "Custom integrations",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20">
      {/* Header */}
      <div className="text-center mb-14 space-y-3">
        <h1 className="text-2xl sm:text-5xl font-semibold text-gray-900 tracking-tight">
          Simple, Transparent{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #2563eb, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Pricing
          </span>
        </h1>
        <p className="text-[#4A5565] text-sm sm:text-lg">
          From setup to growth in 4 simple steps
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl transition-all duration-300 ${
              plan.featured
                ? "bg-[#FFFFFFDB] shadow-2xl  scale-105 z-10 border border-[#FFEBEB]"
                : "bg-[#FFFFFF6E] shadow-lg hover:shadow-xl hover:-translate-y-1 border border-[#DFE9FF]"
            }`}
            style={{ padding: plan.featured ? "2rem" : "1.75rem" }}
          >
            {/* Most Popular Badge */}
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span
                  className="text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap"
                  style={{
                    backgroundColor: "#0A0A0A",
                  }}
                >
                  Most Popular
                </span>
              </div>
            )}

            {/* Plan Name & Tagline */}
            <div className="mb-5">
              <h2 className="text-lg font-bold text-gray-900 mb-1">
                {plan.name}
              </h2>
              <p className="text-gray-400 text-sm">{plan.tagline}</p>
            </div>

            {/* Price */}
            <div className="flex items-end gap-1">
              <span className="text-5xl font-bold text-[#101828] leading-none">
                ${plan.price.monthly}
              </span>
              <span className="text-[#4A5565] text-sm ">
                /{plan.period.split(" ")[1]}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#6A7282] mb-6">
              or ${plan.price.yearly}/mo billed yearly
            </p>

            {/* CTA Button */}
            <button
              className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 mb-7 cursor-pointer ${
                plan.featured
                  ? "text-white shadow-md hover:shadow-lg hover:brightness-125 active:scale-95"
                  : "text-white hover:bg-[#464646] active:scale-95"
              }`}
              style={
                plan.featured
                  ? {
                      background: "linear-gradient(90deg, #0A0A0A, #155DFC)",
                    }
                  : {
                      background: "#191919",
                    }
              }
            >
              {plan.cta}
            </button>

            {/* Divider */}
            <div className="border-t border-gray-100 mb-6" />

            {/* Feature List */}
            <ul className="flex flex-col gap-3 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span
                    className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                      plan.featured
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <FiCheck size={10} strokeWidth={3} />
                  </span>
                  <span className="text-gray-600 text-sm leading-snug">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
