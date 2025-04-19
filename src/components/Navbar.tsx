
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { FilmIcon, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  introCompleted: boolean;
}

export function Navbar({ introCompleted }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "services", label: "Services" },
    { id: "events", label: "Events" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.id);
      sections.unshift("home");

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - animates from center to corner */}
          <div className={`flex items-center ${!introCompleted ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : ""}`}>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className={`flex items-center ${
                introCompleted ? "animate-fade-in" : "animate-logo-to-corner"
              }`}
            >
              <FilmIcon className="w-6 h-6 mr-2 text-primary" />
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                DICEART FILMS
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => scrollToSection(item.id)}
                className={`relative group transition-all duration-300 ${
                  introCompleted ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${navItems.indexOf(item) * 0.1 + 0.8}s` }}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === item.id ? "w-10" : "w-0 group-hover:w-5"
                  }`}
                ></span>
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              className={`${introCompleted ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "1.2s" }}
            >
              <MenuIcon className="w-6 h-6" />
            </Button>
          </div>

          {/* Theme Toggle */}
          <div
            className={`hidden md:block ${introCompleted ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "1.3s" }}
          >
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-3 space-y-1 bg-background/95 backdrop-blur-md rounded-xl shadow-lg">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => scrollToSection(item.id)}
                className="w-full justify-start rounded-none"
              >
                {item.label}
              </Button>
            ))}
            <div className="flex justify-center pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
