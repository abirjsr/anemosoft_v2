import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'mark-only' | 'stacked';
  className?: string;
  lightText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'full',
  className = '',
  lightText = false,
}) => {
  // Dimensions
  const sizes = {
    sm: { markSize: 28, textClass: 'text-base', taglineClass: 'text-[9px]' },
    md: { markSize: 38, textClass: 'text-xl', taglineClass: 'text-[10px]' },
    lg: { markSize: 52, textClass: 'text-2xl', taglineClass: 'text-[12px]' },
    xl: { markSize: 72, textClass: 'text-4xl', taglineClass: 'text-[14px]' },
  };

  const current = sizes[size];

  // SVG Anemosoft stylized 'A' with the signature aerodynamic wave ribbon
  const AnemoMark = (
    <svg
      width={current.markSize}
      height={current.markSize}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
    >
      <defs>
        {/* Primary vivid blue gradient */}
        <linearGradient id="anemoBlueGrad" x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="50%" stopColor="#0070F3" />
          <stop offset="100%" stopColor="#0047BA" />
        </linearGradient>

        {/* Dynamic aerodynamic wave ribbon gradient */}
        <linearGradient id="anemoWaveGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#00F5FF" />
          <stop offset="60%" stopColor="#00A2FF" />
          <stop offset="100%" stopColor="#0066FF" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="anemoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main geometric 'A' frame */}
      <path
        d="M60 12L24 92H44L52 74H74L60 38Z"
        fill="url(#anemoBlueGrad)"
      />
      <path
        d="M60 12L96 92H76L68 74H52L60 38Z"
        fill="url(#anemoBlueGrad)"
      />
      
      {/* Signature aerodynamic swooshing wave ribbon across the A */}
      <path
        d="M26 68C42 46 64 48 84 52C98 55 110 44 116 38C108 52 94 62 78 60C56 57 38 68 26 68Z"
        fill="url(#anemoWaveGrad)"
        filter="url(#anemoGlow)"
      />
      
      {/* Light accent inner reflex */}
      <path
        d="M60 22L70 45C64 45 56 46 50 49L60 22Z"
        fill="#FFFFFF"
        fillOpacity="0.35"
      />
    </svg>
  );

  if (variant === 'mark-only') {
    return <div className={`inline-flex items-center ${className}`}>{AnemoMark}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center group ${className}`}>
        {AnemoMark}
        <div className="mt-3 text-center">
          <div className={`font-display font-extrabold tracking-tight ${current.textClass} leading-none`}>
            <span className={lightText ? 'text-white' : 'text-slate-900'}>anemo</span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">soft</span>
          </div>
          <div className={`font-semibold tracking-[0.32em] uppercase mt-1.5 ${current.taglineClass} ${lightText ? 'text-slate-300' : 'text-slate-600'}`}>
            IDEAS INTO IMPACT
          </div>
        </div>
      </div>
    );
  }

  // Full horizontal lockup (default for navbar and headers)
  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {AnemoMark}
      <div className="flex flex-col justify-center">
        <div className={`font-display font-bold tracking-tight ${current.textClass} leading-none flex items-center`}>
          <span className={lightText ? 'text-white' : 'text-slate-900'}>anemo</span>
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">soft</span>
        </div>
        <div className={`font-semibold tracking-[0.24em] uppercase text-[9px] mt-1 ${lightText ? 'text-cyan-300' : 'text-slate-500'}`}>
          IDEAS INTO IMPACT
        </div>
      </div>
    </div>
  );
};
