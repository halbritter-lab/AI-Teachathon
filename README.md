# AI-Teachathon

[![Deploy](https://github.com/halbritter-lab/AI-Teachathon/actions/workflows/deploy.yml/badge.svg)](https://github.com/halbritter-lab/AI-Teachathon/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![VitePress](https://img.shields.io/badge/VitePress-1.6-646cff?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)

Workshop website for the **Halbritter Lab AI-Teachathon** at CeRKiD, Charite Berlin. A hands-on evening where researchers learn AI-assisted coding, Git, and GitHub - no prior experience required.

[![Live Site](https://img.shields.io/badge/%F0%9F%8C%90_Live_Site-halbritter--lab.github.io/AI--Teachathon-7c3aed?style=for-the-badge)](https://halbritter-lab.github.io/AI-Teachathon/)

## Pages

| Page | Description |
|------|-------------|
| [Home](https://halbritter-lab.github.io/AI-Teachathon/) | Event overview, date, location, and quick links |
| [Setup Guide](https://halbritter-lab.github.io/AI-Teachathon/setup) | VS Code, Git, GitHub, and Node.js installation instructions |
| [Agenda](https://halbritter-lab.github.io/AI-Teachathon/agenda) | Event timeline (17:00 - 20:00) with six segments |
| [Presentation](https://halbritter-lab.github.io/AI-Teachathon/presentation.html) | 32-slide deck on AI + version control (Marp) |
| [AI Tools](https://halbritter-lab.github.io/AI-Teachathon/ai-tools) | 4-level tool spectrum with 10 comparison cards |
| [Hands-On](https://halbritter-lab.github.io/AI-Teachathon/hands-on) | 8-step Git workflow and AI prompting guide |
| [Ideas](https://halbritter-lab.github.io/AI-Teachathon/ideas) | KidneyQuest and alternative project ideas |
| [Resources](https://halbritter-lab.github.io/AI-Teachathon/resources) | 60+ curated links organized by event timeline |

## Tech Stack

- **[VitePress](https://vitepress.dev/)** - Static site generator (Markdown + Vue)
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS via `@tailwindcss/vite`
- **[Marp CLI](https://marp.app/)** - Markdown-to-slide presentation
- **[Playwright](https://playwright.dev/)** - E2E testing (13 tests across 3 viewports)
- **GitHub Actions** - Automated deployment to GitHub Pages

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npx vitepress dev docs --port 4321

# Build (Marp slides + VitePress)
npm run docs:build

# Run all checks (lint + format + build)
make check
```

## Project Structure

```
docs/
  .vitepress/
    config.mts          # Site config (nav, sidebar, plugins)
    theme/
      style.css         # Tailwind + dark theme variables
      marp-theme.css    # Presentation theme
      components/       # Vue components (Timeline.vue)
  index.md              # Landing page
  setup.md              # Setup guide
  agenda.md             # Event agenda
  ai-tools.md           # AI tool landscape
  hands-on.md           # Coding guide
  ideas.md              # Project ideas
  resources.md          # Curated links
  presentation/
    slides.md           # Marp slide source
```

## Contributing

Edit any page directly on GitHub using the "Edit this page" links on the site, or:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Open a pull request

## License

[MIT](LICENSE)
