
import { useRef, useEffect, useState } from "react";
import { Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveProject((prev) => (prev + 1) % projects.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const projects = [
    {
      title: "Echoes of Tomorrow",
      category: "Sci-Fi Feature Film",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      year: "2024",
      description: "A mind-bending science fiction journey through time and alternative realities.",
    },
    {
      title: "Wild Frontiers",
      category: "Adventure Documentary",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      year: "2023",
      description: "Exploring the last untamed wilderness areas on Earth with breathtaking cinematography.",
    },
    {
      title: "Digital Ghosts",
      category: "Cyberpunk Thriller",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      year: "2023",
      description: "A dark cyberpunk thriller set in a dystopian future where digital consciousness has evolved.",
    },
    {
      title: "Enchanted Forest",
      category: "Fantasy Adventure",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      year: "2022",
      description: "A magical journey through an enchanted forest where ancient myths come to life.",
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background/95 to-background -z-10"></div>
      <div className="absolute top-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative films, animations, and visual storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Featured Project Showcase */}
          <div 
            className={`relative aspect-video rounded-2xl overflow-hidden transition-all duration-700 shadow-lg shadow-accent/20 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  activeProject === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block text-xs font-medium text-accent mb-2">
                    {project.category} • {project.year}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 max-w-md">
                    {project.description}
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Image className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>
                          {project.category} • {project.year}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="rounded-lg object-cover aspect-video"
                        />
                        <p>{project.description}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer group transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
                onClick={() => setActiveProject(index)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-1">{project.title}</h4>
                  <p className="text-xs text-muted-foreground">{project.category}</p>
                </div>
                <div className={`absolute inset-0 border-2 border-transparent rounded-xl ${
                  activeProject === index ? "border-accent" : ""
                } transition-colors duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
