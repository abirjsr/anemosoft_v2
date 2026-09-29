import React from 'react';
import { CLIENT_TESTIMONIALS } from '../data/companyData';
import { Star, MapPin } from 'lucide-react';
import { Card } from './ui/card';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
            <span>Verified Track Record</span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span className="text-slate-500">Enterprise Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            Trusted by Engineering Leaders & Growing Enterprises
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed font-sans">
            Read direct feedback from CTOs, Founders, and Product Leaders who partnered with Anemosoft to ship resilient digital products.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CLIENT_TESTIMONIALS.map((t, idx) => (
            <Card
              key={idx}
              className="p-7 sm:p-8 flex flex-col justify-between glow-card bg-white border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 relative"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed mb-6 pt-serif-regular-italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Stats Block */}
              <div className="pt-5 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold poppins-bold text-slate-900">
                      {t.author}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-sans">
                      {t.role}, <span className="text-slate-700 font-semibold">{t.company}</span>
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-1 font-sans">
                      <MapPin className="w-3 h-3 text-blue-600" />
                      <span>{t.location}</span>
                    </div>
                  </div>
                </div>

                {/* Quantified impact metric */}
                <div className="mt-3.5 pt-2.5 border-t border-slate-100 text-[11px] font-mono text-blue-600 font-bold">
                  Result: {t.stats}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
