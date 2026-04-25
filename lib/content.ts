// Single source of truth for the home page copy.
// Keep this in sync with /revamp/portfolio.jsx.

export const HERO_VARIANTS = [
  {
    label: 'A · Conversational',
    eyebrow: 'Hi, I’m Dipesh —',
    head: 'the guy who makes sure the software people use works pretty much all the time.',
    sub: 'No lag, no drama. Backend, infra, and the bits in between.',
  },
  {
    label: 'B · The thread',
    eyebrow: 'Senior engineer at CultureX.',
    head: 'I started as an intern learning Node. Now the things I help build run for Mahindra, Nestlé, Decathlon, and 150+ other teams.',
    sub: 'Backend-leaning. Infra-curious. Frontend-aware.',
  },
  {
    label: 'C · Quiet',
    eyebrow: '',
    head: 'I build the parts of software you’re not supposed to notice — the parts that just work.',
    sub: 'Dipesh · senior engineer, CultureX.',
  },
] as const;

export const ABOUT_PARAS = [
  'I joined CultureX as the founding engineer back when I was an intern still figuring out what Node.js was. We built the product from scratch. Today it’s used by 150+ enterprise teams — Mahindra, Nestlé, Decathlon among them — to run influencer marketing at a scale that didn’t exist when we started.',
  'I’m not the engineer who works 24/7. I’m the one who likes understanding tech deeply, exploring products, listening to user feedback, and being able to talk about all of it without burying anyone in jargon.',
  'A developer who loves product — that’s the shortest honest version. I care about the user feedback loop as much as the system architecture, and I think the best engineers are the ones who can hold both in their head at once.',
  'Lately I’m thinking a lot about how AI is reshaping how we build products — not the demo-day version, the boring useful version that quietly makes someone’s day a little easier.',
] as const;

export const SKILLS_PROSE = [
  {
    label: 'Backend',
    body: 'Most days I’m in the backend — Node, TypeScript, Mongo, Postgres, queues that occasionally misbehave. I like understanding systems from the deep core: how they actually work, not just how to use them.',
  },
  {
    label: 'Infra',
    body: 'I’ve grown into the infra layer too — AWS Lambda, EC2, SQS, the moment a 90-second API becomes sub-second. The unglamorous bits, but the ones that make everything else possible.',
  },
  {
    label: 'Frontend',
    body: 'I keep one foot in the frontend so I never forget what the user actually sees. React, Next.js, the difference between functional and feels-good. That’s the bar.',
  },
] as const;

export const SKILLS_LOGOS = [
  'Node', 'TypeScript', 'Python', 'Go',
  'MongoDB', 'Postgres', 'MySQL', 'Redis',
  'React', 'Next.js', 'AWS', 'Docker',
] as const;

export const HIGHLIGHTS = [
  {
    title: 'Reshaping eight million documents, live',
    body: 'The old MongoDB schema was working but groaning. I rewrote it for the way we actually queried, and migrated 8M+ docs to the new shape during a single 8-hour cutover. No downtime, queries 70% faster the morning after.',
    foot: '8M+ documents migrated, zero downtime.',
  },
  {
    title: 'A 90-second dashboard that became 800ms',
    body: 'The SuperAdmin analytics dashboard took 90+ seconds to load. The fun of this one was the detective work — query profiling, finding the indexes the database actually wanted, deleting code that turned out to be the problem.',
    foot: '99% faster. Same data.',
  },
  {
    title: 'Working with people, not just code',
    body: 'I lead a team of ten engineers now. The work I’ve enjoyed most isn’t the architecture diagrams — it’s the back-and-forth in code reviews, learning how juniors and seniors think about a problem and adjusting how I think about it.',
    foot: 'Founding engineer → engineering lead. ~300 reviews, mentor to many.',
  },
] as const;

export const EXPERIENCE = [
  {
    role: 'Senior Software Engineer',
    company: 'CultureX Entertainment',
    sub: 'Influencer marketing SaaS · Ahmedabad',
    period: 'Oct 2021 — Present',
    bullets: [
      'Founding engineer → senior → lead. Team of 10.',
      'Architected the multi-tenant transition: 20 deploys into one platform.',
      'Migrated 8M+ Mongo docs to a new schema, zero downtime.',
      'Cut AWS spend ~40% via Graviton, ALB consolidation, gp3, reserved capacity.',
      'Built MyBuckets — SQS-backed worker system handling 1000+ concurrent influencer requests with realtime UI.',
      'Designed an event-driven Deep Analysis engine processing 2+ years of historical data for 150+ enterprise clients.',
      'Took the SuperAdmin analytics dashboard from 90s to <800ms.',
      'Established AWS foundations (Lambda, EC2, S3, RDS, CloudFront) and CI/CD that cut deploys 60%.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Academix',
    sub: 'EdTech platform · Ahmedabad',
    period: 'Feb 2022 — Jun 2022',
    bullets: [
      'Shipped a learning platform end-to-end: React.js + Node.js, OAuth + OTP onboarding under 30 seconds.',
      'Mentor–user matching algorithm with multi-layer filters; ~80% match accuracy.',
      'Migrated raw SQL to Sequelize and rewrote the responsive UI to feel less like 2015.',
    ],
  },
] as const;

export const SIDE_PROJECT = {
  eyebrow: 'Personal Notes · MCP server',
  title: 'A small server that lets me ask my own notes questions.',
  body:
    'Built to scratch a personal itch — the kind of project where you find out how a thing actually works by making one. FastAPI, Anthropic’s MCP, deployed somewhere I can forget about.',
} as const;

export const NORTH_STAR =
  'I want to build software that disappears into people’s lives — quietly useful, almost boring in how reliable it is — and use AI as an ingredient, not the headline.';

export const BRIDGES = {
  about: 'The longer version, in case you’re curious.',
  skills: 'What I actually reach for.',
  highlights: 'A few problems I’m proud of having sat with.',
  experience: 'And where I’ve done it.',
  projects: 'A couple of things I’ve built for myself.',
  writing: 'Notes from along the way.',
  contact: 'If any of this resonates, say hi.',
} as const;

export const LINKS = {
  email: 'dipeshjaiswal140@gmail.com',
  github: 'github.com/dipscoder',
  linkedin: 'linkedin.com/in/dipesh-jaiswal',
  site: 'dipeshjaiswal.com',
  blog: 'dipeshjaiswal.com/writing',
  resume: '/resume.pdf',
} as const;
