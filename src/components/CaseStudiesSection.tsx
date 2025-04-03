
import React, { useState } from "react";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "/placeholder.svg",
    quote: "LevelUp Consulting transformed our business strategy. Their expertise helped us increase our market share by 35% in just 6 months.",
    stars: 5,
  },
  {
    name: "Michael Blackwood",
    position: "Founder, GrowFast",
    image: "/placeholder.svg",
    quote: "The team provided actionable insights that completely changed how we approach customer acquisition. Our conversion rates are up by 45%.",
    stars: 5,
  },
  {
    name: "Jennifer Lee",
    position: "Marketing Director, Innovate Co.",
    image: "/placeholder.svg",
    quote: "Working with LevelUp was game-changing for our business. Their strategic guidance helped us navigate a difficult market transition seamlessly.",
    stars: 5,
  },
];

const CaseStudiesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="case-studies" className="section-padding bg-blue-gradient">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-consultancy-lightgray max-w-2xl mx-auto">
            Don't take our word for it. See how we've helped businesses like yours achieve remarkable growth.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="glass-card border-0">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 rounded-full overflow-hidden bg-consultancy-blue/20">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex mb-2">
                    {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-consultancy-blue text-consultancy-blue" />
                    ))}
                  </div>
                  <blockquote className="text-xl mb-4 italic">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold">{testimonials[activeIndex].name}</p>
                    <p className="text-consultancy-lightgray">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="absolute top-1/2 -left-4 -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="h-8 w-8 rounded-full bg-consultancy-blue text-white flex items-center justify-center hover:bg-consultancy-blue/80 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 -translate-y-1/2">
            <button
              onClick={handleNext}
              className="h-8 w-8 rounded-full bg-consultancy-blue text-white flex items-center justify-center hover:bg-consultancy-blue/80 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-consultancy-blue" : "w-2 bg-white/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 border-0">
              <div className="mb-4">
                <h4 className="font-semibold text-lg mb-1">E-commerce Growth</h4>
                <p className="text-consultancy-blue">35% Revenue Increase</p>
              </div>
              <p className="text-consultancy-lightgray">
                Helped an online retailer optimize their customer journey and marketing strategy, resulting in a significant boost in sales.
              </p>
            </div>
            <div className="glass-card p-6 border-0">
              <div className="mb-4">
                <h4 className="font-semibold text-lg mb-1">SaaS Transformation</h4>
                <p className="text-consultancy-blue">56% User Retention Improvement</p>
              </div>
              <p className="text-consultancy-lightgray">
                Redesigned the onboarding process and implemented a customer success program for a SaaS company.
              </p>
            </div>
            <div className="glass-card p-6 border-0">
              <div className="mb-4">
                <h4 className="font-semibold text-lg mb-1">Startup Funding</h4>
                <p className="text-consultancy-blue">$2.5M Raised</p>
              </div>
              <p className="text-consultancy-lightgray">
                Prepared investor materials and refined the business model for a tech startup, helping them secure Series A funding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
