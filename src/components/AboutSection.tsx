
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading>About Me</SectionHeading>
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl font-medium text-primary mb-3">
            <span className="gradient-text">Crafting Digital Experiences with Passion</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            Dedicated to creating elegant solutions to complex problems through code, creativity, and continuous learning.
            My journey in technology is driven by curiosity and a commitment to excellence.
          </p>
          {/* <h3 className="text-xl md:text-2xl font-medium">
            <span className="text-primary">Full Stack Developer</span> | <span className="text-accent">Competitive Programmer</span>
          </h3> */}
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Full Stack Developer</h3>
              <p className="text-lg">
                I am a dedicated Full Stack Developer passionate about building user-friendly applications, 
                solving complex problems, and delivering impactful digital experiences through collaboration
                and innovation.
              </p>
              <p className="italic">
                <a href="#projects" className="text-primary hover:underline">
                  Check out my projects!
                </a>
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Competitive Programmer</h3>
              <p className="text-lg">
                I am a passionate Competitive Programmer who loves solving challenging algorithmic
                problems and optimizing solutions. Constantly striving for growth, I enjoy learning and
                contributing to the problem-solving community.
              </p>
              <p className="italic">
                <a href="#coding-profiles" className="text-primary hover:underline">
                  Check out my profiles!
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg -z-10"></div>
              <img 
                src="/lovable-uploads/74a369b3-6ebc-41bc-90dd-d0dcd2437b31.png" 
                alt="Developer illustration" 
                className="w-full h-auto animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
