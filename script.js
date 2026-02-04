// ============================================
// AWARDS & CERTIFICATIONS DATA
// ============================================

const awardsData = [
    {
        id: 1,
        title: "EDC Latin+ Community Leader Scholarship",
        issuer: "Export Development Canada (EDC)",
        year: "2024",
        image: "assets/awards/edc-latin-scholarship.svg",
        description: "Awarded for outstanding leadership and contributions to the Latin+ community in Canada."
    },
    {
        id: 2,
        title: "Schulich Leader Nominee",
        issuer: "Schulich Leader Foundation",
        year: "2024",
        image: "assets/awards/schulich-leader.svg",
        description: "Represents the top entrepreneurial-minded STEM student in their graduating class."
    },
    {
        id: 3,
        title: "Oakville Youth Education Award",
        issuer: "Oakville Community Foundation",
        year: "2024",
        image: "assets/awards/oakville-youth.svg",
        description: "Recognized for involvement, integrity, improvement, and inclusion in school and community activities."
    },
    {
        id: 4,
        title: "Python for Data Science",
        issuer: "IBM",
        year: "2024",
        image: "assets/certs/ibm-python.svg",
        description: "Built proficiency in Python scripting, data cleaning, and exploratory analysis using Pandas, NumPy, and Jupyter notebooks."
    },
    {
        id: 5,
        title: "CS50x",
        issuer: "Harvard University",
        year: "2023",
        image: "assets/certs/harvard-cs50.svg",
        description: "Strengthened computational problem-solving skills and database fundamentals (SQL, Python, C)."
    },
    {
        id: 6,
        title: "PowerBI Beginner",
        issuer: "Dimensional Strategies Inc.",
        year: "2024",
        image: "assets/certs/powerbi-beginner.svg",
        description: "Gained foundational skills in data modeling and cleaning, KPI visualization, DAX, and dashboard development."
    },
    {
        id: 7,
        title: "Mendix Rapid Developer",
        issuer: "Mendix",
        year: "2024",
        image: "assets/certs/mendix-rapid.svg",
        description: "Applied agile methodologies and application lifecycle management (ALM) principles in low-code application development."
    }
];

// ============================================
// PROJECTS DATA
// ============================================

const projectsData = [
    {
        id: 1,
        title: "Automated Power BI Dashboard",
        category: "bi",
        tags: ["Power BI", "DAX", "Automation"],
        stack: "Power BI, DAX, Excel",
        description: "Built an automated Power BI dashboard to visualize and track core business KPIs, saving 15+ hours per month of manual reporting.",
        problem: "Manual reporting processes were consuming significant time and resources, making it difficult to track KPIs in real-time.",
        approach: "Designed and developed a comprehensive Power BI dashboard with automated data refresh capabilities, implementing DAX formulas for complex calculations and creating intuitive visualizations.",
        tools: "Power BI Desktop, DAX, Microsoft Excel, Data Modeling",
        results: "Eliminated 15+ hours of manual reporting monthly, improved decision-making efficiency, and enabled real-time KPI tracking.",
        links: {
            demo: null,
            github: null
        }
    },
    {
        id: 2,
        title: "IT Infrastructure Cost Analysis",
        category: "analytics",
        tags: ["Analytics", "Cost Optimization", "Analysis"],
        stack: "Excel, Data Analysis",
        description: "Evaluated a $40K+ IT infrastructure quote and recommended cost optimizations that reduced projected expenses by 25%.",
        problem: "A significant IT infrastructure investment proposal required thorough analysis to ensure cost-effectiveness and identify optimization opportunities.",
        approach: "Conducted detailed analysis of technical requirements, vendor pricing structures, and alternative solutions. Compared multiple vendors and identified redundant services.",
        tools: "Microsoft Excel, Financial Analysis, Vendor Comparison",
        results: "Reduced projected IT infrastructure costs by 25% ($10K+ savings) while maintaining all required functionality and improving service quality.",
        links: {
            demo: null,
            github: null
        }
    },
    {
        id: 3,
        title: "AI Chatbot Development",
        category: "other",
        tags: ["AI", "Automation", "NLP"],
        stack: "AI Platform, Natural Language Processing",
        description: "Developed and deployed 2 AI chatbots for internal and external use, reducing response times by 98%+.",
        problem: "Manual customer and internal support processes were slow and resource-intensive, leading to delayed responses and reduced efficiency.",
        approach: "Designed conversational flows, integrated AI/NLP capabilities, and deployed chatbots for both internal staff support and external customer inquiries. Trained models on common queries.",
        tools: "AI Platform, Natural Language Processing, Chatbot Framework",
        results: "Achieved 98%+ reduction in response times, improved customer satisfaction, and freed up staff time for higher-value tasks. Presentation to 10+ staff and partners secured internship offer.",
        links: {
            demo: null,
            github: null
        }
    },
    {
        id: 4,
        title: "Salesforce CRM Data Integration",
        category: "engineering",
        tags: ["Salesforce", "Data Integration", "CRM"],
        stack: "Salesforce, Data Import Tools",
        description: "Enhanced CRM data integrity by importing 150+ company contacts and interaction records into Salesforce.",
        problem: "CRM system lacked comprehensive data, making reporting and relationship management difficult for the team.",
        approach: "Cleaned and standardized data from multiple sources, mapped fields correctly, and imported records in batches. Validated data integrity post-import.",
        tools: "Salesforce, Data Import Wizard, Excel, Data Cleaning",
        results: "Imported 150+ company contacts and interaction records, streamlined reporting capabilities, and saved staff 5+ hours per week on data entry.",
        links: {
            demo: null,
            github: null
        }
    },
    {
        id: 5,
        title: "Inventory Management System Analysis",
        category: "analytics",
        tags: ["Analytics", "Inventory", "IBM AS400"],
        stack: "IBM AS400, Data Analysis",
        description: "Streamlined operations by analyzing customer needs and managing inventory in IBM AS400, achieving 30%+ warranty attach rate.",
        problem: "Inventory management and customer service processes needed optimization to improve efficiency and sales performance.",
        approach: "Analyzed customer purchase patterns, optimized inventory levels, and developed processes for warranty attachment. Created reporting dashboards.",
        tools: "IBM AS400, Inventory Management Systems, Data Analysis",
        results: "Achieved 30%+ warranty attach rate, 90%+ customer satisfaction, and significantly reduced wait times through optimized processes.",
        links: {
            demo: null,
            github: null
        }
    }
];

// ============================================
// THEME MANAGEMENT
// ============================================

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme === 'auto' ? (prefersDark ? 'dark' : 'light') : savedTheme;
    
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================

function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;
    
    function updateProgress() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
        progressBar.setAttribute('aria-valuenow', Math.round(scrolled));
    }
    
    // Throttle scroll events
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateProgress();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    
    updateProgress();
}

// ============================================
// GRID OVERLAY EASTER EGG
// ============================================

function initGridOverlay() {
    const logo = document.getElementById('nav-logo');
    const overlay = document.getElementById('grid-overlay');
    
    if (!logo || !overlay) return;
    
    let isActive = false;
    
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        isActive = !isActive;
        overlay.classList.toggle('active', isActive);
    });
}

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
}

// ============================================
// HERO CANVAS ANIMATION (Cursor-Reactive)
// ============================================

function initHeroCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    const particleCount = 50;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        canvas.style.display = 'none';
        return;
    }
    
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Throttled mouse move handler
    let mouseMoveTimeout;
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        targetMouseX = e.clientX - rect.left;
        targetMouseY = e.clientY - rect.top;
        
        clearTimeout(mouseMoveTimeout);
        mouseMoveTimeout = setTimeout(() => {
            mouseX = targetMouseX;
            mouseY = targetMouseY;
        }, 50);
    }, { passive: true });
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            // React to mouse position
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 150;
            
            if (distance < maxDistance && distance > 0) {
                const force = (maxDistance - distance) / maxDistance;
                this.vx += (dx / distance) * force * 0.02;
                this.vy += (dy / distance) * force * 0.02;
            }
            
            // Apply velocity
            this.x += this.vx;
            this.y += this.vy;
            
            // Damping
            this.vx *= 0.98;
            this.vy *= 0.98;
            
            // Boundary check
            if (this.x < 0 || this.x > canvas.width) {
                this.vx *= -1;
                this.x = Math.max(0, Math.min(canvas.width, this.x));
            }
            if (this.y < 0 || this.y > canvas.height) {
                this.vy *= -1;
                this.y = Math.max(0, Math.min(canvas.height, this.y));
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        drawConnections();
        
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Pause animation when tab is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            animate();
        }
    });
}

// ============================================
// AWARDS & CERTIFICATIONS
// ============================================

function renderAwards() {
    const grid = document.getElementById('awards-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    awardsData.forEach(award => {
        const card = document.createElement('div');
        card.className = 'award-card';
        
        const hasImage = award.image && award.image !== '';
        const imageHtml = hasImage 
            ? `<img src="${award.image}" alt="${award.title}" class="award-image" onerror="this.parentElement.querySelector('.award-badge').style.display='flex'; this.style.display='none';">`
            : '';
        
        const badgeHtml = hasImage
            ? `<div class="award-badge" style="display: none;">${award.title.charAt(0)}</div>`
            : `<div class="award-badge">${award.title.charAt(0)}</div>`;
        
        card.innerHTML = `
            ${imageHtml}
            ${badgeHtml}
            <div>
                <h3 class="award-title">${award.title}</h3>
                <p class="award-issuer">${award.issuer}</p>
                <p class="award-year">${award.year}</p>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// ============================================
// PROJECTS
// ============================================

function renderProjects(projects = projectsData) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (projects.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: var(--spacing-xl);">No projects found matching your criteria.</p>';
        return;
    }
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('role', 'listitem');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Project: ${project.title}`);
        
        card.innerHTML = `
            <div class="project-card-header">
                <h3 class="project-card-title">${project.title}</h3>
            </div>
            <div class="project-card-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <p class="project-card-description">${project.description}</p>
            <div class="project-card-stack">${project.stack}</div>
        `;
        
        card.addEventListener('click', () => openProjectModal(project));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProjectModal(project);
            }
        });
        
        grid.appendChild(card);
    });
}

function initProjectFilters() {
    const filterChips = document.querySelectorAll('.filter-chip');
    const searchInput = document.getElementById('project-search');
    let activeFilter = 'all';
    let searchQuery = '';
    
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => {
                c.classList.remove('active');
                c.setAttribute('aria-pressed', 'false');
            });
            chip.classList.add('active');
            chip.setAttribute('aria-pressed', 'true');
            activeFilter = chip.getAttribute('data-filter');
            filterProjects();
        });
    });
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            filterProjects();
        });
    }
    
    function filterProjects() {
        const filtered = projectsData.filter(project => {
            const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
            const matchesSearch = project.title.toLowerCase().includes(searchQuery) ||
                                 project.description.toLowerCase().includes(searchQuery) ||
                                 project.tags.some(tag => tag.toLowerCase().includes(searchQuery)) ||
                                 project.stack.toLowerCase().includes(searchQuery);
            return matchesFilter && matchesSearch;
        });
        
        renderProjects(filtered);
    }
}

// ============================================
// PROJECT MODAL
// ============================================

function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <h2 class="modal-title" id="modal-title">${project.title}</h2>
        <div class="modal-meta">
            ${project.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
        </div>
        <div class="modal-section">
            <h3>Problem</h3>
            <p>${project.problem}</p>
        </div>
        <div class="modal-section">
            <h3>Approach</h3>
            <p>${project.approach}</p>
        </div>
        <div class="modal-section">
            <h3>Tools & Technologies</h3>
            <p>${project.tools}</p>
        </div>
        <div class="modal-section">
            <h3>Results</h3>
            <p>${project.results}</p>
        </div>
        ${project.links.demo || project.links.github ? `
        <div class="modal-links">
            ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View Demo</a>` : ''}
            ${project.links.github ? `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">View Code</a>` : ''}
        </div>
        ` : ''}
    `;
    
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus management
    const firstFocusable = modal.querySelector('button, a, input, textarea, select');
    if (firstFocusable) firstFocusable.focus();
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function initProjectModal() {
    const modal = document.getElementById('project-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProjectModal);
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
            closeProjectModal();
        }
    });
    
    // Trap focus within modal
    modal.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;
        
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    });
}

// ============================================
// COPY TO CLIPBOARD
// ============================================

function initCopyToClipboard() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const textToCopy = button.getAttribute('data-copy');
            if (!textToCopy) return;
            
            try {
                await navigator.clipboard.writeText(textToCopy);
                
                // Visual feedback
                const originalHTML = button.innerHTML;
                button.classList.add('copied');
                button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                
                setTimeout(() => {
                    button.classList.remove('copied');
                    button.innerHTML = originalHTML;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                textArea.style.position = 'fixed';
                textArea.style.opacity = '0';
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    button.classList.add('copied');
                    setTimeout(() => button.classList.remove('copied'), 2000);
                } catch (fallbackErr) {
                    console.error('Fallback copy failed:', fallbackErr);
                }
                document.body.removeChild(textArea);
            }
        });
    });
}

// ============================================
// HEADSHOT IMAGE FALLBACK
// ============================================

function initHeadshotFallback() {
    const headshotImg = document.getElementById('headshot-img');
    if (!headshotImg) return;
    
    headshotImg.addEventListener('error', function() {
        // Create a placeholder SVG if image fails to load
        const placeholder = `
            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="100" fill="var(--bg-tertiary)"/>
                <circle cx="100" cy="80" r="30" fill="var(--text-tertiary)"/>
                <path d="M 50 160 Q 50 130 100 130 Q 150 130 150 160" fill="var(--text-tertiary)"/>
                <text x="100" y="110" text-anchor="middle" fill="var(--accent)" font-size="60" font-weight="bold" font-family="var(--font-primary)">SG</text>
            </svg>
        `;
        this.outerHTML = placeholder;
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initScrollProgress();
    initGridOverlay();
    initNavigation();
    initHeroCanvas();
    renderAwards();
    renderProjects();
    initProjectFilters();
    initProjectModal();
    initCopyToClipboard();
    initHeadshotFallback();
    
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Analytics hook (commented out - ready for integration)
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'page_view', {
    //         page_path: window.location.pathname
    //     });
    // }
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export data for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectsData, awardsData };
}
