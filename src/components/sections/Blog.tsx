
import { useRef, useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Blog() {
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

  const blogPosts = [
    {
      title: "The Evolution of Visual Effects in Modern Cinema",
      excerpt: "Exploring how VFX has transformed storytelling in the last decade with revolutionary technology.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      date: "Apr 12, 2025",
      author: {
        name: "Alex Rivera",
        avatar: "AR",
      },
      category: "Visual Effects",
      readTime: "6 min read"
    },
    {
      title: "Finding the Perfect Location: A Director's Guide",
      excerpt: "Key considerations for directors when scouting and selecting filming locations for maximum impact.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      date: "Mar 28, 2025",
      author: {
        name: "Jordan Chen",
        avatar: "JC",
      },
      category: "Directing",
      readTime: "8 min read"
    },
    {
      title: "Gaming Aesthetics in Modern Filmmaking",
      excerpt: "How video game visual design is influencing the look and feel of contemporary cinema.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      date: "Mar 15, 2025",
      author: {
        name: "Taylor Morgan",
        avatar: "TM",
      },
      category: "Gaming",
      readTime: "5 min read"
    },
  ];

  return (
    <section id="blog" ref={sectionRef} className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-1/3 bg-gradient-to-b from-muted/30 to-transparent -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Latest Insights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and expertise from the Diceart Films team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className={`group h-full overflow-hidden hover:shadow-lg transition-all duration-700 border border-border/50 hover:border-primary/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-3 right-3 bg-accent hover:bg-accent">{post.category}</Badge>
              </div>

              <CardHeader className="pt-5 pb-2">
                <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors duration-300">{post.title}</h3>
              </CardHeader>
              
              <CardContent className="py-2">
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center pt-3 border-t border-border/50">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="#" alt={post.author.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">{post.author.avatar}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs">{post.author.name}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-primary">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <Button variant="outline" className="group">
            View All Articles
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
    </section>
  );
}
