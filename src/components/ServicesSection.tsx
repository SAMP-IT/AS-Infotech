import React from "react";
import {
  Lightbulb,
  TrendingUp,
  Megaphone,
  Code,
  LineChart,
  Video,
  Globe,
  Terminal,
  Smartphone,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Video Creation",
      description:
        "Engaging video content production to boost your brand's visibility and connect with your audience.",
      icon: Video,
    },
    {
      title: "Digital Marketing",
      description:
        "Innovative tactics to scale your business rapidly and sustainably in the competitive digital markets.",
      icon: TrendingUp,
    },
    {
      title: "Website Development",
      description:
        "Custom, responsive websites designed to elevate your online presence and drive business growth.",
      icon: Globe,
    },
    {
      title: "Software Development",
      description:
        "Robust software solutions tailored to streamline your business operations and enhance productivity.",
      icon: Terminal,
    },
    {
      title: "Mobile App Development",
      description:
        "User-friendly mobile applications to expand your reach and engage customers on the go.",
      icon: Smartphone,
    },
    {
      title: "Brand Development",
      description:
        "Create a powerful brand identity that resonates with your target audience and stands out.",
      icon: Megaphone,
    },
    {
      title: "Tech Advisory",
      description:
        "Navigate technology decisions with expert guidance on infrastructure, tools, and innovations.",
      icon: Code,
    },
    {
      title: "Market Analysis",
      description:
        "Data-driven insights to understand market dynamics, competitors, and untapped opportunities.",
      icon: LineChart,
    },
    {
      title: "Business Strategy",
      description:
        "Develop comprehensive business strategies tailored to your unique goals and market position.",
      icon: Lightbulb,
    },
  ];

  return (
    <section id="services" className="section-padding bg-consultancy-darkgray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services We Offer
          </h2>
          <p className="text-consultancy-lightgray max-w-2xl mx-auto">
            Comprehensive consulting solutions designed to transform challenges
            into opportunities and drive sustainable growth for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-card border-0 hover:bg-white/10 transition-colors duration-300"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-consultancy-blue/20 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-consultancy-blue" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-consultancy-lightgray">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
