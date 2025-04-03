
import React from "react";
import { CheckCircle } from "lucide-react";

const AboutSection: React.FC = () => {
  const credentials = [
    "MBA, Harvard Business School",
    "Certified Business Consultant",
    "Former Strategy Director at Fortune 500 Company",
    "Published Author on Business Growth",
    "10+ Years in Executive Advisory Roles",
  ];

  const features = [
    "Data-Driven Approach",
    "Customized Strategies",
    "Continuous Support",
    "Measurable Results",
  ];

  return (
    <section id="about" className="section-padding bg-consultancy-darkgray">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Consultancy</h2>
            
            <p className="text-consultancy-lightgray mb-6">
              LevelUp Consulting was founded with a single mission: to help businesses reach their full potential through strategic guidance and implementation support. Unlike traditional consulting firms, we focus on actionable strategies that deliver measurable results.
            </p>
            
            <p className="text-consultancy-lightgray mb-6">
              Our team brings diverse expertise from various industries, allowing us to provide a comprehensive perspective on your business challenges. We believe in building long-term partnerships with our clients, becoming an extension of your team rather than just external advisors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-consultancy-blue" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="glass-card p-8 border-0">
              <div className="mx-auto mb-6 h-24 w-24 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Consultant" 
                  className="object-cover h-full w-full"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-center mb-2">Jane Doe</h3>
              <p className="text-consultancy-blue text-center mb-6">Founder & Principal Consultant</p>
              
              <div className="space-y-3">
                <p className="text-consultancy-lightgray font-medium mb-4">Credentials & Experience:</p>
                <ul className="space-y-2">
                  {credentials.map((credential, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-consultancy-blue flex-shrink-0 mt-0.5" />
                      <span className="text-consultancy-lightgray">{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-center">
                  <span className="text-consultancy-lightgray">Featured in: </span>
                  <span className="text-white font-semibold">Forbes, Business Insider, Entrepreneur</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
