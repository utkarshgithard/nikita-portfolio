import type { ReactNode } from "react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  email,
  github,
  linkedin,
  phone,
  primarySkills,
  projects,
  skillGroups,
} from "@/lib/portfolio";

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 16 16"
      fill="none"
    >
      {diagonal ? (
        <path d="M4 12 12 4M5 4h7v7" />
      ) : (
        <path d="M2.5 8h10m-4-4 4 4-4 4" />
      )}
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  detail,
}: {
  eyebrow: string;
  title: string;
  detail?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {detail ? <p className="section-detail">{detail}</p> : null}
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article className="project-card">
      <div className={`project-art project-art--${project.theme}`} aria-hidden="true">
        <span className="project-art-index">{project.number}</span>
        <span className="project-art-mark">{project.mark}</span>
        <span className="project-art-type">{project.type}</span>
      </div>
      <div className="project-card-body">
        <div className="project-card-title">
          <div>
            <span className="project-type">{project.type}</span>
            <h3>{project.name}</h3>
          </div>
        </div>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label={`${project.name} technologies`}>
          {project.stack.map((technology) => (
            <li className="tag" key={technology}>
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function SkillGroup({
  name,
  skills,
  index,
}: {
  name: string;
  skills: readonly string[];
  index: string;
}) {
  const iconPaths: Record<string, ReactNode> = {
    Frontend: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
      </>
    ),
    Backend: (
      <>
        <rect x="4" y="3" width="16" height="8" rx="2" />
        <rect x="4" y="13" width="16" height="8" rx="2" />
        <path d="M8 7h.01M8 17h.01m3-10h5m-5 10h5" />
      </>
    ),
    "Programming languages": (
      <>
        <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />
      </>
    ),
    Databases: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5m-16 7c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </>
    ),
    Tools: (
      <>
        <path d="m14.5 6.5 3-3a5 5 0 0 1-6.6 6.6l-7.4 7.4a2.12 2.12 0 0 1-3-3l7.4-7.4a5 5 0 0 1 6.6-6.6l-3 3 3 3Z" />
      </>
    ),
    "Networking concepts": (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18m0-18a14 14 0 0 0 0 18" />
      </>
    ),
    "Machine learning": (
      <>
        <circle cx="12" cy="12" r="2.5" />
        <circle cx="5" cy="5" r="2" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="m7 6.5 3.2 3.5m6.8-3.5-3.2 3.5M7 17.5l3.2-3.5m6.8 3.5-3.2-3.5" />
      </>
    ),
  };

  return (
    <article className="skill-group">
      <div className="skill-group-heading">
        <span className="skill-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">{iconPaths[name]}</svg>
        </span>
        <h3>{name}</h3>
        <span className="skill-index">{index}</span>
      </div>
      <ul className="tag-list" aria-label={`${name} skills`}>
        {skills.map((skill) => (
          <li className="tag" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}

function SocialLink({
  href,
  children,
  icon,
  external = false,
}: {
  href: string;
  children: ReactNode;
  icon: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      className="social-link"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {icon}
      <span>{children}</span>
      <ArrowIcon diagonal />
    </a>
  );
}

export function PortfolioHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Nikita Rani, home">
        <span className="wordmark-icon">N</span>
        <span>nikita<span className="wordmark-dot">.</span></span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <a className="header-contact" href={`mailto:${email}`}>
          <span className="availability-dot" />
          Let&apos;s talk
          <ArrowIcon diagonal />
        </a>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="availability-dot" />
          B.TECH STUDENT <span className="eyebrow-divider">/</span> FULL-STACK DEVELOPER
        </p>
        <h1 id="hero-title">
          Building
          <br />
          thoughtful
          <br />
          <span>digital things.</span>
        </h1>
        <p className="hero-description">
          I&apos;m Nikita Rani — a B.Tech student, full-stack developer, and
          machine learning enthusiast who enjoys turning thoughtful ideas into
          useful, well-crafted experiences.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore my work <ArrowIcon />
          </a>
          <a className="text-link" href={`mailto:${email}`}>
            Get in touch <ArrowIcon diagonal />
          </a>
        </div>
        <div className="hero-socials" aria-label="Contact options">
          <a href={`mailto:${email}`}>Email</a>
          <span aria-hidden="true">·</span>
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span aria-hidden="true">·</span>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span aria-hidden="true">·</span>
          <a href={`tel:${phone}`}>Call me</a>
        </div>
      </div>
      <div className="hero-visual" aria-label="Developer profile card">
        <div className="visual-orbit visual-orbit-one" aria-hidden="true" />
        <div className="visual-orbit visual-orbit-two" aria-hidden="true" />
        <div className="profile-card">
          <Image
            className="profile-photo"
            src="/nikita.jpeg"
            alt="Nikita Rani"
            fill
            priority
            sizes="(max-width: 600px) 300px, 355px"
          />
          <div className="profile-card-top">
            <span>PROFILE / 001</span>
            <span className="profile-card-live">
              <span className="availability-dot" /> FULL-STACK DEVELOPER
            </span>
          </div>
          <div className="profile-card-bottom">
            <div>
              <strong>Nikita Rani</strong>
              <span>
                B.Tech student · Full-stack developer · Machine learning enthusiast
              </span>
            </div>
            <span className="profile-card-mark">NR<span>.</span></span>
          </div>
        </div>
        <div className="floating-note floating-note-top">
          <span className="note-icon">&lt;/&gt;</span>
          <span>make it useful<span className="note-period">.</span></span>
        </div>
        <div className="floating-note floating-note-bottom">
          <span className="note-spark">✳</span>
          <span>Always learning</span>
        </div>
        <span className="visual-index" aria-hidden="true">26° / BUILD MODE</span>
      </div>
      <a className="scroll-cue" href="#work">
        <span className="scroll-line" />
        SCROLL TO EXPLORE
      </a>
    </section>
  );
}

export function Projects() {
  return (
    <section className="content-section section-shell" id="work">
      <SectionHeading
        eyebrow="A FEW THINGS I’VE MADE"
        title="Selected work"
        detail="A mix of ideas, experiments, and products built with curiosity and care."
      />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <p className="links-note">
        Project repository and live-demo links will be added when available.
      </p>
    </section>
  );
}

export function Skills() {
  return (
    <section className="content-section section-shell skills-section" id="skills">
      <SectionHeading
        eyebrow="TOOLS OF THE TRADE"
        title="My toolkit"
        detail="The technologies and concepts I use and am exploring to bring ideas to life."
      />
      <div className="primary-skills">
        <div className="primary-skills-heading">
          <span className="eyebrow">CORE STACK</span>
          <h3>Primary skills</h3>
        </div>
        <ul className="tag-list" aria-label="Primary skills">
          {primarySkills.map((skill) => (
            <li className="tag primary-skill-tag" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group, index) => (
          <SkillGroup
            key={group.name}
            name={group.name}
            skills={group.skills}
            index={`0${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section
      className="contact-section section-shell"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-copy">
        <span className="eyebrow">HAVE A GOOD ONE IN MIND?</span>
        <h2 id="contact-title">
          Let&apos;s make
          <br />
          something <span>matter.</span>
        </h2>
        <p>
          Open to ideas, collaboration, and conversations about building for the
          web. My inbox is always open.
        </p>
        <a className="button button-primary" href={`mailto:${email}`}>
          Say hello <ArrowIcon diagonal />
        </a>
      </div>
      <div className="contact-links">
        <span className="contact-links-label">FIND ME HERE</span>
        <SocialLink
          href={`mailto:${email}`}
          icon={
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
              <rect x="2.75" y="4.5" width="14.5" height="11" rx="2" />
              <path d="m3.5 6 6.5 4.75L16.5 6" />
            </svg>
          }
        >
          {email}
        </SocialLink>
        <SocialLink
          href={`tel:${phone}`}
          icon={
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
              <path d="m6.2 3.2 2.1 3.4-1.5 1.5a12.1 12.1 0 0 0 5.1 5.1l1.5-1.5 3.4 2.1-.8 2.5c-.2.6-.8 1-1.4 1A13.8 13.8 0 0 1 2.7 5.3c0-.6.4-1.2 1-1.4l2.5-.7Z" />
            </svg>
          }
        >
          {phone}
        </SocialLink>
        <SocialLink
          href={github}
          external
          icon={
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 16.5c-4.2 1.3-4.2-2.1-5.9-2.5m11.8 5v-3.2a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-6a4.7 4.7 0 0 0-1.3-3.3 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.4 11.4 0 0 0-6 0C5.2.8 4.2 1.1 4.2 1.1a4.3 4.3 0 0 0-.1 3.2 4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.8 5.7 5.5 6a2.8 2.8 0 0 0-.8 2.2V19" />
            </svg>
          }
        >
          GitHub
        </SocialLink>
        <SocialLink
          href={linkedin}
          external
          icon={
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
              <path d="M4 7.5V16M4 4.5h.01M8 16v-8.5h3v1.3a3 3 0 0 1 2.7-1.5c2.3 0 3.3 1.5 3.3 4V16h-3v-4.2c0-1.4-.5-2.2-1.6-2.2-1.2 0-1.8.9-1.8 2.2V16H8Z" />
            </svg>
          }
        >
          LinkedIn
        </SocialLink>
      </div>
      <span className="contact-decoration" aria-hidden="true">NR<span>.</span></span>
    </section>
  );
}

export function PortfolioFooter() {
  return (
    <footer className="site-footer section-shell">
      <a className="wordmark footer-wordmark" href="#top" aria-label="Back to top">
        <span className="wordmark-icon">N</span>
        <span>nikita<span className="wordmark-dot">.</span></span>
      </a>
      <span>Designed &amp; built with care by Nikita Rani.</span>
      <a className="back-to-top" href="#top">
        Back to top <ArrowIcon diagonal />
      </a>
    </footer>
  );
}
