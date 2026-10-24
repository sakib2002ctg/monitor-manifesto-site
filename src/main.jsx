import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  ClipboardCheck,
  Handshake,
  Layers3,
  Menu,
  MessageCircle,
  Monitor,
  Sparkles,
  X,
} from 'lucide-react';
import './style.css';

const commitments = [
  {
    number: '01',
    icon: CalendarDays,
    title: 'Plan before the pressure.',
    line: 'Put the next steps in view early.',
    detail: 'Help the executive team turn an approved event idea into a simple timeline, task list and check-in points. Confirm owners and dates together so volunteers know where to start.',
    proof: 'Shared timeline · Clear owners · Early check-ins',
  },
  {
    number: '02',
    icon: Handshake,
    title: 'Make teamwork feel easier.',
    line: 'Everyone should know what they own.',
    detail: 'Help connect the executive team, event leads and volunteers with clear updates and handovers. Keep decisions with the committee and make it easier for each person to see what they are responsible for.',
    proof: 'Clear updates · Better handovers · Shared ownership',
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Take care of the details.',
    line: 'The small things shape the whole experience.',
    detail: 'Use a practical checklist for food, banners, crests and materials. Check availability and requirements with the relevant team early, then flag gaps so the committee can decide what to do.',
    proof: 'Supply checklist · Early checks · Gaps raised in time',
  },
  {
    number: '04',
    icon: Layers3,
    title: 'Make room for member feedback.',
    line: 'Listen, share themes and close the loop.',
    detail: 'Invite members to share what helped and what could improve through an appropriate club channel. Summarize recurring themes for the executive team and discuss practical follow-ups together.',
    proof: 'Open feedback · Shared themes · Feasible follow-up',
  },
];

const lessons = [
  {
    id: 'prepare',
    label: 'Before the event',
    icon: CalendarDays,
    heading: 'Preparation is invisible—until it is missing.',
    body: 'Food, banners, crests and the small practical requirements all need someone to own them. I learned to respect the details before they become urgent.',
    tags: ['Planning', 'Logistics', 'Follow-through'],
  },
  {
    id: 'pressure',
    label: 'When plans change',
    icon: Clock3,
    heading: 'Stay calm. Find the next useful move.',
    body: 'Sudden work and late-night preparation taught me that responsibility is more than finishing a checklist. It is responding when the checklist changes.',
    tags: ['Adaptability', 'Problem-solving', 'Ownership'],
  },
  {
    id: 'people',
    label: 'With the team',
    icon: MessageCircle,
    heading: 'A good result is always a team result.',
    body: 'Being close to event operations gave me a practical understanding of how people, timing and communication fit together—and why no one should be left guessing.',
    tags: ['Coordination', 'Communication', 'Teamwork'],
  },
];

const steps = [
  {
    key: 'before',
    number: '01',
    title: 'Before an event',
    headline: 'Make the plan visible.',
    text: 'Help the committee confirm the event goal, working timeline and task owners. Check food, banners, crests and materials early, then flag missing details before they become urgent.',
    actions: ['Confirm dates, roles and check-in points with the team.', 'Start a practical materials and logistics checklist.', 'Raise gaps early; leave approvals and decisions with the committee.'],
  },
  {
    key: 'during',
    number: '02',
    title: 'During an event',
    headline: 'Keep the team moving.',
    text: 'Stay available to event leads, pass along changes clearly and help resolve practical issues as they appear. Keep communication calm when the plan needs to change.',
    actions: ['Check in with responsible leads and volunteers.', 'Share timing or logistics changes with the right people.', 'Help surface unexpected needs and coordinate the next step.'],
  },
  {
    key: 'after',
    number: '03',
    title: 'After an event',
    headline: 'Carry the learning forward.',
    text: 'Make space for a short team debrief. Record useful lessons and handover notes so future organizers can build on the work already done.',
    actions: ['Ask the team what worked and where plans changed.', 'Capture reusable notes on supplies, timing and handovers.', 'Share follow-up themes with the committee for discussion.'],
  },
];

function MonitorMark({ className = '' }) {
  return <Monitor aria-hidden="true" className={className} strokeWidth={1.8} />;
}

function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduced ? 0 : 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const closeMenu = () => setOpen(false);
  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="election-strip">
        <div className="container strip-inner">
          <span><span className="strip-dot" /> PCIU COMPUTER CLUB · 4TH EXECUTIVE COMMITTEE</span>
          <span className="strip-date">ELECTION DAY <b>29 OCTOBER 2026</b></span>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Back to homepage">
            <span className="brand-icon"><MonitorMark /></span>
            <span className="brand-copy"><b>MD JAMSHADUL ALAM</b><small>JOINT SECRETARY CANDIDATE</small></span>
          </a>
          <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={`nav-links ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
            <a href="#experience" onClick={closeMenu}>My experience</a>
            <a href="#manifesto" onClick={closeMenu}>Manifesto</a>
            <a href="#approach" onClick={closeMenu}>My approach</a>
            <a className="nav-vote" href="#vote" onClick={closeMenu}>Remember the monitor <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>
    </>
  );
}

function HeroMonitor() {
  const reduced = useReducedMotion();
  return (
    <div className="hero-visual" aria-label="The desktop monitor is my election symbol">
      <div className="visual-glow" />
      <motion.div
        className="orbit orbit-one"
        animate={reduced ? {} : { rotate: 360 }}
        transition={{ duration: 46, ease: 'linear', repeat: Infinity }}
      />
      <motion.div
        className="orbit orbit-two"
        animate={reduced ? {} : { rotate: -360 }}
        transition={{ duration: 62, ease: 'linear', repeat: Infinity }}
      />
      <motion.div
        className="monitor-object"
        initial={{ opacity: 0, y: 24, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        whileHover={reduced ? {} : { y: -6, rotate: 1, scale: 1.015 }}
      >
        <div className="monitor-shell">
          <div className="monitor-topbar">
            <div className="window-dots"><i /><i /><i /></div>
            <span>PCC / FIELD NOTES</span>
            <span className="screen-status"><i /> READY</span>
          </div>
          <div className="monitor-screen">
            <div className="screen-micro">EXPERIENCE IN PRACTICE <span>2025—26</span></div>
            <div className="screen-headline">IDEAS<br /><em>INTO</em><br />ACTION<span className="screen-period">.</span></div>
            <div className="screen-bottom">
              <span>PLAN <b>↗</b></span><span>COORDINATE <b>↗</b></span><span>DELIVER <b>↗</b></span>
            </div>
            <div className="screen-scan" />
          </div>
        </div>
        <div className="monitor-neck" />
        <div className="monitor-foot" />
        <div className="monitor-shadow" />
      </motion.div>
      <motion.div className="symbol-sticker" animate={reduced ? {} : { rotate: [6, 2, 6], y: [0, -5, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
        <Monitor size={22} strokeWidth={1.9} />
        <span>MY SYMBOL</span>
        <b>THE MONITOR</b>
      </motion.div>
      <div className="visual-corner-note"><span>01</span> / SHOW UP & MAKE IT HAPPEN</div>
    </div>
  );
}

const VOTING_OPENS_AT = new Date('2026-10-29T11:00:00+06:00').getTime();
const VOTING_CLOSES_AT = new Date('2026-10-29T14:00:00+06:00').getTime();

function VotingCountdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const intervalId = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  const isLive = now >= VOTING_OPENS_AT && now < VOTING_CLOSES_AT;
  const isClosed = now >= VOTING_CLOSES_AT;
  const remaining = isClosed ? 0 : Math.max(0, (isLive ? VOTING_CLOSES_AT : VOTING_OPENS_AT) - now);
  const totalSeconds = Math.floor(remaining / 1000);
  const units = [
    ['DAYS', Math.floor(totalSeconds / 86400)],
    ['HOURS', Math.floor((totalSeconds % 86400) / 3600)],
    ['MINUTES', Math.floor((totalSeconds % 3600) / 60)],
    ['SECONDS', totalSeconds % 60],
  ];

  return (
    <section className={`voting-countdown${isLive ? ' voting-countdown-live' : ''}${isClosed ? ' voting-countdown-closed' : ''}`} aria-label="Election voting countdown">
      <div className="countdown-heading">
        <span className="countdown-status-dot" />
        <div>
          <p className="countdown-label" aria-live="polite">{isClosed ? 'VOTING HAS CLOSED' : isLive ? 'VOTING IS LIVE' : 'VOTING OPENS IN'}</p>
          <span className="countdown-context">{isClosed ? '29 October 2026 · 2:00 PM BST' : isLive ? 'Polls close at 2:00 PM' : '29 October 2026 · 11:00 AM BST'}</span>
        </div>
        <span className="countdown-zone">BST · UTC+06</span>
      </div>
      {!isClosed && (
        <div className="countdown-units" aria-hidden="true">
          {units.map(([label, value]) => (
            <div className="countdown-unit" key={label}>
              <span>{String(value).padStart(2, '0')}</span>
              <small>{label}</small>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function EventCount() {
  const [count, setCount] = useState(0);
  const countRef = React.useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = countRef.current;
    if (!node) return undefined;
    if (!('IntersectionObserver' in window)) {
      setCount(25);
      return undefined;
    }

    let intervalId;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || intervalId) return;
      if (reduced) {
        setCount(25);
        observer.disconnect();
        return;
      }
      const startedAt = performance.now();
      intervalId = window.setInterval(() => {
        const progress = Math.min((performance.now() - startedAt) / 900, 1);
        setCount(Math.round(25 * (1 - (1 - progress) ** 3)));
        if (progress >= 1) {
          window.clearInterval(intervalId);
          observer.disconnect();
        }
      }, 35);
    }, { threshold: 0.55 });

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [reduced]);

  return <span ref={countRef} className="stat-number" aria-label="25 events">{count}</span>;
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-glow" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <Reveal className="hero-candidate-identity">
            <div className="hero-portrait-frame">
              <img
                className="hero-portrait"
                src="/images/sakib.jpg"
                alt="Portrait of MD Jamshadul Alam wearing a dark traditional outfit"
                width="2610"
                height="3480"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <div className="hero-identity-copy">
              <span className="hero-identity-label">CANDIDATE</span>
              <strong>MD JAMSHADUL ALAM</strong>
              <span className="hero-identity-role">Joint Secretary · PCIU Computer Club</span>
              <span className="hero-symbol-tag"><Monitor size={14} /> DESKTOP MONITOR <i /> ELECTION SYMBOL</span>
            </div>
          </Reveal>
          <Reveal className="candidate-kicker"><span className="kicker-line" /> CANDIDATE FOR JOINT SECRETARY</Reveal>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, delay: 0.08 }}>
            I know what<br />it takes to <span className="text-coral">make it</span><br /><span className="headline-underline">happen.</span>
          </motion.h1>
          <Reveal delay={0.16} className="hero-paragraph">
            I’ve done the work behind the scenes. Now I’m ready to bring that experience to the 4th Executive Committee—and help the club work even better.
          </Reveal>
          <Reveal delay={0.23} className="hero-actions">
            <a className="button button-primary" href="#manifesto">Explore my manifesto <ArrowDownRight size={17} /></a>
            <a className="button button-text" href="#experience">My experience <ArrowRight size={16} /></a>
          </Reveal>
          <Reveal delay={0.3} className="hero-footline">
            <span className="mini-avatar"><Monitor size={17} /></span>
            <span><b>Former Event Secretary</b><small>2nd Executive Committee · 2025–2026</small></span>
          </Reveal>
          <Reveal delay={0.36} className="hero-countdown-reveal"><VotingCountdown /></Reveal>
        </div>
        <HeroMonitor />
      </div>
      <div className="hero-bottom container">
        <span>BUILT ON EXPERIENCE</span><span className="hero-bottom-line" /><span>FOCUSED ON WHAT COMES NEXT <ArrowDownRight size={15} /></span>
      </div>
    </section>
  );
}

function ExperienceBand() {
  return (
    <section className="experience-band" id="experience">
      <div className="container">
        <Reveal className="band-intro">
          <span className="section-label"><span /> THE EXPERIENCE I BRING</span>
          <p>Not just a position on paper.<br /><b>Real work. Real responsibility.</b></p>
        </Reveal>
        <div className="stat-grid">
          <Reveal className="stat-card stat-primary" delay={0.03}>
            <EventCount />
            <div className="stat-rule" />
            <h3>events in the year’s record</h3>
            <p>A wide range of club activities, backed by the practical work that makes them happen.</p>
            <span className="stat-index">01 / EXPERIENCE</span>
          </Reveal>
          <Reveal className="stat-card stat-soft" delay={0.1}>
            <span className="stat-year">2025<span>—</span>26</span>
            <div className="stat-rule" />
            <h3>Event Secretary</h3>
            <p>2nd Executive Committee · PCIU Computer Club</p>
            <span className="stat-index">02 / SERVICE</span>
          </Reveal>
          <Reveal className="stat-card stat-cream" delay={0.17}>
            <div className="stat-icon-wrap"><Sparkles size={23} /></div>
            <h3>From planning to last-minute problem-solving.</h3>
            <p>Hands-on responsibility for details, late-night work and the unexpected.</p>
            <span className="stat-index">03 / OWNERSHIP</span>
          </Reveal>
        </div>
        <div className="band-footnote"><span>01—25</span><p>The event record is my reference point—not a list of names. What matters is what the work taught me.</p></div>
      </div>
    </section>
  );
}

function WhatILearned() {
  const [active, setActive] = useState('prepare');
  const current = lessons.find((lesson) => lesson.id === active) || lessons[0];
  const ActiveIcon = current.icon;
  return (
    <section className="lessons-section">
      <div className="container lessons-layout">
        <Reveal className="lessons-heading">
          <span className="section-label"><span /> WHAT THE WORK TAUGHT ME</span>
          <h2>The real work<br />is <em>in the details.</em></h2>
          <p>Anyone can see an event on the day. I learned to value the preparation, teamwork and quick decisions that happen before—and in the middle of—it.</p>
          <div className="handwritten-note"><span>↳</span> That’s experience I can carry forward.</div>
        </Reveal>
        <Reveal className="lesson-interactive" delay={0.1}>
          <div className="lesson-tabs" role="tablist" aria-label="Lessons from event work">
            {lessons.map((lesson, index) => (
              <button key={lesson.id} role="tab" aria-selected={active === lesson.id} className={active === lesson.id ? 'lesson-tab active' : 'lesson-tab'} onClick={() => setActive(lesson.id)}>
                <span>0{index + 1}</span>{lesson.label}<ArrowUpRight size={15} />
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.article className="lesson-detail" key={current.id} initial={{ opacity: 0, x: 13 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.22 }}>
              <div className="lesson-detail-icon"><ActiveIcon size={23} /></div>
              <span className="lesson-small-label">FIELD NOTE / {current.id.toUpperCase()}</span>
              <h3>{current.heading}</h3>
              <p>{current.body}</p>
              <div className="lesson-tags">{current.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="lesson-detail-footer"><span>LESSON CARRIED FORWARD</span><Check size={16} /></div>
            </motion.article>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

function MonitorMeaning() {
  return (
    <section className="monitor-story" aria-labelledby="monitor-story-heading">
      <div className="container monitor-story-layout">
        <Reveal className="monitor-story-copy">
          <span className="section-label"><span /> WHY THE MONITOR</span>
          <h2 id="monitor-story-heading">One clear view.<br /><em>Better coordination.</em></h2>
          <p>A monitor brings separate windows into one clear view. I see the symbol the same way: timelines, people and practical details should be visible to the team, so the committee can coordinate the work together.</p>
          <a className="button button-primary" href="#manifesto">See the commitments <ArrowDownRight size={17} /></a>
        </Reveal>
        <Reveal className="monitor-story-screen" delay={0.1}>
          <div className="story-screen-top"><span className="window-dots"><i /><i /><i /></span><span>PCIU / EVENT DESK</span><span className="screen-status"><i /> READY</span></div>
          <div className="story-screen-content">
            <div className="story-screen-kicker">A SIMPLE WAY TO WORK</div>
            <div className="story-screen-row"><span>01</span><b>PLAN</b><small>Timeline · Owners · Materials</small><Check size={15} /></div>
            <div className="story-screen-row"><span>02</span><b>COORDINATE</b><small>Updates · Team · Event day</small><Check size={15} /></div>
            <div className="story-screen-row"><span>03</span><b>LEARN</b><small>Feedback · Handover · Next time</small><ArrowUpRight size={15} /></div>
            <div className="story-screen-scan" />
          </div>
          <div className="story-screen-caption"><Monitor size={15} /> CLEAR DETAILS HELP THE WHOLE TEAM MOVE.</div>
        </Reveal>
      </div>
    </section>
  );
}

function Manifesto() {
  const [expanded, setExpanded] = useState('01');
  const reduced = useReducedMotion();
  return (
    <section className="manifesto-section" id="manifesto">
      <div className="manifesto-orb" />
      <div className="container">
        <Reveal className="manifesto-header">
          <div>
            <span className="section-label section-label-light"><span /> MY MANIFESTO / 4TH EXECUTIVE COMMITTEE</span>
            <h2>Less last-minute chaos.<br /><em>More work that works.</em></h2>
          </div>
          <p>My commitments are practical on purpose. They’re shaped by the work I’ve already done—and by what I believe can help the next team do better.</p>
        </Reveal>
        <div className="commitment-list">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            const isOpen = expanded === item.number;
            return (
              <motion.article layout={!reduced} key={item.number} className={`commitment ${isOpen ? 'commitment-open' : ''}`}>
                <button className="commitment-trigger" id={`commitment-trigger-${item.number}`} onClick={() => setExpanded(isOpen ? '' : item.number)} aria-controls={`commitment-panel-${item.number}`} aria-expanded={isOpen}>
                  <span className="commitment-num">{item.number}</span>
                  <span className="commitment-icon"><Icon size={20} strokeWidth={1.8} /></span>
                  <span className="commitment-title"><b>{item.title}</b><small>{item.line}</small></span>
                  <span className="commitment-toggle"><ChevronDown size={20} /></span>
                </button>
                <motion.div id={`commitment-panel-${item.number}`} role="region" aria-labelledby={`commitment-trigger-${item.number}`} aria-hidden={!isOpen} inert={!isOpen} className="commitment-detail" initial={false} animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : 0.28, ease: 'easeInOut' }}>
                  <div><p>{item.detail}</p><span className="commitment-proof"><Check size={15} /> {item.proof}</span></div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
        <div className="manifesto-note"><span className="note-star">✳</span><p><b>My promise:</b> be dependable, stay approachable, communicate honestly and help turn the committee’s ideas into well-executed experiences—with the whole team.</p></div>
      </div>
    </section>
  );
}

function Approach() {
  const [active, setActive] = useState('before');
  const reduced = useReducedMotion();
  const step = steps.find((item) => item.key === active) || steps[0];

  const moveTab = (event, index) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? steps.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : steps.length - 1)) % steps.length;
    setActive(steps[nextIndex].key);
    document.getElementById(`playbook-tab-${steps[nextIndex].key}`)?.focus();
  };
  return (
    <section className="approach-section" id="approach">
      <div className="container">
        <Reveal className="approach-heading">
          <span className="section-label"><span /> HOW I WANT TO WORK</span>
          <h2>From <em>“let’s do this”</em><br />to “well done.”</h2>
          <p>Good execution isn’t one big moment. It’s a repeatable way of working.</p>
        </Reveal>
        <Reveal className="process-shell" delay={0.08}>
          <div className="process-selector" role="tablist" aria-label="Event workflow">
            {steps.map((item, index) => (
              <button key={item.key} id={`playbook-tab-${item.key}`} type="button" role="tab" aria-controls="playbook-panel" tabIndex={active === item.key ? 0 : -1} onKeyDown={(event) => moveTab(event, index)} aria-selected={active === item.key} className={active === item.key ? 'process-tab active' : 'process-tab'} onClick={() => setActive(item.key)}>
                <span>{item.number}</span><b>{item.title}</b><ArrowUpRight size={17} />
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div id="playbook-panel" role="tabpanel" aria-labelledby={`playbook-tab-${step.key}`} tabIndex={0} className="process-content" key={step.key} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -8 }} transition={{ duration: reduced ? 0 : 0.2 }}>
              <div className="process-big-number" aria-hidden="true">{step.number}</div>
              <div className="process-copy"><span>THE JS PLAYBOOK / {step.title.toUpperCase()} AN EVENT</span><h3>{step.headline}</h3><p>{step.text}</p><ul>{step.actions.map((action) => <li key={action}><Check size={15} />{action}</li>)}</ul></div>
            </motion.div>
          </AnimatePresence>
          <div className="process-progress"><span className={active === 'before' ? 'current' : 'done'} /><span className={active === 'during' ? 'current' : active === 'after' ? 'done' : ''} /><span className={active === 'after' ? 'current' : ''} /></div>
        </Reveal>
      </div>
    </section>
  );
}

function First30Days() {
  const actions = [
    { range: 'WEEK 01', title: 'Listen and review.', detail: 'Hear the committee’s priorities, review the handover and existing event calendar, and learn what is already in progress.' },
    { range: 'WEEK 02', title: 'Map the next event.', detail: 'Work with the responsible leads to outline dates, roles, required materials and open questions for the next approved activity.' },
    { range: 'WEEKS 03–04', title: 'Share a usable checklist.', detail: 'Bring a draft planning and logistics checklist to the team, gather edits, and agree together on what is useful to keep.' },
    { range: 'BY DAY 30', title: 'Set a feedback loop.', detail: 'Discuss a simple way to collect member feedback after activities and how recurring themes can be brought back to the committee.' },
  ];
  return (
    <section className="first-days-section" id="first-30-days">
      <div className="container first-days-layout">
        <Reveal className="first-days-heading">
          <span className="section-label"><span /> A PRACTICAL START</span>
          <h2>The first<br /><em>30 days.</em></h2>
          <p>A working sequence, not a list of guarantees. The committee’s priorities and approvals come first.</p>
        </Reveal>
        <div className="first-days-list">
          {actions.map((action, index) => (
            <Reveal className="first-days-item" key={action.range} delay={index * 0.04}>
              <span className="first-days-range">{action.range}</span>
              <div><h3>{action.title}</h3><p>{action.detail}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ManifestoWhatsAppShare() {
  const pageUrl = new URL(window.location.href);
  pageUrl.hash = '';
  const message = `MD JAMSHADUL ALAM for Joint Secretary, PCIU Computer Club 4th Executive Committee. Look for the desktop monitor. Voting: 29 October 2026, 11:00 AM–2:00 PM Bangladesh time. ${pageUrl.toString()}`;
  const href = `https://wa.me/?text=${encodeURIComponent(message)}`;
  return <a className="button button-whatsapp" href={href} target="_blank" rel="noreferrer" aria-label="Share this manifesto on WhatsApp"><MessageCircle size={17} /> Share on WhatsApp <ArrowUpRight size={15} /></a>;
}

function CampaignShare() {
  return (
    <section className="campaign-share" aria-label="Share the campaign">
      <div className="container campaign-share-inner">
        <div><span className="section-label section-label-light"><span /> PASS IT ON</span><p>Know someone in the club? Share the manifesto and the voting hours.</p></div>
        <ManifestoWhatsAppShare />
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="closing-section" id="vote">
      <div className="closing-background-mark"><Monitor strokeWidth={0.7} /></div>
      <div className="container closing-layout">
        <Reveal className="closing-copy">
          <span className="section-label section-label-light"><span /> THE NEXT CHAPTER</span>
          <h2>Look for the<br /><em>monitor.</em><br />Vote for experience.</h2>
          <p>I’ve seen the effort behind this club. I’m ready to bring that first-hand understanding, practical coordination and dependable support to the 4th Executive Committee.</p>
          <div className="closing-actions"><a className="button button-coral" href="#home">MD Jamshadul Alam <ArrowUpRight size={17} /></a><span>Candidate for Joint Secretary</span></div>
        </Reveal>
        <Reveal className="vote-card" delay={0.12}>
          <div className="vote-card-top"><span>PCIU COMPUTER CLUB</span><span>2026 / JS</span></div>
          <div className="vote-symbol"><Monitor strokeWidth={1.3} /></div>
          <span className="vote-card-label">MY ELECTION SYMBOL</span>
          <h3>THE<br /><em>MONITOR</em></h3>
          <div className="vote-card-date"><span>VOTE ON</span><b>29 OCTOBER</b><span>4TH EXECUTIVE COMMITTEE</span></div>
          <div className="vote-card-foot"><span>EXPERIENCE</span><span>RESPONSIBILITY</span><span>TEAMWORK</span></div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <a className="footer-brand" href="#home"><span className="brand-icon"><MonitorMark /></span><span><b>MD JAMSHADUL ALAM</b><small>JOINT SECRETARY · PCIU COMPUTER CLUB</small></span></a>
        <p>Built on experience. Focused on execution.</p>
        <a className="footer-top" href="#home">BACK TO TOP <ArrowUpRight size={15} /></a>
      </div>
      <div className="container footer-bottom"><span>4TH EXECUTIVE COMMITTEE ELECTION</span><span>29 OCTOBER 2026 · SYMBOL: MONITOR</span></div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add('js-enabled');
    return () => document.documentElement.classList.remove('js-enabled');
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExperienceBand />
        <MonitorMeaning />
        <WhatILearned />
        <Manifesto />
        <Approach />
        <First30Days />
        <CampaignShare />
        <Closing />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
