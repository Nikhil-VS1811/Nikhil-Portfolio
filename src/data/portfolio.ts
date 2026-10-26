export const email = "nikhilvenkatesh1811@gmail.com";
export const resumeRequest = `mailto:${email}?subject=${encodeURIComponent("Resume request — Nikhil V S")}&body=${encodeURIComponent("Hi Nikhil,\n\nI would like to request your latest resume.\n\nName:\nCompany / opportunity:\n\nThank you!")}`;
export const profiles = [
  { label: "GitHub", href: "https://github.com/Nikhil-VS1811" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nikhil-vs/" },
  { label: "LeetCode", href: "https://leetcode.com/u/Nikhilvs1811/" },
];
export const projects = [
  {
    id: "nodebase",
    number: "01",
    category: "WORKFLOW ORCHESTRATION",
    title: "NodeBase",
    subtitle: "Distributed event-driven DAG engine",
    description:
      "A visual workflow builder backed by durable execution. Typed node executors connect external services, while PostgreSQL transactions preserve workflow consistency.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Inngest"],
    repo: "nodebase-ai-workflow-builder",
    demo: "https://nodebase-ai-workflow-builder.vercel.app/login",
    metrics: [
      ["11.98–15.09 ms", "p95 webhook ingestion"],
      ["<8.5 ms", "p95 · 10-node ACID CRUD"],
      ["135", "automated tests"],
    ],
    decisions: [
      [
        "Execution model",
        "A typed NodeExecutor registry separates node configuration from execution. Durable Inngest steps support SDK exponential backoff at 2s / 4s.",
      ],
      [
        "Data & credentials",
        "PostgreSQL ACID transactions persist 10-node workflows. Encrypted credential storage and fail-fast configuration checks guard integrations.",
      ],
      [
        "Execution visibility",
        "Authenticated, user-scoped React Flow indicators use Inngest Realtime. Recorded local SDK publish/receive latency: 0.57ms p95.",
      ],
    ],
  },
  {
    id: "code-analysis",
    number: "02",
    category: "STATIC ANALYSIS",
    title: "Code Analysis Engine",
    subtitle: "Scalable automated code analysis",
    description:
      "A deterministic 14-rule SAST scanner with comment masking and line-level findings, paired with separately validated Ollama review feedback.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "Ollama"],
    repo: "AI-Code-Reviewer",
    demo: "https://ai-code-reviewer-seven-brown.vercel.app/",
    metrics: [
      ["220–257k", "LOC/sec · in-memory scanner"],
      ["<3 ms", "p95 PostgreSQL CRUD"],
      ["50", "automated PyTest checks"],
    ],
    decisions: [
      [
        "Deterministic scanning",
        "The in-memory scanner processes AST workloads at 220,000–257,000 LOC/sec, approximately 2,046 files/sec. These figures exclude LLM inference.",
      ],
      [
        "Fault-tolerant review",
        "Pydantic validation clamps scores and recovers malformed JSON from structured model feedback. Warm LLM turnaround is approximately 5.4 seconds.",
      ],
      [
        "API performance",
        "Recorded PostgreSQL create/read/delete routes remain below 3ms p95; JWT authentication measures 1.43ms p95.",
      ],
    ],
  },
  {
    id: "risk-scoring",
    number: "03",
    category: "ML SERVING",
    title: "Transaction Risk Service",
    subtitle: "Low-latency transaction risk scoring",
    description:
      "A 30-feature inference pipeline serving transaction risk scores through FastAPI, with explicit evaluation under extreme class imbalance.",
    stack: ["Python", "FastAPI", "XGBoost", "Docker"],
    repo: "fraud-detection-system",
    demo: "https://fraud-frontend-vxzh.onrender.com/",
    metrics: [
      ["4.08 ms", "p50 REST inference"],
      ["97.92%", "ROC-AUC · held-out test"],
      ["88.78%", "fraud recall"],
    ],
    decisions: [
      [
        "Serving path",
        "Single-transaction REST latency measures 4.08ms p50 / 5.32ms p95, at approximately 228 requests/sec. Covered by 15 automated unittest checks.",
      ],
      [
        "Training & evaluation",
        "XGBoost trained on a 284,807-record dataset using leakage-free scaling and SMOTE. Evaluation uses a 56,962-row test split.",
      ],
      [
        "Imbalanced outcomes",
        "97.92% ROC-AUC, 87.74% PR-AUC, and 88.78% fraud recall describe different aspects of classifier performance; they are not interchangeable with accuracy.",
      ],
    ],
  },
];
export const skills = [
  {
    title: "Languages & core",
    items: [
      "Java",
      "Python",
      "C++",
      "TypeScript",
      "SQL",
      "DSA",
      "Object-Oriented Design",
      "Complexity Analysis",
    ],
  },
  {
    title: "Distributed systems & cloud",
    items: [
      "AWS",
      "Distributed Systems",
      "PostgreSQL",
      "Database Indexing",
      "Docker",
      "FastAPI",
      "Microservices",
    ],
  },
  {
    title: "Architecture & web",
    items: [
      "React",
      "Next.js",
      "Inngest · Event-Driven DAGs",
      "RESTful APIs",
      "Concurrency",
      "ACID Transactions",
    ],
  },
  {
    title: "Quality & DevOps",
    items: ["PyTest", "unittest", "CI/CD Pipelines", "Systems Analysis", "Git", "GitHub"],
  },
];
export const achievements = [
  [
    "AIR 1200",
    "Amazon ML Challenge 2026",
    "Advanced to the SOP round of Amazon ML Summer School; shortlisted among 25,000 from 130,000+ applicants.",
  ],
  [
    "TOP 150",
    "India Builds with Claude",
    "Selected nationally by Peak XV Partners, Anthropic, and Razorpay for commercial AI application development.",
  ],
  [
    "300+",
    "Competitive programming",
    "DSA problems solved across LeetCode, GeeksforGeeks, and InterviewBit.",
  ],
  [
    "1ST PLACE",
    "CodeWars · EWIT",
    "First place in the CodeWars competitive programming event at East West Institute of Technology.",
  ],
  ["AWS ACADEMY", "Cloud Foundations", "AWS Academy Graduate — Cloud Foundations certified."],
];
