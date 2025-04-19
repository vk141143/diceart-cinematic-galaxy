
import { useRef, useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Film, Video, Star, Sparkles } from "lucide-react";

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      icon: <Film className="h-10 w-10 text-primary" />,
      title: "Film Production",
      description: "Full-service film production from concept to final delivery with cutting-edge equipment and expert crews.",
    },
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "Visual Effects",
      description: "Stunning visual effects that bring your vision to life with state-of-the-art technology and creative expertise.",
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Post Production",
      description: "Professional editing, color grading, and sound design to perfect your project and exceed expectations.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Animation",
      description: "Creative animation services ranging from 2D motion graphics to immersive 3D experiences for any medium.",
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering exceptional film production services with creativity and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 overflow-hidden bg-card hover:-translate-y-1 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <CardHeader className="relative overflow-hidden pb-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                <div className="rounded-full bg-muted p-4 w-16 h-16 flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-colors duration-300">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <CardTitle className="mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
