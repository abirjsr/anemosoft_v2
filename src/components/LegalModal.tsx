import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, Lock, CheckCircle, Scale, Building2, Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { COMPANY_DETAILS } from '../data/companyData';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: 'privacy' | 'terms';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'privacy',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-6 py-5 border-b border-slate-200 bg-slate-50/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/80">
              {activeTab === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <Scale className="w-5 h-5" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                  Anemosoft Legal Center
                </span>
                <span className="text-slate-300">·</span>
                <Badge variant="outline" className="text-[10px] font-mono">
                  Effective Sept 2026
                </Badge>
              </div>
              <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900">
                {activeTab === 'privacy' ? 'Privacy Policy & Data Protection' : 'Terms & Conditions of Service'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Toggle Navigation */}
        <div className="px-6 py-2.5 bg-slate-100/70 border-b border-slate-200 flex items-center gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-white text-blue-600 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-white text-blue-600 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms & Conditions</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-slate-700 text-sm leading-relaxed font-sans">
          {activeTab === 'privacy' ? (
            /* PRIVACY POLICY CONTENT */
            <div className="space-y-7">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/70 flex items-start gap-3.5">
                <Lock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs text-blue-950">
                  <p className="font-semibold text-blue-900 mb-0.5">Commitment to Enterprise Security & Confidentiality</p>
                  At Anemosoft, we strictly safeguard client trade secrets, proprietary software codebases, and user data. We do not sell personal data, nor do we train public AI models on your private corporate repositories or data streams.
                </div>
              </div>

              {/* Section 1 */}
              <div>
                <h3 className="text-base font-bold font-display text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-xs">01.</span> Information We Collect
                </h3>
                <p className="text-slate-600 mb-3">
                  When you visit our website, submit project inquiries, request architectural discovery sessions, or use our Project Estimator, Anemosoft collects the following categories of information:
                </p>
                <ul className="space-y-1.5 list-disc list-inside text-slate-600 text-xs sm:text-sm pl-2">
                  <li><strong className="text-slate-800">Contact Information:</strong> Full name, professional work email address, telephone contact number, company name, and location.</li>
                  <li><strong className="text-slate-800">Project Requirements:</strong> Architecture specifications, desired tech stacks, estimated sprint timelines, and project descriptions submitted via our forms.</li>
                  <li><strong className="text-slate-800">Technical & Usage Data:</strong> IP address, browser type and version, device identifier, operating system, referrer URL, and interaction logs.</li>
                  <li><strong className="text-slate-800">Cookies & Session Identifiers:</strong> Small data files stored on your device to maintain site performance, security, and preference configurations.</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="text-base font-bold font-display text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-xs">02.</span> How We Use Your Information
                </h3>
                <p className="text-slate-600 mb-2">We process your personal and business data solely for legitimate commercial and engineering purposes:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="text-xs font-bold text-slate-900 mb-1">Architecture Feasibility Review</h4>
                    <p className="text-xs text-slate-500">To evaluate your technical requirements and deliver accurate engineering proposals and timeline estimates.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="text-xs font-bold text-slate-900 mb-1">Direct Client Communications</h4>
                    <p className="text-xs text-slate-500">To respond to inquiries via telephone or email, and coordinate NDA execution prior to discovery calls.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="text-xs font-bold text-slate-900 mb-1">Platform Performance & Security</h4>
                    <p className="text-xs text-slate-500">To protect our infrastructure against distributed denial-of-service (DDoS) attacks, spam bots, and unauthorized exploits.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="text-xs font-bold text-slate-900 mb-1">Legal & Contractual Compliance</h4>
                    <p className="text-xs text-slate-500">To maintain audit logs, honor mutual Non-Disclosure Agreements, and fulfill contractual project obligations.</p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="text-base font-bold font-display text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-xs">03.</span> Non-Disclosure & Intellectual Property Protection
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  We treat all technical documents, architectures, schema designs, and project descriptions shared by prospective and active clients under strict confidentiality obligations. Before conducting in-depth technical analysis, Anemosoft routinely signs mutual Non-Disclosure Agreements (NDAs). We never disclose client proprietary workflows, software blueprints, or trade secrets to third parties without prior written consent.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h3 className="text-base font-bold font-display text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-xs">04.</span> Cookie Policy & Tracking Technologies
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-3">
                  Anemosoft uses cookies to enhance user experience, remember session state, and understand traffic trends. You can control or decline non-essential cookies at any time:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Essential / Necessary Cookies:</strong> Required for the fundamental operation of the website (e.g. CSRF protection, secure form submission, cookie consent memory). These cannot be disabled.
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Analytics & Performance Cookies:</strong> Help us anonymously assess page view latency, scroll depth, and feature adoption so we can optimize rendering performance.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h3 className="text-base font-bold font-display text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-xs">05.</span> Your Rights (GDPR & Global Standards)
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Depending on your jurisdiction, you have the right to request access to the personal data we hold about you, request corrections or complete erasure (the "Right to be Forgotten"), restrict processing, or obtain an export of your information in a structured, commonly used format. To exercise any of these rights, contact us at <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-blue-600 font-semibold underline">{COMPANY_DETAILS.email}</a>.
                </p>
              </div>

              {/* Section 6 */}
              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 font-display">
                  Data Protection Officer & Contact Information
                </h4>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                  <div>
                    <span className="font-semibold text-slate-900 block">{COMPANY_DETAILS.name} Legal & Compliance</span>
                    <span className="text-slate-500">{COMPANY_DETAILS.location.formatted}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-blue-600 font-mono font-semibold flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5" /> {COMPANY_DETAILS.email}
                    </a>
                    <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-blue-600 font-mono font-semibold flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" /> {COMPANY_DETAILS.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* TERMS AND CONDITIONS CONTENT */
            <div className="space-y-7">
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 flex items-start gap-3.5">
                <Scale className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-950">
                  <p className="font-semibold text-amber-900 mb-0.5">Master Terms of Service & Engagement</p>
                  These Terms and Conditions govern your engagement with Anemosoft for custom software development, modern web portals, autonomous AI agents, mobile applications, and cloud systems architecture.
                </div>
              </div>

              {/* Section 1 */}
              <div>
                <h3 className="text-base font-bold font-display text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-xs">01.</span> Acceptance & Scope of Work
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  By accessing our website, contracting our engineering services, or signing a Statement of Work (SOW), you agree to be bound by these Terms and Conditions. Each specific software build is governed by a mutually executed SOW detailing deliverables, sprint milestones, acceptance criteria, technical frameworks, and fee structures.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="text-base font-bold font-display text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-xs">02.</span> 100% Intellectual Property Assignment
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-3">
                  Anemosoft builds custom software exclusively for client ownership. Upon complete payment of agreed contractual milestones:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Full Codebase Assignment:</strong> All custom source code, schemas, architecture blueprints, UI designs, and documentation transfer entirely and unconditionally to the Client.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">No Proprietary Lock-In:</strong> Solutions are engineered with open, industry-standard technologies (Java Spring Boot, Kotlin, Next.js, Python, PostgreSQL, Kubernetes) without hidden vendor dependencies.</span>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="text-base font-bold font-display text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-xs">03.</span> Confidentiality & Non-Disclosure
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Both parties agree to hold all Confidential Information in strictest confidence. Anemosoft will not publish client trade secrets, internal database schemas, proprietary algorithms, or operational workflows without explicit written permission.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h3 className="text-base font-bold font-display text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-xs">04.</span> Delivery Milestones & Acceptance Testing
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-2">
                  Work is structured in bi-weekly Agile sprints. At the conclusion of each milestone:
                </p>
                <ul className="space-y-1.5 list-disc list-inside text-slate-600 text-xs pl-2">
                  <li>Client has a defined Acceptance Period (typically 10 business days) to verify that the delivered module conforms to agreed specifications.</li>
                  <li>Identified defects or divergences from specifications are remediated promptly by Anemosoft at zero additional expense.</li>
                  <li>Milestones are deemed accepted upon formal sign-off or deployment to production environments.</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h3 className="text-base font-bold font-display text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-xs">05.</span> Warranty & Bug-Fix Guarantee
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Unless otherwise specified in your Statement of Work, Anemosoft provides a complimentary 60-day post-launch warranty period during which any critical defects or system regressions attributable to our code are resolved without additional billing.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h3 className="text-base font-bold font-display text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-xs">06.</span> Limitation of Liability
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  To the maximum extent permitted by applicable law, in no event shall Anemosoft or the Client be liable for indirect, incidental, special, or consequential damages arising from system downtime, third-party infrastructure outages (e.g. AWS, GCP, Azure), or data loss caused by unauthorized third-party intrusions outside reasonable engineering safeguards.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h3 className="text-base font-bold font-display text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-xs">07.</span> Governing Law & Dispute Resolution
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  These Terms shall be governed by and construed in accordance with the laws applicable in Bangladesh, with international commercial arbitration provisions as agreed in individual client agreements. Any dispute arising out of or in connection with these Terms shall first be addressed through good-faith executive mediation.
                </p>
              </div>

              {/* Section 8 */}
              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 font-display">
                  Corporate Inquiries & Legal Service
                </h4>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                  <div>
                    <span className="font-semibold text-slate-900 block">{COMPANY_DETAILS.name} Legal Counsel</span>
                    <span className="text-slate-500">{COMPANY_DETAILS.location.formatted}</span>
                  </div>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-blue-600 font-mono font-semibold flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5" /> {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Bar */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/90 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 flex items-center gap-2">
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            <span>Official Legal Documentation · Anemosoft (Ideas Into Impact)</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <Button
              onClick={onClose}
              size="default"
              className="text-xs font-bold w-full sm:w-auto"
            >
              I Understand & Agree
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
