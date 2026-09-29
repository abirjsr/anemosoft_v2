import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../data/companyData';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface PortfolioSectionProps {
  onOpenConsultation: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Custom Software', 'AI Agents', 'Web Applications', 'Mobile Apps'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
              <span>Proof of Impact</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="text-slate-500">Featured Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
              Selected Client Work & Enterprise Deployments
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Explore how we have engineered scalable software platforms, automated AI pipelines, and resilient mobile applications for global and regional businesses.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="p-6 sm:p-8 flex flex-col justify-between group glow-card bg-white border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-300"
            >
              <div>
                {/* Header & Meta */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="text-blue-600 font-bold">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.clientIndustry}</span>
                  </div>
                  <Badge variant="outline" className="text-[10px] font-mono text-slate-600">
                    Production
                  </Badge>
                </div>

                {/* Title with Syne typography */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                  {project.shortDesc}
                </p>

                {/* Quantitative Impact Proof Strip */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-lg font-bold font-display text-slate-900 tracking-tight tabular-nums">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-slate-500 mt-0.5 leading-tight font-sans">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-xs text-slate-500">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Button
                  onClick={() => setActiveModalProject(project)}
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-blue-600 hover:text-blue-700 hover:bg-transparent font-bold"
                >
                  <span>View Full Architectural Case Study</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Case Study Detail Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-150">
            <Card className="max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative bg-white border-slate-200">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mb-2">
                  <span>{activeModalProject.category}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500">{activeModalProject.clientIndustry}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                  {activeModalProject.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                  {activeModalProject.fullDesc}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-blue-50/60 border border-blue-200/70 mb-6">
                  {activeModalProject.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-xl sm:text-2xl font-display font-bold text-blue-700 tabular-nums">
                        {m.value}
                      </span>
                      <span className="text-xs text-slate-600 mt-1 font-sans">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Problem vs Solution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200/80">
                    <h4 className="text-xs font-semibold text-rose-800 uppercase tracking-wider mb-2 font-display">
                      The Operational Challenge
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      {activeModalProject.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80">
                    <h4 className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2 font-display">
                      Anemosoft Engineering Solution
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      {activeModalProject.solution}
                    </p>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-3 font-display">
                    Key Architectural Invariants
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.architectureHighlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full Stack */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 font-display">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.technologies.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
                  <Button
                    onClick={() => setActiveModalProject(null)}
                    variant="ghost"
                    size="sm"
                  >
                    Close
                  </Button>
                  <Button
                    onClick={() => {
                      setActiveModalProject(null);
                      onOpenConsultation();
                    }}
                    size="default"
                  >
                    Build Something Similar
                  </Button>
                </div>

              </div>

            </Card>
          </div>
        )}

      </div>
    </section>
  );
};
