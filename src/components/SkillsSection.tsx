
import { useState, useRef, useEffect } from "react";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";
import { Code2, Database, Globe, Layout, Server, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { motion, useAnimation } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// Skill data with images
const skillCategories = [
  {
    name: "Frontend",
    icon: Layout,
    skills: [
      { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "Redux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Django", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring Boot", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "GraphQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    ],
  },
  {
    name: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
  },
  {
    name: "DevOps",
    icon: Settings,
    skills: [
      { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "CI/CD", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Azure", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ],
  },
  {
    name: "Programming",
    icon: Code2,
    skills: [
      { name: "Data Structures", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Algorithms", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Problem Solving", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "System Design", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
  },
  {
    name: "Others",
    icon: Globe,
    skills: [
      { name: "Jest", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
      { name: "Cypress", image: "https://asset.brandfetch.io/idFdo8ulhr/idzj3BeQnk.png" },
      { name: "RESTful APIs", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "WebSockets", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
      { name: "Agile", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    ],
  },
];

export function SkillsSection() {
  // Animation control
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Intersection observer to trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Select 6 skills for the orbital cards
  const orbitalSkills = [
    { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ];

  // Center card content
  const centerSkill = {
    name: "Full Stack",
    description: "Development",
    icon: Code2,
  };

  // Animation variants for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-secondary/5 to-background py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeading>Skills</SectionHeading>
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl font-medium text-primary mb-3">
            <span className="gradient-text">Mastering the Digital Toolkit</span>
          </h3>
          <p className="text-muted-foreground">
            My technical expertise spans across multiple domains, from frontend and backend development 
            to databases, DevOps, and beyond. These are the tools and technologies I use to build 
            robust, scalable, and innovative solutions.  
          </p>
        </motion.div>
        
        {/* Orbital Skills Layout
        <div ref={containerRef} className="relative w-full max-w-[700px] lg:max-w-[650px] mx-auto aspect-square">
          <motion.div 
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isVisible ? 1 : 0,
              rotate: isVisible ? 360 : 0 
            }}
            transition={{ 
              opacity: { duration: 1 },
              rotate: { 
                duration: 80, 
                ease: "linear", 
                repeat: Infinity,
                repeatType: "loop",
                delay: 1 // Start rotation after initial reveal
              }
            }}
          >
            Orbital Cards
            {orbitalSkills.map((skill, index) => {
              // Calculate position based on index (0-5)
              // 0: top, 1: top-right, 2: right, 3: bottom-right, 4: bottom, 5: left
              const angle = (index * (Math.PI / 3)) - (Math.PI / 2); // Start from top, go clockwise
              const radius = 32; // % of container size - reduced to 32
              
              // Calculate position as percentage
              const left = 50 + radius * Math.cos(angle);
              const top = 50 + radius * Math.sin(angle);
              
              return (
                <motion.div
                  key={skill.name}
                  className="absolute w-[100px] h-[100px] md:w-[130px] md:h-[130px]"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ opacity: 0, scale: 0.1 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.1,
                    y: isVisible ? 0 : 50
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: isVisible ? 0.3 + (0.15 * index) : 0,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  Counter-rotate to keep content upright
                  <motion.div
                    className="w-full h-full"
                    animate={{ rotate: -360 }}
                    transition={{ 
                      duration: 80, 
                      ease: "linear", 
                      repeat: Infinity,
                      repeatType: "loop" 
                    }}
                  >
                    <Card className="w-full h-full rounded-full overflow-hidden border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 shadow-md hover:shadow-lg">
                      <motion.div 
                        className="w-full h-full flex flex-col items-center justify-center p-4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="relative w-12 h-12 mb-2 flex items-center justify-center">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                          <img 
                            src={skill.image} 
                            alt={skill.name}
                            className="h-10 w-10 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110" 
                          />
                        </div>
                        <span className="text-center text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div> */}

          {/* Center Card */}
          {/* <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <motion.div 
              className="pointer-events-auto w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[180px] lg:h-[180px]"
              initial={{ opacity: 0, scale: 0.1, rotateY: 180 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                scale: isVisible ? 1 : 0.1,
                rotateY: isVisible ? 0 : 180
              }}
              transition={{ 
                duration: 1.2, 
                delay: isVisible ? 0.2 : 0,
                type: "spring",
                stiffness: 70
              }}
            >
              <Card className="w-full h-full rounded-full overflow-hidden border-border/40 bg-card/70 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                    <centerSkill.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold leading-tight">{centerSkill.name}</h3>
                  <p className="text-xs text-muted-foreground">{centerSkill.description}</p>
                </div>
              </Card>
            </motion.div>
          </div> */}
        {/* </div> */}

        {/* Skills Categories */}
        <div className="mt-32">
          <motion.h3 
            className="text-2xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
          </motion.h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => {
              // Create a separate ref for each card
              const cardRef = useRef<HTMLDivElement>(null);
              const [isCardVisible, setIsCardVisible] = useState(false);
              
              // Individual intersection observer for each card
              useEffect(() => {
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      setIsCardVisible(true);
                      observer.unobserve(entry.target);
                    }
                  },
                  { threshold: 0.2, rootMargin: "0px 0px -100px 0px" } // Trigger when card is 100px into viewport
                );
                
                if (cardRef.current) {
                  observer.observe(cardRef.current);
                }
                
                return () => {
                  if (cardRef.current) {
                    observer.unobserve(cardRef.current);
                  }
                };
              }, []);
              
              return (
                <motion.div
                  ref={cardRef}
                  key={category.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: isCardVisible ? 1 : 0, 
                    y: isCardVisible ? 0 : 50 
                  }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.2,
                    type: "spring",
                    stiffness: 50
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                <Card className="h-full overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 shadow-md">
                  <CardHeader className="bg-secondary/10 border-b border-border/30">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold">{category.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.5, x: -10 }}
                          animate={{ 
                            opacity: isCardVisible ? 1 : 0, 
                            scale: isCardVisible ? 1 : 0.5,
                            x: isCardVisible ? 0 : -10
                          }}
                          transition={{ 
                            duration: 0.4, 
                            delay: isCardVisible ? 0.3 + (skillIndex * 0.03) : 0,
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{ scale: 1.05 }}
                          className="group"
                        >
                          <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-transparent bg-card/30 hover:border-primary/20 hover:bg-card/50 transition-all duration-300">
                            <img 
                              src={skill.image} 
                              alt={skill.name}
                              className="h-5 w-5 object-contain" 
                            />
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-primary">{skill.name}</span>
                          </div>
                        </motion.div>
                      ))}

                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
