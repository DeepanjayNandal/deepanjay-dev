export const personal = {
  name: "deepanjay nandal",
  role: "backend & ai infrastructure engineer",
  location: "bengaluru, karnataka, india",
  email: "deepanjay.nandal12@gmail.com",
  github: "https://github.com/DeepanjayNandal",
  linkedin: "https://www.linkedin.com/in/deepanjay-nandal/",
  resume: "/resume.pdf",
  openToWork: true,
  bio: [
    "Backend and AI infrastructure engineer with an M.S. from Arizona State University and 3+ years of production experience across distributed systems, event-driven pipelines, LLM and RAG infrastructure, and cloud ML deployments. Combines low-level systems and security depth from Android security work with hands-on AI infrastructure across semantic caching and hybrid retrieval.",
    "Previously at Ittiam Systems, delivering CVE validation infrastructure for Google's Android Security team, authoring 50+ security tests merged into AOSP. At Discover Excellence, built Kafka-based event processing, Redis personalization, and fault-tolerant job pipelines for an AI eCommerce analytics platform. At Appy.yo, engineered the backend for WeVibe, a real-time iOS matchmaking platform deployed on Google Cloud Run.",
    "Recent projects: BitMod (9-layer LLM inference cache), CaseTally (hybrid legal RAG platform over 33k+ U.S. Code chunks), and Elastic Face Recognition (cloud and edge ML pipeline across EC2, Lambda, and Greengrass).",
  ],
};

export const work = [
  {
    company: "discover excellence llc",
    url: "https://dexusa.com/",
    role: "software engineer (contract)",
    period: "jan 2026 – jun 2026",
    location: "remote",
    summary:
      "Built and deployed production backend infrastructure for an AI-powered eCommerce analytics platform, focusing on high-throughput event processing, real-time personalization, and fault-tolerant job execution.",
    tags: ["Kafka", "Redis", "BullMQ", "Node.js", "TypeScript", "AWS SES", "Cloudflare"],
    featured: true,
    bullets: [
      "Built a high-throughput Kafka-based visitor intelligence pipeline processing 100k+ daily behavioral events at sub-40ms p95 latency, driving targeted discount outreach via AWS SES across eCommerce client stores.",
      "Designed an in-memory Redis collaborative filtering layer for real-time product affinity scoring across multi-tenant workloads, serving recommendations without a separate model-serving hop.",
      "Served personalized product feeds at the edge via Cloudflare, achieving 92% cache hit rate and sub-30ms p95 latency for multi-tenant deployments.",
      "Implemented a fault-tolerant BullMQ background pipeline handling 50k+ daily jobs with guaranteed job delivery through persistent state, retries, exponential backoff, and idempotency keys.",
    ],
  },
  {
    company: "appy.yo",
    url: "https://appyyo.vercel.app/",
    role: "backend engineer",
    period: "jan 2026 – apr 2026",
    location: "remote",
    summary:
      "Delivered the WeVibe backend as a client engagement for Appy.yo, working directly against the iOS client from requirements through to production deployment on Google Cloud Run.",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "PostGIS", "Socket.IO", "Upstash Redis", "Prisma", "Firebase Authentication", "Google Cloud Run", "Docker", "Google Gemini", "Jest"],
    featured: true,
    bullets: [
      "Built the real-time matchmaking and messaging backend using Node.js, TypeScript, Socket.IO, and Upstash Redis pub/sub for horizontally scalable event delivery, working directly against the iOS client throughout development.",
      "Deployed containerized backend on Google Cloud Run with Prisma ORM, signed Cloud Storage URLs, Firebase Cloud Messaging push notifications, and soft-delete with a 30-day grace period and daily hard-delete purge.",
    ],
  },
  {
    company: "ittiam systems pvt ltd",
    url: "https://www.ittiam.com",
    role: "software engineer → senior software engineer",
    period: "mar 2022 – jun 2024",
    location: "bangalore, india",
    summary:
      "Built CVE validation tooling and automated pipelines for Google's Android Security team, working directly with Google engineers across vulnerability reproduction, binary analysis, and security test authorship upstreamed into AOSP.",
    tags: ["Python", "Android/AOSP", "CTS", "STS", "Ghidra", "Frida", "ClusterFuzz", "PostgreSQL", "GCP", "Docker", "REST APIs", "Google Gerrit", "Binary Analysis"],
    featured: true,
    bullets: [
      "Authored 50+ CTS/STS validation tests, each proving a CVE patch, merged into the public Android Open Source Project (AOSP) through Google's review and Gerrit submission process.",
      "Developed a Ghidra-based binary analysis approach for the Android Bluetooth stack that Google had marked infeasible, adopted as the team-wide standard and enabling 40+ Bluetooth CVEs to be validated to date.",
      "Engineered a Frida instrumentation framework in Python and Java to hook private Android methods at runtime, enabling the team to reproduce 30+ CVEs that standard testing could not reach.",
      "Built a GCP Python pipeline to ingest ClusterFuzz crash outputs across Dockerized environments, auto-classifying reports by CVSS severity into a PostgreSQL-backed schema, cutting manual triage overhead by 35%.",
      "Automated Google Gerrit CI/CD workflows via idempotent webhook-triggered Python scripts, handling 30 to 40 CVE submissions per month.",
    ],
  },
  {
    company: "accenture",
    url: "https://www.accenture.com",
    role: "associate application developer",
    period: "nov 2021 – mar 2022",
    location: "pune, india",
    summary:
      "Completed enterprise application development training focused on Java, object-oriented programming, multithreading, JDBC, SQL, and backend development fundamentals.",
    tags: ["Java", "JDBC", "OOP", "Multithreading", "SQL"],
    featured: false,
    bullets: [
      "Completed enterprise backend training in Java, object-oriented programming, multithreading, JDBC, and application development fundamentals.",
      "Built small Java API modules with a focus on clean code, maintainability, and basic backend design.",
      "Practiced SQL database connectivity and enterprise development workflows used in production-style backend projects.",
    ],
  },
  {
    company: "prepinsta",
    url: "https://prepinsta.com",
    role: "software engineering intern",
    period: "may 2020 – jun 2020",
    location: "remote",
    summary:
      "Worked with the development team on a placement preparation platform, contributing to educational web pages, responsive student-facing interfaces, and coding-solution content.",
    tags: ["React", "JavaScript", "HTML/CSS", "Web Development"],
    featured: false,
    bullets: [
      "Built responsive web interfaces using React for student-facing placement preparation pages.",
      "Developed 50+ JavaScript-based coding solutions for student placement quizzes, focusing on accurate logic and readable explanations.",
      "Updated educational web pages and improved frontend usability across desktop and mobile views.",
    ],
  },
];

export const education = [
  {
    school: "arizona state university",
    url: "https://www.asu.edu",
    degree: "master of science in computer software engineering",
    period: "aug 2024 – may 2026",
    location: "arizona, usa",
  },
  {
    school: "vellore institute of technology",
    url: "https://vit.ac.in",
    degree: "bachelor of technology in information technology",
    period: "jul 2017 – jul 2021",
    location: "tamil nadu, india",
  },
];

export const projects = [
  {
    title: "BitMod — AI Inference Cache & Semantic Reuse Engine",
    description:
      "A reverse proxy compatible with OpenAI, Anthropic, and Gemini API formats that sits between any application and any LLM provider, intercepting queries and serving semantically equivalent ones from cache, cutting latency and API costs without changing a line of application code.",
    url: "https://github.com/DeepanjayNandal/BitMod--AI-Inference-Cache-Semantic-Reuse-Engine",
    period: "january – june 2026",
    bullets: [
      "Engineered a 9-layer LLM cache proxy combining SHA-256 exact lookup, semantic embedding similarity, fuzzy matching, composable reuse, TTL/LRU eviction, and Bayesian evidence scoring, achieving up to 94% cache hit rate in benchmark runs.",
      "Reduced cached response latency to 71ms on average against a 12.5s uncached LLM generation baseline, producing a measured 176x speedup for cache-resolved requests.",
      "Implemented pluggable provider, storage, and vector-index layers with threshold-tuned semantic matching and negative evidence controls to reduce stale or unsafe cache hits.",
      "Designed for multi-tenant deployments with namespace-scoped cache isolation per team or customer, and a bulk ingestion pipeline supporting 7 file formats that eliminates cold start by pre-seeding the cache with existing Q&A datasets.",
    ],
    tags: ["Python", "FastAPI", "Embeddings", "Vector Search", "LLM Caching", "Semantic Caching", "Backend Infrastructure"],
    featured: true,
  },
  {
    title: "CaseTally — Legal Search Platform",
    description:
      "Hybrid legal retrieval platform over 33,969 U.S. Code chunks parsed from govinfo.gov HTML files, combining BM25 and HNSW pgvector retrieval, LLM query rewriting, and a retrieval evaluation harness.",
    url: "https://github.com/DeepanjayNandal/casetally",
    period: "june – december 2025",
    bullets: [
      "Built hybrid legal search over 33,969 U.S. Code chunks using BM25 and HNSW-indexed pgvector, combining top-50 candidates from each method with min-max normalization and weighted score fusion.",
      "Added LLM query rewriting via Groq before every retrieval pass to convert user questions into statutory terminology, improving Mean Reciprocal Rank (MRR) by 21% across 15 benchmark queries.",
      "Validated retrieval quality with a custom evaluation harness measuring Precision@3, Recall@5, and MRR, with raw hybrid retrieval benchmarked at p50 6ms and max 22ms.",
      "Ingested 54 U.S. Code titles through a custom HTML parser with SHA256-based change detection, re-encoding embeddings only on text changes, and streamed answers token by token via FastAPI SSE.",
    ],
    tags: ["Python", "FastAPI", "PostgreSQL", "pgvector", "BM25", "HNSW", "Vector Search", "RAG", "Server-Sent Events"],
    featured: true,
  },
  {
    title: "Elastic Face Recognition Cloud System",
    description:
      "A cloud and edge-based machine learning infrastructure project that evolved a face-recognition pipeline from EC2 autoscaling to serverless inference and edge-cloud processing using AWS SQS, Lambda, ECR, and IoT Greengrass.",
    url: "https://github.com/DeepanjayNandal/elastic-face-recognition",
    period: "august 2025 – december 2025",
    institution: "arizona state university",
    bullets: [
      "Scaled face-recognition inference using MTCNN and FaceNet in PyTorch across 15 Amazon EC2 instances with a custom SQS-depth autoscaler, achieving 0.96s average latency under 100 concurrent requests.",
      "Re-architected the workflow into an event-driven serverless pipeline using Docker images on Amazon ECR, with AWS Lambda workers triggered asynchronously by Amazon SQS events to remove server management overhead.",
      "Built an edge-cloud hybrid pipeline using AWS IoT Greengrass and MQTT, running MTCNN detection on edge devices to short-circuit no-face cases before Lambda invocation, achieving ~776ms pipeline response time.",
    ],
    tags: ["AWS EC2", "Amazon SQS", "AWS Lambda", "Amazon ECR", "AWS IoT Greengrass", "MQTT", "Python", "Docker", "PyTorch", "MTCNN", "FaceNet"],
    featured: true,
  },
  {
    title: "WeVibe — Real-Time Matchmaking & Dating Platform",
    description:
      "Real-time iOS matchmaking and dating platform backend: pub/sub event relay for scalable messaging, PostGIS geo-filtering with advisory-lock pairing, Gemini bio generation with prompt-injection guards, and containerized deployment on Google Cloud Run.",
    url: "https://github.com/DeepanjayNandal/weVibe-app",
    demoUrl: "https://www.youtube.com/watch?v=il7ff0XOEFY",
    period: "jan 2026 – apr 2026",
    institution: "Appy.yo",
    bullets: [
      "Architected Socket.IO and Upstash Redis pub/sub event relay for horizontally scalable real-time matchmaking and persistent chat delivery across concurrent server instances.",
      "Designed bidirectional weighted compatibility scoring across personality and lifestyle preferences, geo-filtered via PostGIS within a 50km radius, with PostgreSQL advisory locks preventing race conditions during concurrent pairing.",
      "Engineered Gemini 2.5 Flash bio generation with a custom prompt-injection guard, per-user rate limiting (5 bios/day, 60s cooldown, 500-character cap), and Firebase JWT plus Apple Sign-In with revocation on account deletion.",
      "Deployed containerized backend on Google Cloud Run with Prisma ORM, signed Cloud Storage URLs, Firebase Cloud Messaging push notifications, and soft-delete with a 30-day grace period and daily hard-delete purge.",
    ],
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Socket.IO", "Upstash Redis", "PostGIS", "Prisma", "Firebase Authentication", "Google Cloud Run", "Docker", "Google Gemini", "FCM", "Jest"],
    featured: false,
  },
  {
    title: "LexLink — Zero-Knowledge Secure Legal Messaging",
    description:
      "A zero-knowledge attorney-client messaging system using peer-to-peer WebRTC communication, out-of-band authentication, and ephemeral cryptography to keep the signaling server blind to message content.",
    url: "https://github.com/DeepanjayNandal/lexlink",
    period: "january 2025 – april 2025",
    bullets: [
      "Engineered a zero-knowledge messaging architecture using WebRTC DataChannels and a stateless Node.js signaling relay, where the server brokers only SDP/ICE handshakes and exits the message path once the peer-to-peer channel is established.",
      "Implemented end-to-end encryption using ECDH-25519 key exchange, HKDF-SHA-256 directional key derivation, and XChaCha20-Poly1305 AEAD, keeping message contents protected from the relay server.",
      "Developed QR-based out-of-band pairing and per-contact session isolation to mitigate in-band man-in-the-middle risk during setup, with automatic session key destruction and WebRTC peer disposal to preserve forward secrecy.",
      "Built a resilient SQLite outbox queue with exponential backoff and XChaCha20-Poly1305 encrypted blobs, enabling asynchronous message delivery without centralizing message history on third-party servers.",
    ],
    tags: ["Flutter", "WebRTC", "Node.js", "SQLite", "ECDH-25519", "HKDF-SHA-256", "XChaCha20-Poly1305", "Secure Messaging"],
    featured: false,
  },
  {
    title: "Nutritional Calculator — Semantic Web Food Intelligence",
    description:
      "A semantic web application using RDF/OWL knowledge graphs and SPARQL queries to compute nutritional profiles and suggest healthier ingredient alternatives.",
    url: "https://github.com/DeepanjayNandal/Nutritional-Calculator-Web-App",
    period: "september 2024 – november 2024",
    institution: "arizona state university",
    bullets: [
      "Built a Next.js/Node.js application that queries RDF/OWL nutrition data through SPARQL, mapping ingredient inputs to structured nutritional relationships.",
      "Implemented server-side caching and SPARQL query sanitization to improve repeat-query performance and reduce injection risk.",
    ],
    tags: ["Node.js", "Next.js", "SPARQL", "RDF/OWL", "Knowledge Graphs"],
    featured: false,
  },
];

export const awards = [
  {
    title: "Spot Award",
    company: "ittiam systems",
    period: "october 2023",
    description: "employee of the month recognition.",
  },
  {
    title: "Spot Award",
    company: "ittiam systems",
    period: "august 2022",
    description: "employee of the month recognition.",
  },
];

export const skills = [
  {
    category: "languages",
    items: "Python, TypeScript, Java, SQL",
  },
  {
    category: "backend",
    items: "Node.js, FastAPI, Distributed Systems, Microservices, Event-Driven Architecture, Multi-tenancy, REST APIs, WebSockets, Message Queues, Rate Limiting, Background Workers, Socket.IO",
  },
  {
    category: "data & infrastructure",
    items: "Apache Kafka, PostgreSQL, PostGIS, Redis, pgvector, BM25, HNSW, Distributed Caching, BullMQ",
  },
  {
    category: "ai infrastructure",
    items: "RAG, Vector Search, LLM APIs, Hybrid Retrieval, LLM Caching, Semantic Caching, Embeddings, Collaborative Filtering, Retrieval Evaluation",
  },
  {
    category: "cloud & devops",
    items: "AWS (EC2, Lambda, SQS, IoT Greengrass, SES), Amazon ECR, Google Cloud Run, GCP, Firebase, Cloudflare, Docker, CI/CD",
  },
  {
    category: "security & systems",
    items: "AOSP, Binary Analysis, Reverse Engineering, Ghidra, Frida, ClusterFuzz, ECDH-25519, XChaCha20-Poly1305, HMAC, Network Security",
  },
];
