import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

gsap.registerPlugin(ScrollTrigger);

export const ParallaxBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRow1Ref = useRef<HTMLDivElement>(null);
  const textRow2Ref = useRef<HTMLDivElement>(null);
  const bgGlow1Ref = useRef<HTMLDivElement>(null);
  const bgGlow2Ref = useRef<HTMLDivElement>(null);
  const floatingCard1Ref = useRef<HTMLDivElement>(null);
  const floatingCard2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text Parallax: Two opposing horizontal text stream ribbons tied to scroll
      if (textRow1Ref.current && textRow2Ref.current) {
        gsap.to(textRow1Ref.current, {
          xPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });

        gsap.to(textRow2Ref.current, {
          xPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }

      // 2. Background Parallax: Glowing volumetric spheres shifting vertically with depth
      if (bgGlow1Ref.current && bgGlow2Ref.current) {
        gsap.to(bgGlow1Ref.current, {
          yPercent: 40,
          scale: 1.2,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.8,
          },
        });

        gsap.to(bgGlow2Ref.current, {
          yPercent: -50,
          scale: 0.9,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
        });
      }

      // 3. Foreground Floating Cards Parallax: Vertical offset against background scroll
      if (floatingCard1Ref.current) {
        gsap.to(floatingCard1Ref.current, {
          yPercent: -40,
          rotate: -1.5,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      if (floatingCard2Ref.current) {
        gsap.to(floatingCard2Ref.current, {
          yPercent: 32,
          rotate: 1.5,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.4,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const marqueeText1 = "JAVA SPRING BOOT · KOTLIN · NEXT.JS · PYTHON · KUBERNETES · APACHE KAFKA · FASTAPI · BULLMQ · REDIS · DOCKER · .NET · POSTGRESQL · ";
  const marqueeText2 = "IDEAS INTO IMPACT · HIGH CONCURRENCY · AUTONOMOUS AI AGENTS · DISTRIBUTED ARCHITECTURE · EVENT-DRIVEN SCALE · ZERO TECHNICAL DEBT · ";

  return (
    <div
      ref={containerRef}
      className="relative py-28 md:py-36 overflow-hidden bg-slate-100/70 border-t border-b border-slate-200 select-none"
    >
      {/* Background Parallax Light Color Washes */}
      <div
        ref={bgGlow1Ref}
        className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-300/40 via-cyan-200/30 to-transparent blur-[140px] pointer-events-none -z-10"
      />
      <div
        ref={bgGlow2Ref}
        className="absolute bottom-10 right-1/4 w-[550px] h-[550px] rounded-full bg-gradient-to-tl from-cyan-300/40 via-blue-200/30 to-transparent blur-[150px] pointer-events-none -z-10"
      />

      {/* Subtle tech dot overlay */}
      <div className="absolute inset-0 tech-dot-pattern opacity-60 pointer-events-none -z-10" />

      {/* Row 1 Text Parallax (Large gradient typography moving left) */}
      <div className="overflow-hidden whitespace-nowrap mb-6">
        <div
          ref={textRow1Ref}
          className="inline-block will-change-transform text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-blue-600/80 to-cyan-600 opacity-70"
        >
          <span>{marqueeText1}</span>
          <span>{marqueeText1}</span>
        </div>
      </div>

      {/* Row 2 Text Parallax (Opposing direction moving right) */}
      <div className="overflow-hidden whitespace-nowrap mb-12">
        <div
          ref={textRow2Ref}
          className="inline-block will-change-transform text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight text-slate-200/90 transition-colors"
          style={{ WebkitTextStroke: '1.5px rgba(2, 132, 199, 0.35)' }}
        >
          <span>{marqueeText2}</span>
          <span>{marqueeText2}</span>
        </div>
      </div>

      {/* Foreground Floating Cards with Differential Vertical Parallax */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Parallax Card 1 (Accelerates upwards) */}
          <div ref={floatingCard1Ref} className="will-change-transform">
            <Card className="p-6 sm:p-7 bg-white/95 border-slate-200/90 backdrop-blur-xl shadow-xl shadow-slate-300/40 relative glow-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                  <span className="text-xs font-mono font-semibold text-blue-600 uppercase tracking-widest">
                    Real-Time Pipeline
                  </span>
                </div>
                <Badge variant="tech" className="text-[10px] font-mono">
                  PARALLAX SYNC
                </Badge>
              </div>

              <h4 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-2">
                Distributed Concurrency & Event Orchestration
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans mb-4">
                Apache Kafka topic partitions synchronized with Redis in-memory deduplication and BullMQ delayed job processing, ensuring zero lost frames during massive user surges.
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-mono text-slate-500">
                <span className="text-blue-700 font-semibold">Spring Boot + Kafka</span>
                <span className="text-emerald-700 font-bold">15,200 TPS peak</span>
              </div>
            </Card>
          </div>

          {/* Parallax Card 2 (Drifts downwards at alternate rate) */}
          <div ref={floatingCard2Ref} className="will-change-transform">
            <Card className="p-6 sm:p-7 bg-white/95 border-slate-200/90 backdrop-blur-xl shadow-xl shadow-slate-300/40 relative glow-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono font-semibold text-emerald-700 uppercase tracking-widest">
                    Autonomous Intelligence
                  </span>
                </div>
                <Badge variant="success" className="text-[10px] font-mono">
                  READY
                </Badge>
              </div>

              <h4 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-2">
                Multi-Agent Reasoning & Custom RAG
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans mb-4">
                Specialized Python FastAPI agents execute deterministic verification gates over private knowledge bases, eliminating hallucination risks in high-stakes enterprise decisions.
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-mono text-slate-500">
                <span className="text-emerald-700 font-semibold">FastAPI + BullMQ</span>
                <span className="text-blue-700 font-bold">82% cycle reduction</span>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};
