# Fareed Akram — Portfolio

A professional, lightweight, and responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Designed for high performance, accessibility, and ease of deployment on GitHub Pages.

## ✨ Features

- **Interactive Theme Toggle**: Custom-built Sun/Moon animation for Light/Dark mode switching with local storage persistence.
- **Matrix Background Effect**: Canvas-based Matrix rain animation that adapts to the theme.
- **Responsive Design**: Fully responsive layout using CSS Grid and Flexbox, optimized for mobile, tablet, and desktop.
- **Performance Optimized**: No build steps, minimal dependencies, and optimized asset loading.
- **Security Focused**: Implements Content Security Policy (CSP) for enhanced security.
- **Dynamic Interactions**:
  - Typing effect for hero section.
  - Fade-up animations on scroll.
  - Interactive skill bars.
  - Contact form validation.

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Custom Properties, Flexbox, Grid), Vanilla JavaScript (ES6+).
- **Icons**: SVG Icons (Feather Icons style).
- **Fonts**: Google Fonts (Inter, Poppins).
- **Deployment**: GitHub Pages (Static Hosting).

## 🚀 Quick Start

No build tools or package managers required. You can run the project directly.

### Local Development

To preview the site locally, you can use Python's built-in HTTP server or any other static file server.

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/portfolio-website.git
    cd portfolio-website
    ```

2.  Start a local server:
    ```bash
    # Python 3
    python3 -m http.server 8080
    ```

3.  Open your browser and navigate to `http://localhost:8080`.

## 📂 Project Structure

```
/
├── index.html              # Home page
├── experience.html         # Experience timeline
├── skills.html             # Technical skills
├── projects.html           # Project showcase
├── security-research.html  # Security research publications
├── blog.html               # Blog posts
├── contact.html            # Contact form and info
├── styles.css              # Global styles and themes
├── script.js               # Core logic (theme, animations, validation)
└── assets/                 # Images and static assets
    ├── avatar.jpg
    └── favicon.png
```

## 🎨 Customization

1.  **Personal Info**: Update the HTML files with your own content (text, links, and projects).
2.  **Avatar**: Replace `assets/avatar.jpg` with your own profile picture.
3.  **Colors**: Modify the CSS variables in `styles.css` (under `:root` and `body.dark`) to change the color scheme.
4.  **Favicon**: Replace `assets/favicon.png` with your own icon.

## 📄 License

This project is open source and available for personal and educational use.
