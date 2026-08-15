import { architecture } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import "./Architecture.css";

export function Architecture() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section architecture" id="architecture">
      <div className="container" ref={ref}>
        <div className="architecture-head reveal">
          <span className="eyebrow">System design</span>
          <h2 className="section-title">{architecture.title}</h2>
          <p className="section-desc">{architecture.description}</p>
        </div>

        <div className="architecture-flow reveal">
          {architecture.steps.map((step, idx) => (
            <div className="architecture-step" key={step.label}>
              <div className="architecture-node">
                <span className="architecture-node-index">{String(idx + 1).padStart(2, "0")}</span>
                <span className="architecture-node-label">{step.label}</span>
                <span className="architecture-node-detail">{step.detail}</span>
              </div>
              {idx < architecture.steps.length - 1 && (
                <div className="architecture-connector" aria-hidden="true">
                  <span className="architecture-connector-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
