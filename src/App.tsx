import { profile, projects, skills, education, certifications, experience, achievements } from "./data";

export default function App() {
  return (
    <>
      <header className="nav">
        <a className="brand" href="#top">
          {profile.name}
        </a>
        <nav aria-label="Primary">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-text">
            <p className="role">{profile.role}</p>
            <h1>{profile.pitch}</h1>
            <div className="actions">
              <a className="btn primary" href="#projects">
                See my projects
              </a>
              <a className="btn" href={profile.resume} download>
                Download resume
              </a>
            </div>
          </div>
          <img
            className="photo"
            src={`${import.meta.env.BASE_URL}photo.jpg`}
            alt="Gargee Thakur"
          />
        </section>

        <section id="about" className="wrap section">
          <h2>About</h2>
          <div className="prose">
            {profile.about.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
        </section>

        <section id="education" className="wrap section">
          <h2>Education</h2>
          <ul className="projects">
            {education.map((e) => (
              <li key={e.school} className="project">
                <div className="project-meta">
                  <p>{e.period}</p>
                </div>
                <div className="project-body">
                  <h3>{e.degree}</h3>
                  <p>{e.school}</p>
                  {e.note && <p className="stack">{e.note}</p>}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="certifications" className="wrap section">
          <h2>Certifications</h2>
          <ul className="projects">
            {certifications.map((c) => (
              <li key={c.name} className="project">
                <div className="project-meta">
                  <p>{c.year}</p>
                </div>
                <div className="project-body">
                  <h3>{c.name}</h3>
                  <p>{c.issuer}</p>
                  {c.href && (
                    <p className="links">
                      <a href={c.href} target="_blank" rel="noreferrer">
                        View certificate
                      </a>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="wrap section">
          <h2>Projects</h2>
          <ul className="projects">
            {projects.map((p) => (
              <li key={p.title} className="project">
                <div className="project-meta">
                  <p>{p.context}</p>
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <p className="stack">{p.stack.join(", ")}</p>
                  <p className="links">
                    {p.links.map((l) => (
                      <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="wrap section">
          <h2>Skills</h2>
                    <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>
                  <ul className="badges">
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="experience" className="wrap section">
          <h2>Work Experience</h2>
          <ul className="projects">
            {experience.map((x) => (
              <li key={x.role + x.company} className="project">
                <div className="project-meta">
                  <p>{x.period}</p>
                </div>
                <div className="project-body">
                  <h3>{x.role}</h3>
                  <p>{x.company}</p>
                  <p>{x.summary}</p>
                  <p className="stack">{x.stack.join(", ")}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="achievements" className="wrap section">
          <h2>Publications and Participation</h2>
          <ul className="projects">
            {achievements.map((a) => (
              <li key={a.title} className="project">
                <div className="project-meta">
                  <p>{a.year}</p>
                </div>
                <div className="project-body">
                  <h3>{a.title}</h3>
                  <p className="stack">{a.label}</p>
                  <p>{a.summary}</p>
                  {a.href && (
                    <p className="links">
                      <a href={a.href} target="_blank" rel="noreferrer">
                        View
                      </a>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="wrap section contact">
          <h2>Contact</h2>
          <p className="prose">Open to internship and entry-level opportunities in Software Development, Cybersecurity, and AI & ML.</p>
          <p className="big">
            <a href={`mailto:${profile.email}`}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              {profile.email}
            </a>
          </p>
          <p className="links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </section>
      </main>

      <footer className="wrap foot">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}