import React, { useState } from 'react';
import { FREQUENTLY_ASKED_QUESTIONS } from '../data/companyData';
import { ChevronDown } from 'lucide-react';
import { Card } from './ui/card';

export const FAQSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="faq" className="py-24 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
            <span>Client Questions</span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span className="text-slate-500">Clarity & Confidence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-base max-w-2xl mx-auto leading-relaxed font-sans">
            Everything you need to know about partnering with Anemosoft, from intellectual property ownership to technology architecture choices.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FREQUENTLY_ASKED_QUESTIONS.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-200 rounded-2xl bg-white border-slate-200/90 shadow-xs hover:border-slate-300"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-display font-bold text-slate-900 pr-2">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600 bg-blue-50' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 font-sans">
                    {faq.answer}
                  </div>
                )}
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};
