import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-consultancy-darkgray py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-start flex-wrap gap-8">
          <div className="max-w-xs">
            <h3 className="text-2xl font-bold mb-4">AS Infotech</h3>
            <p className="text-consultancy-lightgray mb-6">
              Strategic business consulting to help you reach your full
              potential and achieve sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/aadhi-sakthi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-consultancy-blue/20 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-consultancy-lightgray" />
              </a>
              <a
                href="https://www.instagram.com/as_.infotech?utm_source=qr&igsh=NTd2bG12cnY1bHQ4"
                target="_blank"
                className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-consultancy-blue/20 transition-colors"
              >
                <Instagram className="h-4 w-4 text-consultancy-lightgray" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-consultancy-lightgray">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Business Strategy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Growth Hacking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Brand Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tech Advisory
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Market Analysis
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-consultancy-lightgray">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="hover:text-white transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-consultancy-lightgray">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-consultancy-lightgray text-sm">
            © 2025 AS Infotech. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 h-10 w-10 rounded-full bg-consultancy-blue/10 flex items-center justify-center hover:bg-consultancy-blue/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-consultancy-blue" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
