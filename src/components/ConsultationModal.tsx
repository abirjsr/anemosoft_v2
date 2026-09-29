import React, { useState, useEffect } from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { X, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledSpec?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledSpec = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Custom Software Development',
    details: prefilledSpec || '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledSpec) {
      setFormData((prev) => ({ ...prev, details: prefilledSpec }));
    }
  }, [prefilledSpec]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-150">
      <Card className="bg-white border-slate-200 max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
              Discovery Call Requested
            </h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed mb-6 font-sans">
              Our lead architect will contact you at <span className="text-blue-600 font-mono font-semibold">{formData.email}</span> within 12 hours with available time slots.
            </p>
            <div className="flex justify-center">
              <Button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                size="sm"
                className="px-6 text-xs font-bold"
              >
                Done
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-600 uppercase tracking-wider mb-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Schedule Architecture Discovery</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-2">
              Connect with Anemosoft
            </h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed font-sans">
              Speak directly with an enterprise software engineer. We'll analyze your project scope, evaluate tech stack fit, and prepare a concrete proposal.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1 font-display">
                  Full Name *
                </label>
                <Input
                  type="text"
                  required
                  placeholder="e.g. Alex Rahman"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1 font-display">
                    Email *
                  </label>
                  <Input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1 font-display">
                    Phone Number (Optional)
                  </label>
                  <Input
                    type="tel"
                    placeholder="+8801785513286"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\s+/g, '') })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1 font-display">
                  Primary Capability Needed
                </label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full h-11 px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 transition-colors cursor-pointer shadow-xs"
                >
                  <option value="Custom Software Development">Custom Enterprise Software</option>
                  <option value="Next.js Web Applications">Modern Web Application (Next.js)</option>
                  <option value="AI Agents & Automation">Autonomous AI Agents & Workflows</option>
                  <option value="Mobile App Development">Mobile App (Kotlin / Cross-Platform)</option>
                  <option value="Cloud & Kubernetes Architecture">Cloud Architecture & Scaling</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1 font-display">
                  Requirements & Notes
                </label>
                <Textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Outline key features, target timeline, or tech stack requirements..."
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="default"
                  className="w-full text-xs font-bold shadow-md shadow-blue-500/20"
                >
                  Confirm Discovery Request
                </Button>
              </div>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-sans">
              <span>Or reach our hotline directly:</span>
              <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-blue-600 font-mono font-bold flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {COMPANY_DETAILS.phoneDisplay}
              </a>
            </div>
          </div>
        )}

      </Card>
    </div>
  );
};
