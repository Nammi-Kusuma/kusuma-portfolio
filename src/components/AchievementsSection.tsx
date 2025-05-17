
import { Trophy, Star, Award, Medal, ExternalLink, Calendar, Building } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";
import { Card, CardContent } from "./ui/card";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [expandedAchievement, setExpandedAchievement] = useState<number | null>(null);
  
  return (
    <SectionWrapper id="achievements" className="relative overflow-hidden">
      {/* Background decoration removed */}
      
      <div className="container mx-auto max-w-4xl" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading>Achievements</SectionHeading>
        </motion.div>
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
            {achievements.map((achievement, index) => {
              const isExpanded = expandedAchievement === index;
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: isInView ? 1 : 0, 
                    y: isInView ? 0 : 50,
                    height: isExpanded ? 'auto' : undefined
                  }}
                  transition={{ 
                    opacity: { duration: 0.6, delay: 0.1 * index },
                    y: { duration: 0.6, delay: 0.1 * index },
                    height: { duration: 0.3 }
                  }}
                  layout
                >
                  <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-border hover:border-primary/20 relative">
                    {/* Animated accent line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    
                    <CardContent className="p-0">
                      <div className="flex relative">
                        <div className="w-20 md:w-28 bg-primary/10 flex flex-col items-center justify-center py-6 relative overflow-hidden">
                          {/* Icon with animated background */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <motion.div
                            whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <achievement.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                          </motion.div>
                          
                          {/* Year badge */}
                          <div className="mt-2 px-2 py-1 rounded-full bg-background/80 border border-border/50 text-xs font-medium flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-primary" />
                            <span>{achievement.year.split(' - ')[0]}</span>
                          </div>
                        </div>
                        
                        <div className="flex-1 p-5">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex items-center gap-2">
                              <h3 className="font-bold text-xl">{achievement.title}</h3>
                              <Badge variant="outline" className="hidden md:flex bg-primary/5 text-xs">
                                {achievement.organization}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1 md:mt-0">
                              <Building className="h-3 w-3" />
                              <span className="md:hidden">{achievement.organization}</span>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="h-6 px-2 text-xs gap-1"
                                onClick={() => setExpandedAchievement(isExpanded ? null : index)}
                              >
                                {isExpanded ? 'Less' : 'More'}
                                <motion.div
                                  animate={{ rotate: isExpanded ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ExternalLink className="h-3 w-3" />
                                </motion.div>
                              </Button>
                            </div>
                          </div>
                          
                          <p className="mt-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {achievement.description}
                          </p>
                          
                          {/* Expanded content */}
                          {isExpanded && (
                            <motion.div 
                              className="mt-4 pt-4 border-t border-border/50"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                                <Medal className="h-4 w-4 text-primary" />
                                Key Highlights
                              </h4>
                              <ul className="text-sm text-muted-foreground space-y-2">
                                <li className="flex items-start gap-2">
                                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-xs font-medium text-primary">1</span>
                                  </div>
                                  <span>Competed against 50,000+ developers worldwide</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-xs font-medium text-primary">2</span>
                                  </div>
                                  <span>Solved complex algorithmic challenges under time pressure</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-xs font-medium text-primary">3</span>
                                  </div>
                                  <span>Recognized for efficient solutions and innovative approaches</span>
                                </li>
                              </ul>
                            </motion.div>
                          )}
                        </div>
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
