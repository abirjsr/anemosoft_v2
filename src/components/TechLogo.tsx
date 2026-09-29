import React, { useState } from 'react';

interface TechLogoProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showBackground?: boolean;
}

// Map each technology name to its authentic original logo
const TECH_LOGO_MAP: Record<string, { url?: string; isCustomSvg?: boolean; alt: string }> = {
  // Backend & Core
  'Java Spring Boot': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    alt: 'Spring Boot official logo'
  },
  'Spring Boot': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    alt: 'Spring Boot official logo'
  },
  'Java': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    alt: 'Java official logo'
  },
  'Kotlin': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',
    alt: 'Kotlin official logo'
  },
  'Kotlin (Android)': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',
    alt: 'Kotlin official logo'
  },
  '.NET': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
    alt: '.NET official logo'
  },
  'NestJS': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
    alt: 'NestJS official logo'
  },
  'Python': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    alt: 'Python official logo'
  },
  'FastAPI': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    alt: 'FastAPI official logo'
  },
  'FastAPI AI Proxies': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    alt: 'FastAPI official logo'
  },
  'Node.js': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    alt: 'Node.js official logo'
  },

  // Frontend & Web
  'Next.js': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    alt: 'Next.js official logo'
  },
  'React': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    alt: 'React official logo'
  },
  'TypeScript': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    alt: 'TypeScript official logo'
  },
  'Tailwind CSS': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    alt: 'Tailwind CSS official logo'
  },

  // Mobile
  'Android': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg',
    alt: 'Android official logo'
  },
  'iOS & Cross-Platform': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg',
    alt: 'Apple iOS official logo'
  },
  'Background Services': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg',
    alt: 'Background Services'
  },

  // Databases, Queues & DevOps
  'PostgreSQL': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    alt: 'PostgreSQL official logo'
  },
  'PostgreSQL & SQL': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    alt: 'PostgreSQL official logo'
  },
  'NoSQL': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    alt: 'MongoDB / NoSQL official logo'
  },
  'Redis': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
    alt: 'Redis official logo'
  },
  'Apache Kafka': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg',
    alt: 'Apache Kafka official logo'
  },
  'Kafka': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg',
    alt: 'Apache Kafka official logo'
  },
  'BullMQ': {
    isCustomSvg: true,
    alt: 'BullMQ Queue System'
  },
  'Docker': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    alt: 'Docker official logo'
  },
  'Kubernetes': {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
    alt: 'Kubernetes official logo'
  },

  // AI & Intelligence
  'Autonomous AI Agents': {
    isCustomSvg: true,
    alt: 'Autonomous AI Agents'
  },
  'RAG & Knowledge Bases': {
    isCustomSvg: true,
    alt: 'Retrieval-Augmented Generation & Vector DB'
  }
};

export const TechLogo: React.FC<TechLogoProps> = ({
  name,
  size = 'md',
  className = '',
  showBackground = true,
}) => {
  const [hasError, setHasError] = useState(false);

  // Normalize lookup key
  const matchedKey = Object.keys(TECH_LOGO_MAP).find(
    (key) => key.toLowerCase() === name.toLowerCase() || name.toLowerCase().includes(key.toLowerCase())
  );

  const logoInfo = matchedKey ? TECH_LOGO_MAP[matchedKey] : null;

  const sizeDimensions = {
    xs: { px: 16, container: 'w-6 h-6 p-1' },
    sm: { px: 20, container: 'w-7 h-7 p-1' },
    md: { px: 28, container: 'w-10 h-10 p-2' },
    lg: { px: 36, container: 'w-12 h-12 p-2.5' },
    xl: { px: 48, container: 'w-16 h-16 p-3' },
  };

  const currentSize = sizeDimensions[size];

  // Custom high-fidelity SVGs for BullMQ, AI Agents, and RAG Knowledge
  const renderCustomSvg = () => {
    if (name.includes('BullMQ')) {
      return (
        <svg
          width={currentSize.px}
          height={currentSize.px}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          {/* BullMQ Horns & Rocket Vector */}
          <rect width="100" height="100" rx="20" fill="#7C3AED" />
          <path d="M28 35C24 48 32 68 50 78C68 68 76 48 72 35C65 24 58 32 50 38C42 32 35 24 28 35Z" fill="#FFFFFF" />
          <circle cx="50" cy="52" r="10" fill="#C084FC" />
          <path d="M50 30L55 45H45L50 30Z" fill="#F43F5E" />
          <path d="M35 48L42 56L36 62" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          <path d="M65 48L58 56L64 62" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    }

    if (name.includes('AI') || name.includes('Agent')) {
      return (
        <svg
          width={currentSize.px}
          height={currentSize.px}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <rect width="100" height="100" rx="20" fill="#0D9488" />
          <path d="M50 18L80 35V65L50 82L20 65V35L50 18Z" stroke="#FFFFFF" strokeWidth="6" strokeLinejoin="round" />
          <circle cx="50" cy="50" r="14" fill="#2DD4BF" />
          <circle cx="50" cy="50" r="7" fill="#FFFFFF" />
          <line x1="50" y1="18" x2="50" y2="36" stroke="#FFFFFF" strokeWidth="5" />
          <line x1="80" y1="65" x2="64" y2="57" stroke="#FFFFFF" strokeWidth="5" />
          <line x1="20" y1="65" x2="36" y2="57" stroke="#FFFFFF" strokeWidth="5" />
        </svg>
      );
    }

    // Default RAG / Vector
    return (
      <svg
        width={currentSize.px}
        height={currentSize.px}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect width="100" height="100" rx="20" fill="#2563EB" />
        <circle cx="30" cy="30" r="10" fill="#93C5FD" />
        <circle cx="70" cy="30" r="10" fill="#93C5FD" />
        <circle cx="50" cy="70" r="12" fill="#FFFFFF" />
        <line x1="30" y1="30" x2="50" y2="70" stroke="#FFFFFF" strokeWidth="6" />
        <line x1="70" y1="30" x2="50" y2="70" stroke="#FFFFFF" strokeWidth="6" />
        <line x1="30" y1="30" x2="70" y2="30" stroke="#93C5FD" strokeWidth="4" strokeDasharray="6 4" />
      </svg>
    );
  };

  const containerClasses = showBackground
    ? `${currentSize.container} rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${className}`
    : `inline-flex items-center justify-center shrink-0 ${className}`;

  if (!logoInfo || hasError || logoInfo.isCustomSvg) {
    return (
      <div className={containerClasses} title={name}>
        {renderCustomSvg()}
      </div>
    );
  }

  return (
    <div className={containerClasses} title={name}>
      <img
        src={logoInfo.url}
        alt={logoInfo.alt}
        width={currentSize.px}
        height={currentSize.px}
        loading="lazy"
        onError={() => setHasError(true)}
        className="object-contain max-h-full max-w-full drop-shadow-2xs select-none pointer-events-none"
      />
    </div>
  );
};
