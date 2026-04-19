// Variation 2 — "Terminal"
// Dark, mono, technical. Hints of green CRT. Dense info. Feels like htop + a README + a dashboard.

const { useState: useStateT, useEffect: useEffectT } = React;

function Terminal() {
  const d = window.DATA;
  const RecruiterForm = window.RecruiterForm;
  const [openBlog, setOpenBlog] = useStateT(null);
  const [tick, setTick] = useStateT(0);
  useEffectT(() => {
    const i = setInterval(() => setTick(t => t + 1), 1200);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="term">
      {/* Top bar */}
      <header className="term-bar">
        <div className="term-bar-l">
          <span className="term-dot r" /><span className="term-dot y" /><span className="term-dot g" />
          <span className="term-path">~/chien — zsh — 160×48</span>
        </div>
        <nav className="term-nav">
          <a href="#t-id">./identify.sh</a>
          <a href="#t-work">cd work/</a>
          <a href="#t-stack">cat stack.md</a>
          <a href="#t-blog">ls blog/</a>
          <a href="#t-hire">./hire.sh</a>
        </nav>
      </header>

      {/* Hero prompt */}
      <section className="term-hero">
        <div className="term-line"><span className="term-prompt">chien@bothell</span>:<span className="term-dir">~</span>$ whoami</div>
        <pre className="term-ascii">{`
 ██████╗██╗  ██╗██╗███████╗███╗   ██╗    ███╗   ██╗ ██████╗ ██╗   ██╗██╗   ██╗███████╗███╗   ██╗
██╔════╝██║  ██║██║██╔════╝████╗  ██║    ████╗  ██║██╔════╝ ██║   ██║╚██╗ ██╔╝██╔════╝████╗  ██║
██║     ███████║██║█████╗  ██╔██╗ ██║    ██╔██╗ ██║██║  ███╗██║   ██║ ╚████╔╝ █████╗  ██╔██╗ ██║
██║     ██╔══██║██║██╔══╝  ██║╚██╗██║    ██║╚██╗██║██║   ██║██║   ██║  ╚██╔╝  ██╔══╝  ██║╚██╗██║
╚██████╗██║  ██║██║███████╗██║ ╚████║    ██║ ╚████║╚██████╔╝╚██████╔╝   ██║   ███████╗██║ ╚████║
 ╚═════╝╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═══╝    ╚═╝  ╚═══╝ ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═══╝`}</pre>
        <div className="term-line">› <span className="term-y">{d.role.toLowerCase()}</span></div>
        <div className="term-line term-dim">› {d.tagline}</div>
        <div className="term-line term-dim">› {d.subTagline}</div>
        <div className="term-line term-dim">› b.s. cs, uw bothell (sep 2026)</div>
        <div className="term-line term-dim">› based in wa</div>

        {/* identify.sh — identity panel */}
        <div id="t-id" className="term-line term-gap"><span className="term-prompt">chien@bothell</span>:~$ <span className="term-y">./identify.sh</span></div>
        <div className="term-id">
          <div className="term-id-photo">
            <img src="assets/profile.jpg" alt="Chien Nguyen" />
            <div className="term-id-scan" />
          </div>
          <div className="term-id-meta">
            <div>NAME.......... <span className="term-y">Chien Nguyen</span></div>
            <div>ROLE.......... <span className="term-g">AI & Systems Builder</span></div>
            <div>LOCATION...... Bothell, WA</div>
            <div>SCHOOL........ UW Bothell</div>
            <div>INTERNSHIP.... <span className="term-g">Snohomish County PUD · Summer 2026</span></div>
            <div>STATUS........ <span className="term-g">● senior · open to new-grad roles</span></div>
            <div className="term-dim">── auth ok ────────────────</div>
          </div>
        </div>

        {/* Thesis — now sits immediately under identify.sh, framed as opinion */}
        <div className="term-line term-gap"><span className="term-prompt">chien@bothell</span>:~$ cat thesis.md</div>
        <div className="term-thesis-block">
          <p className="term-thesis-lead"><span className="term-y">// in my opinion</span></p>
          {d.manifesto.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* CS-focused status dashboard — sits directly under thesis.md */}
        <div className="term-dash">
          {d.now.map((n, i) => (
            <div key={i} className="term-dash-row">
              <span className="term-dash-k">{n.label.toUpperCase().padEnd(9, ' ')}</span>
              <span>{n.text}</span>
            </div>
          ))}
          <div className="term-dash-row"><span className="term-dash-k">OBSESSED </span><span className="term-g">claude · distributed systems · data engineering</span></div>
        </div>
      </section>

      {/* Work */}
      <section id="t-work" className="term-block">
        <div className="term-h"># ls -la work/</div>
        <div className="term-projects">
          {d.projects.filter(p => p.featured).map(p => (
            <article key={p.id} className="term-project">
              <header>
                <span className="term-g">➜</span>
                <span className="term-project-title">{p.title}</span>
                <span className="term-dim">· {p.year}</span>
                <span className="term-badge">{p.metric}</span>
              </header>
              <p>{p.blurb}</p>
              <div className="term-stack">
                {p.stack.map(s => <code key={s}>{s}</code>)}
              </div>
              <a href={p.github} target="_blank" rel="noopener">git clone {p.github.replace("https://github.com/", "")} →</a>
            </article>
          ))}
        </div>

        <div className="term-h term-gap"># ls -la work/other/</div>
        <div className="term-other">
          {d.projects.filter(p => !p.featured).map(p => (
            <a key={p.id} href={p.github} target="_blank" rel="noopener" className="term-other-row">
              <span className="term-g">drwxr-xr-x</span>
              <span>{p.title}</span>
              <span className="term-dim">{p.metric}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section id="t-stack" className="term-block">
        <div className="term-h"># cat stack.yaml</div>
        <div className="term-stack-grid">
          {d.skills.map(s => (
            <div key={s.group}>
              <div className="term-c">{s.group.toLowerCase().replace(/\s+\/\s+/g, '_').replace(/\s+/g, '_')}:</div>
              {s.items.map(i => <div key={i} className="term-stack-item">  - {i}</div>)}
            </div>
          ))}
        </div>
      </section>

      {/* Path */}
      <section className="term-block">
        <div className="term-h"># git log --oneline</div>
        <div className="term-log">
          {d.experience.map((e, i) => (
            <div key={i} className="term-log-row">
              <span className="term-y">{fakeHash(i)}</span>
              <span className="term-dim">({e.when})</span>
              <div className="term-log-body">
                <strong>{e.role}</strong> · <span className="term-dim">{e.org}</span>
                {e.bullets
                  ? <ul className="term-log-bullets">{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                  : <div>{e.notes}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog — cards that expand into a reader */}
      <section id="t-blog" className="term-block">
        <div className="term-h"># ls blog/</div>
        <div className="term-blog-list">
          {d.blog.map(post => (
            <button key={post.id} type="button" className="term-blog-row" onClick={() => setOpenBlog(post)}>
              <span className="term-g">-rw-r--r--</span>
              <span className="term-y">{post.id}.md</span>
              <span className="term-dim">{post.date} · {post.read}</span>
              <span className="term-blog-row-title">{post.title}</span>
              <span className="term-g">→ cat</span>
            </button>
          ))}
        </div>
      </section>

      {/* Hire — with documents as bullets inside */}
      <section id="t-hire" className="term-block term-hire">
        <div className="term-h">$ ./hire.sh --urgent</div>
        <div className="term-hire-grid">
          <div>
            <pre className="term-hire-box">{`
┌─ for recruiters ─────────────────────────┐
│ target:    distributed / data / LLM infra│
│ level:     new-grad · sep 2026           │
│ interim:   snohomish pud · summer 2026   │
│ reps:      1,238 msg/s · 20M+ rows · RAG │
│ timezone:  PST                           │
│ response:  usually same day              │
└──────────────────────────────────────────┘`}</pre>
            <div className="term-hire-links">
              <a href={`mailto:${d.email}`}>→ email</a>
              <a href={d.github} target="_blank" rel="noopener">→ github</a>
              <a href={d.linkedin} target="_blank" rel="noopener">→ linkedin</a>
              {d.documents.map(doc => (
                <a key={doc.label} href={doc.href} target="_blank" rel="noopener">→ {doc.label}</a>
              ))}
            </div>
          </div>
          <RecruiterForm email={d.email} variant="term" greeting={d.recruiterGreeting} />
        </div>
      </section>

      {openBlog && <BlogReader post={openBlog} onClose={() => setOpenBlog(null)} />}

      <footer className="term-foot">
        <span className="term-dim">$ exit</span>
        <span>© 2026 chien nguyen · built in the pnw · love what you do and you will never work a day in your life</span>
      </footer>
    </div>
  );
}

function BlogReader({ post, onClose }) {
  useEffectT(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);
  return (
    <div className="term-blog-overlay" onClick={onClose}>
      <div className="term-blog-reader" onClick={e => e.stopPropagation()}>
        <div className="term-blog-reader-bar">
          <span className="term-dim">~/chien/blog/{post.id}.md</span>
          <button type="button" onClick={onClose} aria-label="Close">× close</button>
        </div>
        <div className="term-blog-reader-body">
          <div className="term-essay-title">{post.title}</div>
          <div className="term-dim">── {post.date} · {post.read} · {post.tag} ──</div>
          {post.subtitle && <p className="term-essay-intro">{post.subtitle}</p>}
          <div className="term-essay-body">
            {post.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function RecruiterForm({ email, variant, greeting }) {
  const [form, setForm] = useStateT({ name: "", company: "", msg: "" });
  const [sent, setSent] = useStateT(false);
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Opportunity from ${form.company || form.name}`);
    const body = encodeURIComponent(`${form.msg}\n\n-- ${form.name}${form.company ? ` | ${form.company}` : ""}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  const g = greeting || { headline: "Hi, I'm Chien.", sub: "What can I do for you today?", hint: "Introduce yourself — a few words is plenty." };
  return (
    <form className={`rec-form rec-${variant}`} onSubmit={submit}>
      <div className="rec-greeting">
        <div className="rec-greeting-headline">{g.headline}</div>
        <div className="rec-greeting-sub">{g.sub}</div>
      </div>
      <label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></label>
      <label>Company<input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} /></label>
      <label>Message<textarea required rows={3} value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} placeholder="type your message here" /></label>
      <button type="submit">{sent ? "Thanks — opening mail…" : "Send it"}</button>
    </form>
  );
}

function fakeHash(i) {
  const hashes = ["a3f2c1d", "b87e4a9", "c12f9e8", "d4a8b71", "e9c2f33"];
  return hashes[i % hashes.length];
}

window.Terminal = Terminal;
window.RecruiterForm = RecruiterForm;
