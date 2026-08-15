import { about } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import "./About.css";

export function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section about" id="about">
      <div className="container about-inner" ref={ref}>
        <div className="about-text reveal">
          <span className="eyebrow">About</span>
          <h2 className="section-title">Engineering profile</h2>
          {about.intro.map((paragraph, i) => (
            <p key={i} className="about-paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="about-capabilities">
          {about.capabilities.map((cap, i) => (
            <div className="capability-card reveal" style={{ transitionDelay: `${i * 70}ms` }} key={cap.title}>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
