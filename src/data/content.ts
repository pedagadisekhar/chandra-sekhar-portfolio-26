/**
 * Centralized content for the portfolio.
 *
 * Everything a recruiter or visitor sees lives here so it can be edited
 * in one place without touching component code.
 *
 * Anything marked TODO is a placeholder — swap it for the real value.
 */

export const profile = {
  name: "Chandra Sekhar",
  fullName: "Pedagadi Chandra Sekhar",
  initials: "CS",
  role: "Full Stack Ai Engineer",
  tagline:
    "Full Stack Ai Engineer building scalable web applications, backend services, and production-ready systems.",
  location: "Hyderabad, India",
  yearsExperience: "4+",
  email: "TODO@example.com", // TODO: replace with your real email
  github: "https://github.com/pedagadisekhar",
  linkedin: "https://www.linkedin.com/in/chandra-sekhar-pedagadi-42b931231/", // TODO: add your LinkedIn URL
  resumeUrl: "/resume.pdf", // TODO: drop your resume PDF into /public as resume.pdf
  heroTech: [
    "React",
    "TypeScript",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Redis",
    "Kafka",
    "Docker",
  ],
};

export const about = {
  intro: [
    `I'm a Full Stack Ai Engineer with ${profile.yearsExperience} years of experience building products end to end — React and TypeScript on the frontend, Java and Spring Boot microservices underneath.`,
    "Most of my work sits at the boundary between UI and system: I care as much about how a request feels to click as I do about how it behaves under load, retries, and failure.",
    "Outside of work I build fintech-style side projects to stress-test ideas about idempotency, caching, and event-driven design — the SwiftPay project below came out of one of those.",
  ],
  capabilities: [
    {
      title: "Frontend Engineering",
      description:
        "React, TypeScript, and Redux — building interfaces that stay fast and predictable as they grow.",
    },
    {
      title: "Backend & Microservices",
      description:
        "Java and Spring Boot services, REST APIs, and microservice boundaries designed for change.",
    },
    {
      title: "Data & Caching",
      description:
        "PostgreSQL and Redis — schema design, query performance, and caching strategy under real load.",
    },
    {
      title: "Messaging & Infra",
      description:
        "Kafka for event-driven flows, Docker for reproducible environments, CI/CD with Jenkins and CircleCI.",
    },
  ],
};

export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "ABC Fitness Solutions",
    role: "Software Development Engineer II – Java Full Stack",
    duration: "Apr 2025 – Present",
    summary:
      "Built AI-powered workflow automation and scalable full-stack features across Java, Spring Boot, React, and cloud platforms for enterprise fitness systems.",
    highlights: [
      "Built MCP-based Jira and GitHub PR automation using Claude AI, reducing story-writing effort by 70% and cutting average PR review time by 50%.",
      "Developed batch-wise bulk deletion for large-scale event data, reducing deletion time by 65% and eliminating database timeout issues.",
      "Implemented Redis caching and performance tuning that improved API response time by 50% and reduced database load by 40% during peak traffic.",
      "Led Angular-to-React migration, reducing bundle size by 35% and page load time from 3.4s to 1.5s while improving reuse across 8+ modules.",
      "Integrated LaunchDarkly feature flags, improved observability with AppDynamics and Grafana, and raised uptime from 97.4% to 99.7%.",
    ],
    tech: ["React", "TypeScript", "Java", "Spring Boot", "Redis", "Docker", "AWS", "MCP", "Claude AI"],
  },
  {
    company: "iConcept Software Services Pvt Ltd",
    role: "Software Engineer – Full Stack (Java & React)",
    duration: "Jan 2023 – Apr 2025",
    summary:
      "Delivered end-to-end enterprise applications with Java backends, React frontends, reporting automation, and production support across multiple product lines.",
    highlights: [
      "Designed RBAC with TM/RM/ZM hierarchy, eliminating unauthorized access incidents and reducing approval cycle time by 45%.",
      "Optimized Spring Boot REST APIs for 10,000+ daily transactions, improving response time by 30% through query tuning and pooling improvements.",
      "Built reusable React.js UIs and automated critical workflows, accelerating feature delivery by 50% and saving 18 hours per week.",
      "Integrated email, SMS, Excel export, and PDF generation pipelines, reducing reporting turnaround from 2 days to real time.",
      "Resolved 40+ cross-browser issues and refactored the codebase for caching and performance, raising Lighthouse scores from 62 to 84.",
    ],
    tech: ["Java", "Spring Boot", "React.js", "Redux", "REST APIs", "C#", "Redis", "CI/CD"],
  },
];

export interface Project {
  id: string;
  name: string;
  problem: string;
  build: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  flow: string[];
}

export const projects: Project[] = [
  {
    id: "swiftpay",
    name: "SwiftPay",
    problem:
      "Payment systems fail in interesting ways under concurrent load — duplicate charges, dropped events, connection pool exhaustion. SwiftPay is a hands-on exploration of how to keep a transaction gateway correct and fast when that happens.",
    build:
      "A production-style transaction gateway built around idempotent request handling and asynchronous, event-driven processing. Payment requests are validated and persisted to PostgreSQL, published to Kafka for downstream processing, and cached through Redis to keep hot reads off the database.",
    highlights: [
      "Tuned HikariCP pooling, Tomcat thread limits, and Kafka consumer batching to resolve throughput bottlenecks under JMeter load testing",
      "Reached 250 TPS in load testing after diagnosing and fixing pool exhaustion and JVM/PostgreSQL tuning issues",
      "Idempotency keys and event-driven processing to keep retries safe and consistent",
      "Fully containerized with Docker Compose for a reproducible local environment",
    ],
    tech: ["Java 21", "Spring Boot", "PostgreSQL", "Apache Kafka", "Redis", "Docker Compose"],
    github: "https://github.com/pedagadisekhar/transaction-gateway",
    featured: true,
    flow: ["Client", "REST API", "Spring Boot Service", "Redis Cache", "PostgreSQL", "Kafka", "Async Processing"],
  },
  // TODO: add more of your real projects here, following the same shape.
  // Keep placeholders honest — don't invent projects that don't exist.
];

export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Redux", "HTML5", "CSS3", "Vite"],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "REST APIs", "Microservices", "Node.js"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    category: "Messaging & Infrastructure",
    items: ["Kafka", "Docker", "Jenkins", "CircleCI", "AWS", "CI/CD"],
  },
];

export const toolbox = {
  Frontend: ["React", "TypeScript", "Redux", "Vite"],
  Backend: ["Java", "Spring Boot", "Node.js", "REST APIs"],
  Databases: ["PostgreSQL", "MySQL", "Redis"],
  Messaging: ["Kafka"],
  "Cloud & DevOps": ["AWS", "Docker", "Jenkins", "CircleCI"],
  "Developer Tools": ["Git", "GitHub", "Postman", "VS Code"],
};

export const architecture = {
  title: "How I Build Systems",
  description:
    "A request from the browser rarely talks to a database directly in anything I ship. This is the shape most of my backend work takes — a thin API layer, a service that owns the business logic, a cache in front of the data it reads often, and a queue for anything that doesn't need to happen synchronously.",
  steps: [
    { label: "Frontend", detail: "React client" },
    { label: "REST API", detail: "Spring Boot controller" },
    { label: "Service Layer", detail: "Business logic, validation" },
    { label: "Redis", detail: "Hot-path caching" },
    { label: "PostgreSQL", detail: "Source of truth" },
    { label: "Kafka", detail: "Event-driven fan-out" },
    { label: "Async Processing", detail: "Downstream consumers" },
  ],
};
