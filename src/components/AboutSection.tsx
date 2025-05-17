
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";
import { Button } from "./ui/button";
import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import { Code, Database, Server, Laptop } from "lucide-react";

export function AboutSection() {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimationControls();
  
  useEffect(() => {
    if (hovered) {
      controls.start({
        scale: [1, 1.02, 1],
        transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
      });
    } else {
      controls.stop();
      controls.set({ scale: 1 });
    }
  }, [hovered, controls]);
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
          <h3 className="text-lg md:text-xl font-medium text-primary mb-3">
            <span className="gradient-text">Crafting Digital Experiences with Passion</span>
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
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
              <h3 className="text-xl font-bold">Full Stack Developer</h3>
              <p className="text-base">
                I am a dedicated Full Stack Developer passionate about building user-friendly applications, 
                solving complex problems, and delivering impactful digital experiences through collaboration
                and innovation.
              </p>
              <p className="italic text-sm">
                <a href="#projects" className="text-primary hover:underline">
                  Check out my projects!
                </a>
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Competitive Programmer</h3>
              <p className="text-base">
                I am a passionate Competitive Programmer who loves solving challenging algorithmic
                problems and optimizing solutions. Constantly striving for growth, I enjoy learning and
                contributing to the problem-solving community.
              </p>
              <p className="italic text-sm">
                <a href="#coding-profiles" className="text-primary hover:underline">
                  Check out my profiles!
                </a>
              </p>
            </div>
          </div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="relative w-full max-w-md group cursor-pointer"
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              animate={controls}
            >
              {/* Particle background */}
              <div className="absolute -inset-8 -z-10 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary/40"
                    initial={{
                      x: Math.random() * 100 + "%",
                      y: Math.random() * 100 + "%",
                      scale: Math.random() * 0.5 + 0.5,
                      opacity: 0
                    }}
                    animate={{
                      x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                      y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                      opacity: [0, 0.7, 0],
                    }}
                    transition={{
                      duration: Math.random() * 5 + 10,
                      repeat: Infinity,
                      ease: "linear",
                      delay: Math.random() * 5
                    }}
                  />
                ))}
              </div>
              
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-70 blur-sm rounded-lg transition-opacity duration-700"></div>
              
              {/* Background glow effect */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-3xl rounded-full -z-10"
                animate={{
                  scale: hovered ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  duration: 3,
                  repeat: hovered ? Infinity : 0,
                  repeatType: "reverse",
                }}
              ></motion.div>
              
              {/* Image container with mask */}
              <div className="relative overflow-hidden rounded-lg border border-border/50 bg-card shadow-lg transition-all duration-500 group-hover:shadow-xl">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-transform duration-1500 ease-in-out"></div>
                </div>
                
                {/* Tech stack floating icons */}
                <div className="absolute inset-0 z-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <motion.div 
                    className="absolute top-6 left-6 text-primary/70 drop-shadow-md"
                    animate={{ y: hovered ? [0, -10, 0] : 0, rotate: hovered ? [0, 5, 0] : 0 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Code size={20} />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute bottom-6 left-16 text-primary/70 drop-shadow-md"
                    animate={{ y: hovered ? [0, 10, 0] : 0, rotate: hovered ? [0, -5, 0] : 0 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <Database size={20} />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-1/3 right-8 text-primary/70 drop-shadow-md"
                    animate={{ y: hovered ? [0, -8, 0] : 0, rotate: hovered ? [0, 10, 0] : 0 }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <Server size={20} />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute bottom-12 right-12 text-primary/70 drop-shadow-md"
                    animate={{ y: hovered ? [0, 12, 0] : 0, rotate: hovered ? [0, -8, 0] : 0 }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  >
                    <Laptop size={20} />
                  </motion.div>
                </div>
                
                {/* Main image */}
                <motion.img 
                  src="/lovable-uploads/74a369b3-6ebc-41bc-90dd-d0dcd2437b31.png" 
                  alt="Developer illustration" 
                  className="w-full h-auto z-0 transition-all duration-700"
                  whileHover={{ scale: 1.05 }}
                  initial={{ filter: "grayscale(0.3)" }}
                  whileInView={{ filter: "grayscale(0)" }}
                  viewport={{ once: true }}
                />
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400"></div>
                
                {/* Animated dots in corners */}
                <motion.div 
                  className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100"
                  animate={{ scale: hovered ? [1, 1.5, 1] : 1 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                />
                <motion.div 
                  className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100"
                  animate={{ scale: hovered ? [1, 1.5, 1] : 1 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div 
                  className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100"
                  animate={{ scale: hovered ? [1, 1.5, 1] : 1 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div 
                  className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100"
                  animate={{ scale: hovered ? [1, 1.5, 1] : 1 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                />
              </div>
              
              {/* Caption that appears on hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-b-lg">
                <motion.p 
                  className="text-sm text-center font-medium text-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  Full Stack Developer
                </motion.p>
              </div>
              
              {/* Subtle pulse effect */}
              <motion.div 
                className="absolute inset-0 border-2 border-transparent rounded-lg opacity-0 group-hover:opacity-100"
                animate={{ scale: hovered ? [1, 1.03, 1] : 1, borderColor: ["rgba(var(--primary), 0.2)", "rgba(var(--accent), 0.2)", "rgba(var(--primary), 0.2)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
