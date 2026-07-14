export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  overview: string;
  contribution: string;
  technologies: string[];
  github: string;
  demo: string;
  screenshot: string;
  mobileScreenshot?: string;
  videoDemo?: string;
  featured: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link: string;
  image: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  isFeatured: boolean;
  achievements: string[];
  photos: string[];
}

export interface OrgExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  tasks: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  gpa: string;
  awards: string[];
}

export const navigationItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
];

export const profileDetails = {
  name: "Rafa'Na'ilah Septia",
  email: "rafasepti06@gmail.com",
  phone: "+6288215027255",
  linkedin: "https://linkedin.com/in/ranaise/",
  github: "https://github.com/ranaise/",
  education: "Sixth-semester Informatics student at Telkom University",
  interests: "Artificial Intelligence, Cyber Security, and building scalable real-time applications",
};

export const educationDetails: EducationItem = {
  institution: "Telkom University",
  degree: "Bachelor of Informatics",
  gpa: "3.73/4.00",
  awards: [
    "IdCloudHost Scholarship Awardee 2023",
    "Endowment Fund Scholarship Awardee 2025"
  ],
};

export const quickFacts = [
  "Informatics Student (GPA 3.73/4.00)",
  "Programming Intern at Medusa",
  "Scholarship Awardee 2023 & 2025",
  "Adaptive Network Lab Member",
];

export const experienceData: ExperienceItem[] = [
  {
    id: "medusa-tech",
    role: "Programming Intern",
    company: "Medusa Technology",
    location: "Jakarta, Indonesia",
    duration: "Jun 2026 - Aug 2026",
    isFeatured: true,
    achievements: [
      "Modified and repackaged the Firestorm Viewer (**C++, XML**) to create a custom, ready-to-use client that streamlines onboarding for new Metaverse users.",
      "Built a real-time virtual attendance API connecting in-game LSL scripts to external servers using **Python (FastAPI) and MariaDB**.",
      "Developed an **AI Auto-Moderator** using a local LLM (**Ollama, Qwen**) to automatically monitor chat logs, filter toxic content, and enforce moderation rules in real-time.",
      "Programmed interactive 3D in-world objects using **LSL**, including an optimized virtual fashion catalog that improves user inventory management without lagging the server."
    ],
    photos: ["/medusa/photo-1.jpg", "/medusa/photo-2.jpg"]
  }
];

export const orgExperienceData: OrgExperienceItem[] = [
  {
    id: "budi-pekerti",
    role: "Coordinator of Event Division",
    organization: "Team Budi Pekerti at Telkom University",
    duration: "Nov 2023 - Dec 2024",
    tasks: [
      "Coordinated character development programs promoting leadership, teamwork, and national values among scholarship recipients.",
      "Managed event planning and execution while collaborating with cross-functional student committees."
    ],
  },
  {
    id: "adaptive-network",
    role: "Study Group Member",
    organization: "Adaptive Network Laboratory at Telkom University",
    duration: "Oct 2023 - Dec 2023",
    tasks: [
      "Learned networking fundamentals including subnetting, VLAN, routing, Linux administration, and web server deployment.",
      "Built foundational Python programming skills covering OOP, inheritance, and scripting for networking applications."
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "nexevent-2026",
    title: "NexEvent",
    subtitle: "Campus Event Management Platform",
    year: "2026",
    overview: "Developed a campus event management platform featuring intelligent participant management, waitlist automation, geolocation-based event discovery, and QR attendance using Flutter, Laravel, and MySQL.",
    contribution: "Configured transaction reservation matrices in MySQL, managed Laravel API endpoints, and built user grid dashboards in Flutter.",
    technologies: ["Flutter", "Laravel", "MySQL"],
    github: "https://github.com/ranaise/NexEvent",
    demo: "",
    screenshot: "/projects/nexevent.jpg",
    mobileScreenshot: "/projects/nexevent-mobile.jpg",
    featured: true,
  },
  {
    id: "gpt-ner-2026",
    title: "GPT-NER",
    subtitle: "LLM-based Named Entity Recognition Application",
    year: "2026",
    overview: "Implemented an LLM-based Named Entity Recognition application using Python, Streamlit, Llama 3, and Groq API.",
    contribution: "Engineered prompt pipelines utilizing LangChain, integrated Llama 3 via Groq API, and configured Streamlit interface inputs.",
    technologies: ["Python", "Streamlit", "Llama 3", "Groq API"],
    github: "https://github.com/ranaise/GPT-NER",
    demo: "https://gpt-ner.streamlit.app/",
    screenshot: "/projects/gpt-ner.jpg",
    featured: false,
  },
  {
    id: "posyandu-pintar",
    title: "Posyandu Pintar",
    subtitle: "Child Growth Monitoring System with LLM Insights",
    year: "2026",
    overview: "Developed a child growth monitoring system with LLM-powered health insights using Next.js and TypeScript.",
    contribution: "Co-authored Next.js interactive chart wrappers, established TypeScript type contracts, and parsed JSON payload structures.",
    technologies: ["Next.js", "TypeScript", "LLM"],
    github: "https://github.com/ranaise/Posyandu_Pintar",
    demo: "https://posyandu-web-app.vercel.app",
    screenshot: "/projects/posyandu-ceria.jpg",
    featured: false,
  },
  {
    id: "microplast-2026",
    title: "Microplast",
    subtitle: "Automatic Microplastic Detection Web Application",
    year: "2026",
    overview: "Developed a web for automatic microplastic detection and measurement using Python, Streamlit, and OpenCV.",
    contribution: "Built image preprocessing pipelines using OpenCV, implemented PyTorch model checkpoints, and designed the Streamlit dashboard layout.",
    technologies: ["Python", "Streamlit", "OpenCV"],
    github: "https://github.com/ranaise/MicroPlast",
    demo: "https://microplast.streamlit.app/",
    screenshot: "/projects/microplast.jpg",
    featured: false,
  },
  {
    id: "my-dormitory-2025",
    title: "My Dormitory",
    subtitle: "Dormitory Management System",
    year: "2025",
    overview: "Developed a dormitory management system featuring QR-based attendance, resident management, and real-time monitoring using Flutter, Laravel, and MySQL.",
    contribution: "Designed allocation matrix routes in Laravel, structured MySQL query indexes, and built the mobile client using Flutter.",
    technologies: ["Flutter", "Laravel", "MySQL"],
    github: "https://github.com/ranaise/mydormitory",
    demo: "",
    screenshot: "/projects/mydormitory.png",
    featured: false,
  },
  {
    id: "telyutalks-2025",
    title: "TelyuTalks",
    subtitle: "Campus Q&A Platform",
    year: "2025",
    overview: "Developed a campus Q&A platform with voting and moderation feature using Spring Boot and MySQL.",
    contribution: "Configured API transaction paths in Spring Boot, co-designed relational tables in MySQL, and mapped query logs.",
    technologies: ["Spring Boot", "MySQL"],
    github: "https://github.com/ranaise/Telyutalks",
    demo: "",
    screenshot: "/projects/telyutalks.png",
    videoDemo: "/projects/telyutalks/telyutalks-demo.mp4",
    featured: false,
  },
];

export const hardSkillsCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", devicon: "python/python-original.svg" },
      { name: "C++", devicon: "cplusplus/cplusplus-original.svg" },
      { name: "Go", devicon: "go/go-original.svg" },
      { name: "Java", devicon: "java/java-original.svg" },
      { name: "PHP", devicon: "php/php-original.svg" },
      { name: "Dart", devicon: "dart/dart-original.svg" },
      { name: "Linden Scripting Language (LSL)", custom: true },
      { name: "HTML5", devicon: "html5/html5-original.svg" },
      { name: "CSS3", devicon: "css3/css3-original.svg" },
      { name: "XML", custom: true }
    ]
  },
  {
    title: "Frameworks & Platforms",
    skills: [
      { name: "FastAPI", devicon: "fastapi/fastapi-original.svg" },
      { name: "Java Spring Boot", devicon: "spring/spring-original.svg" },
      { name: "Laravel", devicon: "laravel/laravel-original.svg" },
      { name: "Flutter", devicon: "flutter/flutter-original.svg" },
      { name: "Next.js", devicon: "nextjs/nextjs-original.svg" },
      { name: "Streamlit", custom: true }
    ]
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MySQL", devicon: "mysql/mysql-original.svg" },
      { name: "PostgreSQL", devicon: "postgresql/postgresql-original.svg" },
      { name: "MariaDB", devicon: "mariadb/mariadb-original.svg" },
      { name: "Linux", devicon: "linux/linux-original.svg" },
      { name: "Figma", devicon: "figma/figma-original.svg" },
      { name: "Git", devicon: "git/git-original.svg" },
      { name: "Groq API", custom: true },
      { name: "OpenCV", devicon: "opencv/opencv-original.svg" }
    ]
  }
];

export const softSkillsList = [
  "Problem Solving",
  "Adaptability",
  "Teamwork",
  "Fast-learner",
  "Communication"
];

export const certificationsData: CertificationItem[] = [
  {
    id: "microsoft-azure-ai",
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "March 9, 2026",
    credentialId: "yEQV-DwW2",
    link: "https://verify.certiport.com",
    image: "/cert-microsoft.png"
  },
  {
    id: "openai-ai-foundations",
    title: "AI Foundations",
    issuer: "OpenAI Academy",
    date: "July 5, 2026",
    credentialId: "g1h0dmgrbn",
    link: "https://academy.openai.com/public/certificate/g1h0dmgrbn",
    image: "/cert-openai.png"
  },
  {
    id: "kaggle-deep-learning",
    title: "Intro to Deep Learning",
    issuer: "Kaggle",
    date: "July 5, 2026",
    credentialId: "N/A",
    link: "https://www.kaggle.com",
    image: "/cert-kaggle.png"
  }
];

export interface ProjectInterface {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  workflow: string;
  coreLogic: string[];
  gallery: {
    mobile?: { label: string; images: string[] }[];
    web?: { label: string; images: string[] }[];
  };
  features: { title: string; desc: string }[];
}

export const projectDetails: Record<string, ProjectInterface> = {
  "nexevent-2026": {
    id: "nexevent-2026",
    title: "NexEvent",
    image: "/projects/nexevent.jpg",
    alt: "NexEvent platform screenshot",
    description: "NexEvent utilizes a role-based approval pipeline designed to coordinate university event planning across three user roles: Superadmins, Admins, and Students.",
    workflow: "Organization Presidents submit event proposals, which wait for final review by the Student Affairs Directorate before being published. Organization Members can also propose events, undergoing a two-stage process. Regular students cannot submit events, only view and register.",
    coreLogic: [
      "Auto-Promote Waitlist: Promotes first candidate when someone cancels.",
      "Time Clash Prevention: Prevents overlapping schedules.",
      "Spam & Duplicate Protection: Database-level uniqueness validation."
    ],
    gallery: {
      mobile: [
        { label: "Register Account Flow", images: ["/projects/nexevent/Register mobile1.jpg", "/projects/nexevent/Register mobile2.jpg"] },
        { label: "Mobile Authentication Gate", images: ["/projects/nexevent/Login mobile.jpg"] },
        { label: "Explore Events Hub", images: ["/projects/nexevent/Dashboard mobile.jpg"] },
        { label: "Event Submission Form", images: ["/projects/nexevent/Ajukan acara mobile1.jpg", "/projects/nexevent/Ajukan acara mobile2.jpg"] },
        { label: "Event Details Panel", images: ["/projects/nexevent/Detail acara mobile.jpg"] },
        { label: "Digital Event Ticket", images: ["/projects/nexevent/Mytickets mobile.jpg"] },
        { label: "User Profile Panel", images: ["/projects/nexevent/Profile mobile.jpg", "/projects/nexevent/Profile mobile2.jpg"] }
      ],
      web: [
        { label: "Admin Login Portal", images: ["/projects/nexevent/Login admin dan superadmin.jpg"] },
        { label: "Admin Account Registration", images: ["/projects/nexevent/Register admin.jpg"] },
        { label: "Organization Dashboard Statistics", images: ["/projects/nexevent/Dashboard admin.jpg"] },
        { label: "Superadmin Control Center", images: ["/projects/nexevent/Dashboard superadmin.jpg"] },
        { label: "Admin Event Submission Desk", images: ["/projects/nexevent/Ajukan acara admin1.jpg", "/projects/nexevent/Ajukan acara admin2.jpg"] },
        { label: "Admin Edit Event Panel", images: ["/projects/nexevent/Edit acara admin1.jpg", "/projects/nexevent/Edit acara admin2.jpg"] },
        { label: "Organization Event Catalog", images: ["/projects/nexevent/Page acara admin.jpg"] },
        { label: "Superadmin Approval Desk", images: ["/projects/nexevent/All events superadmin.jpg", "/projects/nexevent/Pusat approval superadmin.jpg"] },
        { label: "Committee Management Panel", images: ["/projects/nexevent/Manajemen panitia admin.jpg"] },
        { label: "Participant Registry Matrix", images: ["/projects/nexevent/Manajemen peserta admin.jpg"] },
        { label: "QR Attendance Verification", images: ["/projects/nexevent/Verifikasi kehadiran admin.jpg"] },
        { label: "Superadmin Organization Manager", images: ["/projects/nexevent/Manajemen organisasi superadmin.jpg"] }
      ]
    },
    features: [
      { title: "Auto-Promote Waitlist", desc: "Ensures maximum event occupancy." },
      { title: "Time Clash Prevention", desc: "Maintains student calendar integrity." },
      { title: "Spam & Duplicate Protection", desc: "Enforces fair registration allocation." },
      { title: "Auto-Archive Engine", desc: "Keeps event explorers clean." }
    ]
  },
  "posyandu-pintar": {
    id: "posyandu-pintar",
    title: "Posyandu Pintar",
    image: "/projects/posyandu-ceria.jpg",
    alt: "Posyandu Pintar dashboard",
    description: "Posyandu Pintar provides a health data logging dashboard for infant records, offering automated BMI/growth chart rendering and Groq AI diet suggestions.",
    workflow: "Health cadres record physical developmental metrics during monthly sessions. The system parses statistics against WHO datasets and queries LLM models for nutritional diagnoses.",
    coreLogic: [
      "Growth Tracker Charts: Visualizes metrics over historical periods.",
      "Groq AI Nutrition Assistant: Generates diagnostic tips.",
      "Excel Report Engine: Aggregates monthly data to generate sheets."
    ],
    gallery: {
      web: [
        { label: "Kader Authentication Portal", images: ["/projects/posyandu-ceria/login.png"] },
        { label: "Kader Account Registration", images: ["/projects/posyandu-ceria/registrasi.png"] },
        { label: "Growth Metrics Overview Dashboard", images: ["/projects/posyandu-ceria/dashboard.png"] },
        { label: "Child Patient Registry", images: ["/projects/posyandu-ceria/daftar balita.png"] },
        { label: "New Child Account Wizard", images: ["/projects/posyandu-ceria/tambah balita.png", "/projects/posyandu-ceria/tambah balita2.png", "/projects/posyandu-ceria/tambah balita3.png"] },
        { label: "Growth Analytics Details & Charts", images: ["/projects/posyandu-ceria/detail balita.png"] },
        { label: "Growth Parameter Entry Form", images: ["/projects/posyandu-ceria/input pengukuran balita.png"] },
        { label: "Edit Bio & Measurements Form", images: ["/projects/posyandu-ceria/edit data balita.png"] },
        { label: "Monthly Attendance Sheet", images: ["/projects/posyandu-ceria/absensi balita.png"] },
        { label: "Integrated Periodic Excel Reporting", images: ["/projects/posyandu-ceria/laporan data balita.png", "/projects/posyandu-ceria/laporan data balita2.png"] },
        { label: "End Active Session Modal", images: ["/projects/posyandu-ceria/logout.png"] }
      ]
    },
    features: [
      { title: "Growth Tracker Charts", desc: "Visualizes infant developmental progress." },
      { title: "Groq AI Nutrition Assistant", desc: "Generates custom diagnostic tips." },
      { title: "Excel Report Engine", desc: "Streamlines government compliance." },
      { title: "Monthly Absensi Verification", desc: "Maintains active rosters." }
    ]
  },
  "microplast-2026": {
    id: "microplast-2026",
    title: "Microplast",
    image: "/projects/microplast.jpg",
    alt: "Microplast application",
    description: "MicroPlast automates microplastic fragment analysis under microscopic views using OpenCV binarization, Otsu filters, and circularity calculations.",
    workflow: "Loads raw microscopic lens photographs, segments particles using adaptive thresholding, extracts contours, and calculates geometry to classify contaminants.",
    coreLogic: [
      "Illumination Correction: Compensates for uneven microscope lighting.",
      "Adaptive & Otsu's Thresholding: Segments objects cleanly.",
      "Circularity Classification: Classifies plastic morphologies into fragments or fibers."
    ],
    gallery: {},
    features: [
      { title: "Illumination Correction", desc: "Compensates for uneven microscope lighting." },
      { title: "Adaptive & Otsu's Thresholding", desc: "Segments objects cleanly." },
      { title: "Morphological Closing", desc: "Cleans up binarized images." },
      { title: "Circularity Classification", desc: "Classifies plastic morphologies." }
    ]
  },
  "gpt-ner-2026": {
    id: "gpt-ner-2026",
    title: "GPT-NER",
    image: "/projects/gpt-ner.jpg",
    alt: "GPT-NER application",
    description: "GPT-NER converts plain English documents into structured JSON entity labels, querying Groq Llama-3 models with evaluation metrics.",
    workflow: "Loads text files, coordinates API queries with custom templates to extract key tokens, parses LLM responses, and compares extractions against CoNLL-2003 benchmarks.",
    coreLogic: [
      "Sequence Labeling Conversion: Bypasses training models from scratch.",
      "Regex Extraction Filter: Isolates target keywords using boundaries.",
      "seqeval Accuracy Matrix: Computes F1, Precision, and Recall."
    ],
    gallery: {},
    features: [
      { title: "Sequence Labeling Conversion", desc: "Simplifies extraction logic." },
      { title: "Tag Insertion Schema", desc: "Formats model targets." },
      { title: "Regex Extraction Filter", desc: "Parses model outputs." },
      { title: "seqeval Accuracy Matrix", desc: "Computes system performance." }
    ]
  },
  "my-dormitory-2025": {
    id: "my-dormitory-2025",
    title: "My Dormitory",
    image: "/projects/mydormitory.png",
    alt: "My Dormitory application",
    description: "My Dormitory manages resident check-in/check-out confirmations using localized GPS fence validation and camera-verified QR code scans.",
    workflow: "Residents scan dynamic QR codes using mobile camera. The mobile client tracks GPS coordinates to verify location. Building managers process entries.",
    coreLogic: [
      "QR Code Presensi System: Automates room check-ins securely.",
      "GPS Location Validation: Prevents remote check-ins outside the dorm.",
      "Infrastructure Issue Desk: Speeds up facility repairs."
    ],
    gallery: {
      mobile: [
        { label: "Resident Mobile Workspace", images: ["/projects/mydormitory/dashboard mobile.png"] },
        { label: "QR Scanning Camera Verification", images: ["/projects/mydormitory/izin kamera mobile.png", "/projects/mydormitory/berhasil presensi mobile.png"] },
        { label: "Attendance Activity logs", images: ["/projects/mydormitory/history absensi mobile.png"] }
      ],
      web: [
        { label: "Admin Login Interface", images: ["/projects/mydormitory/login admin web.png"] },
        { label: "Admin Dashboard Overview", images: ["/projects/mydormitory/dashboard admin web.png"] },
        { label: "Resident Profile Registry", images: ["/projects/mydormitory/kelola penghuni web.png"] },
        { label: "QR Code Attendance Log", images: ["/projects/mydormitory/presensi penghuni web.png"] },
        { label: "Excel Export Reporting Hub", images: ["/projects/mydormitory/laporan presensi web.png"] },
        { label: "Infrastructure Problem Reports", images: ["/projects/mydormitory/laporan masalah web.png"] }
      ]
    },
    features: [
      { title: "QR Code Presensi System", desc: "Automates room check-ins." },
      { title: "GPS Location Validation", desc: "Prevents remote check-ins." },
      { title: "Infrastructure Issue Desk", desc: "Speeds up facility repairs." },
      { title: "Resident Registry & Room Allocation", desc: "Simplifies building allocation." }
    ]
  },
  "telyutalks-2025": {
    id: "telyutalks-2025",
    title: "TelyuTalks",
    image: "/projects/telyutalks.png",
    alt: "TelyuTalks application",
    description: "TelyuTalks serves as a campus question-and-answer discussion forum, integrating Telkom SSO login and admin content moderation queues.",
    workflow: "Students and faculty authenticate via SSO to publish inquiries. Automated filters check for flag words and pipe reports into an administrative review desk.",
    coreLogic: [
      "SSO Email Authentication: Validates against Telkom University emails.",
      "Academic Thread Discussion: Allows Q&A loops with voting.",
      "Content Report & Moderation: Queues records for admin inspection."
    ],
    gallery: {
      web: [
        { label: "Academic Landing Page", images: ["/projects/telyutalks/landing page.png", "/projects/telyutalks/landing page2.png"] },
        { label: "Authentication Portal", images: ["/projects/telyutalks/login.png"] },
        { label: "Student Account Sign Up", images: ["/projects/telyutalks/register mahasiswa.png"] },
        { label: "Lecturer Account Sign Up", images: ["/projects/telyutalks/register dosen.png"] },
        { label: "Academic Thread Submission", images: ["/projects/telyutalks/ajukan pertanyaan.png"] },
        { label: "Q&A Answer Submission Form", images: ["/projects/telyutalks/ajukan jawaban.png"] },
        { label: "Content Moderation Reporting Dialog", images: ["/projects/telyutalks/report pertanyaan.png", "/projects/telyutalks/report jawaban.png"] },
        { label: "User Profile Dashboard", images: ["/projects/telyutalks/profile.png"] },
        { label: "Edit Bio & Danger Zone Account Removal", images: ["/projects/telyutalks/edit profile.png", "/projects/telyutalks/hapus akun.png"] }
      ]
    },
    features: [
      { title: "SSO Email Authentication", desc: "Ensures campus exclusivity." },
      { title: "Academic Thread Discussion", desc: "Enables question & answer loops." },
      { title: "Content Report & Moderation", desc: "Maintains platform code of conduct." },
      { title: "Spring Security Auth Filter", desc: "Isolates administrative controls." }
    ]
  }
};
