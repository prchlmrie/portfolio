window.PROJECTS_DATA = [
  {
    slug: "hogwarts-student-management",
    title: "Hogwarts-Themed Student Management System Using Tkinter",
    cubeTitle: "Hogwarts Student System",
    tagline:
      "A magical desktop admin tool—secure login, CRUD, and real-time persistence, all wrapped in Hogwarts flair.",
    overview:
      "A full-featured student management system with Hogwarts theming, built entirely in Python using Tkinter, that provides administrators with a secure, intuitive GUI to manage student records including login authentication, search capabilities, and real-time data persistence.",
    impact:
      "Lightweight GUI for schools that need secure student records without enterprise complexity.",
    description:
      "Full-featured student management with Hogwarts theming, built in Python and Tkinter—login authentication, search, and file-based persistence in one accessible desktop app.",
    role: "Solo Developer",
    thumbnail: "images/projects/studentportal/1.png",
    gallery: [
      "images/projects/studentportal/1.png",
      "images/projects/studentportal/2.png",
      "images/projects/studentportal/3.png",
      "images/projects/studentportal/4.png",
      "images/projects/studentportal/5.png",
      "images/projects/studentportal/6.png"
    ],
    tags: ["Python", "Tkinter", "Pillow", "OOP"],
    category: "frontend",
    featured: true,
    links: {
      demo: "#",
      repo: "#",
      caseStudy: true
    },
    caseStudy: {
      summary: {
        problem:
          "Schools need a simple, secure way to manage student records without the complexity of enterprise-level systems. This project delivers a lightweight desktop app with authentication and CRUD operations in one intuitive interface.",
        techStack: [
          { name: "Python", key: "Python" },
          { name: "Tkinter", icon: "mdi:application-brackets", color: "#2D6A9F" },
          { name: "Pillow (PIL)", icon: "mdi:image-outline", color: "#C17F59" },
          { name: "OOP", icon: "mdi:layers-outline", color: "#7C3AED" },
          {
            name: "Plain text file storage",
            icon: "mdi:file-document-outline",
            color: "#64748B"
          }
        ],
        features: [
          {
            title: "Secure Login",
            text: "Three-attempt authentication with session management and account lockout."
          },
          {
            title: "Student Records Management",
            text: "Full CRUD operations with validation (unique emails, age checks, error handling)."
          },
          {
            title: "Immersive UI",
            text: "Hogwarts-inspired theming, frame-based navigation, and image/logo integration."
          }
        ]
      }
    }
  },
  {
    slug: "flyzona-zoo-management",
    title: "Flyzona — Modern Zoo Web App with PHP & phpMyAdmin",
    cubeTitle: "Flyzona",
    tagline:
      "A full zoo management platform with role-based access—explore animals and events as a visitor, manage it all as an admin.",
    overview:
      "Traditional zoo websites lack interactive features for visitors and efficient tools for administrators. Flyzona bridges this gap with a dynamic PHP and MySQL platform—role-based access, member-exclusive content, and streamlined admin management.",
    impact:
      "Bridges public visitor information and member-exclusive experiences with secure admin tools for account management.",
    description:
      "PHP and MySQL zoo platform with dual-role authentication, admin dashboards, and database-driven galleries and events.",
    role: "Solo Developer",
    thumbnail: "images/projects/flyzona/1.jpeg",
    gallery: [
      "images/projects/flyzona/1.jpeg",
      "images/projects/flyzona/2.jpeg",
      "images/projects/flyzona/3.jpeg",
      "images/projects/flyzona/4.jpeg",
      "images/projects/flyzona/5.jpeg",
      "images/projects/flyzona/6.jpeg"
    ],
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    category: "fullstack",
    featured: true,
    links: {
      demo: "#",
      repo: "#",
      caseStudy: true
    },
    caseStudy: {
      summary: {
        problem:
          "Traditional zoo websites lack interactive features for visitors and efficient tools for administrators. Flyzona bridges this gap by offering a dynamic platform with role-based access, member-exclusive content, and streamlined admin management.",
        techStack: [
          { name: "HTML5", icon: "mdi:language-html5", color: "#E34F26" },
          { name: "CSS3", icon: "mdi:language-css3", color: "#1572B6" },
          { name: "JavaScript", key: "JavaScript" },
          { name: "PHP", key: "PHP" },
          { name: "MySQL & phpMyAdmin", key: "MySQL" }
        ],
        features: [
          {
            title: "Dual-Role Authentication",
            text: "Secure login with password hashing and session management for Admins and Members."
          },
          {
            title: "Admin Dashboard",
            text: "Full user management (view, edit, delete, password reset, search) with efficient oversight tools."
          },
          {
            title: "Member-Exclusive Content",
            text: "Permission-based access to galleries, special events, and educational activities."
          },
          {
            title: "Dynamic Galleries & Events",
            text: "Database-driven animal and event pages, easily updated by admins without code changes."
          }
        ]
      }
    }
  },
  {
    slug: "pharmacy-inventory-management",
    title: "Pharmacy Inventory & Sales Management System",
    cubeTitle: "Pharmacy System",
    tagline:
      "Track inventory, purchases, and sales in one place—with real-time profit reporting built for modern pharmacies.",
    overview:
      "Pharmacies often face fragmented inventory tracking, mismatched purchase vs. sales records, and inaccurate profit reporting. This system replaces manual processes with dual-role portals, multi-table transactions, and advanced SQL-powered reporting.",
    impact:
      "Unified inventory, purchasing, and sales workflows with real-time profit and performance analytics.",
    description:
      "Full-stack pharmacy platform with pharmacist and customer portals, transaction workflows, and reporting dashboards.",
    role: "Solo Developer",
    thumbnail: "images/projects/pharmacy/1.jpeg",
    gallery: [
      "images/projects/pharmacy/1.jpeg",
      "images/projects/pharmacy/2.jpeg",
      "images/projects/pharmacy/3.jpeg",
      "images/projects/pharmacy/4.jpeg",
      "images/projects/pharmacy/5.jpeg"
    ],
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    category: "fullstack",
    featured: true,
    links: {
      demo: "#",
      repo: "#",
      caseStudy: true
    },
    caseStudy: {
      summary: {
        problem:
          "Pharmacies often face fragmented inventory tracking, mismatched purchase vs. sales records, and inaccurate profit reporting. Manual processes lead to errors and prevent real-time business performance analysis.",
        techStack: [
          { name: "HTML5", icon: "mdi:language-html5", color: "#E34F26" },
          { name: "CSS3", icon: "mdi:language-css3", color: "#1572B6" },
          { name: "JavaScript", key: "JavaScript" },
          { name: "Bootstrap 5.3", key: "Bootstrap" },
          { name: "PHP", key: "PHP" },
          { name: "MySQL & phpMyAdmin", key: "MySQL" }
        ],
        features: [
          {
            title: "Dual-Role Authentication",
            text: "Separate pharmacist and customer portals with role-based dashboards."
          },
          {
            title: "Multi-Table Transactions",
            text: "End-to-end workflows for inventory, purchasing, and sales with automatic profit calculation."
          },
          {
            title: "Advanced Reporting",
            text: "Real-time profit/loss tracking, customer spending analytics, and medicine performance metrics via optimized SQL JOINs."
          }
        ]
      }
    }
  },
  {
    slug: "retail-demand-forecasting",
    title: "Retail Demand Forecasting",
    tagline: "Forecast demand and cut stockouts with time-series dashboards built for real inventory decisions.",
    impact: "Improved inventory planning accuracy and reduced stockout risk using time-series forecasting dashboards.",
    description:
      "Built a full-stack analytics workflow that ingests sales history, applies smoothing models, and visualizes demand trends for faster business decisions.",
    role: "Full-Stack Developer",
    thumbnail: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "FastAPI", "Pandas"],
    category: "fullstack",
    featured: true,
    links: {
      demo: "#",
      repo: "#",
      caseStudy: false
    }
  },
  {
    slug: "sentiment-monitoring-suite",
    title: "Sentiment Monitoring Suite",
    tagline: "Track customer sentiment in near real time and act before issues spike.",
    impact: "Enabled near real-time customer sentiment tracking across message channels for faster support action.",
    description:
      "Integrated NLP classification and dashboard reporting to surface sentiment shifts, issue spikes, and actionable trends in one workflow.",
    role: "ML + Backend Developer",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "NLP", "Flask"],
    category: "aiml",
    featured: true,
    links: {
      demo: "#",
      repo: "#",
      caseStudy: false
    }
  },
  {
    slug: "role-based-admin-platform",
    title: "Role-Based Admin Platform",
    tagline: "Secure admin workflows with JWT auth and role-based access that scales with your team.",
    impact: "Strengthened data access control and reduced manual admin tasks through secure workflow automation.",
    description:
      "Developed an admin panel with JWT auth, role-based permissions, and modular APIs to support scalable operations.",
    role: "Backend + Frontend Developer",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "JWT", "MySQL"],
    category: "backend",
    featured: false,
    links: {
      demo: "#",
      repo: "#",
      caseStudy: false
    }
  },
  {
    slug: "certification-tracker",
    title: "Certification Tracker",
    tagline: "Keep credentials and milestones organized in one searchable, portfolio-ready view.",
    impact: "Centralized credential records and progress milestones for easier portfolio-ready documentation.",
    description:
      "Created a lightweight tracker for webinars and certificates with searchable metadata and status tags.",
    role: "Frontend Developer",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "frontend",
    featured: false,
    links: {
      demo: "#",
      repo: "#",
      caseStudy: false
    }
  },
  {
    slug: "api-performance-auditor",
    title: "API Performance Auditor",
    tagline: "Surface latency, failures, and bottlenecks in one report so you know what to fix first.",
    impact: "Cut endpoint troubleshooting time by exposing latency, failure points, and bottlenecks in a single report view.",
    description:
      "Implemented request diagnostics and summarized API health metrics to guide optimization priorities.",
    role: "Backend Developer",
    thumbnail: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80",
    tags: ["FastAPI", "Docker", "Monitoring"],
    category: "backend",
    featured: false,
    links: {
      demo: "#",
      repo: "#",
      caseStudy: false
    }
  },
  {
    slug: "dashboard-ui-kit",
    title: "Dashboard UI Kit",
    tagline: "Ship dashboards faster with reusable components and consistent data-first layouts.",
    impact: "Accelerated internal dashboard delivery by standardizing reusable components and layout patterns.",
    description:
      "Designed and implemented a component kit focused on consistency, responsive behavior, and data-first UI patterns.",
    role: "UI Engineer",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind", "Design System"],
    category: "frontend",
    featured: false,
    links: {
      demo: "#",
      repo: "#",
      caseStudy: false
    }
  }
];
