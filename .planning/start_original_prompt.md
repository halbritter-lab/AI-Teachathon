Phase 1: Scaffold the AI-Teachathon repo
Prompt to Claude Code:

Create a new project called AI-Teachathon with the following structure. This is a Jekyll site using the just-the-docs remote theme, deployed via GitHub Pages from the root directory. Do not use a docs/ subfolder for Pages -- serve from root.

AI-Teachathon/
  _config.yml                    # Jekyll config with just-the-docs remote theme
  Gemfile                        # For local preview (optional)
  .github/
    workflows/
      pages.yml                  # GitHub Actions workflow for Pages deployment
  index.md                       # Home / landing page
  setup.md                       # Pre-event setup instructions
  agenda.md                      # Schedule for the day
  presentation.html              # Reveal.js presentation (Why and What)
  tool-landscape.md              # AI tool landscape documentation
  hands-on.md                    # Hands-on session guide (links to KidneyQuest)
  ideas.md                       # Editable ideas and projects page
  resources.md                   # Links and cheat sheets
  assets/
    css/
      custom.css                 # Custom styling overrides
    images/                      # For any images/diagrams
  _includes/                     # Custom includes if needed
  README.md                      # Repo README (not the site homepage)
  LICENSE                        # CC BY 4.0
_config.yml spec:
yamltitle: "AI Teachathon"
description: "Halbritter Lab Workshop on AI-Assisted Coding, Git & GitHub"
remote_theme: just-the-docs/just-the-docs
url: "https://halbritter-lab.github.io"
baseurl: "/AI-Teachathon"
color_scheme: dark               # or light, your choice
search_enabled: true
heading_anchors: true

aux_links:
  "GitHub Repo":
    - "https://github.com/halbritter-lab/AI-Teachathon"
  "KidneyQuest":
    - "https://github.com/berntpopp/KidneyQuest"

footer_content: "Halbritter Lab Nephrogenetik / CeRKiD -- Charite Berlin"

plugins:
  - jekyll-remote-theme
  - jekyll-seo-tag

# Exclude from build
exclude:
  - README.md
  - Gemfile
  - Gemfile.lock
  - LICENSE
```

**`.github/workflows/pages.yml` spec:**

Use the standard just-the-docs GitHub Actions deployment workflow (from the just-the-docs-template repo). This builds Jekyll and deploys to Pages without needing the `gh-pages` branch.

---

### Phase 2: Write the content pages

**Prompt to Claude Code for each page (do them one at a time or batch):**

**`index.md`** (Home):
> Write the landing page. Front matter: layout default, title Home, nav_order 1. Content: Welcome header "Halbritter Lab AI Teachathon", one paragraph about what this is (hands-on workshop for the CeRKiD / Halbritter Lab to learn AI coding tools, Git, and GitHub). Date/time/location block. Three cards or sections: "Before the event" linking to setup.md, "On the day" linking to agenda.md, "Our project" linking to KidneyQuest repo. Keep it concise and friendly. No emojis.

**`setup.md`** (Pre-event setup):
> Write setup instructions. nav_order 2. Sections: Install VS Code (link), Install Git (platform-specific one-liners + git config), Create GitHub account (link + "send me your username"), Apply for GitHub Education (link, mention free Copilot), Install Node.js (optional, for Claude Code). End with a checklist using markdown checkboxes. Tone: encouraging, "if you get stuck don't worry we'll help."

**`agenda.md`** (Schedule):
> Write the agenda. nav_order 3. Use a clear timeline format (not a table). Three main blocks: Part 1 "Why and What" (30 min) -- link to presentation.html, Part 2 "Tool Landscape" (20 min) -- link to tool-landscape.md, Break (10 min), Part 3 "KidneyQuest Hands-on" (2 hours) with sub-sections for repo setup, picking issues, hacking, merging. Include approximate timestamps assuming a 14:00 start.

**`presentation.html`** (Reveal.js presentation):
> This is the key creative piece. Create a standalone HTML file that loads reveal.js from CDN (https://cdn.jsdelivr.net/npm/reveal.js@5/). Use a dark theme (black or night). Slides should cover: (1) Title slide "Why and What" with subtitle and CeRKiD/Halbritter Lab branding, (2) The version control problem -- show the "final_v3_REALLY_final.docx" joke, (3) What is Git -- visual metaphor: snapshots/timeline, (4) What is GitHub -- repos, issues, PRs explained simply, (5) Why version control matters MORE with AI -- AI generates fast, you need tracking, (6) The AI revolution in coding -- brief timeline 2022-2025, (7) What we'll do today -- preview of the hands-on session. Keep slides minimal (few words per slide, more visual). Use reveal.js fragment animations for progressive reveal. Include speaker notes. Style it modern: large text, dark background, accent color matching the site. The presentation should NOT be in the Jekyll build -- it's a standalone HTML file that Jekyll passes through. Make sure the file has `layout: null` or no front matter so Jekyll doesn't process it, OR give it a permalink. Actually simplest: no front matter at all, just a raw HTML file. Jekyll will copy it as-is.

**`tool-landscape.md`** (Documentation style):
> Write the AI tool landscape page. nav_order 5. This is more traditional documentation. Sections: What are LLMs (short paragraph), The tool spectrum (Level 1 browser chat, Level 2 IDE-integrated, Level 3 CLI agentic, Level 4 autonomous agents -- one paragraph each with examples), What we'll use today, Tips for working with AI coding tools (5 practical tips as a numbered list). Include a comparison-style overview (could be a markdown table: Tool / Type / Best for / Access).

**`hands-on.md`** (KidneyQuest guide):
> Write the hands-on guide. nav_order 6. This documents the collaborative game project. Sections: What is KidneyQuest (description, link to separate repo), Step-by-step workflow (clone, pick issue, branch, code with AI, commit, push, PR, merge), Example AI prompts people can try, List of pre-prepared feature issues with brief descriptions. Reference that KidneyQuest is its own repo and link to it.

**`ideas.md`** (Editable ideas page):
> Write an ideas and projects page. nav_order 7. This is meant to be a living document that participants edit directly. Start with a brief intro explaining that anyone can edit this page (link to the "edit this page on GitHub" URL pattern). Then have sections: "Project Ideas" with a few starter ideas (e.g., "Automate variant annotation pipeline", "Build a patient phenotype parser", "Create a lab website"), and "Pain Points" with example entries (e.g., "Renaming files in batch", "Converting between data formats"). Use a simple format that's easy to add to. Maybe include a template entry people can copy. Also mention that people can create GitHub Issues in the repo for ideas if they prefer a discussion.

**`resources.md`** (Links):
> Write the resources page. nav_order 8. Sections: Git and GitHub (cheat sheet PDF link, GitHub Skills, Oh Shit Git, Pro Git book), AI Coding Tools (Copilot docs, Claude Code docs, DeepLearning.AI course), HTML5 Canvas (MDN tutorials, OpenGameArt), LLM Providers (ChatGPT, Claude, Gemini, GitHub Models).

---

### Phase 3: Scaffold the `KidneyQuest` repo

**Prompt to Claude Code:**

> Create a new project called KidneyQuest. This is a simple HTML5 Canvas browser game. A zebra (the CeRKiD rare disease mascot) runs through a kidney-tubule landscape, collecting rare disease gene items (PKD1, PKD2, UMOD, COL4A5, HNF1B, NPHP1) for points and dodging obstacles (kidney cysts, kidney stones). Structure:
```
KidneyQuest/
  index.html              # The game (single file, HTML5 Canvas, vanilla JS)
  README.md               # Project description, how to play, how to contribute
  LICENSE                  # MIT
  CONTRIBUTING.md          # Brief contribution guide (branch, code, PR)
  .github/
    ISSUE_TEMPLATE/
      feature.md           # Issue template for game features

The index.html should be a working game skeleton with: canvas element, zebra character drawn with simple canvas shapes (white body with black stripes), arrow key movement, a start screen with "KidneyQuest" title and "A CeRKiD Lab Game" subtitle, and placeholder TODO comments for all the features that will become issues. Use a dark kidney-themed color palette (deep reds, warm pinks for the background). The game should be playable (zebra moves around) but minimal -- features will be added by participants via issues/branches.


The README should explain the CeRKiD zebra concept, link to the AI-Teachathon repo, and have a "How to contribute" section explaining the branch/PR workflow.

Then create the GitHub Issues (12 issues):

Create 12 GitHub Issue markdown files or a script that uses the GitHub CLI (gh issue create) to batch-create these issues:


"Add scrolling kidney-tubule background" -- label: enhancement, good first issue
"Add gene collectible items (PKD1, PKD2, UMOD, etc.)" -- label: enhancement
"Add kidney cyst obstacles" -- label: enhancement
"Add collision detection for genes and cysts" -- label: enhancement
"Add score display" -- label: enhancement, good first issue
"Add start screen with instructions" -- label: enhancement, good first issue
"Add game over screen with final score" -- label: enhancement
"Increase difficulty over time" -- label: enhancement
"Add sound effects" -- label: enhancement
"Add high score tracking (localStorage)" -- label: enhancement
"Add CeRKiD branding and logo" -- label: enhancement, good first issue
"Add mobile touch controls" -- label: enhancement


Phase 4: Polish and connect
Prompt to Claude Code:

Add custom CSS to the AI-Teachathon site (assets/css/custom.css) that: adds a subtle kidney/medical accent color to links and headers, makes the presentation link stand out in the nav with a different style. Reference this CSS in _config.yml or via a custom head include.


In the presentation.html, add a "Back to course" link that returns to the main site.


Make sure all cross-links work: agenda links to presentation and tool-landscape, hands-on links to KidneyQuest repo, ideas page has an "edit on GitHub" link, etc.


Phase 5: Deploy

Push AI-Teachathon to GitHub
Go to Settings > Pages > Source: "GitHub Actions" (uses the workflow file)
Push KidneyQuest to GitHub
Go to Settings > Pages > Source: "Deploy from branch" > main > / (root)
Verify both sites work
Batch-create the KidneyQuest issues using gh issue create or manually


Phase 6: Pre-create branches for safety net
Prompt to Claude Code:

In the KidneyQuest repo, create a branch called checkpoint/game-skeleton from the initial commit. This serves as a safety net -- if anyone's local copy gets messed up during the hackathon, they can reset to this branch.