
import React from "react";
import { Check, Clock, Users, Target, Award, Shield } from "lucide-react";

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Over 10 Years Experience",
      description: "Extensive industry knowledge and proven track record of successful client engagements.",
      icon: Clock,
    },
    {
      title: "Expert Team",
      description: "Team of specialized consultants with backgrounds in diverse industries and disciplines.",
      icon: Users,
    },
    {
      title: "ROI-Focused Strategies",
      description: "Every recommendation and strategy is aligned with clear, measurable business outcomes.",
      icon: Target,
    },
    {
      title: "Industry Recognition",
      description: "Award-winning methodologies and approaches recognized by industry leaders.",
      icon: Award,
    },
    {
      title: "Tailored Solutions",
      description: "Custom strategies designed specifically for your unique business challenges and goals.",
      icon: Shield,
    },
    {
      title: "One-on-One Support",
      description: "Dedicated consultant providing personalized guidance throughout the engagement.",
      icon: Users,
    },
  ];

  return (
    <section id="benefits" className="section-padding bg-consultancy-charcoal">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-consultancy-lightgray max-w-2xl mx-auto">
            Partner with us to leverage our expertise, experience, and proven methodologies
            that deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-consultancy-blue/20 flex items-center justify-center">
                  <benefit.icon className="h-5 w-5 text-consultancy-blue" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-consultancy-lightgray">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 glass-card text-center">
          <p className="text-xl font-medium mb-4">Trusted By Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-consultancy-blue/70 font-bold text-xl">ACME Inc.</div>
            <div className="text-consultancy-blue/70 font-bold text-xl">TechCorp</div>
            <div className="text-consultancy-blue/70 font-bold text-xl">GlobalFirm</div>
            <div className="text-consultancy-blue/70 font-bold text-xl">InnovateCo</div>
            <div className="text-consultancy-blue/70 font-bold text-xl">NextLevel</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
