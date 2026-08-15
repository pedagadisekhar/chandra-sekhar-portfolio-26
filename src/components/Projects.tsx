import { projects } from "../data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { TechChip } from "./ui/TechChip";
import { useReveal } from "../hooks/useReveal";
import { ArrowUpRightIcon, GithubIcon } from "./ui/Icons";
import "./Projects.css";

export function Projects() {
  const ref = useReveal<HTMLDivElement>();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="section projects" id="projects">
      <div className="container" ref={ref}>
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="Systems I've designed and built end to end, with an emphasis on how they behave under real load."
        />

        <div className="projects-featured">
          {featured.map((project) => (
            <article className="project-card project-card-featured reveal" key={project.id}>
              <div className="project-card-body">
                <div className="project-card-top">
                  <h3>{project.name}</h3>
                  <div className="project-card-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub`}>
                        <GithubIcon />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} live demo`}>
                        <ArrowUpRightIcon />
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-problem">{project.problem}</p>
                <p className="project-build">{project.build}</p>

                <ul className="project-highlights">
                  {project.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <TechChip key={t} label={t} />
                  ))}
                </div>
              </div>

              <div className="project-flow" aria-label="Architecture flow">
                {project.flow.map((step, idx) => (
                  <span key={step} className="project-flow-step">
                    {step}
                    {idx < project.flow.length - 1 && <span className="project-flow-arrow" aria-hidden="true">→</span>}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="projects-grid">
            {rest.map((project) => (
              <article className="project-card reveal" key={project.id}>
                <div className="project-card-top">
                  <h3>{project.name}</h3>
                  <div className="project-card-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub`}>
                        <GithubIcon />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} live demo`}>
                        <ArrowUpRightIcon />
                      </a>
                    )}
                  </div>
                </div>
                <p className="project-build">{project.build}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <TechChip key={t} label={t} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
