export const personal = {
  name: "deepanjay nandal",
  role: "backend & ai infrastructure engineer",
  location: "bengaluru, karnataka, india",
  email: "deepanjay.nandal12@gmail.com",
  github: "https://github.com/DeepanjayNandal",
  linkedin: "https://www.linkedin.com/in/deepanjay-nandal/",
  resume: "/resume.pdf",
  openToWork: true,
  openToRelocate: true,
  bio: [
    "Backend & AI Infrastructure Engineer focused on distributed systems, RAG/LLM systems, and security-aware backend design.",
    "I build backend systems for AI and data-heavy products, with experience across Kafka/Redis event pipelines, LLM inference caching, hybrid retrieval systems, cloud ML infrastructure, real-time product backends, and Android/AOSP security validation.",
    "At Discover Excellence LLC, I built backend infrastructure for an AI-enabled eCommerce analytics platform, including Kafka-based event processing, Redis-backed coordination, BullMQ background workers, and production reliability tooling. Previously, I worked at Ittiam Systems on Android/AOSP security validation, reverse engineering, test automation, and vulnerability triage using Ghidra, Frida, Python, and ClusterFuzz.",
    "My recent projects include BitMod, an AI inference cache and semantic reuse engine; CaseTally, a hybrid legal retrieval platform; Elastic Face Recognition, a cloud and edge ML infrastructure system; Personal Network Guard, an AI-powered network security platform; WeVibe, an Appy.yo-sponsored real-time matchmaking platform; and LexLink, a zero-knowledge secure messaging system.",
  ],
};

export const work = [
  {
    company: "discover excellence llc",
    url: "https://dexusa.com/",
    role: "software engineering intern",
    period: "feb 2026 – may 2026",
    location: "remote",
    summary:
      "Built backend infrastructure for an AI-powered eCommerce analytics platform, including Kafka event pipelines, Redis coordination systems, BullMQ workers, and production reliability tooling.",
    tags: ["Kafka", "Redis", "BullMQ", "Node.js", "TypeScript"],
    featured: true,
    bullets: [
      "Built a Kafka-based visitor intelligence pipeline processing 100k+ daily eCommerce events with sub-40ms p95 latency.",
      "Designed a Redis-backed multi-tenant resource manager to prevent worker contention and enforce fair resource usage across client workloads.",
      "Implemented BullMQ background workers with retries, exponential backoff, and idempotency keys, achieving 99.9% event-processing reliability.",
      "Improved production observability through structured logging, health checks, root-cause analysis workflows, and integration tests across ingestion and analytics pipelines.",
    ],
  },
  {
    company: "appy.yo",
    url: "https://appyyo.vercel.app/",
    role: "graduate capstone developer",
    period: "jan 2026 – apr 2026",
    location: "tempe, az · remote",
    summary:
      "Worked on WeVibe, an Appy.yo-sponsored ASU SER 517 Software Factory Capstone project for a real-time iOS matchmaking platform with algorithmic pairing, geo-filtering, persistent chat, AI-assisted profile generation, and a Node.js/PostgreSQL backend.",
    tags: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Prisma", "Socket.IO", "Redis", "Firebase Authentication", "Google Cloud Run", "REST APIs", "JWT", "Jest"],
    featured: true,
    bullets: [
      "Built backend components for real-time speed dating and messaging using Node.js, Socket.IO, and Redis pub/sub, supporting event relay across concurrent server instances.",
      "Developed matchmaking and geo-filtering workflows using PostgreSQL, PostGIS, and advisory locks to prevent duplicate pairing and race conditions during concurrent user matching.",
      "Built REST APIs using Express.js and TypeScript with a layered architecture across routes, controllers, services, and Prisma repositories, enforcing Firebase JWT authentication middleware and centralized structured error handling.",
      "Integrated Google Gemini 2.5 Flash for AI-assisted profile bio generation with prompt constraints, rate limiting, and output validation.",
      "Deployed backend services on Google Cloud Run using Prisma ORM, Firebase Authentication, and signed Google Cloud Storage URLs for secure media uploads.",
      "Contributed to 17 Jest integration test suites covering authentication, matchmaking, real-time chat, soft delete, and Apple Sign-In revocation flows.",
    ],
  },
  {
    company: "ittiam systems pvt ltd",
    url: "https://www.ittiam.com",
    role: "software engineer → senior software engineer",
    period: "mar 2022 – jun 2024",
    location: "bangalore, india",
    summary:
      "Built Android/AOSP security validation workflows across Google STS/CTS testing, vulnerability reproduction, patch validation, reverse engineering, runtime instrumentation, crash triage, and regression automation.",
    tags: ["Python", "Android/AOSP", "CTS", "STS", "Ghidra", "Frida", "ClusterFuzz", "Reverse Engineering", "Vulnerability Triage", "Binary Analysis"],
    featured: true,
    bullets: [
      "Built modular Android/AOSP security validation infrastructure across Bluetooth, Media, and core platform modules, integrating 40+ reusable CTS/STS suites to automate vulnerability reproduction and regression coverage.",
      "Led Ghidra-based binary and assembly analysis across Android framework, native, and OEM partner builds, validating security patch coverage for 50+ CVEs and strengthening regression confidence.",
      "Engineered Python automation pipelines around ClusterFuzz crash outputs for fuzzing analysis, crash triage, and CVE validation workflows, reducing manual investigation time by 40%.",
      "Instrumented dynamic analysis using Frida runtime hooks to validate private Android framework execution paths, expanding coverage for Java-layer CVE validation beyond standard test workflows.",
      "Produced vulnerability triage reports, reproduction artifacts, proof-of-concept notes, and root-cause analysis documentation for Android security issues.",
      "Mentored 4 junior engineers on CTS/STS test authoring, crash triage, code reviews, debugging workflows, and security validation practices.",
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
      "An AI inference cache and semantic reuse engine designed to reduce repeated LLM calls, improve cached-response latency, and control unsafe reuse across context-dependent queries.",
    url: "",
    period: "founding technical engineer (january 2026)",
    bullets: [
      "Engineered a 9-layer LLM cache proxy combining SHA-256 exact lookup, semantic embedding similarity, fuzzy matching, composable reuse, TTL/LRU eviction, and Bayesian evidence scoring, achieving up to 94% cache-hit rate in benchmark runs.",
      "Reduced cached-response latency to 71ms on average against a 12.5s uncached LLM-generation baseline, producing a measured 176x speedup for cache-resolved requests.",
      "Implemented pluggable provider, storage, and vector-index layers with threshold-tuned semantic matching and negative evidence controls to reduce stale or unsafe cache hits.",
      "Projected up to 96% cost savings at scale by combining high cache-hit rates with token-reduction strategies for unresolved model calls.",
    ],
    tags: ["Python", "FastAPI", "Embeddings", "Vector Search", "LLM Caching", "Semantic Caching", "Backend Infrastructure"],
    featured: true,
  },
  {
    title: "CaseTally — AI-Powered Legal Search Platform",
    description:
      "Hybrid legal retrieval platform over U.S. Code data using custom XML ingestion, BM25 + HNSW pgvector retrieval, query rewriting, and retrieval-quality evaluation.",
    url: "https://github.com/DeepanjayNandal/casetally",
    period: "june 2025",
    bullets: [
      "Developed a hybrid legal retrieval engine combining BM25 keyword search and HNSW-indexed pgvector semantic similarity across 33,000+ U.S. Code chunks parsed through custom govinfo.gov XML ingestion.",
      "Implemented query rewriting to normalize conversational legal questions into statutory terminology, improving retrieval quality for ambiguous legal queries.",
      "Engineered a retrieval evaluation harness across 15 benchmark legal queries, measuring Precision@3, Recall@5, Mean Reciprocal Rank (MRR), p50 latency, and p95 latency.",
      "Built an idempotent version-hashed ingestion pipeline and FastAPI streaming backend using Server-Sent Events (SSE), with hybrid retrieval benchmarked at p50 <35ms and p95 <100ms latency.",
    ],
    tags: ["Python", "FastAPI", "PostgreSQL", "pgvector", "BM25", "HNSW", "Vector Search", "RAG", "Server-Sent Events"],
    featured: true,
  },
  {
    title: "Elastic Face Recognition Cloud System",
    description:
      "A cloud and edge-based machine learning infrastructure project that evolved a face-recognition pipeline from EC2 autoscaling to serverless inference and edge-cloud processing using AWS SQS, Lambda, ECR, and IoT Greengrass.",
    url: "",
    period: "august 2025 – december 2025",
    institution: "arizona state university",
    bullets: [
      "Scaled face-recognition inference using MTCNN and FaceNet in PyTorch across 15 Amazon EC2 instances with a custom SQS-depth autoscaler, achieving 0.96s average latency under 100 concurrent requests with 100% classification accuracy.",
      "Re-architected the workflow into an event-driven serverless pipeline using Docker images on Amazon ECR, with AWS Lambda workers triggered asynchronously by Amazon SQS events to remove server management overhead.",
      "Built an edge-cloud hybrid pipeline using AWS IoT Greengrass and MQTT, running MTCNN detection on edge devices to short-circuit no-face cases before Lambda invocation, achieving ~776ms pipeline response time.",
    ],
    tags: ["AWS EC2", "Amazon SQS", "AWS Lambda", "Amazon ECR", "AWS IoT Greengrass", "MQTT", "Python", "Docker", "PyTorch", "MTCNN", "FaceNet"],
    featured: true,
  },
  {
    title: "WeVibe — Real-Time Matchmaking & Dating Platform",
    description:
      "Appy.yo-sponsored ASU Software Factory Capstone project for a real-time iOS dating platform featuring algorithmic matchmaking, geo-filtering, persistent chat, and a Node.js/PostgreSQL backend.",
    url: "https://github.com/DeepanjayNandal/weVibe-app",
    demoUrl: "https://www.youtube.com/watch?v=il7ff0XOEFY",
    period: "backend developer (jan 2026 – apr 2026)",
    institution: "appy.yo | asu ser 517 software factory capstone, team 19",
    bullets: [
      "Built backend components for real-time speed dating and messaging using Node.js, Socket.IO, and Redis pub/sub, supporting event relay across concurrent server instances.",
      "Developed matchmaking and geo-filtering workflows using PostgreSQL, PostGIS, and advisory locks to prevent duplicate pairing and race conditions during concurrent user matching.",
      "Integrated Google Gemini 2.5 Flash for profile bio generation with prompt constraints, rate limiting, and output validation.",
      "Contributed to 17 Jest integration test suites covering authentication, matchmaking, real-time chat, soft delete, and Apple Sign-In revocation flows.",
    ],
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Socket.IO", "Redis", "PostGIS", "Prisma", "Firebase Authentication", "Google Cloud Run", "Jest"],
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
      "Developed QR-based out-of-band pairing and per-contact session isolation to mitigate in-band MITM risk during setup, with automatic session key destruction and WebRTC peer disposal to preserve forward secrecy.",
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
    period: "backend developer (september 2024 – november 2024)",
    institution: "arizona state university",
    bullets: [
      "Built a Next.js/Node.js application that queries RDF/OWL nutrition data through SPARQL, mapping ingredient inputs to structured nutritional relationships.",
      "Implemented server-side caching and SPARQL query sanitization to improve repeat-query performance and reduce injection risk.",
    ],
    tags: ["Node.js", "Next.js", "SPARQL", "RDF/OWL", "Knowledge Graphs"],
    featured: false,
  },
];

export const skills = [
  {
    category: "languages",
    items: "Java, Python, C++, JavaScript, TypeScript, SQL, Dart",
  },
  {
    category: "backend",
    items: "FastAPI, Node.js, REST APIs, WebSockets, Microservices, Event-Driven Systems, Background Workers",
  },
  {
    category: "data & infrastructure",
    items: "Kafka, PostgreSQL, Redis, BullMQ, pgvector, BM25, HNSW, Vector Search",
  },
  {
    category: "ai & retrieval",
    items: "RAG, Embeddings, LLM APIs, Hybrid Retrieval, LLM Caching, Semantic Caching, Retrieval Evaluation",
  },
  {
    category: "cloud & devops",
    items: "AWS EC2, AWS Lambda, Amazon SQS, Amazon ECR, AWS IoT Greengrass, Docker, Google Cloud Run",
  },
  {
    category: "security & systems",
    items: "AOSP, Reverse Engineering, Ghidra, Frida, ClusterFuzz, ECDH-25519, XChaCha20-Poly1305, HMAC, Network Security",
  },
];
