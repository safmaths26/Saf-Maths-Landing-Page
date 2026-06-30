// Section components for the Axiom Maths landing page.
// Each section is a stand-alone React component that reads tweak values
// off props for theming.

// ── Hero ────────────────────────────────────────────────────────────────────
function Hero({ t, accent }) {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 className="display">
            Maths,<br />
            <span className="display-em">made obvious.</span>
          </h1>
          <p className="lede">
            One-to-one maths tuition for KS3 and GCSE — from an A-level
            maths student (predicted A) with a grade 9 in GCSE maths. I sat
            these exams recently, so I know exactly what trips students up and
            how to fix it.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="https://wa.me/447375559905" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.81 14.18c-.25.7-1.45 1.34-2.02 1.42-.51.07-1.16.1-1.87-.12-.43-.13-.99-.32-1.7-.62-2.99-1.29-4.95-4.31-5.1-4.51-.15-.2-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.04-2.49.27-.3.59-.37.79-.37l.57.01c.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.18-.31.4-.45.54-.15.15-.3.31-.13.61.18.3.79 1.3 1.69 2.1 1.16 1.03 2.14 1.36 2.44 1.51.3.15.47.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.74.82 2.04.97.3.15.5.22.57.35.07.13.07.74-.18 1.46z"/>
              </svg>
              Message me on WhatsApp
            </a>
            <a className="btn btn-ghost" href="#sample">Try a free sample lesson →</a>
          </div>

          <ul className="hero-proof">
            <li><strong>9</strong><span>GCSE Maths</span></li>
            <li><strong>A</strong><span>predicted A-Level</span></li>
            <li><strong>£0</strong><span>first session</span></li>
          </ul>
        </div>

        <div className="hero-art">
          <ProofPanel accent={accent} />
        </div>
      </div>
    </section>
  );
}

// A decorative "scratch-work" card — handwritten-feeling proof on grid paper.
// Uses real maths rather than vague swirls.
function ProofPanel({ accent }) {
  return (
    <div className="proof-card">
      <div className="proof-grid" />
      <div className="proof-stack">
        <div className="proof-tag">Q4 · Higher Tier</div>
        <div className="proof-line m">Solve <em>x</em>² − 5<em>x</em> + 6 = 0</div>
        <div className="proof-step">→ (<em>x</em> − 2)(<em>x</em> − 3) = 0</div>
        <div className="proof-step">→ <em>x</em> = 2 <span className="proof-or">or</span> <em>x</em> = 3</div>
        <div className="proof-tick" style={{ color: accent }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="proof-callout">
          <span className="proof-callout-arrow" style={{ background: accent }} />
          <span className="proof-callout-text">Two solutions — always check by substitution.</span>
        </div>
        <div className="proof-qed">∎</div>
      </div>
    </div>
  );
}

// ── About ───────────────────────────────────────────────────────────────────
function About({ t }) {
  return (
    <section className="about" id="about">
      <div className="section-head">
        <div className="kicker">01 · About</div>
        <h2 className="section-title">
          Hi, I'm Safwan.<br />
          <span className="muted">Here's the honest version.</span>
        </h2>
      </div>
      <div className="about-grid">
        <div className="about-photo">
          <div className="photo-frame">
            <div className="photo-placeholder">
              <span className="ph-mono">PHOTO</span>
              <span className="ph-mono ph-sub">drop image here</span>
            </div>
          </div>
          <div className="about-card">
            <div className="about-card-row">
              <span>GCSE Maths</span><strong>Grade 9</strong>
            </div>
            <div className="about-card-row">
              <span>A-Level Maths</span><strong>Predicted A</strong>
            </div>
            <div className="about-card-row">
              <span>Based in</span><strong>Tooting, SW17</strong>
            </div>
            <div className="about-card-row">
              <span>Teaching</span><strong>In person · Online</strong>
            </div>
          </div>
        </div>
        <div className="about-copy">
          <p className="about-lede">
            I'm an A-level maths student — and I sat these exams recently.
          </p>
          <p>
            I came out of GCSE Maths with a grade 9, and I'm now working
            through A-Level Maths with a predicted A. The exam board's tricks,
            the question patterns, the bits everyone gets stuck on — I remember
            all of it, because I went through the same syllabus recently enough
            that none of it has faded.
          </p>
          <p>
            I tutor because the way maths is usually taught wastes a lot of
            time. There's a clear path from "I don't get it" to "obvious". My
            job is to find that path for <em>you</em> specifically — not to
            run you through generic worksheets.
          </p>
          <p>
            The first lesson is free, no commitment. If we click, we keep going.
            If we don't, you've lost an hour and learned something either way.
          </p>
          <div className="about-sign">
            <span className="sign-mark">∴</span>
            <span className="sign-text">Let's make maths obvious.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Subjects & Levels ───────────────────────────────────────────────────────
function Subjects({ t, accent }) {
  const tracks = [
    {
      key: 'ks3',
      level: 'KS3',
      ages: 'Years 7–9',
      title: 'Lower secondary',
      blurb: 'The years where students either fall in love with maths or quietly start dreading it. We make sure it\'s the first one.',
      topics: ['Algebra basics', 'Ratio & proportion', 'Geometry', 'Linear equations'],
      sample: 'a + b',
      price: '£15',
    },
    {
      key: 'gcse',
      level: 'GCSE',
      ages: 'Foundation & Higher',
      title: 'GCSE maths',
      blurb: 'From a confident grade 4–5 up to the 7, 8 and 9 questions. Heavy focus on past-paper strategy — picking up every mark you\'re entitled to.',
      topics: ['Quadratics', 'Trigonometry', 'Surds & proof', 'Past-paper drills'],
      sample: '∫',
      price: '£20',
      featured: true,
    },
  ];

  return (
    <section className="subjects" id="subjects">
      <div className="section-head">
        <div className="kicker">02 · Subjects & levels</div>
        <h2 className="section-title">
          Maths for KS3 and GCSE.
        </h2>
      </div>
      <div className="track-grid">
        {tracks.map((track) => (
          <article key={track.key} className={`track ${track.featured ? 'track-featured' : ''}`}>
            <div className="track-head">
              <div className="track-level">
                <span className="track-level-tag">{track.level}</span>
                <span className="track-level-ages">{track.ages}</span>
              </div>
              <div className="track-glyph" style={{ color: track.featured ? accent : undefined }}>
                {track.sample}
              </div>
            </div>
            <h3 className="track-title">{track.title}</h3>
            <div className="track-price">{track.price}<span className="track-per">/hour</span></div>
            <p className="track-blurb">{track.blurb}</p>
            <ul className="track-topics">
              {track.topics.map((tp) => <li key={tp}>{tp}</li>)}
            </ul>
            {track.featured && (
              <div className="track-flag" style={{ color: accent, borderColor: accent }}>
                Most enquiries
              </div>
            )}
          </article>
        ))}
      </div>
      <div className="subjects-foot">
        <span className="exam-boards">Exam boards · </span>
        <span>AQA</span><span>·</span><span>Edexcel</span><span>·</span><span>OCR</span>
      </div>
    </section>
  );
}

// ── Tracker / Goals ─────────────────────────────────────────────────────────
// Mocks a 12-week progress tracker so parents/students can see what they
// actually get from working with Safwan: a target grade, a topic checklist,
// and a weekly mock-test trend. Real-feeling — not vague stats.
function Tracker({ t, accent }) {
  return (
    <section className="tracker" id="results">
      <div className="section-head">
        <div className="kicker">03 · How we track results</div>
        <h2 className="section-title">
          Every student gets a plan.<br />
          <span className="muted">And a clear grade to aim for.</span>
        </h2>
      </div>

      <div className="tracker-grid">
        <div className="tracker-card tracker-goal">
          <div className="tracker-card-tag">Goal</div>
          <div className="tracker-goal-row">
            <div>
              <div className="tracker-goal-from">Currently</div>
              <div className="tracker-goal-grade">5</div>
            </div>
            <div className="tracker-goal-arrow" style={{ color: accent }}>→</div>
            <div>
              <div className="tracker-goal-from">Target by July</div>
              <div className="tracker-goal-grade tracker-goal-grade-target" style={{ color: accent }}>8</div>
            </div>
          </div>
        </div>

        <div className="tracker-card tracker-topics">
          <div className="tracker-card-tag">Topics covered</div>
          <ul className="tracker-checklist">
            <li className="done"><CheckIcon /> Quadratic equations</li>
            <li className="done"><CheckIcon /> Simultaneous equations</li>
            <li className="done"><CheckIcon /> Surds & indices</li>
            <li className="active"><DotIcon accent={accent} /> Trigonometry — in progress</li>
            <li><EmptyIcon /> Circle theorems</li>
            <li><EmptyIcon /> Vectors & proof</li>
          </ul>
        </div>
      </div>

      <div className="tracker-foot">
        <div className="tracker-foot-item">
          <span className="tracker-foot-k">Sessions</span>
          <span className="tracker-foot-v">As often as you'd like</span>
        </div>
        <div className="tracker-foot-item">
          <span className="tracker-foot-k">Reports</span>
          <span className="tracker-foot-v">Sent to parents weekly</span>
        </div>
        <div className="tracker-foot-item">
          <span className="tracker-foot-k">First lesson</span>
          <span className="tracker-foot-v" style={{ color: accent }}>Free</span>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill="var(--ink)" />
      <path d="M5 8.2l2 2L11 6" stroke="var(--paper)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function DotIcon({ accent }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill="none" stroke={accent} strokeWidth="1.5" />
      <circle cx="8" cy="8" r="3" fill={accent} />
    </svg>
  );
}
function EmptyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
    </svg>
  );
}

// ── Sample / Free trial ─────────────────────────────────────────────────────
function Sample({ t, accent }) {
  return (
    <section className="sample" id="sample">
      <div className="sample-inner">
        <div className="sample-copy">
          <div className="kicker light">04 · Free sample lesson</div>
          <h2 className="section-title">
            Try one lesson.<br />
            <span className="muted">On me.</span>
          </h2>
          <p>
            The first 60 minutes are free. We'll pick a topic you're stuck on,
            work through it together, and you'll leave with a clear next step.
          </p>
          <div className="sample-steps">
            <div className="step">
              <span className="step-num" style={{ borderColor: accent, color: accent }}>1</span>
              <div>
                <strong>Send a WhatsApp.</strong>
                <span>Tell me your year group, exam board, and what's tripping you up.</span>
              </div>
            </div>
            <div className="step">
              <span className="step-num" style={{ borderColor: accent, color: accent }}>2</span>
              <div>
                <strong>Pick a slot.</strong>
                <span>Evenings and weekends. In person in Tooting or anywhere on Zoom.</span>
              </div>
            </div>
            <div className="step">
              <span className="step-num" style={{ borderColor: accent, color: accent }}>3</span>
              <div>
                <strong>Try the lesson.</strong>
                <span>If it works, we book in. If not, no hard feelings.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sample-receipt">
          <div className="receipt-head">
            <span>FREE TRIAL · INVOICE</span>
            <span className="receipt-num">№ 0001</span>
          </div>
          <div className="receipt-row"><span>60-min lesson</span><span><s className="receipt-was">£20.00</s>£0.00</span></div>
          <div className="receipt-row"><span>Topic diagnostic</span><span>Included</span></div>
          <div className="receipt-row"><span>Practice plan</span><span>Included</span></div>
          <div className="receipt-row"><span>Commitment</span><span>None</span></div>
          <div className="receipt-rule" />
          <div className="receipt-row receipt-total">
            <span>Total due</span><strong><s className="receipt-was">£20.00</s>£0.00</strong>
          </div>
          <div className="receipt-stamp" style={{ color: accent, borderColor: accent }}>
            ON THE HOUSE
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Contact ─────────────────────────────────────────────────────────────────
function Contact({ t, accent }) {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="kicker">05 · Get in touch</div>
        <h2 className="contact-title">
          The fastest way to reach me<br />is on WhatsApp.
        </h2>
        <p className="contact-sub">
          I usually reply the same day. No forms, no waiting, no automated email.
        </p>
        <a className="btn btn-primary btn-lg" href="https://wa.me/447375559905" target="_blank" rel="noopener">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.81 14.18c-.25.7-1.45 1.34-2.02 1.42-.51.07-1.16.1-1.87-.12-.43-.13-.99-.32-1.7-.62-2.99-1.29-4.95-4.31-5.1-4.51-.15-.2-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.04-2.49.27-.3.59-.37.79-.37l.57.01c.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.18-.31.4-.45.54-.15.15-.3.31-.13.61.18.3.79 1.3 1.69 2.1 1.16 1.03 2.14 1.36 2.44 1.51.3.15.47.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.74.82 2.04.97.3.15.5.22.57.35.07.13.07.74-.18 1.46z"/>
          </svg>
          Message me on WhatsApp
        </a>

        <div className="contact-meta">
          <div><span className="meta-k">Area</span><span className="meta-v">Tooting & SW London</span></div>
          <div><span className="meta-k">Hours</span><span className="meta-v">Weekdays 4–9pm · Weekends</span></div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ──────────────────────────────────────────────────────────────────
function Footer({ name, mark, kind = 'sans' }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Logo mark={mark} name={name} kind={kind} markSize={22} textSize={16} />
        <div className="footer-meta">
          <span>© 2026 {name}Maths</span>
          <span>·</span>
          <span>Tooting, London</span>
          <span>·</span>
          <span>WhatsApp</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Hero, About, Subjects, Tracker, Sample, Contact, Footer, ProofPanel });
