
import { Briefcase, Calendar, Building, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";
import { useState, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { motion, useInView, AnimatePresence } from "framer-motion";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    logo: "https://cdn-icons-png.flaticon.com/512/13912/13912571.png",
    period: "2021 - Present",
    skills: ["React", "Node.js", "TypeScript", "Microservices", "AWS", "Docker", "CI/CD"],
    description: [
      "Lead development of microservices architecture for enterprise clients",
      "Mentored junior developers and implemented code review processes",
      "Reduced application load time by 40% through performance optimizations",
      "Implemented CI/CD pipelines resulting in 70% faster deployment times"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Lab",
    logo: "https://cdn-icons-png.flaticon.com/512/8364/8364546.png",
    period: "2019 - 2021",
    skills: ["React", "Redux", "Node.js", "Express", "MongoDB", "JWT", "Responsive Design"],
    description: [
      "Developed and maintained React-based front-end applications",
      "Built RESTful APIs using Node.js and Express",
      "Implemented authentication and authorization using JWT",
      "Collaborated with UX/UI designers to implement responsive designs"
    ]
  },
  {
    title: "Junior Software Engineer",
    company: "WebTech Systems",
    logo: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    period: "2017 - 2019",
    skills: ["JavaScript", "HTML/CSS", "jQuery", "Jest", "Agile", "Git", "Performance Optimization"],
    description: [
      "Developed features for customer-facing web applications",
      "Fixed bugs and improved application performance",
      "Wrote unit and integration tests using Jest",
      "Participated in agile development processes and sprint planning"
    ]
  },
  {
    title: "Software Development Intern",
    company: "CodeCraft Solutions",
    logo: "https://cdn-icons-png.flaticon.com/512/9178/9178608.png",
    period: "2016 - 2017",
    skills: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Documentation", "Testing"],
    description: [
      "Assisted in developing and testing web applications",
      "Created technical documentation for internal tools",
      "Learned industry best practices and development workflows",
      "Participated in code reviews and team meetings"
    ]
  }
];

export function ExperienceSection() {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <SectionWrapper id="experience">
      <div className="container mx-auto max-w-5xl" ref={sectionRef}>
        <SectionHeading>Experience</SectionHeading>
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl font-medium text-primary mb-3">
            <span className="gradient-text">Professional Journey & Growth</span>
          </h3>
          <p className="text-muted-foreground">
            A timeline of my career progression, highlighting key roles, responsibilities, and achievements 
            that have shaped my expertise and professional development in the tech industry.
          </p>
        </motion.div>
        
        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/60 transform md:-translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <motion.div 
                className={`absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary transform md:-translate-x-1/2 z-10 cursor-pointer ${expandedExp === index ? 'ring-4 ring-primary/30' : ''}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => setExpandedExp(expandedExp === index ? null : index)}
              >
                {expandedExp === index && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    initial={{ opacity: 0.7, scale: 1 }}
                    animate={{ opacity: 0, scale: 2 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.div>
              
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Empty space for alignment on mobile */}
                <div className="hidden md:block md:w-1/2"></div>
                
                {/* Content */}
                <motion.div 
                  className={`ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : (index % 2 === 0 ? -20 : 20) }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  <Card 
                    className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/30 bg-card hover:bg-card/80 ${expandedExp === index ? 'shadow-lg -translate-y-1 border-primary/30' : ''}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className="h-14 w-14 rounded-full overflow-hidden border border-border flex-shrink-0"
                            whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                          >
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`} 
                              className="h-full w-full object-cover"
                            />
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                            <div className="flex items-center gap-1 mb-1">
                              <Building className="h-3.5 w-3.5 text-primary/70" />
                              <p className="text-accent">{exp.company}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5 text-primary/70" />
                              <p className="text-sm text-muted-foreground">{exp.period}</p>
                            </div>
                          </div>
                        </div>
                        <motion.span 
                          className="inline-flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary"
                          whileHover={{ scale: 1.1, backgroundColor: 'hsla(var(--primary) / 0.15)' }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Briefcase className="size-4" />
                        </motion.span>
                      </div>
                      
                      {/* Skills */}
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {exp.skills.map((skill, skillIdx) => (
                          <motion.span 
                            key={skillIdx} 
                            className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 + (skillIdx * 0.05) }}
                            whileHover={{ scale: 1.05, backgroundColor: 'hsla(var(--primary) / 0.2)' }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                      
                      {/* Description */}
                      <div className="mt-3">
                        <h4 className="text-sm font-medium mb-3 flex items-center gap-1.5">
                          <Star className="h-4 w-4 text-primary" />
                          <span>Key Responsibilities & Achievements</span>
                        </h4>
                        
                        <ul className="space-y-2">
                          {exp.description.map((item, idx) => (
                            <motion.li 
                              key={idx} 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <Star className="h-3.5 w-3.5 text-primary mt-1 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
