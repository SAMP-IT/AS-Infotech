import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Marketing",
      price: "₹1,000",
      description: "Perfect for small businesses just getting started",
      features: [
        "Video Editing",
        "90-Day Growth Strategy",
        "2 Strategy Sessions",
        "Video Scripting",
        "Monthly Progress Report",
      ],
      isPopular: false,
    },
    {
      name: "Development",
      price: "₹10,000",
      description: "For established businesses ready to scale",
      features: [
        "Website Development",
        "6-Month Growth Roadmap",
        "Custom Software Development",
        "Priority Email & Phone Support",
        "Custom Mobile App Development",
        "Custom KPI Dashboard",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for larger organizations",
      features: [
        "Full Business Audit",
        "12-Month Strategic Plan",
        "Weekly Executive Sessions",
        "24/7 Priority Support",
        "Market Expansion Strategy",
        "Dedicated Consultant",
        "Quarterly Executive Reports",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-consultancy-charcoal">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investment Plans
          </h2>
          <p className="text-consultancy-lightgray max-w-2xl mx-auto">
            Flexible consulting packages designed to accommodate businesses at
            every stage of growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card border-0 relative ${
                plan.isPopular
                  ? "border-consultancy-blue/50 shadow-lg shadow-consultancy-blue/20"
                  : ""
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 bg-consultancy-blue text-white text-sm rounded-full">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.name === "Marketing" && (
                    <span className="text-consultancy-lightgray text-base block">
                      Starts from ₹1000/- per Video
                    </span>
                  )}
                  {plan.name === "Development" && (
                    <span className="text-consultancy-lightgray text-base block">
                      Starts from ₹10,000/- per Project
                    </span>
                  )}
                </div>
                <p className="text-consultancy-lightgray mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-consultancy-blue flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.isPopular
                      ? "bg-consultancy-blue hover:bg-consultancy-blue/80"
                      : "bg-white/10 hover:bg-white/20"
                  } transition-colors`}
                  onClick={() =>
                    window.open("https://wa.me/+919566412970", "_blank")
                  }
                >
                  {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-consultancy-lightgray">
            Need a custom solution?{" "}
            <a
              href="https://wa.me/+919566412970"
              target="_blank"
              className="text-consultancy-blue underline"
            >
              Contact us
            </a>{" "}
            for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
