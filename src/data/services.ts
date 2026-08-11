export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  heroHeadline: string;
  overview: string;
  category?: string;
  image?: string;
  capabilities: string[];
  deliverables: string[];
  metrics: { value: string; label: string }[];
  process: { step: string; title: string; desc: string }[];
  faq: { q: string; a: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "social-media-management",
    slug: "social-media-management",
    number: "01",
    title: "Social Media Management",
    category: "CREATIVE & BRAND SOCIAL",
    image: "/images/social-card.jpg",
    shortDesc: "Turn social noise into brand narrative and high-converting engagement across channels.",
    heroHeadline: "Build a Social Presence That Turns Scroll into Scale.",
    overview: "We construct high-frequency, aesthetic, and algorithmically optimized social engines. From viral short-form video production to bespoke visual curation, we make your brand impossible to scroll past.",
    capabilities: [
      "Content Strategy & Creative Direction",
      "Short-Form Video & Reels Production",
      "Copywriting & Brand Voice Development",
      "Community Management & Audience Nurturing",
      "Influencer Partnerships & UGC Curation",
      "Social Analytics & Growth Performance"
    ],
    deliverables: [
      "Monthly Content Calendar & Visual Grid Layout",
      "Full Video Editing & Motion Graphics Asset Production",
      "Daily Platform Posting & Hashtag Optimization",
      "Comprehensive Monthly ROI & Growth Analytics"
    ],
    metrics: [
      { value: "4.8x", label: "Avg. Organic Reach Growth" },
      { value: "+320%", label: "Engagement Rate Increase" },
      { value: "15M+", label: "Monthly Impressions Delivered" }
    ],
    process: [
      { step: "01", title: "Brand Voice Audit", desc: "Analyzing target personas, competitor gaps, and core brand messaging tone." },
      { step: "02", title: "Content Engine Setup", desc: "Establishing batch shoot scripts, visual templates, and publishing cadence." },
      { step: "03", title: "Execution & Moderation", desc: "Publishing high-fidelity media daily and actively engaging key followers." },
      { step: "04", title: "Scale & Optimize", desc: "Doubling down on top-performing formats to maximize organic conversions." }
    ],
    faq: [
      { q: "Which platforms do you manage?", a: "We specialize in Instagram, TikTok, LinkedIn, YouTube Shorts, and X/Twitter." },
      { q: "Do you handle content production?", a: "Yes, our team handles copy, design, video editing, motion graphics, and creative direction." }
    ]
  },
  {
    id: "ppc",
    slug: "ppc",
    number: "02",
    title: "PPC Advertising & Paid Media",
    category: "PERFORMANCE & PAID ACQUISITION",
    image: "/images/ppc-card.jpg",
    shortDesc: "Precision performance campaigns engineered for maximum return on ad spend.",
    heroHeadline: "Data-Driven Ads Built to Scale Revenue, Not Just Clicks.",
    overview: "Paid acquisition is math and psychology combined. We construct high-converting funnel architectures across Google Ads, Meta, and LinkedIn to turn every advertising dollar into predictable top-line revenue.",
    capabilities: [
      "Google Search & Shopping Ads",
      "Meta Ads (Instagram & Facebook)",
      "LinkedIn B2B Account-Based Marketing",
      "Retargeting & Dynamic Funnel Optimization",
      "Ad Creative Design & Copywriting",
      "Conversion Rate Optimization (CRO)"
    ],
    deliverables: [
      "Custom Paid Media Strategy & Funnel Architecture",
      "High-Converting Ad Copy & Visual Creative Bundles",
      "Pixel & Conversion API Advanced Event Tracking",
      "Real-Time Analytics Dashboard & Weekly ROAS Reports"
    ],
    metrics: [
      { value: "4.5x", label: "Average Blended ROAS" },
      { value: "-42%", label: "Cost Per Acquisition (CPA)" },
      { value: "$18M+", label: "Ad Spend Managed Safely" }
    ],
    process: [
      { step: "01", title: "Funnel Architecture", desc: "Mapping customer acquisition touchpoints and high-intent keyword strategies." },
      { step: "02", title: "Creative Production", desc: "Designing high-converting ad variations and copy frameworks." },
      { step: "03", title: "Campaign Launch", desc: "Deploying targeted campaign structures with conversion tracking." },
      { step: "04", title: "Algorithmic Scaling", desc: "Relentless A/B testing and bid optimization to scale winning campaigns." }
    ],
    faq: [
      { q: "What is your minimum ad spend recommendation?", a: "We generally recommend a minimum monthly ad budget of $3,000 to ensure statistical significance." },
      { q: "How quickly do we see results?", a: "Paid campaigns begin generating actionable data and traffic within 48-72 hours of launch." }
    ]
  },
  {
    id: "seo-gmb",
    slug: "seo-gmb",
    number: "03",
    title: "SEO & Google Business Profile",
    category: "SEARCH ENGINE DOMINATION",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Dominate search engine rankings and capture high-intent local and organic customers.",
    heroHeadline: "Command Organic Search & Dominate Your Market.",
    overview: "Sustainable business growth requires owning organic search intent. We combine technical SEO architecture, topical authority content strategies, and local GMB domination to lock in top search positions.",
    capabilities: [
      "Technical SEO Architecture & Site Audits",
      "High-Intent Keyword & Content Strategy",
      "Google Business Profile (GMB) Optimization",
      "Local Map Pack Domination",
      "Digital PR & High-Authority Backlink Acquisition",
      "Core Web Vitals & Speed Optimization"
    ],
    deliverables: [
      "In-Depth Technical & Semantic Site Audit",
      "Monthly Keyword Ranking & Competitor Benchmark Reports",
      "Fully Optimized Content Briefs & Publishing Strategy",
      "GMB Profile Management & Review Generation Campaigns"
    ],
    metrics: [
      { value: "310%", label: "Avg. Organic Traffic Lift" },
      { value: "#1", label: "Map Pack Positions Secured" },
      { value: "95+", label: "Core Web Vitals Performance Score" }
    ],
    process: [
      { step: "01", title: "Technical Audit", desc: "Solving crawl errors, schema markup, and speed bottlenecks." },
      { step: "02", title: "Topical Mapping", desc: "Structuring pillar content to establish domain authority." },
      { step: "03", title: "GMB Calibration", desc: "Optimizing local listings, geo-tagged signals, and citations." },
      { step: "04", title: "Authority Growth", desc: "Securing authoritative backlinks and monitoring ranking progression." }
    ],
    faq: [
      { q: "How long does SEO take to produce results?", a: "Initial momentum occurs in 60-90 days, with exponential growth compounding at 6-12 months." },
      { q: "Do you optimize local map listings?", a: "Yes, our GMB strategy is specifically engineered to put your business in the local Top 3 Map Pack." }
    ]
  },
  {
    id: "website-development",
    slug: "website-development",
    number: "04",
    title: "Website Development & UI/UX",
    category: "BESPOKE DIGITAL ENGINEERING",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Bespoke digital experiences built for lightning speed, editorial prestige, and high conversions.",
    heroHeadline: "Digital Flagships Built to Elevate Perception and Convert.",
    overview: "Your website is your brand's primary digital asset. We engineer custom high-performance websites built on Next.js and modern technologies that load instantly and turn visitors into qualified inquiries.",
    capabilities: [
      "Bespoke Next.js & React Web Applications",
      "Editorial UI/UX Prototyping & Visual Design",
      "High-Converting Landing Page Optimization",
      "Custom E-Commerce & Web Solutions",
      "Headless CMS Integration (Sanity / Strapi)",
      "Ultra-Fast Responsive Mobile Performance"
    ],
    deliverables: [
      "Complete Figma Prototype & Visual Component System",
      "Custom Production-Ready Next.js Codebase",
      "Interactive 3D Animations & Micro-Interactions",
      "Full Mobile Responsive & Accessibility Testing"
    ],
    metrics: [
      { value: "<0.8s", label: "Average Page Load Time" },
      { value: "99/100", label: "Google PageSpeed Score" },
      { value: "+185%", label: "Lead Conversion Increase" }
    ],
    process: [
      { step: "01", title: "Strategy & Wireframes", desc: "Defining site hierarchy, user journeys, and wireframe layouts." },
      { step: "02", title: "Editorial Design", desc: "Crafting modern, typography-driven visual interfaces." },
      { step: "03", title: "Frontend Engineering", desc: "Developing performant, clean Next.js code with Three.js animations." },
      { step: "04", title: "Testing & Deployment", desc: "Conducting multi-device QA, speed audits, and seamless launch." }
    ],
    faq: [
      { q: "What tech stack do you build on?", a: "We primarily use Next.js, React, Tailwind CSS, TypeScript, and Framer Motion for optimal speed and reliability." },
      { q: "Will I be able to update content easily?", a: "Yes, we integrate modern headless CMS tools so your team can publish updates effortlessly." }
    ]
  }
];
