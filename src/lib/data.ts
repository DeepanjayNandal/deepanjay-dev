export const personal = {
  name: "deepanjay nandal",
  role: "software engineer",
  location: "tempe, az",
  email: "deepanjay.nandal12@gmail.com",
  github: "https://github.com/DeepanjayNandal",
  linkedin: "https://www.linkedin.com/in/deepanjay-nandal/",
  resume: "/resume.pdf",
  openToWork: true,
  openToRelocate: true,
  bio: [
    "Software engineer focused on building reliable backend, AI, and security-focused systems.",
    "I currently work at Discover Excellence LLC on high-throughput event processing with Kafka, Redis, and BullMQ. Previously, I was a Senior Software Engineer at Ittiam Systems, where I worked on Android/AOSP security validation using Ghidra, Frida, and ClusterFuzz.",
    "My recent projects include BitMod, a 9-layer AI inference cache, CaseTally, a legal RAG search platform over 33k+ U.S. Code chunks, and LexLink, a zero-knowledge secure messaging system.",
  ],
};

export const work = [
  {
    company: "discover excellence llc",
    url: "https://www.linkedin.com/company/discover-excellence-llc/posts/?feedView=all",
    role: "software engineering intern",
    period: "feb 2026 – present",
    location: "remote",
    summary:
      "Engineered backend infrastructure for an AI-powered facility analytics platform, building Kafka-based event ingestion and Redis-backed coordination systems handling 100k+ daily events at sub-40ms p95 latency and 99.9% processing reliability.",
    tags: ["Kafka", "Redis", "BullMQ", "Node.js", "TypeScript"],
    bullets: [
      "Built a high-throughput data pipeline for an AI-powered facility analytics platform, using Kafka to ingest 100k+ daily facility events with sub-40ms p95 processing latency.",
      "Designed a multi-tenant resource manager using Redis locks, preventing worker contention and enforcing fair resource usage across client workloads.",
      "Implemented reliable background processing with BullMQ, retries, exponential backoff, and idempotency keys, achieving 99.9% event-processing reliability.",
      "Improved production observability with structured logging, health checks, root-cause analysis workflows, and integration tests, reducing debugging effort across ingestion and analytics pipelines.",
    ],
  },
  {
    company: "ittiam systems pvt ltd",
    url: "https://www.ittiam.com",
    role: "senior software engineer",
    period: "mar 2022 – jun 2024",
    location: "bangalore, india",
    summary:
      "Drove Android/AOSP security validation engineering at Google scale, authoring 40+ CTS test suites and building Python-based fuzzing automation with ClusterFuzz that reduced crash analysis time by 40%.",
    tags: ["Python", "Android/AOSP", "Ghidra", "Frida", "ClusterFuzz"],
    bullets: [
      "Authored 40+ Android Compatibility Test Suites across Bluetooth, Media, and core AOSP modules for Google STS/CTS security validation workflows.",
      "Reverse engineered Android system binaries using Ghidra and assembly analysis to validate patch status for 50+ CVEs across Bluetooth and framework components.",
      "Built Python-based fuzzing and triage automation with ClusterFuzz, reducing crash analysis time by 40% through automated failure detection and duplicate crash investigation.",
      "Used Frida to hook private Android framework methods and expand vulnerability validation coverage beyond standard AOSP test workflows.",
    ],
  },
  {
    company: "accenture",
    url: "https://www.accenture.com",
    role: "associate application developer",
    period: "nov 2021 – mar 2022",
    location: "pune, india",
    summary:
      "Trained in enterprise Java development at Accenture, building backend modules with a focus on OOP, multithreading, JDBC, and database connectivity in an enterprise application context.",
    tags: ["Java", "JDBC", "OOP", "Multithreading"],
    bullets: [
      "Worked on Java fundamentals, object-oriented programming, multithreading, and JDBC as part of enterprise application development training.",
      "Developed small backend modules using Java APIs with a focus on clean code, maintainability, and basic application design.",
      "Practiced database connectivity and backend development workflows used in enterprise software projects.",
    ],
  },
  {
    company: "prepinsta",
    url: "https://prepinsta.com",
    role: "software engineering intern",
    period: "may 2020 – jun 2020",
    location: "remote",
    summary:
      "Supported frontend development for a student placement preparation platform, building responsive React and Node.js interfaces and writing 50+ JavaScript coding solutions for placement quizzes.",
    tags: ["React", "Node.js", "JavaScript"],
    bullets: [
      "Built responsive web interfaces for a placement preparation platform using React and Node.js.",
      "Developed 50+ JavaScript-based coding solutions for student placement quizzes, focusing on accurate logic and readable explanations.",
      "Worked with the development team to update educational pages and improve frontend usability across desktop and mobile views.",
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
    details: "CGPA: 3.59/4.00",
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
      "A multi-layer LLM caching system designed to reduce redundant inference, reuse semantic knowledge safely, and make AI applications faster and cheaper.",
    url: "",
    period: "founding technical engineer (november 2025)",
    bullets: [
      "Architected a 9-layer AI inference cache spanning exact-match retrieval, semantic vector search, composable decomposition, fuzzy matching, graph traversal, atomic fact reuse, session context, TTL/LRU eviction, and Bayesian evidence scoring.",
      "Reduced redundant LLM inference by up to 97% through early-exit cache resolution, O(1) exact-match lookups, and embedding-based semantic matching.",
      "Integrated session context and confidence-scored cache decisions to prevent unsafe semantic reuse across context-dependent queries.",
      "Modularized provider, storage, evidence, and eviction layers to support extensible LLM providers and backend stores.",
    ],
    tags: ["Python", "FastAPI", "Embeddings", "LLM Pipelines", "Caching"],
    note: "private repository (nda)",
    featured: true,
  },
  {
    title: "CaseTally — AI-Powered Legal Search Platform",
    description:
      "A legal retrieval platform combining BM25 keyword search, pgvector semantic retrieval, query rewriting, and evaluation metrics to produce grounded legal answers over U.S. Code data.",
    url: "https://github.com/DeepanjayNandal/casetally",
    period: "creator (june 2025)",
    bullets: [
      "Built a hybrid legal retrieval engine combining BM25 keyword search and pgvector semantic similarity across 33k+ U.S. Code chunks parsed from govinfo.gov XML.",
      "Implemented query rewriting to normalize conversational legal questions into statutory terminology, improving retrieval quality for ambiguous legal queries.",
      "Added a retrieval evaluation harness measuring top-3 precision, top-5 recall, MRR, and p95 latency across benchmark legal queries.",
      "Designed modular retrieval, generation, and evaluation components to support future reranking and retrieval-quality tuning.",
    ],
    tags: ["FastAPI", "pgvector", "RAG", "BM25", "LLM APIs"],
    featured: true,
  },
  {
    title: "LexLink — Zero-Knowledge Secure Legal Messaging",
    description:
      "A zero-knowledge lawyer-client messaging system using peer-to-peer WebRTC communication, QR-based out-of-band authentication, and ephemeral cryptographic session keys.",
    url: "https://github.com/DeepanjayNandal/lexlink",
    period: "creator (january 2025)",
    bullets: [
      "Built zero-knowledge peer-to-peer messaging using ECDH-25519 key exchange, XChaCha20-Poly1305 encryption, and ephemeral session keys.",
      "Engineered WebRTC DataChannel communication with QR-based out-of-band authentication, reducing MITM risk without relying on a central key authority.",
      "Designed per-contact ConnectionContext isolation to prevent cross-contact key contamination across concurrent secure sessions.",
      "Implemented automatic session key destruction and peer disposal after handshake completion to preserve forward secrecy.",
    ],
    tags: ["Flutter", "WebRTC", "ECDH", "XChaCha20", "Security"],
    featured: true,
  },
  {
    title: "Elastic Face Recognition Cloud System",
    description:
      "A cloud and edge-based face recognition system that evolved from EC2 autoscaling to serverless inference and edge-cloud processing using AWS SQS, Lambda, ECR, and IoT Greengrass.",
    url: "",
    period: "creator (august 2025)",
    institution: "arizona state university",
    bullets: [
      "Designed a multi-tier elastic face recognition system that evolved from a custom-scaled IaaS architecture to a serverless PaaS pipeline and distributed edge-cloud model.",
      "Built a Python autoscaling controller that dynamically managed EC2 instances based on SQS request queue depth, achieving 0.96s average response time under concurrent image-recognition workloads.",
      "Implemented decoupled request and response queues using AWS SQS to isolate web-tier uploads from compute-heavy inference workers, preventing blocking under burst workloads.",
      "Re-architected the inference workflow into a serverless pipeline using Docker images on AWS ECR, with Lambda workers triggered asynchronously through SQS events.",
      "Integrated MTCNN for face detection and FaceNet for recognition, separating detection and classification stages to support modular inference workflows.",
      "Engineered an edge-computing pipeline using AWS IoT Greengrass to move MTCNN face detection from cloud infrastructure to emulated IoT edge devices.",
      "Implemented MQTT-based real-time communication between edge components and cloud services, reducing cloud data transmission by processing lightweight detection tasks locally.",
      "Designed a hybrid edge-cloud processing model where face detection runs on edge devices while heavier FaceNet classification is offloaded to AWS Lambda.",
    ],
    tags: ["AWS EC2", "SQS", "Lambda", "ECR", "IoT Greengrass", "MQTT", "Docker", "Python", "MTCNN", "FaceNet"],
    featured: false,
  },
  {
    title: "Nutritional Calculator — Semantic Web Food Intelligence",
    description:
      "A nutrition lookup application using RDF/OWL knowledge graphs as the source of truth for dish-level nutrient breakdowns.",
    url: "https://github.com/DeepanjayNandal/Nutritional-Calculator-Web-App",
    period: "contributor (september 2024)",
    institution: "arizona state university",
    bullets: [
      "Developed a web app that computes per-dish nutritional breakdowns by querying RDF/OWL knowledge graphs in .ttl format through a Node.js backend.",
      "Built a React interface for dish-name input and real-time nutrition display, using the knowledge graph as the sole structured data store.",
    ],
    tags: ["React", "Node.js", "RDF/OWL", "Knowledge Graphs"],
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
    items: "FastAPI, REST APIs, WebSockets, Microservices, Event-Driven Systems",
  },
  {
    category: "data",
    items: "Kafka, PostgreSQL, Redis, pgvector, BM25, Vector Search",
  },
  {
    category: "ai",
    items: "RAG, Embeddings, LLM APIs, Hybrid Retrieval, LLM Caching",
  },
  {
    category: "cloud",
    items: "AWS EC2, SQS, ELB, Lambda, Docker, Kubernetes",
  },
  {
    category: "security",
    items: "AOSP, Reverse Engineering, Ghidra, Frida, ClusterFuzz, WebRTC Encryption",
  },
];
