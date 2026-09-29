import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_DETAILS } from '../data/companyData';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/92 backdrop-blur-md border-b border-slate-200/90 shadow-sm shadow-slate-200/50 py-2.5'
          : 'bg-white/70 backdrop-blur-xs border-b border-slate-200/50 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Zone 1: Single Brand Zone */}
          <a href="#" className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg">
            <Logo size="sm" lightText={false} />
          </a>

          {/* Zone 2: 4–6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-150 relative py-1 hover:underline underline-offset-8 decoration-blue-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1–2 Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="inline-flex items-center gap-1.5 h-10 px-3.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/90 rounded-xl transition-colors font-mono"
              title={`Call Anemosoft (${COMPANY_DETAILS.phoneDisplay})`}
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{COMPANY_DETAILS.phoneDisplay}</span>
            </a>

            <Button
              onClick={onOpenConsultation}
              size="default"
              className="gap-1.5 text-xs font-bold shadow-md shadow-blue-500/20"
            >
              <span>Schedule Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              onClick={onOpenConsultation}
              size="sm"
              className="sm:hidden text-xs"
            >
              Consult
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-slate-600 px-3">
              <span>Direct Hotline:</span>
              <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-blue-600 font-mono font-bold flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {COMPANY_DETAILS.phoneDisplay}
              </a>
            </div>

            <div className="pt-1">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full text-xs font-bold"
              >
                Schedule Discovery Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
