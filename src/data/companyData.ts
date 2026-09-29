export interface ProjectItem {
  id: string;
  title: string;
  category: 'Custom Software' | 'Web Applications' | 'AI Agents' | 'Mobile Apps' | 'Cloud & DevOps';
  clientIndustry: string;
  shortDesc: string;
  fullDesc: string;
  challenge: string;
  solution: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  architectureHighlights: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  capabilities: string[];
  deliverables: string[];
}

export const COMPANY_DETAILS = {
  name: "Anemosoft",
  tagline: "IDEAS INTO IMPACT",
  subTagline: "Custom Software Engineering, Autonomous AI Agents & High-Scale Systems",
  description: "Anemosoft is a high-velocity software engineering agency specializing in custom software development, modern web applications, autonomous AI agents, and resilient mobile solutions that scale businesses efficiently.",
  phone: "+8801785513286",
  phoneDisplay: "+880 1785 513 286",
  whatsappUrl: "https://wa.me/8801785513286?text=Hello%20Anemosoft%2C%20I%20would%20like%20to%20discuss%20a%20software%20project.",
  email: "contact@anemosoft.com",
  websiteUrl: "https://www.anemosoft.com",
  websiteDisplay: "www.anemosoft.com",
  instagramUrl: "https://www.instagram.com/anemosoft/?igsh=N3djYnNoN3pkNDFj&utm_source=ig_contact_invite&fbclid=IwY2xjawSriptleHRuA2FlbQIxMABicmlkETFWWm5xQVU4dzdXOTgwdHlGc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHtnXYHk8UqQTON5VPTvKoP7fzVoPYVl7b2wzlwm73BAybPVjrzn7S7X1WSPU_aem__6z2_wXmv4HVPVZpXqulsw",
  facebookUrl: "https://www.facebook.com/profile.php?id=100087771241931&rdid=dfWQgtgvYuqagaOI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BkYyzyF39#",
  location: {
    street: "Bablatola, Baliadanga, 5 No. Ward",
    union: "Fathehpur Union",
    thana: "Jashore Sadar",
    city: "Jashore",
    division: "Khulna",
    country: "Bangladesh",
    formatted: "Bablatola, Baliadanga, 5 No. Ward, Fathehpur Union, Jashore Sadar, Jashore, Khulna, Bangladesh"
  },
  established: "2022",
  completedProjects: "45+",
  clientSatisfaction: "99.4%",
  averageUptime: "99.99%"
};

export const TECH_STACK_CATEGORIES = [
  {
    category: "Backend & Core",
    description: "Robust, concurrency-proven application backends and high-throughput microservices.",
    items: [
      { name: "Java Spring Boot", desc: "Enterprise microservices & transactional backends", highlight: true },
      { name: "Kotlin", desc: "Expressive, null-safe backend and Android systems", highlight: true },
      { name: "Node.js", desc: "Event-driven asynchronous I/O runtimes", highlight: false },
      { name: "NestJS", desc: "Structured, modular TypeScript backend architecture", highlight: true },
      { name: ".NET", desc: "High-performance enterprise services & C# solutions", highlight: true },
      { name: "Python", desc: "Scientific computing, automation & backend pipelines", highlight: false },
      { name: "FastAPI", desc: "High-speed async Python REST APIs & AI endpoints", highlight: true }
    ]
  },
  {
    category: "Frontend & Web",
    description: "Lightning-fast, SEO-optimized, accessible user experiences.",
    items: [
      { name: "Next.js", desc: "Full-stack React framework with SSR, ISR & edge compute", highlight: true },
      { name: "React", desc: "Component-driven interfaces & interactive state engines", highlight: false },
      { name: "TypeScript", desc: "Static type safety across full application lifecycles", highlight: false },
      { name: "Tailwind CSS", desc: "Utility-first modern design token implementation", highlight: false }
    ]
  },
  {
    category: "Mobile App Development",
    description: "Fluid native and cross-platform applications with offline-first sync.",
    items: [
      { name: "Kotlin (Android)", desc: "Modern Android development with Jetpack Compose", highlight: true },
      { name: "iOS & Cross-Platform", desc: "High-fidelity native and hybrid mobile solutions", highlight: false },
      { name: "Background Services", desc: "Persistent sync, push notifications & local SQLite", highlight: false }
    ]
  },
  {
    category: "AI Agents & Intelligence",
    description: "Autonomous reasoning, specialized agents, and task automation pipelines.",
    items: [
      { name: "Autonomous AI Agents", desc: "Multi-agent workflows, tool execution & task planning", highlight: true },
      { name: "RAG & Knowledge Bases", desc: "Vector indexing, semantic search & knowledge graphs", highlight: true },
      { name: "FastAPI AI Proxies", desc: "Zero-latency streaming LLM orchestration backends", highlight: false }
    ]
  },
  {
    category: "Databases, Queues & DevOps",
    description: "High-availability storage, distributed messaging, and containerized scale.",
    items: [
      { name: "PostgreSQL & SQL", desc: "ACID compliant relational storage & complex queries", highlight: true },
      { name: "NoSQL", desc: "Flexible document stores for unstructured data flows", highlight: false },
      { name: "Redis", desc: "Sub-millisecond in-memory caching & distributed locks", highlight: true },
      { name: "Apache Kafka", desc: "High-volume distributed event streaming", highlight: true },
      { name: "BullMQ", desc: "Heavyweight background job and worker queue orchestration", highlight: true },
      { name: "Docker", desc: "Immutable containerized environments", highlight: false },
      { name: "Kubernetes", desc: "Automated scaling, self-healing cluster orchestration", highlight: true }
    ]
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "custom-software",
    number: "01",
    title: "Custom Software Engineering",
    tagline: "Tailored enterprise systems designed for massive scale and zero downtime.",
    description: "We design, build, and deploy purpose-built software architectures that solve complex business operations. From high-load transactional cores to custom ERPs and financial platforms, our code is built on clean hexagonal architecture.",
    techStack: ["Java Spring Boot", "Kotlin", ".NET", "PostgreSQL", "Kafka", "Docker"],
    capabilities: [
      "High-throughput transactional microservices",
      "Event-driven architecture with Apache Kafka",
      "Legacy system modernization & database migration",
      "Secure role-based access control (RBAC & OAuth2)"
    ],
    deliverables: [
      "Production-ready microservices repository",
      "Automated CI/CD pipelines & test suites",
      "API contracts & OpenAPI/Swagger specifications",
      "Comprehensive system architecture documentation"
    ]
  },
  {
    id: "web-development",
    number: "02",
    title: "Modern Web Platforms & Applications",
    tagline: "Ultra-fast, conversion-engineered digital products built on Next.js & NestJS.",
    description: "We build intuitive, high-performance web platforms that load instantaneously, rank high on search engines, and provide seamless user flows. We integrate real-time updates, reactive state, and robust server-side rendering.",
    techStack: ["Next.js", "NestJS", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    capabilities: [
      "Server-side rendered (SSR) & statically generated portals",
      "Interactive enterprise client dashboards & SaaS portals",
      "Real-time collaborative features & WebSocket streaming",
      "Payment gateway integrations & billing engines"
    ],
    deliverables: [
      "Fully responsive responsive web application",
      "Admin telemetry dashboard & content controls",
      "SEO & Core Web Vitals optimization score > 95",
      "End-to-end user authentication flow"
    ]
  },
  {
    id: "ai-agents",
    number: "03",
    title: "AI Agents & Autonomous Automation",
    tagline: "Intelligent agent swarms and AI workflows that execute complex business tasks.",
    description: "Move beyond simple chatbots. We engineer autonomous AI agents capable of reasoning, calling internal APIs, analyzing unstructured documents, and executing repetitive enterprise workflows with human-in-the-loop oversight.",
    techStack: ["Python", "FastAPI", "BullMQ", "Redis", "Vector Databases", "Next.js"],
    capabilities: [
      "Multi-agent task orchestration & tool calling",
      "Custom Retrieval-Augmented Generation (RAG) on private data",
      "Automated document processing, extraction & summarization",
      "Background worker processing with Redis and BullMQ"
    ],
    deliverables: [
      "Custom trained agent decision workflows",
      "FastAPI microservice proxy with streaming responses",
      "Evaluation telemetry & hallucination guardrails",
      "Interactive human review & override dashboard"
    ]
  },
  {
    id: "mobile-development",
    number: "04",
    title: "Mobile App Development",
    tagline: "Performant, native Android & cross-platform applications built for retention.",
    description: "We develop reliable mobile applications that engage users and work effortlessly offline. Using Kotlin Jetpack Compose and battle-tested frameworks, our apps deliver silky 60fps performance and secure biometric authentication.",
    techStack: ["Kotlin", "Android SDK", "Node.js", "PostgreSQL", "Firebase / Local DB"],
    capabilities: [
      "Modern native Android applications with Kotlin Compose",
      "Cross-platform parity with offline-first synchronization",
      "Secure hardware encryption, biometric login & push notifications",
      "Background geofencing, tracking & real-time telematics"
    ],
    deliverables: [
      "App Store & Google Play production builds",
      "Comprehensive device test coverage",
      "Mobile analytics & crash reporting integration",
      "Backend sync APIs with delta change protocols"
    ]
  },
  {
    id: "cloud-devops",
    number: "05",
    title: "Cloud Infrastructure, Kubernetes & Scale",
    tagline: "Zero-friction containerization, autoscaling clusters, and distributed resilience.",
    description: "We ensure your business handles traffic spikes effortlessly. By deploying on Kubernetes, Docker, and distributed message queues like Kafka and BullMQ, we guarantee fault isolation and sub-second recovery.",
    techStack: ["Kubernetes", "Docker", "Apache Kafka", "Redis", "BullMQ", "PostgreSQL"],
    capabilities: [
      "Kubernetes cluster setup & self-healing pod management",
      "Zero-downtime rolling deployments & blue-green pipelines",
      "Distributed cache architecture with Redis clusters",
      "High-durability event streaming and queue backoff management"
    ],
    deliverables: [
      "Helm charts & Kubernetes manifest configuration",
      "Production monitoring, Prometheus metrics & Grafana alerts",
      "Disaster recovery runbooks & automated backup jobs",
      "Infrastructure-as-Code setup"
    ]
  }
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "aegis-bank",
    title: "AegisPay Distributed Transaction Core",
    category: "Custom Software",
    clientIndustry: "Fintech & Banking",
    shortDesc: "High-concurrency payment engine processing 15,000+ financial events per second with ACID compliance.",
    fullDesc: "Anemosoft engineered an enterprise transactional ledger for a high-growth fintech provider. The platform replaces an aging monolithic database with a distributed event-driven pipeline capable of handling peaks without dropped transactions.",
    challenge: "The client suffered from lock contention during high transaction bursts, causing payment timeouts and data inconsistency.",
    solution: "Architected a dual-phase commit service utilizing Java Spring Boot, Apache Kafka for transactional event logging, Redis for distributed locking, and PostgreSQL with table partitioning.",
    technologies: ["Java Spring Boot", "Apache Kafka", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    metrics: [
      { label: "Peak TPS", value: "15,200/sec" },
      { label: "P99 Latency", value: "28ms" },
      { label: "System Uptime", value: "99.995%" }
    ],
    accentColor: "from-blue-600 to-cyan-500",
    architectureHighlights: [
      "Kafka topic partitioning for multi-tenant isolation",
      "Redis redlock algorithm preventing double-spend anomalies",
      "Kubernetes Horizontal Pod Autoscaling based on queue depth",
      "Automated reconciliation jobs running every midnight"
    ]
  },
  {
    id: "agentflow-ai",
    title: "CognitiveOps Autonomous AI Agent Swarm",
    category: "AI Agents",
    clientIndustry: "Enterprise Operations & Legal",
    shortDesc: "Multi-agent autonomous system that ingests, audits, and extracts regulatory compliance findings.",
    fullDesc: "We built an autonomous AI platform that replaces weeks of manual contract and compliance audit. Specialized agents independently verify clauses, query vector memory, and generate audit-ready mitigation plans.",
    challenge: "Legal and compliance officers were overwhelmed by 1,200+ monthly vendor contracts, risking regulatory fines from missed non-compliance items.",
    solution: "Engineered a Python FastAPI microservice orchestrating cooperative LLM agents with BullMQ distributed worker queues, Redis caching, and a Next.js administrative dashboard.",
    technologies: ["Python", "FastAPI", "BullMQ", "Redis", "Next.js", "PostgreSQL", "NoSQL"],
    metrics: [
      { label: "Audit Time Cut", value: "82%" },
      { label: "Extraction Accuracy", value: "99.1%" },
      { label: "Monthly Contracts", value: "4,500+" }
    ],
    accentColor: "from-cyan-500 to-teal-400",
    architectureHighlights: [
      "BullMQ asynchronous job pipelines with automatic retries",
      "FastAPI streaming endpoint delivering real-time agent thoughts",
      "Chunked vector indexing with hybrid lexical-semantic search",
      "Human-in-the-loop review interface built with Next.js"
    ]
  },
  {
    id: "logistix-mobile",
    title: "RouteMaster Fleet & Driver Mobile Suite",
    category: "Mobile Apps",
    clientIndustry: "Logistics & Global Supply Chain",
    shortDesc: "Offline-first Kotlin mobile application with real-time telematics and dynamic dispatch engine.",
    fullDesc: "A complete mobile and backend solution for cross-border logistics fleets. Drivers navigate offline routes, log proof of delivery via biometrics and signature capture, and sync automatically upon cellular reconnection.",
    challenge: "Frequent cellular dead zones in rural transit corridors led to lost delivery logs, delayed manifests, and customer friction.",
    solution: "Developed a native Kotlin Android application with local Room SQLite database and background WorkManager synchronization connecting to a NestJS and PostgreSQL backend.",
    technologies: ["Kotlin", "Android SDK", "NestJS", "Node.js", "PostgreSQL", "Docker"],
    metrics: [
      { label: "Active Drivers", value: "1,800+" },
      { label: "Offline Sync Rate", value: "100%" },
      { label: "Delivery Speedup", value: "+24%" }
    ],
    accentColor: "from-blue-500 to-indigo-600",
    architectureHighlights: [
      "Delta synchronization protocol minimizing payload size by 78%",
      "Background telemetry recording GPS coordinates at 5-second intervals",
      "AES-256 encrypted local storage on device",
      "NestJS modular backend with clean domain-driven architecture"
    ]
  },
  {
    id: "omnicommerce-scale",
    title: "HyperScale Global E-Commerce Core",
    category: "Web Applications",
    clientIndustry: "Retail & Multi-Vendor Marketplace",
    shortDesc: "Next.js & .NET enterprise platform serving 2.4M monthly visitors with zero flash-sale degradations.",
    fullDesc: "Designed for a multinational retail brand experiencing massive flash sales. The system decouples catalog browsing from checkout processing to withstand massive traffic spikes.",
    challenge: "Black Friday traffic spikes regularly caused 504 Gateway Timeouts and database connection pool exhaustion on their prior legacy monolithic platform.",
    solution: "Migrated the storefront to Next.js with edge caching, backed by high-performance .NET microservices, Redis caching tiers, BullMQ queues, and Kubernetes autoscaling clusters.",
    technologies: ["Next.js", ".NET", "BullMQ", "Redis", "PostgreSQL", "Kubernetes", "Docker"],
    metrics: [
      { label: "Monthly Users", value: "2.4M" },
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Checkout Conversion", value: "+38%" }
    ],
    accentColor: "from-sky-500 to-blue-700",
    architectureHighlights: [
      "Next.js Incremental Static Regeneration (ISR) for 50,000+ SKU pages",
      ".NET Core minimal APIs with zero memory leak profile",
      "Redis sentinel cluster serving 92% of queries from memory",
      "BullMQ asynchronous order fulfillment and notification dispatch"
    ]
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    quote: "Anemosoft transformed our complex legacy architecture into a blazing-fast distributed engine. Their mastery of Spring Boot, Kafka, and Kubernetes allowed us to scale seamlessly across 14 new regions without a hiccup.",
    author: "Tariqul Islam",
    role: "Chief Technology Officer",
    company: "Apex Global FinPay",
    location: "Singapore & Dhaka",
    stats: "15k TPS handled reliably"
  },
  {
    quote: "The AI agent platform Anemosoft developed with FastAPI and BullMQ cut our document review cycle from 10 days to under 4 hours. They don't just write code; they think through enterprise edge cases deeply.",
    author: "Elena Rostova",
    role: "VP of Product Engineering",
    company: "Vanguard Compliance Tech",
    location: "Dubai",
    stats: "82% reduction in processing time"
  },
  {
    quote: "Finding an engineering team proficient in Kotlin for mobile and NestJS for backend at this quality level is rare. Anemosoft delivered our driver application ahead of schedule with 100% offline resilience.",
    author: "Mahmud Hasan",
    role: "Head of Digital Operations",
    company: "TransLogistics Network",
    location: "Khulna & Chattogram",
    stats: "1,800+ daily active drivers"
  }
];

export const FREQUENTLY_ASKED_QUESTIONS = [
  {
    question: "What types of custom software projects does Anemosoft specialize in?",
    answer: "We specialize in end-to-end custom software engineering: enterprise backend microservices (Java Spring Boot, .NET, Node.js, NestJS), AI agents and automated reasoning pipelines (Python, FastAPI, BullMQ), modern web applications (Next.js, TypeScript), native mobile apps (Kotlin), and cloud infrastructure (Kubernetes, Docker, Kafka, Redis, PostgreSQL)."
  },
  {
    question: "How do we get started and what is your development process?",
    answer: "Every engagement begins with an architecture discovery call. We review your product goals, technical constraints, and data requirements, deliver a concrete technical specification and milestone timeline within 3–5 business days, and begin sprint execution with weekly demos and continuous code repository access."
  },
  {
    question: "Who owns the intellectual property (IP) and source code?",
    answer: "You own 100% of all intellectual property, source code repositories, architectural designs, and deployment configurations from day one. We hand over clean Git histories, CI/CD pipelines, and comprehensive documentation upon milestone completion."
  },
  {
    question: "Can Anemosoft integrate AI agents into our existing software stack?",
    answer: "Yes. We frequently build secure AI agent layers over existing legacy ERPs, relational databases (PostgreSQL/SQL), and REST APIs. Using FastAPI, Python, Redis, and BullMQ, we ensure AI services run asynchronously without stalling your primary application."
  },
  {
    question: "How do you handle scaling and high-concurrency workloads?",
    answer: "We design with distributed, decoupled architectures: Apache Kafka for event-driven decoupled streaming, Redis for distributed memory caching and rate limiting, BullMQ for resilient job processing, and Kubernetes for horizontal auto-scaling and zero-downtime rolling updates."
  },
  {
    question: "Where is Anemosoft located and how can we contact the team?",
    answer: "Our registered engineering office is located at Bablatola, Baliadanga, 5 No. Ward, Fathehpur Union, Jashore Sadar, Jashore, Khulna, Bangladesh. You can call us directly at +8801785513286, email contact@anemosoft.com, or schedule a discovery consultation right here."
  }
];
