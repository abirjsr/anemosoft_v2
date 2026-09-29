import React, { useState, useEffect } from 'react';
import { Cookie, Shield, Check, X, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface CookieConsentProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Preference state
  const [preferences, setPreferences] = useState({
    essential: true, // Always required
    analytics: true,
    functional: true,
  });

  useEffect(() => {
    // Check if user has already accepted or declined cookies
    const storedConsent = localStorage.getItem('anemosoft_cookie_consent');
    if (!storedConsent) {
      // Pop up smoothly shortly after initial page visit
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for custom event to re-open cookie preferences from footer
  useEffect(() => {
    const handleReopen = () => {
      setIsVisible(true);
      setShowPreferences(true);
    };
    window.addEventListener('open_cookie_preferences', handleReopen);
    return () => window.removeEventListener('open_cookie_preferences', handleReopen);
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      essential: true,
      analytics: true,
      functional: true,
      choice: 'accepted_all',
      date: new Date().toISOString(),
    };
    localStorage.setItem('anemosoft_cookie_consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    const consent = {
      essential: true,
      analytics: false,
      functional: false,
      choice: 'declined_non_essential',
      date: new Date().toISOString(),
    };
    localStorage.setItem('anemosoft_cookie_consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      essential: true,
      choice: 'customized',
      date: new Date().toISOString(),
    };
    localStorage.setItem('anemosoft_cookie_consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      role="region" 
      aria-label="Cookie consent banner" 
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 sm:max-w-lg w-full animate-in slide-in-from-bottom-5 duration-300 pointer-events-auto"
    >
      <Card className="p-5 sm:p-6 bg-white/98 backdrop-blur-xl border border-slate-200/90 shadow-2xl shadow-slate-900/15 rounded-3xl text-slate-800">
        
        {/* Header Icon + Title */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/80 shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-widest block">
                Privacy & Data Consent
              </span>
              <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 leading-tight">
                We value your privacy & transparency
              </h3>
            </div>
          </div>

          <button
            onClick={handleDeclineAll}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            aria-label="Dismiss and decline non-essential cookies"
            title="Decline Non-Essential"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Informative text */}
        <p className="text-xs text-slate-600 leading-relaxed font-sans mb-3.5">
          Anemosoft uses cookies to ensure high availability, measure system performance, and provide a seamless browsing experience. We respect your autonomy and never sell your personal or corporate data.
        </p>

        {/* Legal Links directly embedded */}
        <div className="flex items-center gap-3 text-xs mb-4 text-slate-500 font-medium">
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="text-blue-600 hover:text-blue-700 underline underline-offset-2 cursor-pointer transition-colors"
          >
            Privacy Policy
          </button>
          <span className="text-slate-300">·</span>
          <button
            type="button"
            onClick={onOpenTerms}
            className="text-blue-600 hover:text-blue-700 underline underline-offset-2 cursor-pointer transition-colors"
          >
            Terms & Conditions
          </button>
          <span className="text-slate-300">·</span>
          <button
            type="button"
            onClick={() => setShowPreferences(!showPreferences)}
            className="text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>{showPreferences ? 'Hide Options' : 'Preferences'}</span>
            {showPreferences ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>

        {/* Detailed Preferences Drawer (if expanded) */}
        {showPreferences && (
          <div className="mb-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2.5 text-xs animate-in fade-in duration-150">
            {/* Essential (Locked) */}
            <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <div>
                  <span className="font-semibold text-slate-800 block">Strictly Necessary</span>
                  <span className="text-[10px] text-slate-500">Core security, sessions & routing</span>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded">
                Always Active
              </span>
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-blue-500" />
                <div>
                  <span className="font-semibold text-slate-800 block">Performance & Metrics</span>
                  <span className="text-[10px] text-slate-500">Aggregated latency & usage metrics</span>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-8 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            {/* Functional */}
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <div>
                  <span className="font-semibold text-slate-800 block">Functional & Estimator</span>
                  <span className="text-[10px] text-slate-500">Remembers configured solution specs</span>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-8 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        )}

        {/* Action Buttons: Accept / Decline / Save */}
        <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
          {showPreferences ? (
            <Button
              onClick={handleSavePreferences}
              size="sm"
              className="w-full text-xs font-bold"
            >
              Save Cookie Choices
            </Button>
          ) : (
            <>
              <Button
                onClick={handleAcceptAll}
                size="sm"
                className="w-full sm:flex-1 text-xs font-bold shadow-md shadow-blue-500/20"
              >
                Accept All Cookies
              </Button>
              <button
                type="button"
                onClick={handleDeclineAll}
                className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl transition-colors cursor-pointer"
              >
                Decline Non-Essential
              </button>
            </>
          )}
        </div>

      </Card>
    </div>
  );
};
