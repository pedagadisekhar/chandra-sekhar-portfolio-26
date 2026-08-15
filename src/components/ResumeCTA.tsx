import { profile } from "../data/content";
import { Button } from "./ui/Button";
import { ArrowRightIcon, FileIcon } from "./ui/Icons";
import { useReveal } from "../hooks/useReveal";
import "./ResumeCTA.css";

export function ResumeCTA() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section resume-cta">
      <div className="container" ref={ref}>
        <div className="resume-cta-card reveal">
          <div>
            <h2>Want the complete story?</h2>
            <p>Every role, every stack, in one document.</p>
          </div>
          <div className="resume-cta-actions">
            <Button as="a" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" variant="secondary" icon={<FileIcon />}>
              View Resume
            </Button>
            <Button as="a" href={profile.resumeUrl} download variant="primary" icon={<ArrowRightIcon />}>
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
