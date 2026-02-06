document.addEventListener("DOMContentLoaded", () => {
  /* Typing Effect with Improved Performance */
  const typingEl = document.getElementById("typing");
  if (typingEl) {
    const phrases = [
      "Security Analyst • API Pentester • Android Security",
      "API Security, ADB Automation, Android Reverse Engineering",
      "Building tools, ADB scripts & scalable test cases"
    ];

    let i = 0, j = 0, forward = true;
    const speed = 40;
    let typingTimeout;

    const loop = () => {
      const text = phrases[i];
      if (forward) {
        j++;
        typingEl.textContent = text.slice(0, j);
        if (j === text.length) {
          forward = false;
          typingTimeout = setTimeout(loop, 900);
          return;
        }
      } else {
        j--;
        typingEl.textContent = text.slice(0, j);
        if (j === 0) {
          forward = true;
          i = (i + 1) % phrases.length;
        }
      }
      typingTimeout = setTimeout(loop, speed);
    };

    loop();

    // Clean up on page change
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        clearTimeout(typingTimeout);
      } else {
        if (!typingTimeout) loop();
      }
    });
  }

  /* Enhanced Theme Toggle with Smooth Transitions */
  const themeBtns = document.querySelectorAll('[id^="themeToggle"]');
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  const applyTheme = (mode) => {
    document.body.classList.toggle("dark", mode === "dark");
    document.documentElement.setAttribute("data-theme", mode);
  };

  // Get saved theme or use system preference
  let savedTheme = localStorage.getItem("site-theme");
  if (!savedTheme) {
    savedTheme = prefersDarkScheme.matches ? "dark" : "light";
  }

  applyTheme(savedTheme);

  // Update theme when button is clicked
  themeBtns.forEach(btn => {
    btn.setAttribute('aria-pressed', savedTheme === 'dark');
    btn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark");
      const newTheme = isDark ? "dark" : "light";
      localStorage.setItem("site-theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      themeBtns.forEach(b => b.setAttribute('aria-pressed', isDark));
    });
  });

  // Listen for system preference changes
  prefersDarkScheme.addEventListener("change", (e) => {
    if (!localStorage.getItem("site-theme")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });

  /* Improved Fade-up Animation on Scroll */
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        // Optional: Stop observing after animation
        // fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll(".fade-up").forEach(el => fadeObserver.observe(el));

  /* Enhanced Nav Highlighting */
  const updateActiveNav = () => {
    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach(link => {
      const isActive = link.getAttribute("href") === current;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  updateActiveNav();

  /* Matrix Background Effect */
  const matrixCanvas = document.getElementById('matrix-bg');
  if (matrixCanvas) {
    const ctx = matrixCanvas.getContext('2d');
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;

    // Characters to display
    const chars = "&9N2#B5r|A7h0zL$%3I+~xF|Q@pV^g7d6Kj]cJ!i8~YmT^0aR1oP[WzDk`4fC|_s}u";
    const fontSize = 14;
    const columns = matrixCanvas.width / fontSize;

    // Array to track the y position of each column
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100); // Start above the canvas
    }

    // Drawing function
    function drawMatrix() {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = document.body.classList.contains('dark')
        ? 'rgba(7, 16, 37, 0.05)'
        : 'rgba(248, 250, 252, 0.05)';
      ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

      // Set text color
      ctx.fillStyle = document.body.classList.contains('dark')
        ? '#68fc12'
        : '#0861fc';
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars.charAt(Math.floor(Math.random() * chars.length));

        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Move the drop down
        if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    // Animation loop
    let matrixInterval = setInterval(drawMatrix, 50);

    // Handle window resize
    window.addEventListener('resize', () => {
      clearInterval(matrixInterval);
      matrixCanvas.width = window.innerWidth;
      matrixCanvas.height = window.innerHeight;

      // Recalculate columns and drops
      const newColumns = matrixCanvas.width / fontSize;
      for (let i = 0; i < newColumns; i++) {
        if (!drops[i]) drops[i] = Math.floor(Math.random() * -100);
      }

      matrixInterval = setInterval(drawMatrix, 50);
    });

    // Pause animation when tab is not visible to save resources
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        clearInterval(matrixInterval);
      } else {
        matrixInterval = setInterval(drawMatrix, 50);
      }
    });
  }

  /* Skill Bar Animation */
  const initSkillBars = () => {
    document.querySelectorAll('.bar-fill').forEach(bar => {
      const fillPercentage = bar.getAttribute('data-fill') || '0%';
      bar.style.setProperty('--fill-width', fillPercentage);
    });
  };

  initSkillBars();

  /* Form Validation */
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      const subjectInput = this.querySelector('input[name="subject"]');
      const bodyInput = this.querySelector('textarea[name="body"]');

      let isValid = true;

      // Simple validation
      if (subjectInput && !subjectInput.value.trim()) {
        isValid = false;
        highlightError(subjectInput, 'Please enter your name / subject');
      }

      if (bodyInput && !bodyInput.value.trim()) {
        isValid = false;
        highlightError(bodyInput, 'Please enter your message');
      }

      if (!isValid) {
        e.preventDefault();
      }
    });

    function highlightError(element, message) {
      element.classList.add('error');
      const errorMsg = document.createElement('div');
      errorMsg.className = 'error-message';
      errorMsg.textContent = message;

      // Remove existing error message if any
      const existingError = element.parentNode.querySelector('.error-message');
      if (existingError) existingError.remove();

      element.parentNode.appendChild(errorMsg);

      // Remove error styling when user starts typing
      element.addEventListener('input', function () {
        this.classList.remove('error');
        const errorMsg = this.parentNode.querySelector('.error-message');
        if (errorMsg) errorMsg.remove();
      }, { once: true });
    }
  }
});
