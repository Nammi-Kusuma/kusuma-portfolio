
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 py-10 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6">
            <a href="#home" className="text-2xl font-bold gradient-text">
              Portfolio
            </a>
          </div>
          
          <div className="flex gap-4 mb-6">
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:john.doe@example.com"
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
            <p className="mt-1">Designed and built with ❤️ using React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
