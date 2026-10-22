
import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 55;
const MAX_DPR = 2;

const Particles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    let animationId;
    let particles = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let lastFrame = 0;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const createParticle = (randomY = false) => ({
      x: Math.random() * width,
      y: randomY ? Math.random() * height : height + Math.random() * 50,
      radius: Math.random() * 2 + 0.5,
      speedY: Math.random() * 0.45 + 0.15,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.15,
      phase: Math.random() * Math.PI * 2,
    });

    const resizeCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = Array.from(
        { length: PARTICLE_COUNT },
        () => createParticle(true)
      );

      if (reducedMotion) drawParticles();
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw all particles with a single shared glow style.
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgba(37, 99, 235, 0.4)";

      particles.forEach((particle) => {
        const p = particle;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(20, 92, 190, ${p.opacity})`;
        ctx.fill();
      });

      ctx.shadowBlur = 0;
    };

    const animate = (timestamp = 0) => {
      if (timestamp - lastFrame < 16) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      lastFrame = timestamp;

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX + Math.sin(p.phase) * 0.15;
        p.phase += 0.01;

        if (p.y < -10) Object.assign(p, createParticle());

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
      });

      drawParticles();
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();

    if (!reducedMotion) {
      animationId = requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      ctx.clearRect(0, 0, width, height);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[5]"
    />
  );
};

export default Particles;
