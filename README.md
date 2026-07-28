# Studio.io — Content Creator Dashboard

[![Live Demo](https://img.shields.io/badge/Live_Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://studio-creator-dashboard.netlify.app/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

A modern, responsive single-page web application engineered for content creators to centralize, track, and manage video and post ideas seamlessly across social media platforms.

🔗 **Live Application Demo:** [https://studio-creator-dashboard.netlify.app/](https://studio-creator-dashboard.netlify.app/)

---

## 🌟 Key Features

- **Multi-Platform Content Organization:** Streamline content planning across Instagram, YouTube, LinkedIn, and custom platforms with visual identity tags and status badges (Brainstorming, Scripting, Ready).
- **Real-Time Multi-Filter Pipeline:** Dynamically filter project cards through a combined search engine (title and script text), platform category filters, and date-based sorting (Newest vs. Oldest).
- **Persistent Local Data:** Uses browser `localStorage` integration to preserve idea entries, script revisions, and custom metadata across browser sessions.
- **Dedicated Scripting Utility:** Features dedicated script content areas equipped with a one-click copy utility for rapid content deployment.
- **External Reference Link Handling:** Automatically formats external links (ensuring `https://` protocol handling) and applies security attributes (`target="_blank"` with `rel="noopener noreferrer"`).
- **Smart Empty States:** Fallback UI state with a dedicated **Clear Applied Filters** action to reset active searches instantly.
- **Fully Responsive & Cross-Device Optimized:** Designed from the ground up to render crisply across mobile devices, tablets, laptops, and desktop screens using modern responsive CSS practices.

---

## 🛠️ Tech Stack & Standards

- **Frontend Core:** React.js (Hooks, Functional Components, State Lifting)
- **Styling:** Custom CSS3 (Flexbox, CSS Grid, CSS Variables, CSS Logical Properties)
- **Build Tooling:** Vite
- **Deployment:** Netlify CI/CD Pipeline

---

## 💡 Technical Highlights & Architecture

- **CSS Logical Properties:** Built using modern CSS standards (`inline-size`, `block-size`, `padding-block`, `margin-block`) to support internationalization and robust layout flow.
- **Derived State Engine:** Operates on single-source-of-truth state architecture, deriving filtered and sorted data pipelines without triggering unnecessary component re-renders.
- **Defensive URL Formatting:** Auto-detects missing protocols on user-added reference URLs to guarantee reliable external tab navigation.

---

## 🚀 Local Development Setup

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/shreya/studio-io.git](https://github.com/shreya/studio-io.git)
   ```


2. **Navigate into the directory:**

```bash
cd studio-io

```

3. **Install dependencies:**

```bash
npm install

```

4. **Launch the Vite development server:**

```bash
npm run dev

```

5. Open your browser and navigate to `http://localhost:5173`.

---

## 📜 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

```

```
````
