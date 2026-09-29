import React, { useState } from 'react';
import { 
  Server, 
  Zap, 
  Cloud, 
  Bot, 
  Smartphone, 
  ArrowRight,
  ShieldAlert,
  Activity
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export const ArchitectureShowcase: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number>(0);

  const architectureLayers = [
    {
      id: "ingress",
      title: "1. Client & Ingress Layer",
      icon: <Smartphone className="w-5 h-5 text-blue-600" />,
      techs: ["Next.js (Web SSR)", "Kotlin (Native Android)", "Edge CDN", "Reverse Proxy"],
      headline: "Sub-50ms Global First Paint & Offline-First Synchronization",
      description: "User requests enter through edge-optimized Next.js frontends or native Kotlin mobile clients equipped with SQLite Room delta synchronization. WebSockets maintain duplex streaming for real-time notifications.",
      specs: [
        { label: "TTFB (Time to First Byte)", value: "< 45ms" },
        { label: "Offline Sync Protocol", value: "Conflict-Free Delta JSON" },
        { label: "Client Security", value: "TLS 1.3 + Biometric Keystore" }
      ]
    },
    {
      id: "gateway-services",
      title: "2. API Gateway & Microservices",
      icon: <Server className="w-5 h-5 text-indigo-600" />,
      techs: ["Java Spring Boot", "NestJS", ".NET Core", "FastAPI"],
      headline: "Stateless, Clustered Microservices with Strict Hexagonal Boundaries",
      description: "Business logic is isolated into domain microservices. High-transaction modules run on Java Spring Boot and .NET Core, while rapid async services and proxy layers run on NestJS and FastAPI.",
      specs: [
        { label: "Request Concurrency", value: "100k+ concurrent connections" },
        { label: "Architecture Pattern", value: "Domain-Driven Design (DDD)" },
        { label: "Auth & Security", value: "JWT, OAuth2 & Fine-Grained RBAC" }
      ]
    },
    {
      id: "events-queues",
      title: "3. Event Streaming & Background Queues",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      techs: ["Apache Kafka", "BullMQ", "Redis Cache & Locks"],
      headline: "Decoupled Event Streaming & Resilient Worker Pipelines",
      description: "Heavy compute, email dispatch, webhooks, and transactional ledgers bypass HTTP request threads. Kafka handles ordered partition logs while BullMQ and Redis execute delayed and prioritized job batches with automatic exponential backoff.",
      specs: [
        { label: "Event Throughput", value: "Up to 50k events/sec" },
        { label: "Retry Policy", value: "Exponential backoff + Dead-Letter Queue" },
        { label: "Lock Safety", value: "Redis Redlock distributed locking" }
      ]
    },
    {
      id: "ai-orchestration",
      title: "4. Autonomous AI Agent Engine",
      icon: <Bot className="w-5 h-5 text-emerald-600" />,
      techs: ["Python", "FastAPI", "Vector Store", "LLM Reasoning Chains"],
      headline: "Autonomous Task Execution with Guardrails & Continuous Verification",
      description: "Anemosoft builds dedicated AI agent swarms that parse enterprise unstructured documents, execute database queries via secure sandboxes, and perform multi-step decision trees with explicit confidence intervals.",
      specs: [
        { label: "Execution Mode", value: "Asynchronous background workers" },
        { label: "Hallucination Protection", value: "Deterministic validation gates" },
        { label: "Data Isolation", value: "Zero retention on public models" }
      ]
    },
    {
      id: "persistence-cloud",
      title: "5. High-Durability Storage & Kubernetes",
      icon: <Cloud className="w-5 h-5 text-cyan-600" />,
      techs: ["PostgreSQL (Partitioned SQL)", "NoSQL", "Docker", "Kubernetes"],
      headline: "Self-Healing Container Clusters & Partitioned Relational Records",
      description: "Persistent state is secured across replicated PostgreSQL clusters with read-replicas and connection pooling. All workloads are packaged in immutable Docker containers managed by self-healing Kubernetes pods.",
      specs: [
        { label: "Target Availability", value: "99.995% Uptime SLA" },
        { label: "Horizontal Autoscaling", value: "CPU & Queue-Depth Metrics" },
        { label: "Backup Strategy", value: "Automated snapshotting & point-in-time recovery" }
      ]
    }
  ];

  const currentLayer = architectureLayers[selectedLayer];

  return (
    <section id="architecture" className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
            <span>System Design</span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span className="text-slate-500">Distributed & Resilient</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            How Anemosoft Connects Systems For Uninterrupted Scale
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Every software solution we deliver is architected to isolate failures, eliminate single points of failure, and scale horizontally as your user base expands.
          </p>
        </div>

        {/* Interactive Architecture Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Layer Selector Timeline */}
          <div className="lg:col-span-5 space-y-2.5">
            {architectureLayers.map((layer, index) => {
              const isSelected = index === selectedLayer;
              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayer(index)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-blue-50/80 border-blue-500/50 shadow-sm shadow-blue-500/10'
                      : 'bg-slate-50/70 border-slate-200/90 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl transition-colors ${isSelected ? 'bg-blue-600/10 text-blue-600' : 'bg-slate-200/70 text-slate-600'}`}>
                      {layer.icon}
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold font-display ${isSelected ? 'text-blue-950' : 'text-slate-800 group-hover:text-blue-600'}`}>
                        {layer.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 truncate max-w-[240px]">
                        {layer.techs.join(' · ')}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-blue-600 translate-x-1' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Architectural Inspect Panel */}
          <div className="lg:col-span-7">
            <Card className="p-7 sm:p-8 bg-white border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200/70">
                    {currentLayer.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-blue-600 uppercase tracking-widest font-semibold">
                      Architectural Layer {selectedLayer + 1} of 5
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                      {currentLayer.headline}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Technologies deployed */}
              <div className="py-5 border-b border-slate-100">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-2 font-display">
                  Engineered With:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentLayer.techs.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-semibold"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mt-4 font-sans">
                  {currentLayer.description}
                </p>
              </div>

              {/* Specification Grid */}
              <div className="pt-5">
                <h4 className="text-xs uppercase tracking-wider text-slate-700 font-semibold mb-3 flex items-center gap-2 font-display">
                  <Activity className="w-3.5 h-3.5 text-blue-600" />
                  Production Invariants & Performance Metrics
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {currentLayer.specs.map((spec, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                      <span className="text-[11px] text-slate-500 block mb-1">
                        {spec.label}
                      </span>
                      <span className="text-xs font-bold text-slate-900 font-mono">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security & Reliability Guarantee */}
              <div className="mt-6 p-4 rounded-2xl bg-blue-50/70 border border-blue-200/70 flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-950 leading-relaxed font-sans">
                  <strong className="font-semibold text-blue-900">Fault-Isolated Isolation:</strong> If an individual container, AI worker, or database replica experiences an unexpected fault, circuit breakers immediately reroute traffic without interrupting user sessions.
                </p>
              </div>

            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
