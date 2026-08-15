import { toolbox } from "../data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { useReveal } from "../hooks/useReveal";
import "./Toolbox.css";

export function Toolbox() {
  const ref = useReveal<HTMLDivElement>();
  const categories = Object.entries(toolbox);

  return (
    <section className="section toolbox" id="toolbox">
      <div className="container" ref={ref}>
        <SectionHeading eyebrow="Toolbox" title="Current stack" />

        <div className="toolbox-grid">
          {categories.map(([category, items], i) => (
            <div className="toolbox-group reveal" style={{ transitionDelay: `${i * 60}ms` }} key={category}>
              <span className="toolbox-category">{category}</span>
              <div className="toolbox-items">
                {items.map((item) => (
                  <span className="toolbox-item" key={item}>
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
