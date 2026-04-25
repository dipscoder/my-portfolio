# Dipesh Jaiswal

## Contact

- Email: dipeshjaiswal140@gmail.com
- Website: dipeshjaiswal.com
- LinkedIn: linkedin.com/in/dipesh-jaiswal
- GitHub: github.com/dipscoder

## Summary

Senior Software Engineer and Engineering Lead with 4+ years of experience building enterprise SaaS from the ground up. Progressed from backend intern to senior engineer and team lead at CultureX, an influencer marketing SaaS platform serving 150+ enterprise clients including Mahindra, Nestle, and Decathlon. Leads a team of 8-9 engineers. Specialized in distributed systems, performance optimization, and cloud architecture on AWS. Long-term career goal: Staff/Principal Engineer track at top-tier engineering organizations, with flexibility toward Engineering Management. Open to relocating to Bengaluru.

## Experience

### Senior Software Engineer & Engineering Lead — CultureX Entertainment (Oct 2021 – Present)

Influencer Marketing SaaS Platform | Ahmedabad, India

**Core Achievement #1 — Multi-Tenant SaaS Transformation:**
CultureX was not originally SaaS. They deployed entirely separate AWS infrastructure (servers, frontend, database) per client. After 20+ clients this became unscalable. Dipesh led the full transformation to a single SaaS platform — single DB, single server, single AWS infra. Migrated all 20 existing clients, then onboarded 120+ more on the unified platform. This involved consolidating 20 single-tenant MySQL databases into a unified architecture with tenant isolation, centralized authentication, and shared resource model enabling horizontal scaling.

**Core Achievement #2 — MongoDB Schema Re-architecture & Migration:**
The MongoDB social data side (influencer profiles, social profiles — separate from MySQL which handles user-centric data) had critical schema design issues with important data deeply nested in single documents, blocking scaling and new features. Dipesh re-architected the entire MongoDB schema, rewrote all APIs with backward compatibility, and migrated 8M+ documents with zero downtime. Production cutover executed during an 8-hour maintenance window (Sept 21, 10:45 PM – Sept 22, 6:45 AM) with no major issues. Query performance improved by 70%.

**Infrastructure & Cost Optimization:**

- Reduced AWS infrastructure costs by 40-70% through strategic migration to Graviton ARM instances, consolidation of Application Load Balancers, optimization of storage with gp3 volumes, and Node.js v22 upgrade — all with zero downtime and 99.99% uptime.
- Led setup and review of observability stack (OpenTelemetry, Loki, Grafana, Tempo, Prometheus on AWS spot instances) for production API monitoring across SaaS server, analytics server, creator service, and worker server.

**Systems & Features Built:**

- MyBuckets async influencer collection system using worker-based architecture with SQS queues and Firebase Realtime Database, handling 1000+ concurrent influencer requests with real-time UI updates.
- High-throughput data ingestion pipeline achieving 20x performance improvement through batch processing, parallel execution, and optimized data structures.
- Event-driven Deep Analysis Engine leveraging SQS/SNS architecture to process 2+ years of historical influencer data, delivering actionable performance analytics to 150+ enterprise clients through async background processing.
- Automated reporting system analyzing 100K+ media daily with engagement metrics and sentiment analysis.
- Device Access Control System: session-limiting login system across backend and frontend restricting concurrent sessions per user.
- Optimized SuperAdmin analytics dashboard API from 90+ seconds to sub-800ms (99% reduction) through query profiling, SQL optimization, and strategic indexing.
- Fixed concurrency issues in production causing data duplication in asynchronous tasks.

**Leadership:**

- Led team of 8-9 engineers (previously up to 10). Established AWS infrastructure (Lambda, EC2, S3, RDS, CloudFront) and CI/CD pipelines reducing deployment time by 60%. Conducted 300+ code reviews and mentored junior developers.
- Produces monthly tech reports covering developer performance and infrastructure/API cost analysis.
- Conducted technical interviews for TPM candidates using HLD, LLD, and Solution Architecting frameworks.
- Supervised intern-built OTEL/LGTM monitoring stack on AWS, identifying and remediating critical production issues (hardcoded endpoints, S3 misconfigurations, unlimited Loki stream cardinality, missing trace sampling, inadequate spot instance termination handling).

**Ongoing Infrastructure Challenge:**
MongoDB cluster auto-scaling (M20 to M30) from inefficient queries on the `posts` collection adding ~$186/month. MongoDB credits expired Feb 2026 with ~$500/month direct charges expected. Engineering/product teams unresponsive to query optimization reminders.

### Full-Stack Developer — Academix, EdTech Platform (Feb 2022 – Jun 2022)

- Built online learning platform with React.js frontend and Node.js backend, Google OAuth and OTP auth, onboarding under 30 seconds.
- Mentor-user matching algorithm with multi-layer filters achieving 80% match accuracy; Google Calendar API integration, AWS S3 for media storage.
- Migrated backend from raw SQL to Sequelize ORM, improving code maintainability by 60%.

## Projects

### Personal Notes MCP Server

A shared memory layer for AI assistants using the Model Context Protocol. Built with React (frontend), Python (backend), Stytch for authentication & authorization, SQLite as database. Demonstrates understanding of the MCP ecosystem and cross-language capability (JavaScript/TypeScript primary, Python learned for this project).

## Technical Skills

- Languages: JavaScript, TypeScript, Python, SQL, Java, Go
- Backend: Node.js, Express.js, REST APIs, GraphQL, Microservices, WebSockets, Event-Driven Architecture
- Frontend: React.js, Next.js, Redux, HTML5, CSS3, Responsive Design
- Databases: MySQL, MongoDB, PostgreSQL, Redis, SQLite — Query Optimization, Indexing, Data Migration, Database Design
- AWS: Lambda, EC2, S3, CloudFront, RDS, SQS, SNS, EventBridge, CloudWatch, Elastic Beanstalk, IAM
- DevOps & Observability: Docker, Kubernetes, GitHub Actions, CI/CD, Firebase, Serverless Framework, OpenTelemetry, Grafana, Loki, Tempo, Prometheus
- Tools: Git, Sequelize ORM, Figma

## Education

Bachelor of Technology in Computer Engineering (2018 – 2022)
LDRP Institute of Technology and Research — CGPA: 8.35/10

## Personal

- Based in Ahmedabad, open to relocating to Bengaluru
- Enjoys cycling
- Communication style: concise, direct, no filler. Prefers honest assessments over encouraging framing. Signs off emails with "Best, Dipesh."
- Career aspiration: Staff/Principal Engineer at strong engineering cultures (Series A/B companies as intermediate step, top-tier orgs like Google as long-term goal), with flexibility toward Engineering Management.
