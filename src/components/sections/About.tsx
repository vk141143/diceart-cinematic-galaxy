import { useRef, useEffect, useState } from "react";
import { Film, Star, Sparkles, Gamepad } from "lucide-react";

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasBeenVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible && hasBeenVisible) {
      const timer = setTimeout(() => {
        setHasBeenVisible(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasBeenVisible]);

  const stats = [
    { value: "10+", label: "Years Experience", icon: <Film className="h-5 w-5" /> },
    { value: "50+", label: "Completed Projects", icon: <Star className="h-5 w-5" /> },
    { value: "25+", label: "Industry Awards", icon: <Sparkles className="h-5 w-5" /> },
    { value: "100+", label: "Happy Clients", icon: <Gamepad className="h-5 w-5" /> },
  ];

  const getAnimationClass = (index: number) => {
    if (!hasBeenVisible) return "opacity-0";
    return isVisible ? `opacity-100 animate-fade-in` : "opacity-0";
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background to-muted/30 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${getAnimationClass(0)}`}
             style={{ transitionDelay: "200ms" }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
            About Diceart Films
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pushing the boundaries of visual storytelling with innovation and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-6 transition-all duration-700 ${getAnimationClass(1)}`}
               style={{ transitionDelay: "400ms" }}>
            <div className="relative inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-lg opacity-30"></span>
              <h3 className="relative text-2xl font-bold mb-4">Our Story</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2015, Diceart Films began with a passion for combining cutting-edge technology with artistic storytelling. Our team of visionary creators, technical experts, and industry veterans works together to push the boundaries of what's possible in visual media.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              We specialize in creating immersive experiences that blur the line between gaming aesthetics and cinematic storytelling, using the latest in visual effects technology and animation techniques.
            </p>
            
            <div className="relative pt-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-lg opacity-30"></div>
              <div className="relative bg-card p-6 rounded-lg border border-primary/10">
                <blockquote className="italic text-muted-foreground">
                  "Our mission is to create visual stories that not only entertain but inspire audiences to see the world differently through the lens of imagination and technology."
                </blockquote>
                <div className="mt-4 font-bold">
                  — Creative Director, Diceart Films
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 ${getAnimationClass(2)}`}
               style={{ transitionDelay: "600ms" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-30 animate-pulse-glow"></div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-primary/10 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
                  alt="Diceart Films team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div 
                        key={index} 
                        className={`bg-black/30 backdrop-blur-md rounded-lg p-4 border border-white/10 transition-all duration-500 hover:bg-primary/20 hover:border-primary/30 group ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        style={{ transitionDelay: `${index * 100 + 600}ms` }}
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="text-primary group-hover:text-white transition-colors duration-300">
                            {stat.icon}
                          </div>
                          <span className="text-xs text-muted-foreground">{stat.label}</span>
                        </div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
