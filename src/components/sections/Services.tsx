
import { useRef, useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Film, Video, Star, Sparkles, Palette, Globe, Music, Calendar, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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

  const services = [
    {
      icon: <MonitorSmartphone className="h-10 w-10 text-primary" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions that drive engagement, conversions, and brand awareness across platforms.",
    },
    {
      icon: <Film className="h-10 w-10 text-primary" />,
      title: "Ad Films & Shoots",
      description: "Professional advertising films and video shoots that bring your brand story to life with cinematic quality.",
    },
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "VFX & Editing",
      description: "Cutting-edge visual effects and professional editing services that transform raw footage into polished masterpieces.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "3D & 2D Animation",
      description: "Creative animation services ranging from immersive 3D experiences to engaging 2D motion graphics.",
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Graphic Designing",
      description: "Eye-catching graphic design that communicates your brand's message with visual impact and creative excellence.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Events",
      description: "Comprehensive event planning and production services that create memorable experiences for your audience.",
    },
    {
      icon: <Film className="h-10 w-10 text-primary" />,
      title: "Ad Films & Shoots",
      description: "High-quality advertising films and photoshoots that showcase your products and services in the best light.",
    },
    {
      icon: <Music className="h-10 w-10 text-primary" />,
      title: "Songs & Lyrics",
      description: "Original music composition and lyric writing services that create the perfect soundtrack for your brand.",
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Digital Painting",
      description: "Stunning digital artwork and illustrations that bring your creative vision to life with artistic precision.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Web Designing",
      description: "User-focused web design that combines aesthetics with functionality to create engaging online experiences.",
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 relative min-h-[80vh] flex flex-col justify-center">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering exceptional production services with creativity and technical excellence.
          </p>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={cn(
                "w-4 h-4 rounded-full transition-all duration-300 transform",
                activeService === index 
                  ? "bg-primary scale-125" 
                  : "bg-muted hover:bg-primary/50"
              )}
              aria-label={`Select service ${index + 1}`}
            />
          ))}
        </div>

        {/* Service Display */}
        <div className="relative h-[400px] md:h-[300px] overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full"
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: activeService === index ? 1 : 0,
                x: activeService === index ? 0 : 100,
                zIndex: activeService === index ? 10 : 0
              }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-card/80 backdrop-blur-sm border border-primary/10">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex justify-center">
                    <div className="rounded-full bg-primary/10 p-4 w-20 h-20 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-center text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-lg">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Small preview of all services for mobile scrolling */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <button 
              key={index} 
              onClick={() => setActiveService(index)}
              className={cn(
                "p-2 rounded-lg transition-all duration-300",
                activeService === index ? "bg-primary/20 ring-1 ring-primary" : "hover:bg-primary/5"
              )}
            >
              <div className="flex flex-col items-center">
                {service.icon}
                <span className="text-xs mt-2 text-center">{service.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
