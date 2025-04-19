
import { useRef, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95"></div>
        
        {/* Static background with gradient until we can add a real video background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10"></div>
        
        {/* Animated Particles/Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/20 animate-float"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.3
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
          }`}>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent leading-tight">
              Cinematic Excellence in Digital Storytelling
            </span>
          </h1>
          
          <p className={`text-xl text-muted-foreground mb-10 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}>
            Pushing the boundaries of visual storytelling with innovative filmmaking and gaming-inspired aesthetics
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100" : "opacity-0 translate-y-10"
          }`}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              onClick={scrollToServices}
            >
              Explore Our Services
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary hover:bg-primary/10 transition-colors group"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 100,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Get in Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full animate-bounce opacity-70 hover:opacity-100 transition-opacity"
            onClick={scrollToServices}
          >
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
