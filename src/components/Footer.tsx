import React from 'react';
import { Logo } from './Logo';
import { COMPANY_DETAILS } from '../data/companyData';
import { Phone, Mail, Instagram, Facebook, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('open_cookie_preferences'));
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand & Mission (2 cols) */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <Logo size="md" lightText={false} />
            </a>
            <p className="text-xs text-slate-500 leading-relaxed font-sans max-w-sm mb-6">
              Anemosoft turns complex ideas into scalable operational impact. Delivering high-throughput backend services, autonomous AI agents, intuitive web platforms, and mobile apps built on resilient distributed systems.
            </p>

            {/* Direct hotline badge */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors font-mono shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Hotline: {COMPANY_DETAILS.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Capabilities */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 font-display">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Custom Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Modern Web Platforms (Next.js)
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Autonomous AI Agents
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Mobile Apps (Kotlin & Cross-Platform)
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Cloud Infrastructure & Kubernetes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech Stack Highlights */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 font-display">
              Core Technologies
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li className="text-slate-600">Java Spring Boot & Kotlin</li>
              <li className="text-slate-600">FastAPI & Python</li>
              <li className="text-slate-600">NestJS & Node.js</li>
              <li className="text-slate-600">Next.js & React</li>
              <li className="text-slate-600">Apache Kafka & BullMQ</li>
              <li className="text-slate-600">PostgreSQL & Redis</li>
              <li className="text-slate-600">Kubernetes & Docker</li>
            </ul>
          </div>

          {/* Column 4: Location & Socials */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 font-display">
              Headquarters
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-4 font-sans">
              {COMPANY_DETAILS.location.formatted}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={COMPANY_DETAILS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-xs"
                title="Anemosoft Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-pink-500 transition-all shadow-xs"
                title="Anemosoft Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all shadow-xs"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Anemosoft. All rights reserved. IDEAS INTO IMPACT.</span>
            <div className="flex items-center gap-4 text-[11px] font-medium text-slate-600">
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="hover:text-blue-600 hover:underline cursor-pointer transition-colors"
              >
                Privacy Policy
              </button>
              <span className="text-slate-300">·</span>
              <button
                type="button"
                onClick={onOpenTerms}
                className="hover:text-blue-600 hover:underline cursor-pointer transition-colors"
              >
                Terms & Conditions
              </button>
              <span className="text-slate-300">·</span>
              <button
                type="button"
                onClick={handleOpenCookieSettings}
                className="hover:text-blue-600 hover:underline cursor-pointer transition-colors"
              >
                Cookie Settings
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-slate-600 font-semibold">
              www.anemosoft.com
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
