
import { useRef, useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Film, Video, Star, Sparkles, Palette, Globe, Music, Calendar, MonitorSmartphone, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [expandedService, setExpandedService] = useState<number | null>(null);

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
      icon: <MonitorSmartphone className="h-10 w-10 text-accent" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions that drive engagement, conversions, and brand awareness across platforms.",
      detailedDescription: "Our digital marketing team leverages data-driven strategies to optimize your online presence, build brand awareness, and drive conversions. From social media management to SEO optimization and PPC campaigns, we provide end-to-end solutions tailored to your business goals.",
      backgroundImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      icon: <Film className="h-10 w-10 text-accent" />,
      title: "Ad Films & Shoots",
      description: "Professional advertising films and video shoots that bring your brand story to life with cinematic quality.",
      detailedDescription: "Our production team crafts compelling advertising films that capture your brand's essence with cinematic excellence. From concept development to post-production, we handle every aspect of the creative process to deliver visually stunning and impactful video content.",
      backgroundImage: "https://images.unsplash.com/photo-1560269507-c5e329c8edb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      icon: <Video className="h-10 w-10 text-accent" />,
      title: "VFX & Editing",
      description: "Cutting-edge visual effects and professional editing services that transform raw footage into polished masterpieces.",
      detailedDescription: "Our VFX and editing experts leverage industry-leading software and techniques to create seamless visual effects and professional edits. Whether it's complex compositing, color grading, or motion graphics, our team delivers high-quality results that elevate your visual content.",
      backgroundImage: "https://images.unsplash.com/photo-1601406984674-e7e463d3f106?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      icon: <Sparkles className="h-10 w-10 text-accent" />,
      title: "3D & 2D Animation",
      description: "Creative animation services ranging from immersive 3D experiences to engaging 2D motion graphics.",
      detailedDescription: "From character animations to product visualizations, our animation team creates captivating 2D and 3D content that tells your story with creativity and precision. We blend technical expertise with artistic vision to produce animations that engage, inform, and inspire your audience.",
      backgroundImage: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      icon: <Palette className="h-10 w-10 text-accent" />,
      title: "Graphic Designing",
      description: "Eye-catching graphic design that communicates your brand's message with visual impact and creative excellence.",
      detailedDescription: "Our graphic design team crafts visually stunning assets that align with your brand identity and marketing objectives. From logo design to marketing collateral, we create designs that stand out, communicate effectively, and leave a lasting impression on your audience.",
      backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      icon: <Calendar className="h-10 w-10 text-accent" />,
      title: "Events",
      description: "Comprehensive event planning and production services that create memorable experiences for your audience.",
      detailedDescription: "Our event management team handles every aspect of your event, from concept development to execution. Whether it's a product launch, corporate gathering, or promotional event, we ensure seamless coordination, creative direction, and impactful experiences that align with your brand objectives.",
      backgroundImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      icon: <Film className="h-10 w-10 text-accent" />,
      title: "Ad Films & Shoots",
      description: "High-quality advertising films and photoshoots that showcase your products and services in the best light.",
      detailedDescription: "Our production team combines technical expertise with creative direction to produce advertising content that resonates with your target audience. From concept to delivery, we ensure that every aspect of your ad film or photoshoot aligns with your brand messaging and marketing goals.",
      backgroundImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      icon: <Music className="h-10 w-10 text-accent" />,
      title: "Songs & Lyrics",
      description: "Original music composition and lyric writing services that create the perfect soundtrack for your brand.",
      detailedDescription: "Our music team creates original compositions and lyrics that enhance your brand's emotional connection with your audience. Whether it's a jingle, theme song, or complete soundtrack, we craft music that captures your brand personality and resonates with your target demographic.",
      backgroundImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      icon: <Palette className="h-10 w-10 text-accent" />,
      title: "Digital Painting",
      description: "Stunning digital artwork and illustrations that bring your creative vision to life with artistic precision.",
      detailedDescription: "Our digital artists create captivating illustrations and paintings that transform ideas into visually arresting imagery. From concept art to digital illustrations for marketing campaigns, we deliver artwork that tells your story with creativity, emotion, and technical excellence.",
      backgroundImage: "https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      icon: <Globe className="h-10 w-10 text-accent" />,
      title: "Web Designing",
      description: "User-focused web design that combines aesthetics with functionality to create engaging online experiences.",
      detailedDescription: "Our web design team creates responsive, user-friendly websites that align with your brand identity and business objectives. We focus on delivering intuitive navigation, compelling visuals, and optimized performance to ensure your online presence effectively engages your target audience.",
      backgroundImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
  ];

  const handleServiceClick = (index: number) => {
    setExpandedService(index);
  };

  const closeExpandedService = () => {
    setExpandedService(null);
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 relative min-h-[80vh] flex flex-col justify-center">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
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

        <AnimatePresence mode="wait">
          {expandedService !== null ? (
            <motion.div
              key="expanded-service"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={closeExpandedService}
                className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-background/80 backdrop-blur-sm"
              >
                <ArrowLeft size={16} />
                Back to all services
              </Button>
              
              <Card className="w-full overflow-hidden">
                <div 
                  className="h-64 relative"
                  style={{ 
                    backgroundImage: `url(${services[expandedService].backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="rounded-full bg-accent p-4 w-16 h-16 flex items-center justify-center mb-2">
                      {services[expandedService].icon}
                    </div>
                    <h3 className="text-3xl font-bold">{services[expandedService].title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6 pt-4">
                  <p className="text-lg mb-4">{services[expandedService].description}</p>
                  <p className="text-muted-foreground">{services[expandedService].detailedDescription}</p>
                  
                  <div className="mt-8 flex flex-col gap-4">
                    <h4 className="text-xl font-semibold">Why Choose Our {services[expandedService].title} Services</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Expert team with industry experience</li>
                      <li>Custom solutions tailored to your specific needs</li>
                      <li>Cutting-edge technology and creative approaches</li>
                      <li>Proven track record of successful projects</li>
                      <li>Collaborative process with regular updates and feedback</li>
                    </ul>
                    
                    <div className="mt-4">
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Request a Quote</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="service-selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Dot Navigation */}
              <div className="flex justify-center gap-4 mb-12">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={cn(
                      "w-4 h-4 rounded-full transition-all duration-300 transform",
                      activeService === index 
                        ? "bg-accent scale-125" 
                        : "bg-muted hover:bg-accent/50"
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
                    <Card 
                      className="bg-card/80 backdrop-blur-sm border border-primary/10 cursor-pointer hover:shadow-lg transition-all duration-300"
                      onClick={() => handleServiceClick(index)}
                    >
                      <CardHeader className="pb-2">
                        <div className="mb-2 flex justify-center">
                          <div className="rounded-full bg-background p-4 w-20 h-20 flex items-center justify-center">
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
                    onClick={() => {
                      setActiveService(index);
                      handleServiceClick(index);
                    }}
                    className={cn(
                      "p-2 rounded-lg transition-all duration-300",
                      activeService === index ? "bg-accent/20 ring-1 ring-accent" : "hover:bg-accent/5"
                    )}
                  >
                    <div className="flex flex-col items-center">
                      {service.icon}
                      <span className="text-xs mt-2 text-center">{service.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
