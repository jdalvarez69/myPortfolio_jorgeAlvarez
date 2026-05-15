# Jorge Alvarez - Professional Portfolio Website

A clean, professional portfolio website built with pure HTML, CSS, and JavaScript. This is a static website designed to represent my professional direction as an aspiring project manager focused on technical workflows and AI-assisted processes.

## Project Purpose

This portfolio website serves as my second serious web project. It demonstrates:
- Information architecture and structured communication
- Responsive web design without frameworks
- Honest positioning and grounded professional identity
- Integration of AI tools into a serious workflow
- Understanding of project management fundamentals

## Professional Direction

I'm building toward project management at the intersection of business, technology, and AI-assisted workflows. This portfolio communicates:
- My focus on technical communication, planning, and execution
- How I integrate AI tools responsibly into professional workflows
- My background as a Business and Information Systems student
- Real, completed projects and honest positioning
- Future concepts for professional development

## Site Sections

### 1. Hero
Brief introduction and call-to-action to explore my work and background.

### 2. Professional Direction
Overview of what I'm building toward, my focus areas, and educational background.

### 3. Work & Projects
- **Completed Projects:** Real work I've finished
  - Cryptography Museum Website
  - Professional Portfolio Website (this site)
- **Concepts:** Future project ideas clearly labeled as concepts
  - AI Study Planner
  - Small Business Intake System
  - Team Project Dashboard

### 4. Skills & Tools
Organized categories of skills I have and am developing:
- Project Management
- Technical Skills
- Communication
- AI Tools & Workflow
- Business Skills
- Currently Developing

### 5. AI-Assisted Workflow
Explanation of how I use AI tools like ChatGPT as collaborative partners:
1. Plan & Define - Clear requirements and goals
2. Collaborate - Iterative feedback and refinement
3. Adapt & Improve - Make AI suggestions my own
4. Verify & Own - Take full responsibility for output

### 6. Contact
Direct contact information and links to social profiles.

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Vanilla CSS with CSS variables, grid, flexbox, and responsive design
- **JavaScript** - Vanilla JS for interactivity (no libraries)

**No frameworks, preprocessors, or external dependencies.**

## Design Approach

### Aesthetic
- Clean, professional, calm, and modern
- Strong typography with readable text
- Good spacing and visual hierarchy
- Subtle cards with minimal borders
- Responsive mobile-first design

### Avoid
- Neon cyberpunk styling
- Clutter or visual noise
- Fake hype or inflated language
- Generic corporate design patterns

## Content Principles

### Be Honest
- Only mention real, completed projects
- Don't invent internships, jobs, certifications, or false experience
- Be student-appropriate in tone and language

### Use Grounded Language
- "I am building toward..." instead of "I specialize in..."
- "I am developing..." instead of "I have mastered..."
- "This project helped me practice..." instead of "I transform companies..."

### Clear Labeling
- Future concepts are clearly marked as "Concept"
- Status is transparent (Completed, Current, Concept)

## File Structure

```
PortfolioSite_Alvarez/
├── .github/
│   └── copilot-instructions.md    # Project-specific Copilot guidelines
├── index.html                      # Main HTML file
├── styles.css                      # All styling
├── script.js                       # JavaScript functionality
└── README.md                       # This file
```

## How to Preview Locally

### Option 1: Simple HTTP Server (Python)
If you have Python installed:

```bash
cd PortfolioSite_Alvarez

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

### Option 2: Using Node.js
If you have Node.js with `http-server` installed:

```bash
cd PortfolioSite_Alvarez
npx http-server
```

Then open the provided local URL in your browser.

### Option 3: Direct File Access
Simply open `index.html` directly in your browser by dragging the file or using File > Open.

*Note: Some features may work better with a local server due to browser security restrictions.*

### Option 4: VS Code Live Server
If you have the Live Server extension in VS Code:
1. Right-click `index.html`
2. Select "Open with Live Server"

## Development Notes

### CSS Architecture
- Uses CSS custom properties (variables) for consistent theming
- Mobile-first responsive design
- Breakpoints at 768px and 480px
- No CSS preprocessor needed

### JavaScript Features
- Smooth scroll behavior (CSS and JS)
- Intersection Observer for fade-in animations on scroll
- Active navigation link highlighting
- Navbar shadow on scroll
- Utility functions for future expansion

### Responsive Design
- Adapts smoothly from mobile (320px) to desktop (1200px+)
- Touch-friendly navigation and buttons
- Flexible grid layouts with `auto-fit` and `minmax()`
- Adjusted typography sizes for smaller screens

## Customization

### Update Contact Information
In `contact.html`, find the contact section and update:
- Email link: `mailto:jda69@njit.edu`
- LinkedIn: `https://www.linkedin.com/in/jorge-alvarez-75b151226/`
- GitHub: `https://github.com/jdalvarez69`

### Change Colors
Edit CSS variables in `styles.css` `:root` section to customize the color scheme.

### Add Content
Follow the existing HTML structure and maintain the design consistency by using existing card and section classes.

## Copilot Instructions

This project includes `.github/copilot-instructions.md` which provides guidelines for maintaining the site's voice, content rules, and design principles. These instructions help preserve the authentic, grounded nature of the portfolio when making future edits.

## Future Enhancements

Potential additions (when ready):
- Blog section for articles on project management and AI workflows
- Case study details for completed projects
- Live contact form with email integration
- Dark mode toggle
- Project filtering by category
- Download resume/CV

## Learning Goals Met by This Project

1. **Information Architecture** - Structuring complex professional information clearly
2. **Responsive Web Design** - Mobile-first approach without frameworks
3. **Semantic HTML** - Proper use of HTML5 elements
4. **CSS Mastery** - Layout, typography, animations, and responsive techniques
5. **Vanilla JavaScript** - Interactivity without dependencies
6. **AI Collaboration** - Using ChatGPT responsibly in workflow
7. **Professional Communication** - Honest positioning and clear messaging

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Fully optimized for performance
- No external requests required (except fonts from system)
- Fast load times
- Optimized CSS and JavaScript
- No blocking resources

## License

This portfolio website is my personal project. Feel free to use it as inspiration for your own portfolio, but please create your own version with your own content and design.

---

**Built with:** HTML5, CSS3, Vanilla JavaScript, and thoughtful AI collaboration.

**Last Updated:** 2026

For questions or to discuss project management, AI workflows, or web development, reach out through the contact section.
