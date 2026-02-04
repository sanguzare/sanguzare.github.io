# Santiago Guzman — Data Portfolio

A modern, responsive portfolio website showcasing expertise in data analysis, business intelligence, and data engineering. Built with vanilla HTML, CSS, and JavaScript for optimal performance and accessibility.

## About This Site

This portfolio demonstrates a data-driven approach to problem-solving through real-world projects, technical skills, and professional achievements. The design emphasizes clarity, performance, and user experience while maintaining a distinctive visual identity that reflects a data analytics focus.

### Design Philosophy

The site employs a **data aesthetic** — clean grids, subtle animations, and a color palette that balances professionalism with visual interest. Key design principles:

- **Visual Hierarchy**: Clear typography and spacing guide attention to important information
- **Performance First**: Lightweight animations and optimized assets ensure fast load times
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support all users
- **Responsive Design**: Seamless experience across mobile, tablet, and desktop devices

### Technical Stack

- **HTML5**: Semantic markup for SEO and accessibility
- **CSS3**: Modern features including CSS Grid, Flexbox, custom properties, and fluid typography
- **Vanilla JavaScript**: No frameworks or dependencies — pure, performant code
- **GitHub Pages**: Static hosting for zero-configuration deployment

## Projects

Projects are defined in a single JavaScript array (`script.js`) and automatically rendered as interactive cards. Each project includes:

- **Problem Statement**: The challenge or opportunity addressed
- **Approach**: Methodology and technical strategy
- **Tools & Technologies**: Specific technologies and frameworks used
- **Results**: Measurable outcomes and business impact

Projects can be filtered by category (BI/Dashboards, Analytics, Data Engineering, Cloud, Other) and searched by keyword. Clicking a project card opens a detailed modal with full information.

## Skills & Expertise

Skills are organized into categories:

- **Languages**: Python, SQL, C++, C
- **Data & Analytics**: Pandas, NumPy, Jupyter, data cleaning, exploratory analysis
- **Business Intelligence**: Power BI, DAX, data modeling, KPI visualization
- **Cloud & Tools**: Salesforce, Microsoft Excel, Git, GitHub, GNU/Linux

Each skill tag includes hover interactions that highlight related projects, creating visual connections between skills and work.

## Experience & Education

Work experience and education are presented as clean vertical timelines with:

- Company/university logos
- Role titles and dates
- Location information
- Impact-focused bullet points emphasizing measurable outcomes

## Awards & Certifications

Professional recognition and credentials are displayed as badge-style cards with:

- Award/certification images or SVG placeholders
- Issuing organization
- Year received
- Brief description

## Performance & Accessibility

### Performance Optimizations

- **Lazy Loading**: Images load only when needed
- **Throttled Events**: Scroll and mouse events are throttled to prevent performance issues
- **RequestAnimationFrame**: Canvas animations use efficient rendering
- **Reduced Motion**: All animations respect `prefers-reduced-motion` settings

### Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmark regions
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full site navigation via keyboard
- **Focus Management**: Visible focus indicators and logical tab order
- **Color Contrast**: WCAG AA compliant color combinations

## Interactive Features

The site includes several lightweight, delightful interactions:

1. **Scroll Progress Indicator**: Visual feedback showing page scroll position
2. **Magnetic Hover**: Primary buttons subtly follow cursor movement
3. **Skill Hover**: Highlighting related projects when hovering over skills
4. **Theme Toggle**: Smooth transition between dark and light modes
5. **Grid Overlay**: Easter egg interaction (click the logo)
6. **Cursor-Reactive Canvas**: Hero background particles respond to mouse movement

All interactions degrade gracefully on mobile devices and respect accessibility preferences.

## Color System

The design uses a carefully crafted color palette:

- **Primary Accent (Violet/Indigo)**: `#6366f1` — Used for primary actions and highlights
- **Secondary Accent (Cyan)**: `#06b6d4` — Used for secondary elements and hover states
- **Tertiary Accent (Warm Amber)**: `#f59e0b` — Used for emphasis and special highlights

Gradients and glows create depth while maintaining readability. The site defaults to dark mode with a toggle to light mode, with preferences saved in localStorage.

## Layout System

The site uses a **12-column grid system** for consistent alignment:

- **Desktop**: 12 columns (1200px max-width)
- **Tablet**: 6 columns (768px - 1199px)
- **Mobile**: 4 columns (< 768px)

Spacing follows a **4/8/12/16/24/32/48px scale** for visual rhythm and consistency.

## Typography

Fluid typography using `clamp()` ensures optimal readability across all screen sizes:

- **Headings**: Scale from 2rem to 4rem based on viewport
- **Body Text**: Scales from 1rem to 1.125rem
- **Font Stack**: Inter for UI, JetBrains Mono for code/technical content

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Deployment

This site is deployed on **GitHub Pages** as a static site. No build process or server-side code is required — simply push to the repository and GitHub Pages serves the files.

**Live Site**: [https://sanguzare.github.io/](https://sanguzare.github.io/)

## Waterloo CS Webring

The University of Waterloo Computer Science community maintains an active webring connecting student and alumni personal websites. This site is structured to easily integrate webring navigation if desired.

**To join the webring:**
1. Contact the webring administrator or visit the official webring website
2. Add the required HTML/JavaScript snippet (typically prev/next navigation links)
3. Place the snippet in the footer section
4. Ensure it doesn't conflict with existing navigation

The footer section can accommodate webring links without requiring structural changes to the site.

## Contact

- **Email**: santiago.guzare@gmail.com
- **LinkedIn**: [linkedin.com/in/santiagoguz](https://www.linkedin.com/in/santiagoguz)
- **GitHub**: [github.com/sanguzare](https://github.com/sanguzare)
- **Location**: Oakville, ON, Canada

---

**Built with HTML, CSS, and JavaScript** — No frameworks, no build tools, just clean, performant code.

© 2025 Santiago Guzman
