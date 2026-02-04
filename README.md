# Santiago Guzman - Data Portfolio Website

A modern, responsive portfolio website showcasing data analysis, business intelligence, and data engineering projects. Built with vanilla HTML, CSS, and JavaScript - no frameworks required.

## 🚀 Quick Start

1. **Clone or download this repository**
2. **Open `index.html` in your browser** - That's it! No build step required.

## 📁 Project Structure

```
sanguzare.github.io/
├── index.html          # Main HTML file
├── styles.css          # All styles and design system
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/
    └── resume.pdf      # Your resume (replace with your actual PDF)
```

## ✏️ Customization Guide

### 1. Update Personal Information

**In `index.html`:**
- Update the hero section with your name and role
- Modify the "About Me" section (`#about`)
- Update contact information in the contact section (`#contact`)
- Replace social media links (LinkedIn, GitHub)

### 2. Add/Edit Projects

**In `script.js`, find the `projectsData` array** (around line 5):

```javascript
const projectsData = [
    {
        id: 1,
        title: "Your Project Title",
        category: "bi", // Options: "bi", "analytics", "engineering", "cloud", "other"
        tags: ["Tag1", "Tag2"],
        stack: "Technology Stack",
        description: "One-line description",
        problem: "What problem did you solve?",
        approach: "How did you approach it?",
        tools: "Tools and technologies used",
        results: "Measurable results",
        links: {
            demo: "https://your-demo-link.com", // or null
            github: "https://github.com/your-repo" // or null
        }
    },
    // Add more projects...
];
```

**To add a new project:**
1. Copy an existing project object
2. Update all fields with your project information
3. Choose the appropriate category
4. Save the file - projects will automatically render!

### 3. Update Impact Metrics

**In `index.html`, find the Impact Snapshot section** (`#impact`):

```html
<div class="impact-card">
    <div class="impact-icon">⏱️</div>
    <div class="impact-value">15+</div>
    <div class="impact-label">Hours Saved Monthly</div>
    <div class="impact-desc">Your description</div>
</div>
```

Add or modify impact cards to showcase your achievements.

### 4. Update Skills

**In `index.html`, find the Skills section** (`#skills`):

Modify the skill categories and tags to match your expertise:
- Languages
- Data & Analytics
- Business Intelligence
- Cloud & Tools

### 5. Update Experience & Education

**In `index.html`, find the Experience section** (`#experience`):

Update timeline items with your work experience and education. Each item follows this structure:

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <div class="timeline-header">
            <h3 class="timeline-title">Your Role</h3>
            <span class="timeline-company">Company Name</span>
            <span class="timeline-date">Start Date – End Date</span>
        </div>
        <div class="timeline-location">Location</div>
        <ul class="timeline-bullets">
            <li>Your achievement bullet point</li>
        </ul>
    </div>
</div>
```

### 6. Replace Resume PDF

1. Place your resume PDF in the `assets/` folder
2. Name it `resume.pdf` (or update the links in `index.html`)

### 7. Customize Colors & Theme

**In `styles.css`, find the CSS variables** (around line 5):

```css
:root {
    --accent: #6366f1; /* Your primary brand color */
    --bg-primary: #0a0e27; /* Dark mode background */
    /* ... more variables */
}
```

Modify these variables to match your brand colors. The site supports both dark and light themes automatically.

## 🎨 Design Features

- **Dark Mode by Default** with light mode toggle
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Animated Hero Background** - Data-flow particle animation (respects `prefers-reduced-motion`)
- **Smooth Scrolling** - Navigation with smooth scroll behavior
- **Project Filtering** - Filter projects by category and search
- **Accessible** - ARIA labels, keyboard navigation, focus management

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted grid)
- **Mobile**: < 768px (single column, mobile menu)

## 🌐 Deploy to GitHub Pages

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select source branch (usually `main`)
   - Select folder (`/root`)
   - Click "Save"

3. **Your site will be live at:**
   `https://[your-username].github.io/[repository-name]/`

## 🔧 Customization Checklist

- [ ] Update name and role in hero section
- [ ] Replace projects in `script.js` with your own
- [ ] Update impact metrics
- [ ] Modify skills section
- [ ] Update experience timeline
- [ ] Edit "About Me" section
- [ ] Update contact information
- [ ] Replace resume PDF
- [ ] Update social media links
- [ ] Customize colors (optional)
- [ ] Test on mobile devices
- [ ] Deploy to GitHub Pages

## 📝 Notes

- **No Build Step Required** - Pure HTML/CSS/JS
- **No Dependencies** - Everything is vanilla
- **SEO Optimized** - Meta tags and semantic HTML included
- **Analytics Ready** - Commented hook in `script.js` for Google Analytics
- **Accessible** - WCAG guidelines followed

## 🐛 Troubleshooting

**Projects not showing?**
- Check browser console for JavaScript errors
- Ensure `projectsData` array in `script.js` is valid JSON
- Verify project cards are rendering in the DOM

**Theme toggle not working?**
- Check browser localStorage permissions
- Ensure JavaScript is enabled

**Mobile menu not opening?**
- Check that `nav-toggle` button exists
- Verify CSS classes are applied correctly

## 📄 License

This portfolio template is free to use and modify for personal or commercial projects.

## 🙏 Credits

Built with:
- [Inter Font](https://rsms.me/inter/) - Typography
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) - Code font
- Pure CSS animations and transitions
- Canvas API for hero animation

---

**Need help?** Feel free to open an issue or reach out!
