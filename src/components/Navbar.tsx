import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#benefits" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-consultancy-charcoal/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-white">
            AS Infotech
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-consultancy-lightgray hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button
            className="bg-consultancy-blue hover:bg-consultancy-blue/80 text-white rounded-full px-6"
            onClick={() => window.open("https://wa.me/+919566412970", "_blank")}
          >
            Book a Call
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-consultancy-charcoal/95 backdrop-blur-md border-t border-white/10 py-4 shadow-lg">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-consultancy-lightgray hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              className="bg-consultancy-blue hover:bg-consultancy-blue/80 text-white rounded-full w-full"
              onClick={() =>
                window.open("https://wa.me/+919566412970", "_blank")
              }
            >
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
