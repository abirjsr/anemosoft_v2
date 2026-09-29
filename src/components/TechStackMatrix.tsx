import React, { useState } from 'react';
import { TECH_STACK_CATEGORIES } from '../data/companyData';
import { 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { TechLogo } from './TechLogo';

export const TechStackMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Backend & Core',
    'Frontend & Web',
    'Mobile App Development',
    'AI Agents & Intelligence',
    'Databases, Queues & DevOps'
  ];

  // Flattened list with category tags
  const allTechs = TECH_STACK_CATEGORIES.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  );

  const filteredTechs =
    activeCategory === 'All'
      ? allTechs
      : allTechs.filter((tech) => tech.category === activeCategory);

  return (
    <section id="tech-stack" className="py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
            <span>Engineering Foundation</span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span className="text-slate-500">Battle-Tested Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            Our Core Technology Stack
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            We don't chase transient hype. We engineer with modern, enterprise-proven tools designed for durability, strict typing, high throughput, and seamless horizontal scale.
          </p>
        </div>

        {/* Functional Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/60 border border-slate-200 rounded-2xl mb-10 max-w-fit shadow-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-150 cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Technologies with authentic brand logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredTechs.map((tech, idx) => (
            <Card
              key={`${tech.name}-${idx}`}
              className="p-5 flex flex-col justify-between group glow-card bg-white hover:border-blue-300 rounded-2xl shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-start justify-between mb-3.5">
                  <div className="p-2 rounded-xl bg-slate-50 group-hover:bg-blue-50/60 border border-slate-200/90 group-hover:border-blue-200 transition-colors shadow-2xs">
                    <TechLogo name={tech.name} size="md" showBackground={false} />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 group-hover:text-blue-600 transition-colors font-medium">
                    {tech.category.split(' ')[0]}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                  <span>{tech.name}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-sans">
                  {tech.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Production Ready
                </span>
                <span className="text-slate-400 font-mono text-[10px]">
                  Official SDK
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Tech Stack Combination Callout */}
        <Card className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-blue-50/60 via-slate-50 to-cyan-50/50 border-slate-200 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h4 className="text-xl font-display font-bold text-slate-900 mb-2">
                Need a custom architectural evaluation for your tech stack?
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether migrating from a legacy monolith or building greenfield, our architects analyze your concurrency, latency, and data integrity needs to select the optimal combination.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <Button asChild variant="outline" className="gap-2">
                <a href="#estimator">
                  <span>Launch Project Estimator</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
};
