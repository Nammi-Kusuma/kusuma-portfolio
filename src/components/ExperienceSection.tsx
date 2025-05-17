
import { Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    logo: "https://cdn-icons-png.flaticon.com/512/13912/13912571.png",
    period: "2021 - Present",
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
    description: [
      "Assisted in developing and testing web applications",
      "Created technical documentation for internal tools",
      "Learned industry best practices and development workflows",
      "Participated in code reviews and team meetings"
    ]
  }
];

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <div className="container mx-auto max-w-5xl">
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
            <div 
              key={index}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary transform md:-translate-x-1/2 z-10"></div>
              
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Empty space for alignment on mobile */}
                <div className="hidden md:block md:w-1/2"></div>
                
                {/* Content */}
                <div 
                  className={`ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} opacity-0 animate-fade-up`}
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/30 bg-card hover:bg-card/80">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-4">
                          <div className="h-14 w-14 rounded-full overflow-hidden border border-border flex-shrink-0">
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <p className="text-accent">{exp.company}</p>
                            <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                          </div>
                        </div>
                        <span className="inline-flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary">
                          <Briefcase className="size-4" />
                        </span>
                      </div>
                      
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                        {exp.description.map((item, idx) => (
                          <li 
                            key={idx} 
                            className="opacity-0 animate-fade-up"
                            style={{ animationDelay: `${(index * 200) + (idx * 100)}ms`, animationFillMode: "forwards" }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
