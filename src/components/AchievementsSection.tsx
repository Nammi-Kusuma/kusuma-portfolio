
import { Trophy, Star, Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "International Coding Competition Finalist",
    organization: "Google Code Jam",
    year: "2022",
    description: "Ranked in the top 100 out of 50,000+ participants worldwide",
    icon: Trophy
  },
  {
    title: "Best Web Application Award",
    organization: "Web Dev Summit",
    year: "2021",
    description: "Recognized for developing an innovative accessibility tool",
    icon: Award
  },
  {
    title: "Open Source Contributor",
    organization: "React Ecosystem",
    year: "2019 - Present",
    description: "Active contributor with 50+ merged PRs across popular libraries",
    icon: Star
  },
  {
    title: "Hackathon Winner",
    organization: "TechCrunch Disrupt",
    year: "2020",
    description: "First place for developing a real-time language translation app",
    icon: Trophy
  },
  {
    title: "Technical Blog Author",
    organization: "Dev.to & Medium",
    year: "2018 - Present",
    description: "Articles with 500,000+ total views on web development topics",
    icon: Award
  }
];

export function AchievementsSection() {
  return (
    <SectionWrapper id="achievements" className="bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading>Achievements</SectionHeading>
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl font-medium text-primary mb-3">
            <span className="gradient-text">Milestones & Recognition</span>
          </h3>
          <p className="text-muted-foreground">
            Highlights of my professional journey, showcasing awards, competitions, and contributions 
            that reflect my commitment to excellence and innovation in the tech community.
          </p>
        </motion.div>
        
        <div className="mt-10">
          <div className="grid gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`opacity-0 animate-fade-up`}
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-border hover:border-primary/20">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <CardContent className="p-0">
                    <div className="flex relative">
                      <div className="w-20 md:w-28 bg-primary/10 flex items-center justify-center py-6">
                        <achievement.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                      </div>
                      <div className="flex-1 p-5">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <h3 className="font-bold text-xl">{achievement.title}</h3>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1 md:mt-0">
                            <span className="text-accent">{achievement.organization}</span>
                            <span>•</span>
                            <span>{achievement.year}</span>
                          </div>
                        </div>
                        <p className="mt-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
