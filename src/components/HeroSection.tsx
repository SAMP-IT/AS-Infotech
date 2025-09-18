import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-hero-gradient pt-24 pb-16 md:pt-0 md:pb-0 md:min-h-screen md:flex md:items-center md:justify-center"
    >
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-consultancy-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-consultancy-blue/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 z-10 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <span className="h-36 w-36 rounded-full overflow-hidden flex items-center justify-center bg-white/10">
              <img
                src="/Logo.png"
                alt="AS Infotech Logo"
                className="h-full w-full object-cover rounded-full scale-110"
              />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient animate-fade-in-up">
            Get the best Digital Marketing and Software Development Services
          </h1>
          <p
            className="text-xl md:text-xl text-consultancy-lightgray mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Customer's satisfaction is our priority. That's why we say "We
            design your dreams". We believe in quality and we provide the best
            quality of work. Let's connect and have a great conversation!
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              className="bg-consultancy-blue hover:bg-consultancy-blue/80 text-white rounded-full px-8 py-6 text-lg"
              onClick={() =>
                window.open("https://wa.me/+919566412970", "_blank")
              }
            >
              Book a Free Call
            </Button>
            <Button
              variant="outline"
              className="border-white/20 hover:bg-white/5 text-white rounded-full px-8 py-6 text-lg"
              onClick={() => {
                const servicesSection = document.getElementById("services");
                servicesSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Glass Card */}
      <div className="w-full px-4 mt-12 md:mt-0 md:absolute md:bottom-12 md:left-1/2 md:w-full md:max-w-5xl md:-translate-x-1/2 md:transform">
        <div className="glass-card mx-auto max-w-5xl p-6 md:animate-float">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-3xl font-bold text-consultancy-blue">5+</p>
              <p className="text-consultancy-lightgray">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-consultancy-blue">50+</p>
              <p className="text-consultancy-lightgray">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-consultancy-blue">99%</p>
              <p className="text-consultancy-lightgray">Success Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-consultancy-blue">24/7</p>
              <p className="text-consultancy-lightgray">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
