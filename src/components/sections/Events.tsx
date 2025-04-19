
import { useRef, useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Events() {
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

  const events = [
    {
      title: "Film Festival Showcase",
      date: "June 15, 2025",
      location: "Grand Theater, New York",
      type: "Festival",
      description: "Join us for an exclusive showcase of our award-winning films at the annual film festival.",
    },
    {
      title: "VFX Masterclass",
      date: "July 8, 2025",
      location: "Digital Arts Center, Los Angeles",
      type: "Workshop",
      description: "Learn advanced VFX techniques from our industry-leading visual effects artists.",
    },
    {
      title: "Indie Film Premiere",
      date: "August 22, 2025",
      location: "Cinema Plaza, Chicago",
      type: "Premiere",
      description: "Be the first to experience our latest indie film production with Q&A session after the screening.",
    },
    {
      title: "Gaming & Film Expo",
      date: "September 10, 2025",
      location: "Tech Convention Center, San Francisco",
      type: "Expo",
      description: "Explore the intersection of gaming and film with interactive exhibits and panel discussions.",
    },
  ];

  return (
    <section id="events" ref={sectionRef} className="py-20 bg-muted/30 relative">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-32 bg-primary/5 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" style={{animationDelay: "1s"}}></div>
      
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay connected with Diceart Films through our exclusive events and showcases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className={`group h-full hover:shadow-xl hover:shadow-secondary/10 overflow-hidden border-t-4 border-t-transparent hover:border-t-secondary transition-all duration-500 flex flex-col ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${(index * 200) + 200}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge className="bg-secondary hover:bg-secondary/90">{event.type}</Badge>
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="mt-3 group-hover:text-secondary transition-colors duration-300">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="py-2 flex-grow">
                <p className="text-muted-foreground text-sm mb-2">
                  <time dateTime={event.date}>{event.date}</time> • {event.location}
                </p>
                <p className="text-sm">{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                  Register Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
