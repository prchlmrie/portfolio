/**
 * Featured Projects template — swap copy, images, and techStack when wiring real projects.
 */
window.FEATURED_PROJECTS = [
  {
    slug: "trendpulse",
    label: "Featured Project",
    title: "TrendPulse",
    description:
      "It is an AI platform that helps small vendors spot rising market opportunities before they peak. It analyzes online signals with machine learning to give product recommendations, profit scores, and personalized insights.",
    layout: "image-right",
    media: {
      alt: "TrendPulse AI vendor insights platform screenshots",
      gallery: [
        "images/projects/trendpulse/1.jpeg",
        "images/projects/trendpulse/2.jpeg",
        "images/projects/trendpulse/3.jpeg"
      ],
      interval: 4500
    },
    techStack: [
      { name: "FastAPI", key: "FastAPI" },
      {
        name: "SQLAlchemy + SQLite",
        icon: "simple-icons:sqlite",
        color: "#003B57"
      },
      { name: "ChromaDB", icon: "simple-icons:chromadb", color: "#FF6F61" },
      { name: "OpenAI API", key: "OpenAI" },
      { name: "React 19", key: "React" },
      { name: "Vite", key: "Vite" },
      { name: "Tailwind CSS", key: "Tailwind" },
      {
        name: "React Router",
        icon: "simple-icons:reactrouter",
        color: "#CA4245"
      },
      { name: "Docker", key: "Docker" },
      { name: "Python", key: "Python" },
      { name: "TypeScript", key: "TypeScript" },
      {
        name: "Uvicorn",
        icon: "simple-icons:uvicorn",
        color: "#416682"
      }
    ],
    links: {
      demo: "https://trendpulse-web.onrender.com/",
      repo: "https://github.com/prchlmrie/trend-pulse"
    }
  },
  {
    slug: "pirates-way-finder",
    label: "Featured Project",
    title: "Pirates Way Finder",
    description:
      "A multi-floor routing app that compares Dijkstra's and A* algorithms. It features real-time visualization, accessibility-aware pathfinding (wheelchair routes, stair avoidance), and dynamic cost adjustments for optimal navigation.",
    layout: "image-left",
    media: {
      src: "images/projects/pirateswayfinder/animation.gif",
      alt: "Pirates Way Finder map routing and pathfinding visualization"
    },
    techStack: [
      { name: "FastAPI", key: "FastAPI" },
      { name: "MongoDB", key: "MongoDB" },
      {
        name: "Dijkstra & A*",
        icon: "mdi:graph-outline",
        color: "#7C3AED"
      },
      { name: "React Native", key: "React Native" },
      { name: "Expo", key: "Expo" },
      { name: "Leaflet", icon: "simple-icons:leaflet", color: "#199900" },
      {
        name: "React Navigation",
        icon: "mdi:navigation-variant",
        color: "#0EA5E9"
      }
    ],
    links: {
      repo: "https://github.com/prchlmrie/pirates-way-finder"
    }
  },
  {
    slug: "etherflow",
    label: "Featured Project",
    title: "EtherFlow",
    description:
      "Ether Flow is a real-time cryptocurrency volume anomaly detector that combines powerful analytics with sleek visualization. It uses D3.js to render candlestick charts and delivers data through a Bloomberg-style terminal UI for professionals who need to spot market irregularities at a glance.",
    layout: "image-right",
    media: {
      src: "images/projects/etherflow/animation.gif",
      alt: "EtherFlow candlestick charts and terminal UI animation"
    },
    techStack: [
      { name: "JavaScript", key: "JavaScript" },
      { name: "D3.js", key: "D3.js" },
      { name: "CSS", icon: "mdi:language-css3", color: "#264DE4" },
      { name: "PHP", key: "PHP" },
      { name: "Hack", icon: "simple-icons:hack", color: "#878787" }
    ],
    links: {
      demo: "https://ether-flow-beta.vercel.app",
      repo: "https://github.com/prchlmrie/ether-flow"
    }
  }
];
