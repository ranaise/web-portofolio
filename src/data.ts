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
    title: "Languages",
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
    title: "Backend & Frameworks",
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
    title: "Databases",
    skills: [
      { name: "MySQL", devicon: "mysql/mysql-original.svg" },
      { name: "PostgreSQL", devicon: "postgresql/postgresql-original.svg" },
      { name: "MariaDB", devicon: "mariadb/mariadb-original.svg" }
    ]
  },
  {
    title: "AI & Data",
    skills: [
      { name: "Groq API", custom: true },
      { name: "OpenCV", devicon: "opencv/opencv-original.svg" }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Linux", devicon: "linux/linux-original.svg" },
      { name: "Figma", devicon: "figma/figma-original.svg" },
      { name: "Git", devicon: "git/git-original.svg" }
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

export interface ProjectGalleryItem {
  id: string;
  label: string;
  images: string[];
  description: string;
  workflow: string;
  coreLogic: string[];
}

export interface ProjectInterface {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  workflow: string;
  coreLogic: string[];
  gallery: {
    mobile?: ProjectGalleryItem[];
    web?: ProjectGalleryItem[];
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
        { id: "nexevent-register-account", label: "Register Account Flow", images: ["/projects/nexevent/Register mobile1.jpg", "/projects/nexevent/Register mobile2.jpg"], description: "A guided registration flow for students and organization members joining NexEvent.", workflow: "The client collects account details, validates the form, and submits a new profile before the user enters the appropriate event workspace.", coreLogic: ["Role-aware registration fields", "Client and server validation", "Account creation feedback"] },
        { id: "nexevent-mobile-auth", label: "Mobile Authentication Gate", images: ["/projects/nexevent/Login mobile.jpg"], description: "The mobile entry screen routes authenticated users into their permitted NexEvent tools.", workflow: "Users submit credentials, receive validation feedback, and continue to the event hub when the session is accepted.", coreLogic: ["Credential validation", "Session-aware routing", "Role-scoped access"] },
        { id: "nexevent-events-hub", label: "Explore Events Hub", images: ["/projects/nexevent/Dashboard mobile.jpg"], description: "A mobile event hub helps students discover current events and inspect their availability.", workflow: "The client loads event records, presents relevant filters and summaries, and opens a selected event for registration.", coreLogic: ["Event list retrieval", "Availability and capacity display", "Detail navigation"] },
        { id: "nexevent-event-submission", label: "Event Submission Form", images: ["/projects/nexevent/Ajukan acara mobile1.jpg", "/projects/nexevent/Ajukan acara mobile2.jpg"], description: "A structured form lets an authorized organization member propose a campus event.", workflow: "The organizer enters event details and submits the proposal, which enters the organization review and approval workflow.", coreLogic: ["Structured event inputs", "Organization-scoped submission", "Pending approval state"] },
        { id: "nexevent-event-details", label: "Event Details Panel", images: ["/projects/nexevent/Detail acara mobile.jpg"], description: "The event details panel keeps schedule, capacity, venue, and registration actions together.", workflow: "A selected event loads its current information so a student can review constraints before registering.", coreLogic: ["Schedule and venue summary", "Capacity status", "Registration eligibility"] },
        { id: "nexevent-ticket", label: "Digital Event Ticket", images: ["/projects/nexevent/Mytickets mobile.jpg"], description: "The ticket view gives a registered student a compact record of confirmed event access.", workflow: "After registration, the client retrieves the user ticket and presents it for use at the event.", coreLogic: ["Registration lookup", "Ticket state display", "Event-linked identity"] },
        { id: "nexevent-profile", label: "User Profile Panel", images: ["/projects/nexevent/Profile mobile.jpg", "/projects/nexevent/Profile mobile2.jpg"], description: "The profile panel exposes account information and the user-facing settings for NexEvent.", workflow: "The mobile client loads the signed-in profile and lets the user review account details alongside event activity.", coreLogic: ["Authenticated profile retrieval", "Account detail presentation", "User activity context"] }
      ],
      web: [
        { id: "nexevent-admin-login", label: "Admin Login Portal", images: ["/projects/nexevent/Login admin dan superadmin.jpg"], description: "The admin login portal is the role-aware entry point for organization administrators and superadmins.", workflow: "An authorized operator submits credentials and is routed to the matching administrative workspace after validation.", coreLogic: ["Role-based authentication", "Protected admin routes", "Session error feedback"] },
        { id: "nexevent-admin-register", label: "Admin Account Registration", images: ["/projects/nexevent/Register admin.jpg"], description: "This form creates an organization-admin account within the NexEvent administration boundary.", workflow: "An organization representative provides account information before the account can be used for scoped event management.", coreLogic: ["Organization association", "Registration validation", "Admin account provisioning"] },
        { id: "nexevent-org-stats", label: "Organization Dashboard Statistics", images: ["/projects/nexevent/Dashboard admin.jpg"], description: "The organization dashboard summarizes event activity for an administrator's own organization.", workflow: "The dashboard loads organization-scoped counts and links them to the relevant event-management actions.", coreLogic: ["Organization-scoped queries", "Aggregate event counts", "Action-oriented summaries"] },
        { id: "nexevent-superadmin-center", label: "Superadmin Control Center", images: ["/projects/nexevent/Dashboard superadmin.jpg"], description: "The superadmin control center provides oversight across the campus event system.", workflow: "A superadmin reviews platform-level activity and moves into approval, organization, or account-management workflows.", coreLogic: ["System-wide visibility", "Privileged navigation", "Administrative status summaries"] },
        { id: "nexevent-admin-submit", label: "Admin Event Submission Desk", images: ["/projects/nexevent/Ajukan acara admin1.jpg", "/projects/nexevent/Ajukan acara admin2.jpg"], description: "The submission desk lets an organization administrator prepare an event proposal for review.", workflow: "The admin enters the event payload, checks required details, and sends it into the approval queue.", coreLogic: ["Admin-only submission", "Required-field validation", "Approval queue handoff"] },
        { id: "nexevent-admin-edit", label: "Admin Edit Event Panel", images: ["/projects/nexevent/Edit acara admin1.jpg", "/projects/nexevent/Edit acara admin2.jpg"], description: "The edit panel gives an organization administrator controlled access to update an existing event.", workflow: "The selected event is loaded into editable fields, changes are validated, and the updated record is saved within the organization scope.", coreLogic: ["Existing-record hydration", "Scoped update permissions", "Validated event persistence"] },
        { id: "nexevent-org-catalog", label: "Organization Event Catalog", images: ["/projects/nexevent/Page acara admin.jpg"], description: "The organization catalog lists events owned or managed by the current organization.", workflow: "The admin reviews the catalog, opens a specific event, and continues to edit, inspect, or manage it.", coreLogic: ["Organization filtering", "Event status visibility", "Management navigation"] },
        { id: "nexevent-approval-desk", label: "Superadmin Approval Desk", images: ["/projects/nexevent/All events superadmin.jpg", "/projects/nexevent/Pusat approval superadmin.jpg"], description: "The approval desk lets a superadmin review event proposals before publication.", workflow: "Pending proposals are inspected and either approved for publication or returned through the administrative review path.", coreLogic: ["Pending proposal queue", "Approval decision state", "Publication gating"] },
        { id: "nexevent-committee", label: "Committee Management Panel", images: ["/projects/nexevent/Manajemen panitia admin.jpg"], description: "The committee panel manages people assigned to an organization event.", workflow: "An administrator opens an event, reviews committee membership, and maintains the people responsible for its delivery.", coreLogic: ["Event-linked membership", "Admin-only mutations", "Committee roster display"] },
        { id: "nexevent-participants", label: "Participant Registry Matrix", images: ["/projects/nexevent/Manajemen peserta admin.jpg"], description: "The participant registry gives administrators a structured view of event registrants.", workflow: "The system retrieves registrations for an event so the organization can review participant status and capacity usage.", coreLogic: ["Event-scoped registrations", "Capacity-aware listing", "Participant status display"] },
        { id: "nexevent-qr-attendance", label: "QR Attendance Verification", images: ["/projects/nexevent/Verifikasi kehadiran admin.jpg"], description: "The attendance view verifies event participation through a QR-based check-in flow.", workflow: "An administrator scans or validates a participant ticket and records attendance against the selected event.", coreLogic: ["Ticket-to-event matching", "Duplicate check-in protection", "Attendance persistence"] },
        { id: "nexevent-org-manager", label: "Superadmin Organization Manager", images: ["/projects/nexevent/Manajemen organisasi superadmin.jpg"], description: "The organization manager maintains the administrative organizations that operate campus events.", workflow: "A superadmin reviews organization records and applies approved management actions from the platform-level workspace.", coreLogic: ["Organization registry", "Privileged mutations", "Cross-organization oversight"] }
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
    description: "Posyandu Pintar provides a health data logging dashboard for child records, growth charts, attendance, and API-backed periodic reporting.",
    workflow: "Health cadres manage child records, enter monthly measurements, review historical growth data, and prepare periodic reports through the dashboard.",
    coreLogic: [
      "Growth Tracker Charts: Visualizes metrics over historical periods.",
      "Measurement Status: Keeps monthly growth entries easy to review.",
      "API-backed Reporting: Aggregates current and historical records for periodic review."
    ],
    gallery: {
      web: [
        { id: "posyandu-auth", label: "Kader Authentication Portal", images: ["/projects/posyandu-ceria/login.png"], description: "The authentication portal gives health cadres a controlled entry point to child health records.", workflow: "A kader submits credentials and continues to the dashboard only after the account is validated.", coreLogic: ["Credential validation", "Protected dashboard access", "Session feedback"] },
        { id: "posyandu-register", label: "Kader Account Registration", images: ["/projects/posyandu-ceria/registrasi.png"], description: "This registration form creates the kader account used to manage Posyandu records.", workflow: "The user enters identity and account details, corrects validation errors, and submits the registration.", coreLogic: ["Required-field checks", "Account persistence", "Registration confirmation"] },
        { id: "posyandu-overview", label: "Growth Metrics Overview Dashboard", images: ["/projects/posyandu-ceria/dashboard.png"], description: "The overview dashboard surfaces the active period and the current state of child measurements.", workflow: "The dashboard loads summary records and guides the kader toward children needing data entry or review.", coreLogic: ["Active month and year", "Measurement status summary", "Child-record navigation"] },
        { id: "posyandu-registry", label: "Child Patient Registry", images: ["/projects/posyandu-ceria/daftar balita.png"], description: "The child registry organizes the records managed by a Posyandu kader.", workflow: "The user searches or scans the registry, selects a child, and opens the relevant record or action.", coreLogic: ["Child record listing", "Searchable identity data", "Record-level navigation"] },
        { id: "posyandu-new-child", label: "New Child Account Wizard", images: ["/projects/posyandu-ceria/tambah balita.png", "/projects/posyandu-ceria/tambah balita2.png", "/projects/posyandu-ceria/tambah balita3.png"], description: "A multi-step wizard captures the information needed to add a new child record.", workflow: "The kader completes identity and baseline details across the steps before submitting a validated child profile.", coreLogic: ["Step-based form state", "Input validation", "Child record creation"] },
        { id: "posyandu-growth-details", label: "Growth Analytics Details & Charts", images: ["/projects/posyandu-ceria/detail balita.png"], description: "The details view presents a child’s historical growth information in a focused record view.", workflow: "The system loads past measurements and renders the available trends for review over time.", coreLogic: ["Historical measurement retrieval", "Trend visualization", "Child-specific context"] },
        { id: "posyandu-measurement-entry", label: "Growth Parameter Entry Form", images: ["/projects/posyandu-ceria/input pengukuran balita.png"], description: "The measurement form records the child parameters collected during the active monthly session.", workflow: "The kader enters measurements, receives validation feedback, and submits the monthly entry for the selected child.", coreLogic: ["Measurement validation", "Active-period association", "Entry status update"] },
        { id: "posyandu-edit-measurements", label: "Edit Bio & Measurements Form", images: ["/projects/posyandu-ceria/edit data balita.png"], description: "The edit form corrects child identity details and previously recorded measurements.", workflow: "Existing data is loaded into editable fields, changed values are checked, and the record is saved.", coreLogic: ["Existing-record editing", "Field-level validation", "Updated record persistence"] },
        { id: "posyandu-attendance", label: "Monthly Attendance Sheet", images: ["/projects/posyandu-ceria/absensi balita.png"], description: "The attendance sheet tracks which children were present in the active Posyandu period.", workflow: "The kader opens the month’s roster and records attendance against the corresponding child records.", coreLogic: ["Active-period roster", "Attendance state", "Child-linked updates"] },
        { id: "posyandu-reporting", label: "Periodic Reporting", images: ["/projects/posyandu-ceria/laporan data balita.png", "/projects/posyandu-ceria/laporan data balita2.png"], description: "The reporting view compiles child health records for periodic review by the Posyandu team.", workflow: "The user selects the reporting period, reviews aggregated records, and uses the API-backed report view.", coreLogic: ["Period filtering", "Record aggregation", "Report review state"] },
        { id: "posyandu-end-session", label: "End Active Session Modal", images: ["/projects/posyandu-ceria/logout.png"], description: "The session modal confirms when a kader intends to leave the active account session.", workflow: "The user requests logout, confirms the action, and returns to the protected entry point.", coreLogic: ["Explicit confirmation", "Session termination", "Return-to-login routing"] }
      ]
    },
    features: [
      { title: "Growth Tracker Charts", desc: "Visualizes infant developmental progress." },
      { title: "Measurement Status", desc: "Keeps monthly growth entries easy to review." },
      { title: "API-backed Reporting", desc: "Aggregates records for periodic review." },
      { title: "Monthly Absensi Verification", desc: "Maintains active rosters." }
    ]
  },
  "microplast-2026": {
    id: "microplast-2026",
    title: "Microplast",
    image: "/projects/microplast.jpg",
    alt: "Microplast application",
    description: "MicroPlast uses OpenCV image processing to segment microscopic samples and classify particles by measurable shape properties.",
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
    description: "GPT-NER uses prompt-based entity marking with Regex extraction and entity-level evaluation.",
    workflow: "The interface sends document text through a prompt-based extraction flow, parses the marked output, and compares entities against an evaluation set.",
    coreLogic: [
      "Prompt-based Entity Marking: Requests structured entity labels from the language model.",
      "Regex Extraction: Isolates marked entities from the returned text.",
      "Entity-level Evaluation: Compares extracted entities using evaluation measures."
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
    description: "My Dormitory validates resident attendance with QR scanning, permitted time, location checks, and duplicate-attendance prevention.",
    workflow: "Residents use the mobile camera to scan a QR code during the permitted attendance window, while location and prior attendance checks protect the record. Admins review resident history and issues.",
    coreLogic: [
      "QR Code Presensi System: Automates room check-ins securely.",
      "GPS Location Validation: Prevents remote check-ins outside the dorm.",
      "Infrastructure Issue Desk: Speeds up facility repairs."
    ],
    gallery: {
      mobile: [
        { id: "dorm-resident-workspace", label: "Resident Mobile Workspace", images: ["/projects/mydormitory/dashboard mobile.png"], description: "The resident workspace brings attendance actions and dormitory updates into one mobile entry point.", workflow: "A signed-in resident reviews the current status and chooses the available attendance or history action.", coreLogic: ["Resident-scoped navigation", "Current status summary", "Action availability"] },
        { id: "dorm-qr-verification", label: "QR Scanning Camera Verification", images: ["/projects/mydormitory/izin kamera mobile.png", "/projects/mydormitory/berhasil presensi mobile.png"], description: "The camera flow verifies a resident’s QR attendance attempt before confirming the record.", workflow: "The app requests camera permission, scans the code, checks time and location, and confirms only a valid non-duplicate attendance.", coreLogic: ["Camera permission state", "QR payload validation", "Time, location, and duplicate checks"] },
        { id: "dorm-attendance-history", label: "Attendance Activity Logs", images: ["/projects/mydormitory/history absensi mobile.png"], description: "The activity log gives residents a history of their recorded dormitory attendance.", workflow: "The mobile client loads the resident’s attendance records and presents them in chronological context.", coreLogic: ["Resident-scoped history", "Attendance timestamps", "Record status display"] }
      ],
      web: [
        { id: "dorm-admin-login", label: "Admin Login Interface", images: ["/projects/mydormitory/login admin web.png"], description: "The admin login interface protects resident and attendance administration tools.", workflow: "An authorized building manager submits credentials and enters the administrative workspace after validation.", coreLogic: ["Admin authentication", "Protected routes", "Login feedback"] },
        { id: "dorm-admin-dashboard", label: "Admin Dashboard Overview", images: ["/projects/mydormitory/dashboard admin web.png"], description: "The admin dashboard summarizes the dormitory records that need operational attention.", workflow: "The manager reviews current attendance and resident status before opening a focused administrative task.", coreLogic: ["Administrative summaries", "Current-state retrieval", "Task-oriented navigation"] },
        { id: "dorm-resident-registry", label: "Resident Profile Registry", images: ["/projects/mydormitory/kelola penghuni web.png"], description: "The resident registry manages the profiles and dormitory records maintained by administrators.", workflow: "A manager searches the registry, opens a resident profile, and applies the permitted record action.", coreLogic: ["Resident listing", "Profile lookup", "Admin-scoped updates"] },
        { id: "dorm-qr-log", label: "QR Code Attendance Log", images: ["/projects/mydormitory/presensi penghuni web.png"], description: "The attendance log lets administrators review QR-based resident check-ins.", workflow: "The system lists recorded scans with resident and time context so managers can verify attendance history.", coreLogic: ["QR attendance records", "Resident and time context", "Verification-friendly listing"] },
        { id: "dorm-reporting", label: "Attendance Reporting Hub", images: ["/projects/mydormitory/laporan presensi web.png"], description: "The reporting hub organizes dormitory attendance records for administrative review.", workflow: "A manager selects the relevant attendance context and reviews the resulting records in the web workspace.", coreLogic: ["Attendance filtering", "Period-aware review", "Admin reporting view"] },
        { id: "dorm-problem-reports", label: "Infrastructure Problem Reports", images: ["/projects/mydormitory/laporan masalah web.png"], description: "The problem-report view helps managers review resident-submitted infrastructure issues.", workflow: "A manager opens reported issues, checks their details, and follows the available review or resolution path.", coreLogic: ["Issue record listing", "Resident-submitted context", "Review status"] }
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
    description: "TelyuTalks is a campus question-and-answer forum with Spring Security authentication, role-based registration, discussion CRUD, reporting, and profile management.",
    workflow: "Students and lecturers register through institutional flows, authenticate through Spring Security, publish questions, submit answers, report content, and manage their profiles. Admins review submitted reports.",
    coreLogic: [
      "SSO Email Authentication: Validates against Telkom University emails.",
      "Academic Thread Discussion: Allows Q&A loops with voting.",
      "Content Report & Moderation: Queues submitted reports for admin inspection."
    ],
    gallery: {
      web: [
        { id: "telyutalks-landing", label: "Academic Landing Page", images: ["/projects/telyutalks/landing page.png", "/projects/telyutalks/landing page2.png"], description: "The landing page introduces the academic discussion space and its main discovery paths.", workflow: "Visitors review the available question-and-answer context and choose whether to authenticate or continue into the public entry flow.", coreLogic: ["Academic entry content", "Discussion discovery", "Authentication pathway"] },
        { id: "telyutalks-auth", label: "Authentication Portal", images: ["/projects/telyutalks/login.png"], description: "The authentication portal establishes a Spring Security session for an eligible campus user.", workflow: "A registered student or lecturer submits credentials and is routed to the permitted forum experience.", coreLogic: ["Spring Security authentication", "Institutional identity checks", "Role-aware session"] },
        { id: "telyutalks-student-register", label: "Student Account Sign Up", images: ["/projects/telyutalks/register mahasiswa.png"], description: "The student registration form creates a forum account for an eligible student.", workflow: "The student enters institutional details, resolves validation feedback, and submits the account request.", coreLogic: ["Student role assignment", "Institutional registration", "Validated account creation"] },
        { id: "telyutalks-lecturer-register", label: "Lecturer Account Sign Up", images: ["/projects/telyutalks/register dosen.png"], description: "The lecturer registration form creates a distinct academic user account.", workflow: "The lecturer provides the required institutional details and submits them through the lecturer-specific registration path.", coreLogic: ["Lecturer role assignment", "Institutional registration", "Role-specific validation"] },
        { id: "telyutalks-question", label: "Academic Thread Submission", images: ["/projects/telyutalks/ajukan pertanyaan.png"], description: "The thread submission form lets an authenticated user publish an academic question.", workflow: "The user writes the question, submits the form, and receives the new discussion record in the forum.", coreLogic: ["Question CRUD creation", "Authenticated authoring", "Thread persistence"] },
        { id: "telyutalks-answer", label: "Q&A Answer Submission Form", images: ["/projects/telyutalks/ajukan jawaban.png"], description: "The answer form adds a response to an existing academic question.", workflow: "A signed-in user opens a question, writes an answer, and submits it into the thread conversation.", coreLogic: ["Answer CRUD creation", "Question-linked submission", "Authenticated participation"] },
        { id: "telyutalks-reporting", label: "Content Moderation Reporting Dialog", images: ["/projects/telyutalks/report pertanyaan.png", "/projects/telyutalks/report jawaban.png"], description: "The reporting dialog lets users submit a concern about a question or answer.", workflow: "The user selects the report action, provides the relevant reason, and sends the report to the admin review queue.", coreLogic: ["Question and answer reporting", "Reason capture", "Admin review queue"] },
        { id: "telyutalks-profile", label: "User Profile Dashboard", images: ["/projects/telyutalks/profile.png"], description: "The profile dashboard gathers the signed-in user’s account and discussion context.", workflow: "An authenticated user opens the profile view to review their information and associated forum activity.", coreLogic: ["Profile retrieval", "User-owned activity", "Role-aware presentation"] },
        { id: "telyutalks-edit-profile", label: "Edit Bio & Account Removal", images: ["/projects/telyutalks/edit profile.png", "/projects/telyutalks/hapus akun.png"], description: "The profile controls support biography updates and constrained account removal.", workflow: "The user edits profile information or enters the removal flow, where deletion constraints are checked before the account can be removed.", coreLogic: ["Profile update", "Deletion constraints", "Explicit removal action"] }
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
