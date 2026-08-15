import { experience } from "../data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { TechChip } from "./ui/TechChip";
import { useReveal } from "../hooks/useReveal";
import "./Experience.css";

export function Experience() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section experience" id="experience">
      <div className="container" ref={ref}>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Full stack roles spanning React frontends and Java/Spring Boot backends."
        />

        <ol className="timeline">
          {experience.map((entry, i) => (
            <li className="timeline-item reveal" style={{ transitionDelay: `${i * 90}ms` }} key={entry.company}>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-card">
                <div className="timeline-head">
                  <div>
                    <h3>{entry.role}</h3>
                    <p className="timeline-company">{entry.company}</p>
                  </div>
                  <span className="timeline-duration">{entry.duration}</span>
                </div>
                <p className="timeline-summary">{entry.summary}</p>
                <ul className="timeline-highlights">
                  {entry.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
                <div className="timeline-tech">
                  {entry.tech.map((t) => (
                    <TechChip key={t} label={t} />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
