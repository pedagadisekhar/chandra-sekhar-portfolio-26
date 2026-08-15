import { profile } from "../data/content";
import { GithubIcon, LinkedinIcon, MailIcon } from "./ui/Icons";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#top" className="footer-logo">
            {profile.initials}
          </a>
          <div>
            <p className="footer-name">{profile.fullName}</p>
            <p className="footer-tagline">Full stack engineer, backend-leaning.</p>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <GithubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <LinkedinIcon />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 {profile.fullName}. All rights reserved.</p>
        <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </footer>
  );
}
