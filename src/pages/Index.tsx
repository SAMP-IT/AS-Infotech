
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import BenefitsSection from "../components/BenefitsSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import AboutSection from "../components/AboutSection";
import PricingSection from "../components/PricingSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-consultancy-charcoal text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <CaseStudiesSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
