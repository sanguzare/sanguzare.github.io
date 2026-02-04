# Santiago Guzman - Data Portfolio Website

A modern, responsive portfolio website showcasing data analysis, business intelligence, and data engineering projects. Built with vanilla HTML, CSS, and JavaScript - no frameworks required.

## 🚀 Quick Start

1. **Clone or download this repository**
2. **Open `index.html` in your browser** - That's it! No build step required.

## 📁 Project Structure

```
sanguzare.github.io/
├── index.html              # Main HTML file
├── styles.css              # All styles and design system
├── script.js               # JavaScript functionality
├── README.md               # This file
└── assets/
    ├── headshot-placeholder.jpg  # Your headshot (replace)
    ├── resume.pdf          # Your resume PDF (replace)
    ├── logos/              # Company logos (SVG/PNG)
    │   ├── uwaterloo.svg
    │   ├── burlington-edt.svg
    │   ├── techplace.svg
    │   └── staples.svg
    ├── icons/              # Technology icons (SVG)
    │   ├── python.svg
    │   ├── sql.svg
    │   ├── powerbi.svg
    │   └── ...
    ├── awards/             # Award images (SVG/PNG)
    │   ├── edc-latin-scholarship.svg
    │   ├── schulich-leader.svg
    │   └── oakville-youth.svg
    └── certs/              # Certification images (SVG/PNG)
        ├── ibm-python.svg
        ├── harvard-cs50.svg
        └── ...
```

## ✏️ Customization Guide

### 1. Replace Your Headshot

**File:** `assets/headshot-placeholder.svg` (currently an SVG placeholder)

**Requirements:**
- **Format:** JPG, PNG, or SVG
- **Dimensions:** 600x600px (square, 1:1 aspect ratio recommended)
- **File Size:** < 200KB (optimize for web)
- **Style:** Professional headshot, well-lit, clear background recommended

**How to replace:**
1. Take or select your professional headshot
2. Resize to 600x600px (use image editor like Photoshop, GIMP, or online tools)
3. Optimize file size (use tools like TinyPNG or ImageOptim)
4. Replace `assets/headshot-placeholder.svg` with your image
   - If using JPG/PNG, rename to `headshot.jpg` or `headshot.png`
   - Update the `src` attribute in `index.html` line ~58 to match your filename
5. The image will automatically display in a circular frame with a border

### 2. Add/Edit Projects

**In `script.js`, find the `projectsData` array** (around line 60):

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

**Note:** Projects are automatically filtered by category and searchable. The modal will display full project details when clicked.

### 3. Update Awards & Certifications

**In `script.js`, find the `awardsData` array** (around line 5):

```javascript
const awardsData = [
    {
        id: 1,
        title: "Award/Certification Name",
        issuer: "Issuing Organization",
        year: "2024",
        image: "assets/awards/award-name.svg", // or "assets/certs/cert-name.svg"
        description: "Brief description"
    },
    // Add more...
];
```

**To add an award/certification:**
1. Add the image file to `assets/awards/` or `assets/certs/`
2. Add a new object to the `awardsData` array
3. Reference the image path correctly

**Image Requirements:**
- **Format:** SVG (preferred) or PNG
- **Dimensions:** 80x80px
- **File Size:** < 50KB
- If image is missing, a badge with the first letter will be displayed automatically

### 4. Add Company Logos

**Location:** `assets/logos/`

**Files needed:**
- `uwaterloo.svg` - University of Waterloo logo
- `burlington-edt.svg` - Burlington Economic Development & Tourism logo
- `techplace.svg` - TechPlace logo
- `staples.svg` - Staples Canada logo

**Requirements:**
- **Format:** SVG (preferred) or PNG
- **Max Dimensions:** 60x60px (will be scaled down)
- **Background:** Transparent or light background recommended
- **Style:** Logo should be clear and recognizable at small size

**How to add:**
1. Download logos from company websites or brand guidelines
2. Resize to max 60x60px
3. Place in `assets/logos/` folder
4. Ensure filename matches what's referenced in `index.html` (check timeline sections)

**CSS automatically handles:**
- Consistent sizing (max 60x60px)
- Aspect ratio preservation (`object-fit: contain`)
- Background container for contrast

### 5. Add Technology Icons

**Location:** `assets/icons/`

**Files needed:**
- `python.svg`, `sql.svg`, `cpp.svg`, `c.svg`
- `pandas.svg`, `numpy.svg`, `jupyter.svg`
- `powerbi.svg`, `salesforce.svg`, `excel.svg`
- `git.svg`, `github.svg`

**Requirements:**
- **Format:** SVG (preferred)
- **Dimensions:** 18x18px
- **Style:** Simple, recognizable icon

**Where to find icons:**
- [Simple Icons](https://simpleicons.org/) - Free SVG icons for brands
- [Devicon](https://devicon.dev/) - Programming language icons
- Official brand guidelines (for logos)

**Note:** Icons are optional - if missing, the skill tag will display without an icon.

### 6. Update Personal Information

**In `index.html`:**

- **Hero section** (line ~58): Update name, role, description
- **About section** (`#about`): Modify your story and values
- **Contact section** (`#contact`): Update email, LinkedIn, GitHub, location
- **Footer**: Update links and copyright year

### 7. Update Experience & Education

**In `index.html`:**

- **Work Experience** (`#experience` section): Update timeline items
- **Education** (`#education` section): Update education details

Each timeline item includes:
- Company/University logo (in `assets/logos/`)
- Role/degree title
- Company/university name
- Date range
- Location
- Bullet points (achievements)

### 8. Replace Resume PDF

**File:** `assets/resume.pdf`

1. Export your resume as PDF
2. Optimize file size (< 2MB recommended)
3. Replace `assets/resume.pdf`
4. Ensure filename matches links in `index.html`

### 9. Customize Colors & Theme

**In `styles.css`, find CSS variables** (around line 5):

```css
:root {
    --accent: #6366f1; /* Your primary brand color */
    --bg-primary: #0a0e27; /* Dark mode background */
    /* ... more variables */
}
```

Modify these variables to match your brand colors. The site supports both dark and light themes automatically.

## 🎨 Design Features

- **Dark Mode by Default** with light mode toggle (persists via localStorage)
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Animated Hero Background** - Data-flow particle animation that reacts to cursor movement (respects `prefers-reduced-motion`)
- **Scroll Progress Indicator** - Lightweight progress bar at top of page
- **Grid Overlay Easter Egg** - Click the "SG" logo to toggle a subtle grid overlay
- **Smooth Scrolling** - Navigation with smooth scroll behavior
- **Project Filtering** - Filter projects by category and search
- **Copy-to-Clipboard** - Copy email and LinkedIn URL with one click
- **Accessible** - ARIA labels, keyboard navigation, focus management

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted grid)
- **Mobile**: < 768px (single column, mobile menu)

## 🌐 Deploy to GitHub Pages

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Update portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select source branch (usually `main`)
   - Select folder (`/ (root)`)
   - Click "Save"

3. **Your site will be live at:**
   `https://[your-username].github.io/[repository-name]/`

   For this repo: `https://sanguzare.github.io/`

## 🔗 Webring Integration Note

**Waterloo CS Webring:**

The University of Waterloo Computer Science community has an active webring that connects student and alumni personal websites. To join:

1. **Check webring requirements:**
   - Typically requires adding navigation links (prev/next) to other sites in the ring
   - May require a small snippet of JavaScript or HTML
   - Usually managed through a central webring website

2. **Potential integration points:**
   - Add prev/next navigation in the footer
   - Include webring badge/logo
   - Add webring navigation script

3. **To implement:**
   - Contact the webring administrator or check the official webring website
   - Add the required HTML/JS snippet to your `index.html` footer
   - Ensure it doesn't conflict with existing navigation

4. **Current status:**
   - This site is ready for webring integration but doesn't include it by default
   - Footer section can easily accommodate webring links
   - No breaking changes needed - webring code can be added as-is

**Note:** Since webring requirements may vary, check the official Waterloo CS webring documentation for current integration instructions.

## 🔧 Customization Checklist

### Replace These Placeholders:

- [ ] **Headshot:** Replace `assets/headshot-placeholder.svg` with your professional photo (600x600px, <200KB). Update `src` in `index.html` if using different filename.
- [ ] **Resume:** The resume PDF (`Santiago Resume-3.pdf`) is already in the repo. Update links if you rename it.
- [ ] **Company Logos:** Add logos to `assets/logos/` for:
  - [ ] University of Waterloo (`uwaterloo.svg`)
  - [ ] Burlington Economic Development & Tourism (`burlington-edt.svg`)
  - [ ] TechPlace (`techplace.svg`)
  - [ ] Staples Canada (`staples.svg`)
- [ ] **Technology Icons:** Add skill icons to `assets/icons/` (optional but recommended)
- [ ] **Award/Cert Images:** Add images to `assets/awards/` and `assets/certs/` (optional)

### Add Projects Here:

- [ ] Edit `projectsData` array in `script.js` (line ~60)
- [ ] Add your own projects with full details
- [ ] Update project categories, tags, and links
- [ ] Test project filtering and modal display

### Update Content:

- [ ] **Personal Info:** Update hero section, about section, contact info
- [ ] **Experience:** Update work experience timeline in `index.html`
- [ ] **Education:** Update education timeline in `index.html`
- [ ] **Awards:** Update `awardsData` array in `script.js` (line ~5)
- [ ] **Skills:** Update skill tags in `index.html` skills section
- [ ] **Social Links:** Update LinkedIn, GitHub URLs

### Optional Customization:

- [ ] **Colors:** Modify CSS variables in `styles.css` for brand colors
- [ ] **Fonts:** Change font families in CSS variables
- [ ] **Animations:** Adjust animation timings if desired
- [ ] **Webring:** Add webring integration if joining

## 📝 Notes

- **No Build Step Required** - Pure HTML/CSS/JS
- **No Dependencies** - Everything is vanilla
- **SEO Optimized** - Meta tags and semantic HTML included
- **Analytics Ready** - Commented hook in `script.js` for Google Analytics
- **Accessible** - WCAG guidelines followed
- **Performance Optimized** - Lightweight animations, throttled events, lazy loading ready

## 🐛 Troubleshooting

**Headshot not showing?**
- Check file path matches `index.html` reference
- Ensure image is valid JPG/PNG format
- Check browser console for 404 errors
- Fallback SVG placeholder will display if image fails

**Logos not displaying?**
- Verify file paths match references in `index.html`
- Check file format (SVG preferred)
- Ensure files are in correct `assets/logos/` folder
- Logos will hide gracefully if missing (onerror handler)

**Projects not showing?**
- Check browser console for JavaScript errors
- Ensure `projectsData` array in `script.js` is valid JSON
- Verify project cards are rendering in the DOM

**Theme toggle not working?**
- Check browser localStorage permissions
- Ensure JavaScript is enabled
- Clear browser cache if needed

**Copy-to-clipboard not working?**
- Requires HTTPS or localhost (browser security)
- Check browser console for errors
- Fallback method included for older browsers

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
