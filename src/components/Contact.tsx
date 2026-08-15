import { useState, type FormEvent } from "react";
import { profile } from "../data/content";
import { Button } from "./ui/Button";
import { GithubIcon, LinkedinIcon, MailIcon, CheckIcon } from "./ui/Icons";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

type Status = "idle" | "error" | "success";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const validate = (): boolean => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Enter your email.";
    } else if (!EMAIL_RE.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Add a short message.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setStatus("success");
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact-inner" ref={ref}>
        <div className="contact-copy reveal">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let's build something useful.</h2>
          <p className="section-desc">
            Whether it's a product, a backend system, a frontend experience, or an interesting engineering
            problem — I'm always open to a good conversation.
          </p>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <MailIcon /> {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon /> GitHub
            </a>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span className="form-error" id="name-error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span className="form-error" id="email-error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <span className="form-error" id="message-error">
                {errors.message}
              </span>
            )}
          </div>

          <Button as="button" type="submit" variant="primary">
            Send Message
          </Button>

          {status === "success" && (
            <p className="form-status form-status-success" role="status">
              <CheckIcon /> Your email app should now be open with the message ready to send.
            </p>
          )}
          {status === "error" && (
            <p className="form-status form-status-error" role="alert">
              Please fix the highlighted fields above.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
