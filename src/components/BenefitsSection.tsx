import React, { useState, useEffect } from "react";
import { Check, Clock, Users, Target, Award, Shield } from "lucide-react";

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Over 5 Years Experience",
      description:
        "Extensive industry knowledge and proven track record of successful client engagements.",
      icon: Clock,
    },
    {
      title: "Expert Team",
      description:
        "Team of specialized consultants with backgrounds in diverse industries and disciplines.",
      icon: Users,
    },
    {
      title: "ROI-Focused Strategies",
      description:
        "Every recommendation and strategy is aligned with clear, measurable business outcomes.",
      icon: Target,
    },
    {
      title: "Industry Recognition",
      description:
        "Award-winning methodologies and approaches recognized by industry leaders.",
      icon: Award,
    },
    {
      title: "Tailored Solutions",
      description:
        "Custom strategies designed specifically for your unique business challenges and goals.",
      icon: Shield,
    },
    {
      title: "One-on-One Support",
      description:
        "Dedicated consultant providing personalized guidance throughout the engagement.",
      icon: Users,
    },
  ];

  // Carousel images
  const carouselImages = [
    "/kleanklub.png",
    "/amgok.png",
    "/balaji.png",
    "/SriRudra.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section id="benefits" className="section-padding bg-consultancy-charcoal">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-consultancy-lightgray max-w-2xl mx-auto">
            Partner with us to leverage our expertise, experience, and proven
            methodologies that deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-consultancy-blue/20 flex items-center justify-center">
                  <benefit.icon className="h-5 w-5 text-consultancy-blue" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-consultancy-lightgray">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 glass-card text-center">
          <p className="text-xl font-medium mb-4">
            Trusted By Industry Experts
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <a
              href="https://www.instagram.com/kleanklubcbe/?utm_source=qr&igsh=anFyZDBraW52MDBy#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-consultancy-blue/70 font-bold text-xl hover:underline transition-colors"
            >
              kleanklubcbe
            </a>
            <a
              href="https://www.instagram.com/amgok_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-consultancy-blue/70 font-bold text-xl hover:underline transition-colors"
            >
              Amgok
            </a>
            <a
              href="https://www.instagram.com/balaji.eco.homes/?utm_source=qr&igsh=MXYxbzRtNDNwN2p5aw%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-consultancy-blue/70 font-bold text-xl hover:underline transition-colors"
            >
              Balaji Eco Homes
            </a>
            <a
              href="https://www.instagram.com/srirudracars/?igsh=Z3AyeHptNHNxcDR0#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-consultancy-blue/70 font-bold text-xl hover:underline transition-colors"
            >
              Sri Rudra Cars
            </a>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="mt-12 flex justify-center">
          <div className="bg-consultancy-darkgray rounded-2xl shadow-2xl p-4 flex items-center justify-center w-[1000px] h-[380px]">
            <img
              src={carouselImages[currentIndex]}
              alt="Trusted Brand"
              className="object-contain h-full w-full transition-all duration-700 rounded-xl shadow-lg"
              style={{ maxHeight: "350px", maxWidth: "960px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
