import React, { useState } from 'react';
import { SERVICES_LIST, ServiceItem } from '../data/companyData';
import { Check, ArrowRight, Code2, Globe, Bot, Smartphone, Server } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { TechLogo } from './TechLogo';

interface ServicesSectionProps {
  onSelectServiceForEstimate: (serviceId: string) => void;
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEstimate,
  onOpenConsultation
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_LIST[0].id);

  const activeService = SERVICES_LIST.find((s) => s.id === activeServiceId) || SERVICES_LIST[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'custom-software':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'web-development':
        return <Globe className="w-5 h-5 text-cyan-600" />;
      case 'ai-agents':
        return <Bot className="w-5 h-5 text-emerald-600" />;
      case 'mobile-development':
        return <Smartphone className="w-5 h-5 text-indigo-600" />;
      case 'cloud-devops':
        return <Server className="w-5 h-5 text-amber-600" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white border-t border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
            <span>Capabilities & Services</span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span className="text-slate-500">Enterprise Grade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            Engineering capabilities built to accelerate and safeguard business growth
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Whether you need a high-throughput Java or .NET backend, autonomous AI agent pipelines, or an offline-first mobile application, Anemosoft delivers clean, scalable architecture with zero technical debt.
          </p>
        </div>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Numbered Service Selection List */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {SERVICES_LIST.map((service: ServiceItem) => {
              const isSelected = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-200 border cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? 'bg-blue-50/70 border-blue-500/40 shadow-sm shadow-blue-500/10'
                      : 'bg-slate-50/70 border-slate-200/90 hover:bg-slate-100/70 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className={`p-2 rounded-xl mt-0.5 transition-colors ${isSelected ? 'bg-blue-600/10 text-blue-600' : 'bg-slate-200/70 text-slate-600'}`}>
                        {getServiceIcon(service.id)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-semibold text-blue-600">
                            {service.number}.
                          </span>
                          <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-blue-600 translate-x-1' : 'text-slate-400 group-hover:text-slate-600'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Service Specification Card */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 bg-white border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden glow-card">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-100/50 via-cyan-50/30 to-transparent blur-3xl pointer-events-none" />

              {/* Service Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200/60">
                    {getServiceIcon(activeService.id)}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-blue-600 uppercase tracking-wider">
                      Service {activeService.number}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-slate-900">
                      {activeService.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="py-6 border-b border-slate-100">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {activeService.description}
                </p>

                {/* Tech Stack Unboxed Metadata */}
                <div className="mt-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2 font-display">
                    Primary Technologies Deployed:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {activeService.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="default"
                        className="text-xs font-medium flex items-center gap-1.5 py-1 px-2.5"
                      >
                        <TechLogo name={tech} size="xs" showBackground={false} />
                        <span>{tech}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Two Column Capabilities & Deliverables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-b border-slate-100">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-1.5 font-display">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    Core Capabilities
                  </h4>
                  <ul className="space-y-2.5">
                    {activeService.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-1.5 font-display">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                    Key Deliverables
                  </h4>
                  <ul className="space-y-2.5">
                    {activeService.deliverables.map((del, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                        <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions for This Service */}
              <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => onSelectServiceForEstimate(activeService.id)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                >
                  <span>Configure estimated scope in Project Estimator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <Button
                  onClick={onOpenConsultation}
                  size="default"
                  className="text-xs font-bold"
                >
                  Consult on this Service
                </Button>
              </div>

            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
