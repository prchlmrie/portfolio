# Cheilou Marie Puro — Portfolio

Personal portfolio showcasing full-stack web development, AI/ML integration, and selected projects.

## Technical Stack

Technologies currently listed on the portfolio site (grouped by category). Only tools with recognizable brand logos are shown in the UI.

| Category | Count | Technologies |
|----------|------:|--------------|
| **Languages** | 7 | Python, JavaScript, TypeScript, Dart, Kotlin, PHP |
| **Frontend Frameworks** | 11 | React, React Native, Flutter, Expo, Bootstrap, D3.js, Next.js, Tailwind, Stitch |
| **Backend Frameworks** | 4 | Flask, FastAPI, PHP, Laravel |
| **Data Science** | 5 | pandas, NumPy, scikit-learn, matplotlib, LangChain |
| **Databases** | 3 | SQLite, MySQL, MongoDB |
| **External APIs** | 5 | TMDB, OpenAI, NVIDIA, Firebase, Gemini|
| **DevOps** | 2 | Docker, Docker Compose |
| **Build Tools** | 4 | Vite, npm, pip |


### Languages (7)

Python, JavaScript, TypeScript, Dart, Kotlin, PHP, Bash/Shell

### Frontend Frameworks (11)

React, React Native, Flutter, Expo, Vite, CRA, Bootstrap, D3.js, Material Design, Next.js, Tailwind

### Backend Frameworks (4)

Flask, FastAPI, PHP, Laravel

### Data Science (5)

pandas, NumPy, scikit-learn, matplotlib, LangChain

### API/HTTP (1)

Axios

### Databases (3)

SQLite, MySQL, MongoDB

### External APIs (5)

TMDB, OpenAI, NVIDIA, Firebase, Supabase

### Testing (2)

Jest, React Testing Library

### DevOps (2)

Docker, Docker Compose

### Build Tools (4)

Webpack, Vite, npm, pip

### UI Components (3)

Bootstrap, Phosphor, Material Design

### Mobile (3)

Flutter, Expo, React Native

---

## Full technology inventory

The portfolio data file (`js/tech-stack-data.js`) also tracks additional tools that are not shown on the site because they do not have a matching logo in the icon set:

| Category | Additional technologies (not shown on site) |
|----------|---------------------------------------------|
| Languages | SQL, JSON, YAML |
| Frontend Frameworks | Recharts, Tkinter |
| Data Science | NLTK, VADER, wordcloud, SQLAlchemy, SES, Random Forest, Holt-Winters, ChromaDB |
| API/HTTP | fetch, requests, httpx, urllib, REST |
| Authentication | PyJWT, passlib, werkzeug.security, HTTPBearer |
| Databases | ChromaDB |
| External APIs | SerpAPI, OpenRouter |
| Testing | pytest, TestClient |
| UI Components | Recharts, Flutter SVG, Vector Icons, Expo Symbols |
| File Handling | pdf.js, reportlab, Syncfusion PDF, file_picker, expo-document-picker |

---

## Project structure

| Path | Description |
|------|-------------|
| `index.html` | Main portfolio page (single-page site) |
| `projects.html` | Full projects listing |
| `css/theme.css` | Shared styles |
| `js/theme.js` | Tailwind theme config |
| `js/projects-data.js` | Project metadata and case study content |
| `js/featured-projects-data.js` | Featured Projects section data |
| `js/projects-ui.js` | Project cards rendering and case study modal |
| `js/tech-stack-data.js` | Technical stack categories and icon map |
| `images/` | Profile photos, certificates, and project screenshots |
| `pages/about.html` | Legacy standalone About page (older layout) |
| `pages/contact.html` | Legacy standalone Contact page (older layout) |
| `pages/projects-cube.html` | 3D project cube experiment |

## Local preview

Open `index.html` in a browser, or serve the folder with any static file server:

```bash
npx serve .
```

## GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages** and set the source to the `main` branch (root `/`).
3. Your site will be live at `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/` if the repo is named `<username>.github.io`).

`index.html` stays at the repository root so GitHub Pages serves it as the homepage.
