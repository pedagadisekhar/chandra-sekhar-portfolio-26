import { profile } from "../data/content";
import { Button } from "./ui/Button";
import { ArrowRightIcon, GithubIcon, LinkedinIcon, FileIcon } from "./ui/Icons";
import "./Hero.css";

const NODES = [
  { key: "client", label: "Client", x: 40, y: 60 },
  { key: "api", label: "API", x: 160, y: 30 },
  { key: "service", label: "Service", x: 280, y: 90 },
  { key: "cache", label: "Redis", x: 220, y: 190 },
  { key: "db", label: "Postgres", x: 360, y: 210 },
  { key: "queue", label: "Kafka", x: 100, y: 210 },
];

const PATH = "M40,60 L160,30 L280,90 L220,190 L360,210 M280,90 L100,210";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">
            {profile.role} · {profile.location}
          </span>
          <h1 className="hero-heading">
            Hi, I'm <span className="hero-heading-accent">{profile.name}.</span>
          </h1>
          <p className="hero-sub">{profile.tagline}</p>

          <ul className="hero-tech" aria-label="Core technologies">
            {profile.heroTech.map((tech, i) => (
              <li key={tech}>
                {tech}
                {i < profile.heroTech.length - 1 && <span aria-hidden="true">·</span>}
              </li>
            ))}
          </ul>

          <div className="hero-ctas">
            <Button as="a" href="#projects" variant="primary" icon={<ArrowRightIcon />}>
              View My Work
            </Button>
            <Button as="a" href="#contact" variant="secondary">
              Get In Touch
            </Button>
          </div>

          <div className="hero-links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
              <FileIcon /> Resume
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 400 260" className="hero-trace">
            <path d={PATH} className="hero-trace-line" />
            <path d={PATH} className="hero-trace-pulse" />
            {NODES.map((node) => (
              <g key={node.key} transform={`translate(${node.x}, ${node.y})`}>
                <circle r="16" className="hero-node-ring" />
                <circle r="4" className="hero-node-dot" />
                <text y="30" textAnchor="middle" className="hero-node-label">
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
