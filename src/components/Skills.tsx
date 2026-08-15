import { skills } from "../data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { useReveal } from "../hooks/useReveal";
import "./Skills.css";

export function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section skills" id="skills">
      <div className="container" ref={ref}>
        <SectionHeading eyebrow="Skills" title="Technical skills" />

        <div className="skills-grid">
          {skills.map((group, i) => (
            <div className="skill-category reveal" style={{ transitionDelay: `${i * 70}ms` }} key={group.category}>
              <h3>{group.category}</h3>
              <div className="skill-chips">
                {group.items.map((item) => (
                  <span className="skill-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
