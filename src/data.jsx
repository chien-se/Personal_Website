// Real content pulled from Chien's repo + personal answers.
// All three variations read from this one source.

const DATA = {
  name: "Chien Nguyen",
  firstName: "Chien",
  role: "AI & Systems Builder",
  tagline: "Distributed systems & LLM infra. No single point of failure.",
  subTagline: "Execution > more overplanning.",
  location: "Bothell, WA",
  school: "B.S. CS, UW Bothell (Sep 2026)",
  email: "chiennguyen.uw.dev@gmail.com",
  github: "https://github.com/chien-se",
  linkedin: "https://www.linkedin.com/in/chien-nguyen03/",

  // Short, technical intro — no biography, just what I build.
  intro: [
    "I build distributed data systems and LLM infra.",
    "Most of the data that matters — biology, medicine, proprietary telemetry — is private, and centralized training can't reach it.",
  ],

  // Status dashboard — CS only
  now: [
    { label: "Building", text: "A new projects rollup with Claude — trying Opus 4.7." },
    { label: "Learning", text: "Web dev frameworks via my UW Bothell course." },
    { label: "Shipping", text: "A daily world-news data-viz site with my partner." },
  ],

  // New section — separate from status, for taste/tooling/curiosities.
  interests: [
    { label: "Editor", text: "Trying out Cursor on the student plan." },
    { label: "Reading", text: "Papers on federated learning and gradient privacy." },
    { label: "Tooling", text: "Claude Code for multi-file refactors and repo rollups." },
  ],

  // Projects — from the repo config, lightly retoned
  projects: [
    {
      id: 1,
      title: "Multi-Agent LLM RAG System",
      blurb: "Local RAG over 1,000+ customer reviews. LangChain + Ollama + Chroma. Private inference, no API keys, no cloud.",
      stack: ["Python", "LangChain", "Ollama", "Chroma"],
      metric: "1K+ docs · local",
      year: "2024",
      github: "https://github.com/chien-se/Pizza-Review-Q-A-System-",
      featured: true,
    },
    {
      id: 2,
      title: "Real-Time Stock Pipeline",
      blurb: "Event-driven Kafka + Kubernetes pipeline chewing through 1,238 msg/sec. Observability stack I can actually debug at 2am.",
      stack: ["Kafka", "Kubernetes", "Docker", "Postgres", "Prometheus", "Grafana"],
      metric: "1,238 msg/s",
      year: "2024",
      github: "https://github.com/chien-se/data-engineering-project",
      featured: true,
    },
    {
      id: 3,
      title: "Book Recommender @ 20M Rows",
      blurb: "Scaled from local Ollama to Databricks + PySpark. Learned distributed systems the only way that sticks — by hitting the wall.",
      stack: ["PySpark", "Databricks", "AWS", "Python"],
      metric: "20M+ records",
      year: "2023",
      github: "https://github.com/chien-se/Book-Recommender-System-",
      featured: true,
    },
    {
      id: 4,
      title: "Video Stream Backend",
      blurb: "FastAPI service managing 1,237 sessions across 100 users, 254 devices. Real-time session enforcement, 4 validation checks.",
      stack: ["FastAPI", "Postgres", "Python"],
      metric: "254 devices",
      year: "2023",
      github: "https://github.com/chien-se/Video-Stream-Platform",
      featured: true,
    },
    {
      id: 5,
      title: "Professor Ollama",
      blurb: "Local LLM that eats YouTube transcripts and returns summaries. Privacy-first, no API bills.",
      stack: ["Python", "Ollama", "REST"],
      metric: "2× faster",
      year: "2024",
      github: "https://github.com/chien-se/Professor-Ollama",
      featured: false,
    },
    {
      id: 6,
      title: "WSB Contrarian Bot",
      blurb: "A quantitative model that takes the inverse signal from r/wallstreetbets sentiment. Results: mixed. Lessons: many.",
      stack: ["PyTorch", "CUDA", "Python"],
      metric: "RMSE ~8-10",
      year: "2024",
      github: "https://github.com/chien-se/Wall-Street-Bet-Trading-Bot",
      featured: false,
    },
    {
      id: 7,
      title: "Heart Disease Classifier",
      blurb: "Ensemble (KNN, SVM, Decision Tree, Random Forest) with GridSearchCV. 0.98 recall on positives — the class that actually matters.",
      stack: ["scikit-learn", "Python"],
      metric: "0.98 recall",
      year: "2023",
      github: "https://github.com/chien-se",
      featured: false,
    },
    {
      id: 8,
      title: "Academic Planner for ESL Students",
      blurb: "Honors capstone at EvCC. A free bilingual (EN/VN) progression-tree website helping immigrant students map a path from their current education level to their goals.",
      stack: ["Web", "JavaScript", "i18n"],
      metric: "EN · VN",
      year: "2022",
      github: "https://github.com/chien-se/Honor-Class-Capstone-Project-Academic-Planner",
      featured: false,
    },
  ],

  skills: [
    { group: "Languages", items: ["Python", "SQL", "Java", "C++"] },
    { group: "AI / ML", items: ["LLMs & RAG", "LangChain", "Ollama", "Chroma", "PyTorch", "Transformers", "Prompt Eng."] },
    { group: "Data / Systems", items: ["PySpark", "Databricks", "Kafka", "Postgres", "Pandas", "NumPy"] },
    { group: "Cloud / Ops", items: ["Docker", "Kubernetes", "AWS (EC2/S3)", "Prometheus", "Grafana"] },
  ],

  experience: [
    {
      role: "Summer Engineering Intern",
      org: "Snohomish County PUD",
      when: "Summer 2026",
      notes: "Public utility infrastructure. Incoming.",
    },
    {
      role: "B.S. Computer Science & Software Engineering",
      org: "University of Washington Bothell",
      when: "graduating Sep 2026",
      notes: "Senior. Distributed systems, cloud, AI/ML. Currently taking a UW Bothell web development course and learning modern frameworks.",
    },
    {
      role: "A.A. Computer Science, Honors",
      org: "Everett Community College",
      when: "2022",
      bullets: [
        "4.0 GPA",
        "VP of the Asian Student Union",
        "Honors capstone: a bilingual academic planner for ESL students",
      ],
    },
  ],

  // Thesis — the "in my opinion" take that sits under identify.sh
  manifesto: [
    "AI is devouring all available data. When it runs out, it fills the gap with synthetic slop. The data that actually matters for biology and medicine is private, and with no incentive to share it, it stays locked up.",
    "COVID showed how fast today's medical models go stale when the world shifts. Centralized training is a single point of failure for accuracy, privacy, and adaptability.",
    "The future is decentralized: institutions train smaller models on their private data, send encrypted gradients to a coordinator, and get averaged weights back. No single point of failure. Faster adaptation. Privacy preserved.",
  ],

  // Blog — the admission essay is the first entry.
  blog: [
    {
      id: "community-building",
      title: "On Community & Building",
      subtitle: "The admission essay that got me into UW Bothell — kept here unchanged because it still describes how I think about building for people.",
      date: "2022",
      read: "5 min",
      tag: "Essay",
      featured: true,
      body: [
        "Arriving in America at a young age, the process of adapting to a new culture left me feeling isolated and uncertain about my role in the world. During this time, I discovered a game called Stardew Valley, a farm life simulation game. Stardew Valley's central narrative is a journey of self-discovery and the pursuit of a more meaningful life. Inspired by its message, I started reflecting on how to align my career goal with my personal values. Discovering my love for programming, I dream of becoming a software engineer and use my skills to fix social issues within the immigrant community. My journey to becoming a software engineer taught me a valuable lesson on harnessing the power of diverse collaborations to create a solution for human issues.",
        "In high school, I signed up for a computer networking class at Sno-Isle Tech and learned how to create virtual machines, customize Linux, and troubleshoot computer networks. After earning my CompTIA A+ certificate, I started using my knowledge to build a computer back in 2020. After building it, I felt confident experimenting with building projects on Linux. Following the roadmap from The Odin Project, an online curriculum, I installed Linux OS on my virtual machine and taught myself how to use basic Git to clone, commit, and push my work onto GitHub. Some projects that I currently have on GitHub are a \u201crock, paper, scissors\u201d game, an Etch-a-sketch toy, and a calculator application. The Odin Project taught me how to use basic CSS, HTML, and the fundamentals of JavaScript such as DOM manipulation, events handling, and data structures to build my projects. Wanting to keep learning, I enrolled at Everett Community College (EvCC) to take higher-level programming courses.",
        "While attending EvCC, I worked full-time at a Vietnamese restaurant. Many of my coworkers are first-generation Vietnamese who dropped out of high school due to language barriers. They chose to work in restaurants since their dream jobs required a degree, and they felt their English proficiency wasn't good enough for college. Learning about this made me aware of my privilege in speaking English, a privilege that allowed me to apply to college, get financial aid, and communicate with my professors. Having successfully adapted to my life in America, it was disheartening for me to see my fellow Vietnamese being denied an education because of their lack of English proficiency. This inspired me to use my computer science background to help immigrant students overcome language barriers in education.",
        "For my Honor Capstone Project at EvCC, I am working on a free website with a progression tree where students can choose their desired education goals and then be guided to the next logical step based on their current education level. The website will be available in both English and Vietnamese, currently translated by me. In the future, I would like to harness UW Bothell\u2019s diverse student organizations to help me with my goals. My completed project will require a collective effort from individuals with diverse skills to help me translate, test, and promote the website. I want to add more language options to the site, reaching more immigrant communities through the translation assistance of students from the International Club and Latine Student Union (LSU) at UW Bothell. I also would like to collaborate with SPOT (UWB STEM Public Outreach Team) to visit local schools and spark a STEM interest in ESL students. My project demonstrates how diverse collaborations, such as those between computer science and diverse student groups, can create better solutions to human issues. At UW Bothell, I will continue improving my programming skills while building projects that use my technical skills to solve people\u2019s needs.",
      ],
    },
  ],

  documents: [
    { label: "resume", sub: "Distributed Systems · 1 page", href: "assets/resume.pdf", icon: "📄" },
    { label: "UWB transcript", sub: "University of Washington Bothell", href: "assets/transcript.pdf", icon: "🎓" },
  ],

  // Recruiter-form friendly copy
  recruiterGreeting: {
    headline: "What can I do for you today?",
    sub: "",
    hint: "",
  },
};

window.DATA = DATA;
