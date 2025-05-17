
import { ExternalLink, Github, Code, Eye, Star, Layers, Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";
import { useState, useRef } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

// Add custom CSS for medium-large screens (800px-1020px)
const customStyles = `
  @media (min-width: 800px) and (max-width: 1020px) {
    .custom-row-even {
      flex-direction: row !important;
    }
    .custom-row-odd {
      flex-direction: row-reverse !important;
    }
    .custom-half-width {
      width: 50% !important;
    }
  }
`;

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A task management application with AI suggestions for prioritization and time allocation.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    tags: [
      { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "TensorFlow.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" }
    ],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    tags: [
      { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Stripe", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg" },
      { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    title: "Real-time Collaborative Editor",
    description: "A collaborative text editor with real-time synchronization for multiple users.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: [
      { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "WebSockets", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
      { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    title: "Algorithm Visualizer",
    description: "Interactive tool for visualizing various algorithms and data structures.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxnb3JpdGhtfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    tags: [
      { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "D3.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg" },
      { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for managing and analyzing social media accounts across platforms.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGFzaGJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    tags: [
      { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Material UI", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
      { name: "Chart.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chartjs-original.svg" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    title: "Weather Forecast App",
    description: "A weather forecasting application with location-based services and interactive maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: [
      { name: "React Native", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "OpenWeather API", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Geolocation", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Maps", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
];

import { motion, useInView } from "framer-motion";
import { useEffect } from "react";

export function ProjectsSection() {
  // Add the custom styles to the document
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = customStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  return (
    <SectionWrapper id="projects">
      <div className="container mx-auto max-w-6xl" ref={sectionRef}>
        <SectionHeading>Projects</SectionHeading>
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl font-medium text-primary mb-3">
            <span className="gradient-text">Turning Ideas into Digital Reality</span>
          </h3>
          <p className="text-muted-foreground">
            Explore my portfolio of innovative projects that showcase my technical skills, 
            problem-solving abilities, and passion for creating impactful digital experiences.
          </p>
        </motion.div>
        
        <div className="space-y-20 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-col lg:flex-row${index % 2 === 0 ? '' : '-reverse'} gap-8 items-center ${index % 2 === 0 ? 'custom-row-even' : 'custom-row-odd'}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              {/* Image */}
              <div className="w-full md:w-full lg:w-1/2 custom-half-width overflow-hidden rounded-lg border border-border/40 hover:border-primary/30 transition-all duration-300 group relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button size="sm" variant="secondary" className="rounded-full" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <Eye className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" className="rounded-full" asChild>
                      <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                        <Code className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Tech badges */}
                <div className="absolute top-3 left-3 flex gap-1">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <div 
                      key={idx} 
                      className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm p-1 flex items-center justify-center"
                      title={tag.name}
                    >
                      <img src={tag.image} alt={tag.name} className="h-full w-full object-contain" />
                    </div>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm h-8 px-2">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full md:w-full lg:w-1/2 custom-half-width space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Tech Stack</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag.name} 
                        variant="outline"
                        className="flex items-center gap-1 bg-secondary/20 hover:bg-secondary/30 transition-colors"
                      >
                        <img src={tag.image} alt={tag.name} className="w-4 h-4" />
                        <span className="text-xs">{tag.name}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Button 
                    variant="ghost" 
                    className="px-0 text-primary hover:text-accent hover:bg-transparent transition-colors"
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                  >
                    {expandedProject === index ? "Show Less" : "Show More"}
                  </Button>
                  
                  {expandedProject === index && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 space-y-4 pt-4 border-t border-border/50"
                    >
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Key Features</span>
                      </div>
                      
                      <ul className="text-sm text-muted-foreground space-y-2 pl-6 list-disc">
                        <li>Responsive design for all device sizes</li>
                        <li>Optimized performance and accessibility</li>
                        <li>Clean, maintainable code architecture</li>
                      </ul>
                      
                      <div className="flex gap-4 pt-2">
                        <Button size="sm" className="gap-1" asChild>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <Eye className="h-3.5 w-3.5" />
                            Live Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="gap-1" asChild>
                          <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3.5 w-3.5" />
                            Source
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
