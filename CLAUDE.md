# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Workshop website for the AI-Teachathon event (Halbritter Lab, Charite Berlin). Built with VitePress + Tailwind CSS v4, with a Marp-based presentation. Deployed to GitHub Pages at `/AI-Teachathon/`.

Audience is non-technical researchers - content must be approachable, avoid developer jargon, and provide step-by-step instructions.

## Commands

```bash
make dev              # Start VitePress dev server (opens at /AI-Teachathon/)
make build            # Build static site (runs Marp first, then VitePress)
make build-marp       # Build Marp presentation only
make lint             # Lint markdown files
make lint-fix         # Lint and auto-fix markdown
make format           # Format all source files with Prettier
make format-check     # Check formatting without writing
make check            # Run all checks (lint + format + build)
make clean            # Remove build artifacts, caches, and node_modules
```

Marp watch mode: `npm run dev:marp`

## Architecture

**VitePress** serves content from `docs/`. All pages are markdown with optional Vue components. The site uses dark theme by default (`appearance: 'dark'` in config).

**Two-stage build**: `docs:build` runs Marp CLI first (converts `docs/presentation/slides.md` to `docs/public/presentation.html`), then builds VitePress. The presentation is a standalone HTML file served from VitePress's public directory.

**Tailwind CSS v4** is loaded via `@tailwindcss/vite` plugin (no tailwind.config). Styling directives and `@source` scanning rules live in `docs/.vitepress/theme/style.css`. Dark theme colors are set as CSS custom properties overriding VitePress defaults.

**Custom components**: `Timeline.vue` (used on the agenda page) is registered globally in `docs/.vitepress/theme/index.ts`.

**Base URL**: Always `/AI-Teachathon/` - all internal links and asset paths must account for this.

### Key files

- `docs/.vitepress/config.mts` - Site config (sidebar, nav, Vite plugins, base URL)
- `docs/.vitepress/theme/style.css` - Tailwind imports, color variables, dark theme
- `docs/.vitepress/theme/marp-theme.css` - Marp slide theme (Gaia invert base)
- `docs/presentation/slides.md` - Marp slide source (excluded from Prettier/markdownlint)
- `.github/workflows/deploy.yml` - GitHub Actions: build + deploy to Pages on push to main

### Planning docs

`.planning/` contains research, architecture decisions, phase plans, and context docs. These are NOT served by the site and are excluded from linting/formatting. They document rationale and constraints.

## Code Style

- **Prettier**: No semicolons, single quotes (double in markdown), trailing commas, 2-space indent, 80-char width
- **Markdownlint**: Long lines allowed (MD013 off), raw HTML allowed (MD033 off, needed for VitePress components), bare URLs allowed (MD034 off)
- **Naming**: Pages use kebab-case (`ai-tools.md`), Vue components use PascalCase (`Timeline.vue`)
- **Text**: Never use em dashes. Use ` - ` (space-hyphen-space) instead.

## Deployment

GitHub Actions on push to main: checkout (full history for lastUpdated), Node 22, `npm ci`, `npm run docs:build`, deploy to GitHub Pages. Single concurrent deployment (cancel-in-progress: false).
