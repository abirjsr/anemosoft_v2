import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Instagram,
  Facebook
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface ContactSectionProps {
  initialSpec?: string;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialSpec,
  onOpenPrivacy,
  onOpenTerms
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Custom Software',
    timeline: '1-3 Months',
    message: initialSpec || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setError('Please provide your name and work email.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/50 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
            <span>Direct Engagement</span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span className="text-slate-500">Response within 12 Hours</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            Ready to turn your technical vision into operational reality?
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed font-sans">
            Reach out directly to Anemosoft's engineering leadership. We evaluate technical feasibility, provide honest timelines, and sign NDAs before initial discovery sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details & Direct Channels (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct hotline & Inquiries Card */}
            <Card className="p-6 bg-white border-slate-200 shadow-sm">
              <span className="text-xs font-mono font-semibold text-blue-600 uppercase tracking-widest block mb-4">
                Instant Communication
              </span>

              <div className="space-y-3">
                {/* Phone */}
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-blue-400 hover:bg-white transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-sans">Direct Telephone</span>
                    <span className="text-sm font-bold font-mono text-slate-900 group-hover:text-blue-600">
                      {COMPANY_DETAILS.phoneDisplay}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-blue-400 hover:bg-white transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-sans">Inquiries & RFPs</span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600">
                      {COMPANY_DETAILS.email}
                    </span>
                  </div>
                </a>
              </div>
            </Card>

            {/* Headquarters & Physical Address Card */}
            <Card className="p-6 bg-white border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-blue-600" />
                <h4 className="text-sm font-bold font-display text-slate-900">
                  Headquarters & Development Center
                </h4>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-sans mb-3">
                {COMPANY_DETAILS.location.formatted}
              </p>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono pt-3 border-t border-slate-100">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>BST Timezone (UTC+6) · Global Delivery Coordination</span>
              </div>
            </Card>

            {/* Verified Social Media Channels */}
            <Card className="p-6 bg-white border-slate-200 shadow-sm">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-4 font-display">
                Connect on Social Networks
              </span>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={COMPANY_DETAILS.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-blue-600 hover:text-white border border-slate-200 transition-all"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook Page</span>
                </a>

                <a
                  href={COMPANY_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white border border-slate-200 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </Card>

          </div>

          {/* Consultation Request Form (Right Column) */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 bg-white border-slate-200 shadow-xl shadow-slate-200/50 relative">
              
              {submitted ? (
                <div className="py-12 text-center animate-in fade-in duration-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed mb-6 font-sans">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. A senior solutions architect from Anemosoft will review your specification and follow up via <span className="text-blue-600 font-mono font-semibold">{formData.email}</span> within 12 hours.
                  </p>
                  <div className="flex justify-center gap-3">
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          projectType: 'Custom Software',
                          timeline: '1-3 Months',
                          message: '',
                        });
                      }}
                      size="sm"
                      className="px-6 text-xs font-bold"
                    >
                      Send Another Request
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="text-lg font-display font-bold text-slate-900">
                      Request Technical Discovery & Proposal
                    </h3>
                    <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                      100% NDA Protected
                    </span>
                  </div>

                  {error && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5 font-display">
                        Your Full Name *
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5 font-display">
                        Work Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5 font-display">
                        Phone Number (Optional)
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\s+/g, '') })}
                        placeholder="e.g. +8801785513286"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5 font-display">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full h-11 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors cursor-pointer shadow-xs"
                      >
                        <option value="Custom Software">Custom Enterprise Software</option>
                        <option value="Web Applications">Modern Web Application (Next.js)</option>
                        <option value="AI Agents">Autonomous AI Agent Swarm</option>
                        <option value="Mobile Apps">Mobile App Development (Kotlin/iOS)</option>
                        <option value="Cloud Architecture">Cloud, Kubernetes & DevOps Scale</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5 font-display">
                      Target Project Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full h-11 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors cursor-pointer shadow-xs"
                    >
                      <option value="Immediate (< 1 Month)">Immediate Discovery (&lt; 1 Month)</option>
                      <option value="1-3 Months">1 - 3 Months (Standard Production Sprint)</option>
                      <option value="3-6 Months">3 - 6 Months (Enterprise Platform Transformation)</option>
                      <option value="Ongoing Retainer">Ongoing Architecture Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5 font-display">
                      Project Brief or Architecture Requirements
                    </label>
                    <Textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the problems you are solving, expected user concurrency, preferred tech stack, or integrations needed..."
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2 text-sm font-bold shadow-md shadow-blue-500/25"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Architecture Discovery Session</span>
                    </Button>
                    <p className="text-[11px] text-center text-slate-500 mt-2.5 font-sans leading-normal">
                      No obligation. We reply with a detailed technical assessment. By submitting, you agree to our{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="text-blue-600 hover:underline cursor-pointer"
                      >
                        Privacy Policy
                      </button>{' '}
                      and{' '}
                      <button
                        type="button"
                        onClick={onOpenTerms}
                        className="text-blue-600 hover:underline cursor-pointer"
                      >
                        Terms of Service
                      </button>.
                    </p>
                  </div>
                </form>
              )}

            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
