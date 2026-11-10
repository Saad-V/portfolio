import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Saad",
  initials: "VS",
  url: "https://saad-v.vercel.app",
  location: "Bengaluru, Karnataka, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  description:
    "Engineer who loves taking ideas from paper to deployment.",
  summary:
    "I'm an engineering undergrad at BMSIT&M in Bengaluru who enjoys building products and solving engineering problems end-to-end by taking an idea from a rough sketch on paper all the way to a live, deployed system. I've built and scaled **pucnotes-solutions.com** to thousands of monthly active users (~5k regular, peaking at 10k+), made a **real-time AI interview platform (AiiN)** with FastAPI and PostgreSQL, and logged **330+ hours evaluating enterprise LLMs** at Outlier AI.",
  avatarUrl: "/me.png",
  skills: [
    // Core Strongholds
    { name: "Python", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "C", icon: Csharp },
    { name: "SQL", icon: Postgresql },
    // Backend & AI Stack
    { name: "FastAPI" },
    // Systems, Hardware & Tooling
    { name: "FreeRTOS" },
    { name: "Micro-controllers" },
    { name: "Linux" },
    { name: "Git & GitHub", icon: Icons.github },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "vsaadsabeel@gmail.com",
    tel: "+916360487938",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Saad-V",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/v-muhammed-saad-sabeel-085083336",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:vsaadsabeel@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  // Displayed under "Previous Works"
  work: [
    {
      company: "PUC Notes & Solutions",
      href: "https://www.pucnotes-solutions.com",
      badges: ["5k–10k Monthly Users", "Creator"],
      location: "Bengaluru, India",
      title: "Founder & Lead Developer",
      logoUrl: "/pucnotes.png",
      start: "",
      end: "Present",
      description:
        "Built and grew an educational platform for Karnataka PUC students from the ground up, now serving 5,000+ monthly visitors and reaching 10,000+ during exam cycles. Own the product end-to-end, spanning platform development, SEO, content architecture, organic growth, and ongoing production operations.",
    },
    {
      company: "Outlier AI",
      href: "https://outlier.ai",
      badges: ["330+ Hours", "RLHF & SFT"],
      location: "Remote",
      title: "AI Model Evaluator",
      logoUrl: "/outlier.png",
      start: "",
      end: "",
      description:
        "Contributed 330+ hours to Reinforcement Learning from Human Feedback (RLHF) and Supervised Fine-Tuning (SFT) tasks across mathematics, coding, and multilingual domains. Assessed enterprise LLM outputs for factual accuracy, hallucination patterns, and logical consistency.",
    },
    {
      company: "IsaiTonic",
      href: "https://www.isaitonic.com",
      badges: ["Freelance / Intern", "Live Production"],
      location: "Bengaluru, India",
      title: "Web Developer & Maintainer",
      logoUrl: "/isaitonic.png",
      start: "",
      end: "",
      description:
        "Developed and deployed the official web platform for IsaiTonic (isaitonic.com). Took end-to-end ownership of site structure, content integration, deployment, and ongoing production maintenance.",
    },
  ],

  education: [
    {
      school: "BMS Institute of Technology & Management (BMSIT&M)",
      href: "https://bmsit.ac.in",
      degree: "B.E. in Electronics & Telecommunication Engineering — CGPA: 9.24",
      logoUrl: "/bmsit.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Agragami PU College, Bengaluru",
      href: "#",
      degree: "Class 12 (PUC) Science — 89%",
      logoUrl: "/school.png",
      start: "2022",
      end: "2023",
    },
  ],

  // Section 1: Recent Software & AI Builds
  projects: [
    {
      title: "PUC Notes & Solutions",
      href: "https://www.pucnotes-solutions.com",
      dates: "Live in Production",
      active: true,
      description:
        "Built and scaled a public educational resource platform serving 5,000 to 10,000+ monthly active students across Karnataka. Owned zero-to-one execution, search engine indexing (SEO), content architecture, and ongoing maintenance.",
      technologies: [
        "Production Deployment",
        "SEO & Organic Growth",
        "Content Architecture",
      ],
      links: [
        {
          type: "Live Site (5k+ MAU)",
          href: "https://www.pucnotes-solutions.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/PUC_Notes_Preview.png",
      video: "",
    },
    {
      title: "AiiN — Real-Time AI Interview Rehearsal Platform",
      href: "https://aiin-web.onrender.com/",
      dates: "2026",
      active: true,
      description:
        "Engineered a modular backend using FastAPI, PostgreSQL, SQLAlchemy ORM, and Alembic with an 8-entity relational schema and Repository-Service architecture. Integrated WebSockets, Speech-to-Text, and Gemini API to parse resumes/JDs, run live voice mock interviews, and generate downloadable PDF evaluation reports via PDFKit.",
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "Alembic",
        "WebSockets",
        "Gemini API",
        "PDFKit",
      ],
      links: [
        {
          type: "Live MVP",
          href: "https://aiin-web.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Saad-V/ai-interview-platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/aiin_demo.mp4",
    },
    {
      title: "Nutrino — Multimodal GenAI Nutrition Assistant",
      href: "https://nutrino-brown.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "Shipped a multimodal GenAI web application integrating Google Gemini APIs via Server Actions. Enables automated food logging through image analysis and natural language parsing, conditioned on user metrics, regional Indian food availability, and allergies.",
      technologies: [
        "Google Gemini API",
        "Server Actions",
        "Multimodal Vision",
        "Prompt Engineering",
        "Vercel",
      ],
      links: [
        {
          type: "Live App",
          href: "https://nutrino-brown.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Saad-V/nutrino",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/nutrino_demo.mp4",
    },
  ],

  // Section 2: Core Systems & Embedded Builds
  coreProjects: [
    {
      title: "EVSE Charge Controller Simulator (FreeRTOS)",
      href: "https://github.com/Saad-V/EVSE-Simulator",
      dates: "Embedded Firmware",
      active: true,
      description:
        "Architected a deterministic Electric Vehicle Supply Equipment (EVSE) charge controller simulator on ESP32-S2 using FreeRTOS. Replaced single-loop polling with 4 concurrent tasks (Input, EVSE FSM, Logger, Fault) communicating via queues, mutexes, and ISR-triggered binary semaphores, alongside hardware LEDC 1 kHz PWM pilot signal generation (IEC 61851).",
      technologies: [
        "C / Embedded C",
        "FreeRTOS",
        "ESP32-S2",
        "Queues & Mutexes",
        "Hardware Interrupts (ISR)",
        "FSM",
        "PWM (IEC 61851)",
      ],
      links: [
        {
          type: "GitHub & Docs",
          href: "https://github.com/Saad-V/EVSE-Simulator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/EVSE_demo.png",
      video: "",
    },
    {
      title: "Smart Switching — Bidirectional IoT Automation",
      href: "https://github.com/Saad-V/Smart_Switching",
      dates: "IoT & Hardware",
      active: true,
      description:
        "Built a dual-mode home automation system on ESP32 controlling 4 AC relay loads via local hexadecimal IR remote decoding and cloud-connected Blynk mobile/web dashboards, maintaining real-time bidirectional state synchronization across physical hardware and cloud interfaces.",
      technologies: [
        "C",
        "ESP32 NodeMCU",
        "Blynk IoT Cloud",
        "IR Protocol Decoding",
        "Real-Time State Sync",
        "GPIO & Relays",
      ],
      links: [
        {
          type: "GitHub & Circuit",
          href: "https://github.com/Saad-V/Smart_Switching",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/Smart_Switching_demo.mp4",
    },
  ],

  hackathons: [],
} as const;
