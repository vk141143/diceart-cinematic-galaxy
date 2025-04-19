
import { useRef, useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const contactInfo = [
    { label: "Email", value: "info@diceartfilms.com" },
    { label: "Phone", value: "+1 (555) 123-4567" },
    { label: "Address", value: "123 Creative Studio, Los Angeles, CA 90012" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-muted/30 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you and discuss how Diceart Films can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact form */}
          <div 
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`} 
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-xl blur-lg opacity-30"></div>
              <div className="relative bg-card shadow-lg rounded-xl p-8 border border-accent/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="bg-muted/50"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="bg-muted/50"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Subject of your message"
                        className="bg-muted/50"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        className="resize-none h-32 bg-muted/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 transition-opacity"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact info and map */}
          <div 
            className={`space-y-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            style={{ transitionDelay: "400ms" }}
          >
            {/* Contact info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex border-l-2 border-accent pl-4 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`} 
                    style={{ transitionDelay: `${index * 100 + 600}ms` }}
                  >
                    <div className="space-y-1">
                      <p className="font-medium">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social media links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Connect With Us</h3>
              
              <div className="flex space-x-4">
                {["Twitter", "Instagram", "LinkedIn", "YouTube"].map((platform, index) => (
                  <Button 
                    key={platform} 
                    variant="outline" 
                    size="icon" 
                    className={`rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                    style={{ transitionDelay: `${index * 100 + 800}ms` }}
                  >
                    <span className="sr-only">{platform}</span>
                    <div className="w-5 h-5 flex items-center justify-center">{platform[0]}</div>
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Location map placeholder */}
            <div 
              className={`aspect-video rounded-xl overflow-hidden border border-accent/10 shadow-lg transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <div className="h-full bg-muted flex items-center justify-center p-8 text-center">
                <div>
                  <p className="text-muted-foreground mb-2">Map Location</p>
                  <p className="font-medium">123 Creative Studio, Los Angeles, CA 90012</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
