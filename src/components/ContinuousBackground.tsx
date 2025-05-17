import { useRef, useEffect } from "react";
import { useTheme } from "next-themes";

export function ContinuousBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas dimensions to match viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2; // Make it taller than viewport to ensure coverage
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    // Liquid blob properties
    const blobs: {
      x: number;
      y: number;
      radius: number;
      xSpeed: number;
      ySpeed: number;
      color: string;
      phase: number;
      amplitude: number;
      frequency: number;
    }[] = [];
    
    // Create blobs
    const createBlobs = () => {
      blobs.length = 0;
      const blobCount = Math.min(12, Math.max(5, Math.floor(canvas.width / 250)));
      
      const isDark = resolvedTheme === "dark";
      
      // Color palette based on theme - using much more vibrant colors for dark theme
      const colors = isDark 
        ? [
            "rgba(56, 189, 248, 0.35)",  // cyan
            "rgba(99, 102, 241, 0.35)",  // indigo
            "rgba(217, 70, 239, 0.35)",  // fuchsia
            "rgba(236, 72, 153, 0.35)",  // pink
            "rgba(16, 185, 129, 0.35)",  // emerald
            "rgba(245, 158, 11, 0.35)",  // amber
            "rgba(37, 99, 235, 0.35)",   // blue
          ]
        : [
            "rgba(56, 189, 248, 0.12)",  // cyan
            "rgba(99, 102, 241, 0.12)",  // indigo
            "rgba(217, 70, 239, 0.12)",  // fuchsia
            "rgba(236, 72, 153, 0.12)",  // pink
            "rgba(16, 185, 129, 0.12)",  // emerald
            "rgba(245, 158, 11, 0.12)",  // amber
            "rgba(37, 99, 235, 0.12)",   // blue
          ];
      
      // Distribute blobs across the entire canvas height
      for (let i = 0; i < blobCount; i++) {
        const radius = Math.random() * (canvas.width / 4) + (canvas.width / 8);
        const yPosition = (i / blobCount) * canvas.height * 1.2; // Distribute evenly with some overlap
        
        blobs.push({
          x: Math.random() * canvas.width,
          y: yPosition,
          radius: radius,
          xSpeed: (Math.random() - 0.5) * 0.2,
          ySpeed: (Math.random() - 0.5) * 0.05, // Very slow vertical movement
          color: colors[Math.floor(Math.random() * colors.length)],
          phase: Math.random() * Math.PI * 2,
          amplitude: 0.2 + Math.random() * 0.3,
          frequency: 0.1 + Math.random() * 0.2
        });
      }
    };
    
    createBlobs();
    window.addEventListener("resize", createBlobs);
    
    // Animation loop
    let animationFrameId: number;
    let time = 0;
    
    const render = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;
      
      // Update and draw blobs
      blobs.forEach(blob => {
        // Update position
        blob.x += blob.xSpeed;
        blob.y += blob.ySpeed;
        
        // Wrap around horizontally
        if (blob.x < -blob.radius) blob.x = canvas.width + blob.radius;
        if (blob.x > canvas.width + blob.radius) blob.x = -blob.radius;
        
        // Wrap around vertically with a much larger range
        if (blob.y < -blob.radius) blob.y = canvas.height + blob.radius;
        if (blob.y > canvas.height + blob.radius) blob.y = -blob.radius;
        
        // Draw blob with oscillating radius
        ctx.save();
        ctx.translate(blob.x, blob.y);
        
        // Create gradient
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, blob.radius);
        
        // Extract the color components and create new rgba strings
        const colorMatch = blob.color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
        if (colorMatch) {
          const [_, r, g, b, a] = colorMatch;
          // For dark theme, make the center even more vibrant
          const opacityMultiplier = resolvedTheme === "dark" ? 3 : 2;
          const innerColor = `rgba(${r}, ${g}, ${b}, ${Math.min(1, parseFloat(a) * opacityMultiplier)})`;  // More opaque at center
          const outerColor = `rgba(${r}, ${g}, ${b}, 0)`; // Transparent at edges
          
          gradient.addColorStop(0, innerColor);
          gradient.addColorStop(1, outerColor);
        } else {
          // Fallback if regex fails
          gradient.addColorStop(0, blob.color);
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        }
        
        // Draw liquid blob with oscillating edges
        ctx.beginPath();
        const points = 12; // Number of points to create the blob
        
        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2;
          const oscillation = Math.sin(angle * 3 + time + blob.phase) * blob.amplitude + 1;
          const x = Math.cos(angle) * blob.radius * oscillation;
          const y = Math.sin(angle) * blob.radius * oscillation;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.closePath();
        ctx.fillStyle = gradient;
        // Use different blend modes for light and dark themes
        ctx.globalCompositeOperation = resolvedTheme === "dark" ? "screen" : "screen";
        ctx.fill();
        ctx.restore();
      });
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("resize", createBlobs);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1
      }}
    />
  );
}
