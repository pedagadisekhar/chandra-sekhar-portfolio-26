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
  role: "Full Stack Engineer",
  tagline:
    "Full Stack Engineer building scalable web applications, backend services, and production-ready systems.",
  location: "Hyderabad, India",
  yearsExperience: "3.5+",
  email: "TODO@example.com", // TODO: replace with your real email
  github: "https://github.com/pedagadisekhar",
  linkedin: "https://linkedin.com/in/TODO", // TODO: add your LinkedIn URL
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
    `I'm a Full Stack Engineer with ${profile.yearsExperience} years of experience building products end to end — React and TypeScript on the frontend, Java and Spring Boot microservices underneath.`,
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
    role: "SDE-II",
    duration: "TODO — Present", // TODO: add real start date
    summary:
      "Full stack development on production systems, working across React frontends and Java/Spring Boot services.",
    highlights: [
      "TODO: add specific responsibilities and contributions for this role",
      "TODO: add a notable feature, migration, or fix you shipped",
      "TODO: add anything about performance, reliability, or process improvements",
    ],
    tech: ["React", "TypeScript", "Java", "Spring Boot", "Microservices", "Redis", "Docker", "AWS"],
  },
  {
    company: "iConcept Software Services",
    role: "Java Full Stack Developer", // TODO: confirm exact title
    duration: "TODO", // TODO: add real dates
    summary:
      "Built and maintained full stack features spanning Java backends and React frontends.",
    highlights: [
      "TODO: add specific responsibilities and contributions for this role",
      "TODO: add a notable feature or project you worked on",
    ],
    tech: ["Java", "Spring Boot", "React.js", "Redux", "REST APIs", "CI/CD"],
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
