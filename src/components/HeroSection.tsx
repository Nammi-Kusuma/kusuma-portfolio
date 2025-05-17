import { ArrowDown, Code, Database, Server, Laptop, Smartphone, Globe, Braces, Cpu } from "lucide-react";
import { TypedText } from "./TypedText";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pb-16 px-4 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0"></div>
      
      {/* Geometric elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl opacity-20"></div>
      
      {/* Tech icons with random placement and subtle movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { Icon: Code, size: 40, color: "text-primary/20", top: "23%", left: "12%" },
          { Icon: Database, size: 36, color: "text-cyan-400/20", top: "67%", left: "8%" },
          { Icon: Server, size: 38, color: "text-indigo-400/20", top: "35%", left: "78%" },
          { Icon: Laptop, size: 42, color: "text-violet-400/20", top: "82%", left: "73%" },
          { Icon: Smartphone, size: 34, color: "text-blue-400/20", top: "15%", left: "85%" },
          { Icon: Globe, size: 44, color: "text-teal-400/20", top: "75%", left: "32%" },
          { Icon: Braces, size: 32, color: "text-purple-400/20", top: "42%", left: "22%" },
          { Icon: Cpu, size: 30, color: "text-amber-400/20", top: "58%", left: "88%" },
          { Icon: Code, size: 28, color: "text-green-400/20", top: "88%", left: "17%" },
          { Icon: Database, size: 26, color: "text-pink-400/20", top: "32%", left: "92%" },
          { Icon: Server, size: 36, color: "text-blue-500/20", top: "12%", left: "42%" },
          { Icon: Laptop, size: 32, color: "text-indigo-500/20", top: "62%", left: "52%" },
          { Icon: Braces, size: 30, color: "text-violet-500/20", top: "8%", left: "68%" },
          { Icon: Cpu, size: 28, color: "text-cyan-500/20", top: "48%", left: "5%" },
          { Icon: Globe, size: 34, color: "text-teal-500/20", top: "28%", left: "58%" },
        ].map((icon, i) => (
          <motion.div 
            key={i}
            className={`absolute ${icon.color}`}
            style={{
              top: icon.top,
              left: icon.left,
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.6,
              y: [Math.random() > 0.5 ? -5 : 5, Math.random() > 0.5 ? 5 : -5, Math.random() > 0.5 ? -5 : 5],
              rotate: [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]
            }}
            transition={{ 
              opacity: { duration: 1 },
              y: { duration: 3 + Math.random() * 3, repeat: Infinity },
              rotate: { duration: 4 + Math.random() * 3, repeat: Infinity },
              delay: i * 0.1
            }}
          >
            <icon.Icon size={icon.size} />
          </motion.div>
        ))}
      </div>
      
      <div className="container relative z-10 space-y-6 max-w-4xl">
        <div className="flex justify-center mb-8">
          <div className="h-20 w-20 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center animate-pulse">
            <div className="h-16 w-16 rounded-full bg-background flex items-center justify-center">
              <span className="text-3xl font-semibold">NK</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="gradient-text">Nammi Kusuma</span>
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Full Stack Developer | Competitive Programmer
          </motion.h2>
        </div>

        <div className="h-16 animate-fade-up animation-delay-500 flex justify-center items-center">
          <TypedText
            phrases={[
              "Building scalable web applications",
              "Solving complex problems daily",
              "Creating elegant user experiences",
              "Optimizing algorithms and performance",
            ]}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-up animation-delay-1000">
          <Button variant="default" size="lg" asChild className="rounded-full px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 hover:shadow-lg transition-all duration-300">
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" size="lg" asChild className="rounded-full px-8 hover:bg-primary/10 border-primary/50">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        
        <div className="flex justify-center mt-12 pt-20">
          <div className="animate-bounce-subtle">
            <a href="#about" className="flex flex-col items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <span>Scroll Down</span>
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}