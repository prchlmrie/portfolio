// Only technologies with a known Iconify (Simple Icons) logo are listed here.
window.TECH_ICONS = {
  Python: { icon: 'simple-icons:python', color: '#3776AB' },
  JavaScript: { icon: 'simple-icons:javascript', color: '#F7DF1E' },
  TypeScript: { icon: 'simple-icons:typescript', color: '#3178C6' },
  Dart: { icon: 'simple-icons:dart', color: '#0175C2' },
  Kotlin: { icon: 'simple-icons:kotlin', color: '#7F52FF' },
  PHP: { icon: 'simple-icons:php', color: '#777BB4' },
  'Bash/Shell': { icon: 'simple-icons:gnubash', color: '#4EAA25' },

  React: { icon: 'simple-icons:react', color: '#61DAFB' },
  'React Native': { icon: 'simple-icons:react', color: '#61DAFB' },
  Flutter: { icon: 'simple-icons:flutter', color: '#02569B' },
  Expo: { icon: 'simple-icons:expo', color: '#000020' },
  Vite: { icon: 'simple-icons:vite', color: '#646CFF' },
  CRA: { icon: 'simple-icons:react', color: '#61DAFB' },
  Bootstrap: { icon: 'simple-icons:bootstrap', color: '#7952B3' },
  'D3.js': { icon: 'simple-icons:d3', color: '#F9A03C' },
  'Material Design': { icon: 'simple-icons:materialdesign', color: '#757575' },
  'Next.js': { icon: 'simple-icons:nextdotjs', color: '#000000' },
  Tailwind: { icon: 'simple-icons:tailwindcss', color: '#06B6D4' },

  Flask: { icon: 'simple-icons:flask', color: '#000000' },
  FastAPI: { icon: 'simple-icons:fastapi', color: '#009688' },
  Laravel: { icon: 'simple-icons:laravel', color: '#FF2D20' },

  pandas: { icon: 'simple-icons:pandas', color: '#150458' },
  NumPy: { icon: 'simple-icons:numpy', color: '#013243' },
  'scikit-learn': { icon: 'simple-icons:scikitlearn', color: '#F7931E' },
  matplotlib: { icon: 'simple-icons:matplotlib', color: '#11557C' },
  LangChain: { icon: 'simple-icons:langchain', color: '#1C3C3C' },

  Axios: { icon: 'simple-icons:axios', color: '#5A29E4' },

  SQLite: { icon: 'simple-icons:sqlite', color: '#003B57' },
  MySQL: { icon: 'simple-icons:mysql', color: '#4479A1' },
  MongoDB: { icon: 'simple-icons:mongodb', color: '#47A248' },

  TMDB: { icon: 'simple-icons:themoviedatabase', color: '#01B4E0' },
  OpenAI: { icon: 'simple-icons:openai', color: '#412991' },
  NVIDIA: { icon: 'simple-icons:nvidia', color: '#76B900' },
  Firebase: { icon: 'simple-icons:firebase', color: '#DD2C00' },
  Gemini: { icon: 'simple-icons:googlegemini', color: '#8E75B2' },
  Supabase: { icon: 'simple-icons:supabase', color: '#3FCF8E' },

  Jest: { icon: 'simple-icons:jest', color: '#C21325' },
  'React Testing Library': { icon: 'simple-icons:testinglibrary', color: '#E33332' },

  Docker: { icon: 'simple-icons:docker', color: '#2496ED' },
  'Docker Compose': { icon: 'simple-icons:docker', color: '#2496ED' },

  Webpack: { icon: 'simple-icons:webpack', color: '#8DD6F9' },
  npm: { icon: 'simple-icons:npm', color: '#CB3837' },
  pip: { icon: 'simple-icons:pypi', color: '#3775A9' },

  Phosphor: { icon: 'simple-icons:phosphoricons', color: '#FDE047' },
};

// Categories and technologies shown on index.html (README summary table).
window.SITE_TECH_STACK = [
  {
    category: 'Languages',
    technologies: ['Python', 'JavaScript', 'TypeScript', 'Dart', 'Kotlin', 'PHP', 'Bash/Shell'],
  },
  {
    category: 'Frontend Frameworks',
    technologies: [
      'React',
      'React Native',
      'Flutter',
      'Expo',
      'Bootstrap',
      'D3.js',
      'Next.js',
      'Tailwind',
    ],
  },
  {
    category: 'Backend Frameworks',
    technologies: ['Flask', 'FastAPI', 'PHP', 'Laravel'],
  },
  {
    category: 'Data Science',
    technologies: ['pandas', 'NumPy', 'scikit-learn', 'matplotlib', 'LangChain'],
  },
  {
    category: 'Databases',
    technologies: ['SQLite', 'MySQL', 'MongoDB'],
  },
  {
    category: 'External APIs',
    technologies: ['TMDB', 'OpenAI', 'NVIDIA', 'Firebase', 'Gemini'],
  },
  {
    category: 'DevOps',
    technologies: ['Docker', 'Docker Compose'],
  },
  {
    category: 'Build Tools',
    technologies: ['Vite', 'npm', 'pip'],
  },
];

// Full inventory (README detailed sections + hidden technologies).
window.TECH_STACK = [
  {
    category: 'Languages',
    technologies: ['Python', 'JavaScript', 'TypeScript', 'Dart', 'Kotlin', 'PHP', 'Bash/Shell', 'SQL', 'JSON', 'YAML'],
  },
  {
    category: 'Frontend Frameworks',
    technologies: [
      'React',
      'React Native',
      'Flutter',
      'Expo',
      'Vite',
      'CRA',
      'Bootstrap',
      'D3.js',
      'Material Design',
      'Next.js',
      'Tailwind',
      'Recharts',
      'Tkinter',
    ],
  },
  {
    category: 'Backend Frameworks',
    technologies: ['Flask', 'FastAPI', 'PHP', 'Laravel'],
  },
  {
    category: 'Data Science',
    technologies: [
      'pandas',
      'NumPy',
      'scikit-learn',
      'matplotlib',
      'LangChain',
      'NLTK',
      'VADER',
      'wordcloud',
      'SQLAlchemy',
      'SES',
      'Random Forest',
      'Holt-Winters',
      'ChromaDB',
    ],
  },
  {
    category: 'API/HTTP',
    technologies: ['Axios', 'fetch', 'requests', 'httpx', 'urllib', 'REST'],
  },
  {
    category: 'Authentication',
    technologies: ['PyJWT', 'passlib', 'werkzeug.security', 'HTTPBearer'],
  },
  {
    category: 'Databases',
    technologies: ['SQLite', 'MySQL', 'MongoDB'],
  },
  {
    category: 'External APIs',
    technologies: ['TMDB', 'OpenAI', 'NVIDIA', 'Firebase', 'Supabase', 'SerpAPI', 'OpenRouter'],
  },
  {
    category: 'Testing',
    technologies: ['pytest', 'TestClient', 'Jest', 'React Testing Library'],
  },
  {
    category: 'DevOps',
    technologies: ['Docker', 'Docker Compose'],
  },
  {
    category: 'Build Tools',
    technologies: ['Webpack', 'Vite', 'npm', 'pip'],
  },
  {
    category: 'UI Components',
    technologies: ['Bootstrap', 'Phosphor', 'Material Design', 'Recharts', 'Flutter SVG', 'Vector Icons', 'Expo Symbols'],
  },
  {
    category: 'Mobile',
    technologies: ['Flutter', 'Expo', 'React Native'],
  },
  {
    category: 'File Handling',
    technologies: ['pdf.js', 'reportlab', 'Syncfusion PDF', 'file_picker', 'expo-document-picker'],
  },
];
