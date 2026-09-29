import React, { useEffect, useRef } from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { 
  ArrowRight, 
  Terminal, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Zap
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { TechLogo } from './TechLogo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onOpenConsultation: () => void;
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExplorePortfolio }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const secondaryGlowRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(glowRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
      })
      .from('.hero-kicker', {
        opacity: 0,
        y: -15,
        duration: 0.6,
      }, '-=1.2')
      .from(headlineRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.9,
      }, '-=0.4')
      .from(paragraphRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
      }, '-=0.5')
      .from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, '-=0.4')
      .from('.hero-stat-item', {
        opacity: 0,
        y: 15,
        stagger: 0.1,
        duration: 0.6,
      }, '-=0.3')
      .from(terminalRef.current, {
        opacity: 0,
        x: 40,
        scale: 0.96,
        duration: 1,
      }, '-=0.8');

      // 2. Continuous floating animation on terminal
      gsap.to(terminalRef.current, {
        y: -8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // 3. Staggered node pulse in terminal
      gsap.to('.terminal-node', {
        borderColor: 'rgba(2, 132, 199, 0.45)',
        stagger: {
          each: 0.8,
          repeat: -1,
          yoyo: true,
        },
        duration: 1.2,
        ease: 'power1.inOut',
      });

      // 4. Background Parallax: The glow lights drift downwards at different speeds
      if (glowRef.current && secondaryGlowRef.current) {
        gsap.to(glowRef.current, {
          yPercent: 40,
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        });

        gsap.to(secondaryGlowRef.current, {
          yPercent: -30,
          scale: 0.9,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
          },
        });
      }

      // 5. Text Parallax & Terminal Depth Parallax on Scroll
      if (textContentRef.current && terminalRef.current) {
        gsap.to(textContentRef.current, {
          yPercent: 18,
          opacity: 0.9,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });

        gsap.to(terminalRef.current, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const verifiedStats = [
    { label: "Production Deployments", value: "45+" },
    { label: "Architecture SLA & Uptime", value: "99.99%" },
    { label: "Core Enterprise Technologies", value: "15+" },
    { label: "Client Retainers & SLA", value: "100%" }
  ];

  const primaryStackTicker = [
    "Java Spring Boot",
    "Kotlin",
    "Next.js",
    "NestJS",
    "Python",
    "FastAPI",
    "Kubernetes",
    "Apache Kafka",
    "BullMQ",
    "Redis",
    "PostgreSQL",
    ".NET",
    "Docker"
  ];

  return (
    <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid-pattern bg-[#F8FAFC]">
      {/* Background Parallax Soft Color Wash */}
      <div
        ref={glowRef}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-gradient-to-tr from-blue-200/50 via-cyan-100/40 to-transparent blur-[140px] pointer-events-none -z-10 will-change-transform"
      />
      <div
        ref={secondaryGlowRef}
        className="absolute top-12 right-12 w-96 h-96 bg-cyan-200/40 blur-[150px] pointer-events-none -z-10 will-change-transform"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition, Headline & CTAs */}
          <div ref={textContentRef} className="lg:col-span-7 flex flex-col items-start text-left will-change-transform">
            {/* Editorial Kicker */}
            <div className="hero-kicker flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Anemosoft Enterprise Engineering</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="text-slate-500">Ideas Into Impact</span>
            </div>

            {/* Primary Headline with distinctive Syne typography */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-[62px] font-display font-extrabold text-slate-900 tracking-tight leading-[1.06] mb-6 [text-wrap:balance]"
            >
              Custom Software, Modern Web & <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 bg-clip-text text-transparent">AI Agents</span> Engineered for Scale
            </h1>

            {/* Motivated Quote / Value Proposition */}
            <div
              ref={paragraphRef}
              className="relative pl-5 py-2 mb-8 border-l-2 border-blue-500 max-w-2xl"
            >
              <p className="text-xl sm:text-2xl text-slate-800 font-normal leading-relaxed pt-serif-regular-italic">
                “The future isn’t merely imagined—it is engineered line by line. We bridge the distance between bold vision and flawless execution, forging resilient software, intelligent agents, and scalable systems that transform human ambition into unstoppable real-world impact.”
              </p>
              <div className="mt-2.5 flex items-center gap-2 text-xs font-semibold text-blue-600 not-italic uppercase tracking-wider font-display">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Anemosoft Engineering Creed · Ideas Into Impact</span>
              </div>
            </div>

            {/* Action Buttons using shadcn components */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <Button
                onClick={onOpenConsultation}
                size="lg"
                className="w-full sm:w-auto gap-2.5 text-sm font-bold shadow-lg shadow-blue-500/25"
              >
                <span>Schedule Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                onClick={onExplorePortfolio}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-sm font-semibold"
              >
                <span>Explore Portfolio</span>
              </Button>
            </div>

            {/* Claim-to-Proof Adjacency: Quantitative Metrics */}
            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-200 w-full">
              {verifiedStats.map((stat, idx) => (
                <div key={idx} className="hero-stat-item flex flex-col">
                  <span className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500 mt-1 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Command Canvas in clean light glass */}
          <div className="lg:col-span-5">
            <div
              ref={terminalRef}
              className="relative rounded-3xl bg-white/95 border border-slate-200/90 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-xl will-change-transform"
            >
              {/* Window Controls & Title */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 text-xs text-slate-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                  <Terminal className="w-3.5 h-3.5 text-blue-600" />
                  <span>anemosoft-core.cluster.local</span>
                </div>
                <Badge variant="success" className="text-[10px] font-mono">
                  ACTIVE
                </Badge>
              </div>

              {/* Visualized Architecture Node Layers */}
              <div className="space-y-2.5 font-mono text-xs">
                {/* Layer 1: Edge & Client Ingress */}
                <div className="terminal-node p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200 transition-colors">
                  <div className="flex items-center justify-between text-slate-800 mb-1">
                    <span className="flex items-center gap-2 font-semibold text-slate-900">
                      <Layers className="w-4 h-4 text-blue-600" />
                      Client & Edge Ingress
                    </span>
                    <span className="text-[10px] text-blue-600 font-semibold">99.99% Availability</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-sans">
                    Next.js (Web SSR) · Kotlin (Android) · Global Edge Caching · TLS 1.3
                  </div>
                </div>

                {/* Layer 2: API Gateway & Microservices */}
                <div className="terminal-node p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200 transition-colors">
                  <div className="flex items-center justify-between text-slate-800 mb-1">
                    <span className="flex items-center gap-2 font-semibold text-slate-900">
                      <Cpu className="w-4 h-4 text-indigo-600" />
                      Distributed Service Layer
                    </span>
                    <span className="text-[10px] text-indigo-600 font-semibold">Kubernetes Pods</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-sans">
                    Java Spring Boot · NestJS / Node.js · .NET Core · FastAPI (Python)
                  </div>
                </div>

                {/* Layer 3: Event Streaming & Message Queues */}
                <div className="terminal-node p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200 transition-colors">
                  <div className="flex items-center justify-between text-slate-800 mb-1">
                    <span className="flex items-center gap-2 font-semibold text-slate-900">
                      <Zap className="w-4 h-4 text-amber-500" />
                      Async Event Queues & Cache
                    </span>
                    <span className="text-[10px] text-amber-600 font-semibold">Sub-millisecond</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-sans">
                    Apache Kafka (Event Streams) · BullMQ (Workers) · Redis (In-Memory Locks)
                  </div>
                </div>

                {/* Layer 4: AI Agent Orchestration */}
                <div className="terminal-node p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200 transition-colors">
                  <div className="flex items-center justify-between text-slate-800 mb-1">
                    <span className="flex items-center gap-2 font-semibold text-slate-900">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Autonomous AI Agent Swarm
                    </span>
                    <span className="text-[10px] text-emerald-600 font-semibold">Tool Execution</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-sans">
                    Reasoning Workflows · Custom RAG · Automated Ingestion & Business Decisioning
                  </div>
                </div>

                {/* Layer 5: Resilient Storage */}
                <div className="terminal-node p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200 transition-colors">
                  <div className="flex items-center justify-between text-slate-800 mb-1">
                    <span className="flex items-center gap-2 font-semibold text-slate-900">
                      <ShieldCheck className="w-4 h-4 text-cyan-600" />
                      Persistence & High-Durability Data
                    </span>
                    <span className="text-[10px] text-cyan-700 font-semibold">ACID Compliant</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-sans">
                    PostgreSQL (Partitioned Clustered SQL) · NoSQL Document Store
                  </div>
                </div>
              </div>

              {/* Terminal status bar */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                  Cluster nodes: 12 Active
                </span>
                <span className="text-blue-600 font-bold">LATENCY: 18ms</span>
              </div>
            </div>
          </div>

        </div>

        {/* Tech Stack Marquee Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4 text-center sm:text-left">
            Production-grade stack engineered for high velocity & fault tolerance:
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 justify-center sm:justify-start">
            {primaryStackTicker.map((tech) => (
              <Badge
                key={tech}
                variant="tech"
                className="px-3 py-1.5 text-xs font-semibold cursor-default text-slate-800 shadow-xs flex items-center gap-2 bg-white hover:border-blue-400 transition-colors"
              >
                <TechLogo name={tech} size="xs" showBackground={false} />
                <span>{tech}</span>
              </Badge>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
