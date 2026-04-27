"use client";
import { useEffect, useRef } from "react";
import * as motion from "framer-motion/client";
import Link from "next/link";
import Container from "../Container";
import Parallax from "../Parallax";

interface Shooter {
  x: number;
  y: number;
  speed: number;
  length: number;   /* tail length in px — increase for longer trail */
  progress: number;
  lifetime: number;
  delay: number;    /* frames to wait before this one starts */
  color: string;
}

function ShootingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let frame = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* Angle: shallow diagonal — tweak divisor to change steepness */
    const ANGLE = Math.PI / 6;

    /* Reset a shooter back to its start position */
    const reset = (s: Shooter) => {
      s.x = canvas.width * (0.05 + Math.random() * 0.3);
      s.y = canvas.height * (0.05 + Math.random() * 0.25);
      s.progress = 0;
      s.lifetime = Math.round((canvas.width * 1.1) / s.speed);
    };

    /* Two shooters with offset delays so they don't fire at the same time */
    const shooters: Shooter[] = [
      { x: 0, y: 0, speed: 2.5, length: 220, progress: 0, lifetime: 0, delay: 0,   color: "#ff6a00" },
      { x: 0, y: 0, speed: 2,   length: 180, progress: 0, lifetime: 0, delay: 300, color: "#ff3d00" },
    ];
    shooters.forEach(reset);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      shooters.forEach((s) => {
        /* Hold until delay has passed */
        if (frame < s.delay) return;

        const t = s.progress / s.lifetime;

        /* Smooth fade: ease in over first 10%, ease out over last 20% */
        const fadeIn  = Math.min(1, t * 10);
        const fadeOut = t > 0.8 ? Math.max(0, 1 - (t - 0.8) / 0.2) : 1;
        const alpha   = fadeIn * fadeOut;

        const headX = s.x + Math.cos(ANGLE) * s.progress * s.speed;
        const headY = s.y + Math.sin(ANGLE) * s.progress * s.speed;
        const tailX = headX - Math.cos(ANGLE) * s.length;
        const tailY = headY - Math.sin(ANGLE) * s.length;

        /* Gradient trail: transparent at tail → bright at head */
        const grad = ctx.createLinearGradient(tailX, tailY, headX, headY);
        grad.addColorStop(0,   `${s.color}00`);
        grad.addColorStop(0.4, `${s.color}${Math.floor(alpha * 60).toString(16).padStart(2, "0")}`);
        grad.addColorStop(0.8, `${s.color}${Math.floor(alpha * 160).toString(16).padStart(2, "0")}`);
        grad.addColorStop(1,   `#ffffff${Math.floor(alpha * 220).toString(16).padStart(2, "0")}`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.stroke();

        /* Bright white-hot flare at the head with an orange glow ring */
        ctx.beginPath();
        ctx.arc(headX, headY, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha * 0.95})`;
        ctx.fill();

        /* Outer glow ring */
        const flare = ctx.createRadialGradient(headX, headY, 0, headX, headY, 10);
        flare.addColorStop(0,   `rgba(255,160,40,${alpha * 0.6})`);
        flare.addColorStop(1,   `rgba(255,80,0,0)`);
        ctx.beginPath();
        ctx.arc(headX, headY, 10, 0, Math.PI * 2);
        ctx.fillStyle = flare;
        ctx.fill();

        s.progress++;

        /* Loop: reset with a pause between runs — change 480 for longer/shorter gap */
        if (s.progress >= s.lifetime) {
          reset(s);
          s.delay = frame + 480;
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}

/* ─── Shared entry animation ─── */
const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, ease: "easeOut" as const, delay },
});

export default function Hero() {
  return (
    /* Dark background — edit gradient stops to adjust the sky tone */
    <section
      className="relative h-[70vh] overflow-hidden"
      style={{ background: "black" }}
    >
      {/* Shooting stars canvas */}
      <ShootingCanvas />

      {/* Hero content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <Container>

          <Parallax offset={40}>
            <motion.h1
              {...anim(0)}
              className="text-4xl md:text-7xl font-bold text-center leading-tight text-white"
            >
              We Build Modern Websites <br />
              <span className="bg-gradient-to-br from-[cyan] to-blue-500 bg-clip-text text-transparent text-3xl md:text-6xl font-bold">
                 with Amazing Designs
              </span>
            </motion.h1>
          </Parallax>

          <motion.p
            {...anim(0.15)}
            className="mt-6 text-gray-400 text-center max-w-xl mx-auto"
          >
            SwiftCoders helps businesses create powerful digital experiences.
          </motion.p>

          <motion.div {...anim(0.28)} className="mt-10 flex justify-center gap-4">
            <Link href="/contact" className="bg-white backdrop-blur-2xl text-black px-7 py-2 rounded-full transition-colors">
              Connect
            </Link>
            <Link href="/projects" className="backdrop-blur-2xl border border-white/20 text-white px-7 py-2 rounded-full hover:bg-white/10 transition-colors">
              View Work
            </Link>
          </motion.div>

        </Container>
      </div>
    </section>
  );
}
