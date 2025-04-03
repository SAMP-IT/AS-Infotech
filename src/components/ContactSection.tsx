
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-blue-gradient">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Talk</h2>
          <p className="text-consultancy-lightgray max-w-2xl mx-auto">
            Ready to transform your business? Get in touch for a free consultation and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="glass-card p-8 h-full border-0">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-consultancy-blue/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-consultancy-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-consultancy-lightgray">hello@levelupconsulting.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-consultancy-blue/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-consultancy-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-consultancy-lightgray">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-consultancy-blue/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-consultancy-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-consultancy-lightgray">Monday-Friday: 9AM-6PM EST</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="mb-4">Book a call directly:</p>
                <Button className="bg-consultancy-blue hover:bg-consultancy-blue/80 text-white w-full">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 border-0">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 focus:border-consultancy-blue"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 focus:border-consultancy-blue"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block mb-2 text-sm">
                  Company Name
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 focus:border-consultancy-blue"
                  placeholder="ACME Inc."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-white/5 border-white/10 focus:border-consultancy-blue"
                  placeholder="Tell us about your project or business challenge..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-consultancy-blue hover:bg-consultancy-blue/80 text-white"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
