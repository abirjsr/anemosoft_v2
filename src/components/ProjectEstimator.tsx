import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { 
  Calculator, 
  Check, 
  Users, 
  Clock, 
  Send
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { TechLogo } from './TechLogo';

interface ProjectEstimatorProps {
  onOpenConsultationWithSpec: (spec: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onOpenConsultationWithSpec }) => {
  const [projectType, setProjectType] = useState<'custom-software' | 'web' | 'ai-agents' | 'mobile' | 'cloud'>('custom-software');
  const [scaleTier, setScaleTier] = useState<'mvp' | 'growth' | 'enterprise'>('growth');
  const [selectedTechs, setSelectedTechs] = useState<string[]>(['Java Spring Boot', 'PostgreSQL', 'Docker']);

  const projectTypes = [
    { id: 'custom-software', label: 'Custom Enterprise Software', baseWeeks: 8 },
    { id: 'web', label: 'Modern Web Platform (Next.js)', baseWeeks: 6 },
    { id: 'ai-agents', label: 'Autonomous AI Agents', baseWeeks: 6 },
    { id: 'mobile', label: 'Mobile App (Kotlin/iOS)', baseWeeks: 8 },
    { id: 'cloud', label: 'Cloud Architecture & Scale', baseWeeks: 4 },
  ];

  const scaleTiers = [
    { id: 'mvp', label: 'Startup / MVP', desc: 'Core functionality, validated architecture, ready for initial users', multiplier: 1 },
    { id: 'growth', label: 'Growth / Scale', desc: 'High availability, caching, background worker queues, automated CI/CD', multiplier: 1.4 },
    { id: 'enterprise', label: 'Enterprise Mission-Critical', desc: 'Distributed multi-region, zero-downtime SLA, event-driven Kafka, 99.99%', multiplier: 2.0 },
  ];

  const availableTechs = [
    'Java Spring Boot',
    'Kotlin',
    'Next.js',
    'NestJS',
    'Python',
    'FastAPI',
    'Apache Kafka',
    'BullMQ',
    'Redis',
    'PostgreSQL',
    'NoSQL',
    'Kubernetes',
    'Docker',
    '.NET'
  ];

  const toggleTech = (tech: string) => {
    if (selectedTechs.includes(tech)) {
      if (selectedTechs.length > 1) {
        setSelectedTechs(selectedTechs.filter((t) => t !== tech));
      }
    } else {
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  // Calculations
  const currentTypeObj = projectTypes.find((p) => p.id === projectType)!;
  const currentTierObj = scaleTiers.find((s) => s.id === scaleTier)!;

  const estimatedWeeks = Math.round(currentTypeObj.baseWeeks * currentTierObj.multiplier);

  const teamComposition = () => {
    if (scaleTier === 'mvp') {
      return ['1 Solutions Architect (Part-time)', '2 Senior Full-Stack Engineers', '1 QA & Release Specialist'];
    }
    if (scaleTier === 'growth') {
      return ['1 Lead Solutions Architect', '2 Backend/Cloud Engineers', '1 Frontend/Mobile Engineer', '1 QA & Performance Lead'];
    }
    return [
      '1 Principal Enterprise Architect',
      '3 Senior Backend Engineers (Spring Boot / Python / .NET)',
      '2 Frontend / Mobile Specialists',
      '1 DevOps & Kubernetes Site Reliability Engineer (SRE)',
      '1 Dedicated QA & Security Auditor'
    ];
  };

  const generatedSpec = `Project Scope: ${currentTypeObj.label} | Scale: ${currentTierObj.label} | Selected Tech: ${selectedTechs.join(', ')} | Target Timeline: ~${estimatedWeeks} weeks`;

  return (
    <section id="estimator" className="py-24 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
            <Calculator className="w-4 h-4 text-blue-600" />
            <span>Solution Configurator</span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span className="text-slate-500">Instant Estimate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            Configure Your Project Scope & Architecture
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed font-sans">
            Select your software objective, target concurrency tier, and required technologies to receive an instant architectural projection and team allocation estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (Left Column) */}
          <Card className="lg:col-span-7 p-6 sm:p-8 space-y-8 bg-white border-slate-200 shadow-sm rounded-3xl">
            
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-3 font-display">
                1. Select Primary Objective
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {projectTypes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setProjectType(t.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-150 cursor-pointer text-xs font-semibold flex items-center justify-between ${
                      projectType === t.id
                        ? 'bg-blue-50 border-blue-500 text-blue-900 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <span>{t.label}</span>
                    {projectType === t.id && <Check className="w-4 h-4 text-blue-600" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scale & Concurrency Tier */}
            <div>
              <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-3 font-display">
                2. Target Concurrency & Scale Tier
              </label>
              <div className="space-y-2.5">
                {scaleTiers.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setScaleTier(tier.id as any)}
                    className={`w-full p-4 rounded-xl border text-left transition-all duration-150 cursor-pointer flex items-start justify-between ${
                      scaleTier === tier.id
                        ? 'bg-blue-50 border-blue-500 text-blue-950 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 mb-0.5 font-display">
                        {tier.label}
                      </div>
                      <div className="text-[11px] text-slate-500 font-sans">
                        {tier.desc}
                      </div>
                    </div>
                    {scaleTier === tier.id && <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Tech Stack Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-semibold text-slate-800 uppercase tracking-wider font-display">
                  3. Select Desired Tech Stack Elements
                </label>
                <span className="text-[11px] text-blue-600 font-mono font-semibold">
                  {selectedTechs.length} technologies selected
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {availableTechs.map((tech) => {
                  const isSelected = selectedTechs.includes(tech);
                  return (
                    <button
                      key={tech}
                      onClick={() => toggleTech(tech)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center gap-2 ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      <TechLogo name={tech} size="xs" showBackground={false} />
                      <span>{tech}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </Card>

          {/* Projection Dashboard (Right Column) */}
          <div className="lg:col-span-5">
            <Card className="p-6 sm:p-8 bg-gradient-to-b from-blue-50/80 via-white to-slate-50/80 border-blue-200/90 rounded-3xl relative overflow-hidden shadow-lg shadow-blue-500/5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mb-2">
                <span>Architecture Projection</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-6">
                Estimated Delivery Profile
              </h3>

              {/* Estimated Timeline */}
              <div className="p-4 rounded-2xl bg-white border border-blue-200/80 shadow-xs mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-sans">Sprint Duration</span>
                    <span className="text-2xl font-bold font-display text-slate-900 tracking-tight tabular-nums">
                      ~{estimatedWeeks} Weeks
                    </span>
                  </div>
                </div>
                <Badge variant="success" className="text-[10px] font-mono">
                  Agile Bi-Weekly
                </Badge>
              </div>

              {/* Recommended Dedicated Team */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-600 font-semibold mb-3 font-display">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Dedicated Engineering Team</span>
                </div>
                <div className="space-y-2">
                  {teamComposition().map((member, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-sans">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{member}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Stack summary */}
              <div className="mb-8 pt-4 border-t border-slate-200">
                <span className="text-xs text-slate-600 uppercase tracking-wider font-semibold block mb-2 font-display">
                  Targeted System Stack:
                </span>
                <p className="text-xs text-blue-800 font-mono leading-relaxed font-semibold">
                  {selectedTechs.join(' · ')}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={() => onOpenConsultationWithSpec(generatedSpec)}
                  className="w-full gap-2 text-xs font-bold shadow-md shadow-blue-500/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Specification for Review</span>
                </Button>
              </div>

            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
