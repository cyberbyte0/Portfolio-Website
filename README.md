# Fareed Akram — Portfolio

A professional, high-performance portfolio website built with vanilla HTML5, CSS3, and ES6+ JavaScript. Specialized in showcasing expertise in **API Security**, **Android Application Analysis**, and **ADB-based Automation**.

## ✨ Key Features

- **Interactive Theme Engine**: Custom-built sun/moon animation with a bouncy spring physics transition and local storage persistence.
- **Dynamic Matrix Background**: Optimized Canvas-based Matrix rain animation that adapts dynamically to light/dark themes.
- **Micro-interactions**: Glassmorphism effects, modern hover "glow" states, and smooth lift transitions for all project cards.
- **Project Filtering**: Functional JS-based categorization (Security, Automation, Academic) for streamlined navigation.
- **Custom Error Handling**: Theme-integrated `404.html` with Matrix background and a dedicated "Return Home" path.
- **Performance Optimized**: Zero external dependencies (excluding fonts/analytics), minimal layout shifts (CLS), and optimized SVG rendering.
- **SEO & Discoverability**: Semantic HTML5 structure, integrated sitemap.xml, and robots.txt for professional search engine indexing.
- **Traffic Insights**: Google Analytics (gtag.js) integration for monitoring engagement and visitor behavior.

## 🛠️ Tech Stack & Philosophy

- **Frontend**: Vanilla HTML5, CSS3 (Custom Properties, Flexbox, Grid), JavaScript (ES6+).
- **Design Strategy**: Desktop-first with full mobile responsive breakpoints.
- **Deployment**: Static hosting via GitHub Pages.

## 🛡️ Security & Performance

- **Content Security Policy (CSP)**: Strict headers implementation to permit only trusted resources (Self, Google Fonts, and Google Analytics).
- **Asset Optimization**: Lazy loading for images and preconnect hints for Google Fonts.
- **Operational Excellence**: Clean code structure with 2026 copyright normalization across the entire domain.

## 🧩 Technical Challenges & Solutions

### 1. The "Bouncy" Theme Transition
Implementing the bouncy theme toggle required a custom `cubic-bezier` timing function to simulate spring physics without external animation libraries. The challenge was ensuring the icons didn't "flicker" during the rapid state change, which was solved through synchronized CSS transforms and opacity transitions.

### 2. Canvas Performance
To prevent the Matrix background from impacting scroll performance, I implemented a visibility listener that pauses the animation loop when the tab is inactive, significantly reducing CPU/GPU overhead.

### 3. Secure Content Expansion (Android Pivot)
A major challenge was restructuring the portfolio's story to highlight high-value technical skills like **Android Static & Dynamic Analysis**. This required not just text updates, but a full redesign of the Job Descriptions, Achievement stats, and the Project Showcase to reflect expertise in ADB-based automation and vulnerability research using tools like JADX and Frida.

### 4. Custom Error Orchestration
Implementing the custom `404.html` required ensuring it retained the site's unique "Matrix" identity while providing a clear recovery path for the user. I synchronized the script.js and styles.css dependencies to ensure the canvas animation remains fluid even on error pages.

## 🚀 Local Development

No build tools required.
1. Clone the repo.
2. Run a local server: `python3 -m http.server 8080`.
3. Open `localhost:8080`.

## 📄 License

Open source and available for personal use.
