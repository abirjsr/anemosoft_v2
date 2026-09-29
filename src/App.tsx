/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { TechStackMatrix } from './components/TechStackMatrix';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { ParallaxBanner } from './components/ParallaxBanner';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModal } from './components/LegalModal';
import { CookieConsent } from './components/CookieConsent';
import { COMPANY_DETAILS } from './data/companyData';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export default function App() {
  // Initialize Locomotive Scroll for silky smooth agency-grade scroll dynamics
  useSmoothScroll();

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationSpec, setConsultationSpec] = useState('');

  // Legal Modal (Privacy Policy & Terms) State
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'privacy' | 'terms'>('privacy');

  const handleOpenPrivacy = () => {
    setLegalTab('privacy');
    setIsLegalOpen(true);
  };

  const handleOpenTerms = () => {
    setLegalTab('terms');
    setIsLegalOpen(true);
  };

  const handleOpenConsultation = () => {
    setConsultationSpec('');
    setIsConsultationOpen(true);
  };

  const handleOpenConsultationWithSpec = (spec: string) => {
    setConsultationSpec(spec);
    setIsConsultationOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForEstimate = (serviceId: string) => {
    handleScrollToSection('estimator');
  };

  return (
    <div
      data-scroll-container
      className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-900"
    >
      {/* Top Bar Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Page Flow with Locomotive Scroll & GSAP Parallax */}
      <main className="flex-1">
        {/* 1. Hero Section with GSAP entrance, background parallax & text parallax */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onExplorePortfolio={() => handleScrollToSection('portfolio')}
        />

        {/* 2. Core Capabilities & Services */}
        <ServicesSection
          onSelectServiceForEstimate={handleSelectServiceForEstimate}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 3. Tech Stack Matrix */}
        <TechStackMatrix />

        {/* 4. Distributed Architecture Showcase */}
        <ArchitectureShowcase />

        {/* 5. Cinematic Background Parallax & Text Parallax Banner */}
        <ParallaxBanner />

        {/* 6. Project Portfolio & Case Studies */}
        <PortfolioSection onOpenConsultation={handleOpenConsultation} />

        {/* 7. Solution Configurator & Project Estimator */}
        <ProjectEstimator onOpenConsultationWithSpec={handleOpenConsultationWithSpec} />

        {/* 8. Client Testimonials */}
        <TestimonialsSection />

        {/* 9. Frequently Asked Questions */}
        <FAQSection />

        {/* 10. Direct Contact & Office Details */}
        <ContactSection
          initialSpec={consultationSpec}
          onOpenPrivacy={handleOpenPrivacy}
          onOpenTerms={handleOpenTerms}
        />
      </main>

      {/* Footer */}
      <Footer onOpenPrivacy={handleOpenPrivacy} onOpenTerms={handleOpenTerms} />

      {/* Consultation Modal Dialog */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefilledSpec={consultationSpec}
      />

      {/* Legal Center Modal Dialog (Privacy Policy & Terms and Conditions) */}
      <LegalModal
        isOpen={isLegalOpen}
        initialTab={legalTab}
        onClose={() => setIsLegalOpen(false)}
      />

      {/* Cookie Consent Pop-up Banner */}
      <CookieConsent
        onOpenPrivacy={handleOpenPrivacy}
        onOpenTerms={handleOpenTerms}
      />
    </div>
  );
}
