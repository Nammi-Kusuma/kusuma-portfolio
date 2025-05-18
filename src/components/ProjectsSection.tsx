
import { ExternalLink, Github, Code, Eye, Star, Layers, Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";
import { useState, useRef } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { assets } from "../assets/assets";

// Add custom CSS for medium and large screens
const customStyles = `
  @media (min-width: 800px) {
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
    title: "HostHive",
    description: "A feature-rich property rental platform that allows users to list, manage, and explore short-term rental properties. HostHive simplifies the hosting process while delivering a smooth experience for guests, similar to Airbnb.",
    image: assets.hosthive,
    tags: [
      { name: "Javascript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "EJS",  }
    ],
    liveLink: "https://hosthive.onrender.com/",
    sourceLink: "https://github.com/Nammi-Kusuma/HostHive",
    keyFeatures: [
      "🔒 Secure authentication with Passport.js",
      "🏡 Full CRUD for property listings",
      "📱 Fully responsive design for mobile and desktop",
      "⚡ Optimized backend performance using Express.js",
      "🧱 Clean MVC architecture and modular codebase",
      "☁️ Cloud deployment via Render with persistent MongoDB Atlas storage"
    ]
  },
  {
    title: "SwiftBites",
    description: "A food ordering web application where users can explore a menu and place orders, while admins manage food items and track orders through a secure dashboard.",
    image: assets.swiftbites,
    tags: [
      { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Stripe", image: assets.stripe },
    ],
    liveLink: "https://swiftbites.onrender.com/",
    sourceLink: "https://github.com/Nammi-Kusuma/SwiftBites",
    keyFeatures: [
      "🛒 Users can explore the restaurant menu and place orders",
      "🧑‍🍳 Admin panel to add, update, or remove food items",
      "📦 View and manage customer orders from the dashboard",
      "🔐 Secure login system with authentication",
      "📱 Responsive layout for both desktop and mobile",
      "☁️ Cloud deployment via Render with persistent MongoDB Atlas storage"
    ]
  },
  {
    title: "My Portfolio",
    description: "A sleek and responsive personal portfolio website built with modern web technologies, showcasing projects, skills, and contact information. Designed for performance and scalability.",
    image: assets.myportfolio,
    tags: [
      { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Netlify", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
    ],
    liveLink: "https://portfolio-kusuma.netlify.app/",
    sourceLink: "https://github.com/Nammi-Kusuma/kusuma-portfolio",
    keyFeatures: [
      "🎨 Clean, minimalist UI with Tailwind CSS",
      "⚡ Fast development and build process using Vite",
      "📱 Fully responsive design for mobile and desktop",
      "🔐 Type-safe codebase with TypeScript",
      "🧩 Modular component structure for easy maintenance",
      "☁️ Cloud deployment via Netlify"
    ]
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
    keyFeatures: [
      "🔒 Secure authentication with Passport.js",
      "🏡 Full CRUD for property listings",
      "📱 Fully responsive design for mobile and desktop",
      "⚡ Optimized backend performance using Express.js",
      "🧱 Clean MVC architecture and modular codebase",
      "☁️ Cloud deployment via Render with persistent MongoDB Atlas storage"
    ]
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
    keyFeatures: [
      "🔒 Secure authentication with Passport.js",
      "🏡 Full CRUD for property listings",
      "📱 Fully responsive design for mobile and desktop",
      "⚡ Optimized backend performance using Express.js",
      "🧱 Clean MVC architecture and modular codebase",
      "☁️ Cloud deployment via Render with persistent MongoDB Atlas storage"
    ]
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
    keyFeatures: [
      "🔒 Secure authentication with Passport.js",
      "🏡 Full CRUD for property listings",
      "📱 Fully responsive design for mobile and desktop",
      "⚡ Optimized backend performance using Express.js",
      "🧱 Clean MVC architecture and modular codebase",
      "☁️ Cloud deployment via Render with persistent MongoDB Atlas storage"
    ]
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
              className={`flex flex-col gap-8 items-center ${index % 2 === 0 ? 'custom-row-even' : 'custom-row-odd'}`}
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
                        {tag.image && <img src={tag.image} alt={tag.name} className="w-4 h-4" />}
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
                        {project.keyFeatures.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
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
