import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { profile } from "../data/content";
import { GithubIcon, LinkedinIcon, SunIcon, MoonIcon, MenuIcon, CloseIcon } from "./ui/Icons";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#top" className="navbar-logo" aria-label={`${profile.name} — home`}>
          {profile.initials}
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeId === link.id ? "is-active" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="navbar-icon-link">
            <GithubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="navbar-icon-link">
            <LinkedinIcon />
          </a>
          <button
            className="navbar-icon-link"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a href={profile.resumeUrl} className="navbar-resume" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <button
            className="navbar-icon-link navbar-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={`navbar-mobile ${menuOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" onClick={handleNavClick}>
            Resume
          </a>
        </nav>
        <div className="navbar-mobile-socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <GithubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
