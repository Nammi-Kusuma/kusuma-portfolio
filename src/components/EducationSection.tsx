
import { GraduationCap, Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const educations = [
  {
    degree: "Computer Sceince and Engineering",
    institution: "Vignan's Institute of Information Technology",
    year: "2022 - 2026",
    description: "Focused on Advanced Algorithms and Machine Learning",
    achievements: "CGPA: 9.1"
  },
  {
    degree: "Online Specializations",
    institution: "Various Platforms",
    year: "Ongoing",
    description: "Continuous learning through courses on platforms like Coursera, edX, and Udemy",
    achievements: "20+ Certifications in various technologies"
  }
];

export function EducationSection() {
  return (
    <SectionWrapper id="education" className="bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading>Education</SectionHeading>
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl font-medium text-primary mb-3">
            <span className="gradient-text">Foundation of Knowledge</span>
          </h3>
          <p className="text-muted-foreground">
            My academic journey and commitment to lifelong learning have provided me with a strong foundation 
            in computer science principles and cutting-edge technologies, enabling me to tackle complex challenges 
            with confidence and expertise.
          </p>
        </motion.div>
        
        <div className="grid gap-8 mt-10">
          {educations.map((education, index) => (
            <Card 
              key={index}
              className="opacity-0 animate-fade-up hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border hover:border-primary/40 hover:bg-card/80 group"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: "forwards" }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 animate-pulse">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl">{education.degree}</h3>
                    <p className="text-accent text-lg mt-1">{education.institution}</p>
                    <p className="text-muted-foreground text-sm mt-1">{education.year}</p>
                    <p className="mt-3">{education.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                      <Award className="h-4 w-4" />
                      <span>{education.achievements}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
