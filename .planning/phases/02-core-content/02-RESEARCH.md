# Phase 2: Core Content - Research

**Researched:** 2026-02-16
**Domain:** VitePress content authoring, technical documentation writing, UI components in Markdown
**Confidence:** HIGH

## Summary

Phase 2 focuses on writing three critical documentation pages (landing, setup guide, agenda) using VitePress and Tailwind CSS. The standard approach is to leverage VitePress's native markdown extensions and frontmatter for simple content, while creating custom Vue components for visual elements like CTA cards and timeline displays.

VitePress supports Vue components directly in markdown through script imports, making it straightforward to create reusable UI elements. The home page hero/features system provides a built-in solution for landing page CTAs. For the timeline, a custom Vue component using Tailwind's utility classes and CSS pseudo-elements is the standard pattern. Technical writing should follow Google's developer documentation guidelines: conversational tone, second person, minimal jargon with explanations when needed.

**Primary recommendation:** Use VitePress's built-in home page features for the landing page CTAs, create a single reusable Timeline.vue component for the agenda, and write all content in markdown following conversational technical writing patterns.

## Standard Stack

The established libraries/tools for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| VitePress | Latest (1.x) | Static site generator | Vue-powered, designed for documentation sites, built-in markdown extensions |
| Tailwind CSS | v4 | Utility-first CSS | Already integrated in Phase 1, standard for VitePress styling |
| Vue 3 | Latest | Component framework | VitePress's underlying framework, used for custom components |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Heroicons | Latest | SVG icons | For CTA card icons (MIT licensed, integrates with Tailwind) |
| Lucide | Latest | SVG icons | Alternative to Heroicons (1000+ icons, stroke-based style) |
| VitePress Valence | Optional | Prebuilt components | If reusable card/container components are needed beyond this phase |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Heroicons | Lucide Icons | More icons (1000+ vs 450+), but similar integration |
| Custom Timeline | CSS-only solution | Simpler but less flexible, harder to make responsive |
| Vue components | Markdown-only | Easier to write but limited visual capabilities |

**Installation:**
```bash
# Icons (choose one)
npm install @heroicons/vue
# OR
npm install lucide-vue-next

# No additional dependencies needed if using VitePress built-in features
```

## Architecture Patterns

### Recommended Project Structure
```
docs/
├── .vitepress/
│   ├── theme/
│   │   ├── components/       # Custom Vue components
│   │   │   ├── CTACards.vue  # (Optional if not using built-in features)
│   │   │   └── Timeline.vue  # Vertical timeline for agenda
│   │   ├── index.ts          # Theme extension (register global components)
│   │   └── custom.css        # Tailwind imports and overrides
│   └── config.mts            # VitePress configuration
├── index.md                  # Landing page (uses layout: home)
├── setup.md                  # Setup guide (uses layout: doc)
└── agenda.md                 # Agenda (uses layout: doc or page)
```

### Pattern 1: VitePress Home Page with Built-in Features
**What:** Use VitePress's built-in `layout: home` with hero and features frontmatter for landing pages.
**When to use:** Landing pages with hero section and CTA cards.
**Example:**
```markdown
---
layout: home
hero:
  name: "AI Teachathon"
  text: "Learn AI-Assisted Development"
  tagline: "February 17, 2026 • 17:00-20:00 • Charité Campus"
  actions:
    - theme: brand
      text: Prepare Your Setup
      link: /setup
    - theme: alt
      text: View Agenda
      link: /agenda

features:
  - icon: 🚀
    title: Get Started
    details: Install the tools you'll need before the event
    link: /setup
  - icon: 📅
    title: Event Schedule
    details: See what we'll cover during the session
    link: /agenda
  - icon: 💡
    title: Project Ideas
    details: Browse potential projects to work on
    link: /ideas
---

## What to Expect
Additional markdown content here...
```
**Source:** https://vitepress.dev/reference/default-theme-home-page

### Pattern 2: Custom Vue Component in Markdown
**What:** Import and use Vue components directly in markdown for custom UI elements.
**When to use:** When built-in features don't provide the needed design (e.g., custom timeline).
**Example:**
```markdown
---
layout: doc
title: Event Agenda
---

<script setup>
import Timeline from './.vitepress/theme/components/Timeline.vue'
</script>

# Event Agenda

<Timeline :segments="[
  { time: '17:00-17:15', title: 'Welcome', description: 'Brief intro' },
  { time: '17:15-17:45', title: 'Presentation', description: 'Core concepts' }
]" />
```
**Source:** https://vitepress.dev/guide/using-vue

### Pattern 3: Vertical Timeline Component
**What:** Vue component using Tailwind utilities and CSS pseudo-elements for timeline visualization.
**When to use:** Agenda pages showing chronological flow with dots and connecting lines.
**Example:**
```vue
<template>
  <ol class="relative border-l border-gray-300">
    <li v-for="segment in segments" :key="segment.time" class="mb-10 ml-6">
      <span class="absolute flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full -left-2 ring-4 ring-white"></span>
      <time class="mb-1 text-sm font-normal text-gray-500">{{ segment.time }}</time>
      <h3 class="text-lg font-semibold text-gray-900">{{ segment.title }}</h3>
      <p class="text-base text-gray-600">{{ segment.description }}</p>
    </li>
  </ol>
</template>

<script setup>
defineProps<{
  segments: Array<{ time: string; title: string; description: string }>
}>()
</script>
```
**Source:** https://flowbite.com/docs/components/timeline/

### Pattern 4: Platform-Specific Instructions with Headings
**What:** Use H3 headings to organize platform-specific setup instructions visibly.
**When to use:** Setup guides with Windows/macOS/Linux variations.
**Example:**
```markdown
## Install Git

### Windows
Download from [git-scm.com](https://git-scm.com/download/win) and run the installer.

### macOS
```bash
brew install git
```

### Linux (Ubuntu/Debian)
```bash
sudo apt-get install git
```

## Verify Installation

Run this command:
```bash
git --version
```

Expected output: `git version 2.x.x`
```

### Pattern 5: Link-and-Verify Documentation Pattern
**What:** Provide official download link, then verification command with expected output.
**When to use:** Software installation instructions for mixed-skill audiences.
**Example:**
```markdown
## Install VS Code

Download from [code.visualstudio.com/download](https://code.visualstudio.com/download)

**Verify:** Open VS Code and press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS). You should see the command palette.

| What to run | Expected result |
|-------------|----------------|
| Open VS Code | Application launches successfully |
| Press `Ctrl+Shift+P` | Command palette appears |
```
**Source:** Derived from https://technicalwriterhq.com/documentation/good-documentation-practices/

### Anti-Patterns to Avoid
- **Custom markdown parsers:** VitePress has extensive built-in extensions, don't override markdown-it unless absolutely necessary.
- **Mixing HTML blocks with markdown:** Markdown inside HTML blocks doesn't render. Use Vue components instead.
- **Kebab-case component names without hyphens:** Component names must contain a hyphen or use PascalCase to avoid hydration mismatches.
- **Troubleshooting sections in setup guides:** Keep setup guides focused on the happy path. Troubleshooting creates maintenance burden and signals complexity.

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Landing page hero with CTAs | Custom HTML/CSS layout | VitePress `layout: home` frontmatter | Built-in, optimized, follows documentation site patterns |
| SVG icons for CTAs | Custom SVG files | Heroicons or Lucide Vue components | 450-1000+ professionally designed icons, tree-shakeable, maintained |
| Code syntax highlighting | Custom highlighter | VitePress built-in (Shiki) | Supports 100+ languages, automatic, themeable |
| Responsive timeline CSS | Hand-written media queries | Tailwind utility classes | Mobile-first by default, consistent breakpoints |
| Navigation structure | Custom navbar/sidebar | VitePress config.mts nav/sidebar | Automatic active states, mobile responsive, search integration |

**Key insight:** VitePress is purpose-built for documentation sites. Its built-in features (home layout, markdown extensions, navigation) solve 80% of documentation needs. Only create custom components for domain-specific UI (like timeline visualization).

## Common Pitfalls

### Pitfall 1: Component Naming Causing Hydration Mismatch
**What goes wrong:** Custom components get wrapped in `<p>` tags, causing Vue hydration errors.
**Why it happens:** Components without hyphens or PascalCase are treated as inline elements.
**How to avoid:** Always use PascalCase (e.g., `TimelineSegment`) or hyphenated names (e.g., `timeline-segment`).
**Warning signs:** Console errors about hydration mismatch; content renders incorrectly on load then "snaps" into place.
**Source:** https://vitepress.dev/guide/using-vue

### Pitfall 2: Over-Explaining to Mixed Audiences
**What goes wrong:** Documentation becomes verbose trying to explain everything to everyone.
**Why it happens:** Fear of leaving anyone behind leads to excessive detail.
**How to avoid:** Follow Google's formula: "good documentation = what audience needs − what they already know." Explain jargon when first used, then use it normally. Link to external resources for deep dives.
**Warning signs:** Documentation is longer than similar guides; readers complain it's too basic or too verbose.
**Source:** https://developers.google.com/tech-writing/one/audience

### Pitfall 3: Using Markdown Inside HTML Blocks
**What goes wrong:** Markdown formatting doesn't render inside HTML tags like `<table>` or `<div>`.
**Why it happens:** markdown-it (VitePress's parser) disables markdown processing inside HTML blocks.
**How to avoid:** Use VitePress custom containers (`::: info`) or Vue components instead of raw HTML.
**Warning signs:** Markdown syntax appears literally in rendered output (e.g., `**bold**` instead of **bold**).
**Source:** https://vitepress.dev/guide/markdown

### Pitfall 4: Forgetting File Extensions in Links
**What goes wrong:** Links break when VitePress generates clean URLs.
**Why it happens:** Both `.md` and `.html` extensions work, but VitePress rewrites URLs based on config.
**How to avoid:** Omit file extensions in internal links. Write `/setup` not `/setup.md`.
**Warning signs:** Links work in dev but break in production, or vice versa.
**Source:** https://vitepress.dev/guide/routing

### Pitfall 5: Verification Without Expected Output
**What goes wrong:** Users run verification commands but don't know if results are correct.
**Why it happens:** Setup guides assume users will recognize success.
**How to avoid:** Always provide expected output in tables: "Run this" → "Expect this" format.
**Warning signs:** Users ask "Is this right?" or "Did it work?" in community channels.
**Source:** Derived from https://docs.mender.io/client-installation/integration-checklist

### Pitfall 6: Jargon Without Context for Mixed Audiences
**What goes wrong:** Less technical participants feel lost; experienced ones feel talked down to.
**Why it happens:** Hard to write for multiple skill levels simultaneously.
**How to avoid:** Use casual tone with brief inline definitions: "Git (a version control system) tracks changes to your code." After first mention, use terms normally.
**Warning signs:** Feedback splits between "too basic" and "too technical."
**Source:** https://developers.google.com/tech-writing/one/audience

## Code Examples

Verified patterns from official sources:

### VitePress Home Layout Frontmatter
```yaml
---
layout: home
hero:
  name: "Event Name"
  text: "Main heading"
  tagline: "Date • Time • Location"
  actions:
    - theme: brand
      text: Primary CTA
      link: /link
    - theme: alt
      text: Secondary CTA
      link: /link

features:
  - icon: 🎯
    title: Feature Title
    details: Brief description
    link: /link
---

Additional markdown content below renders after features section.
```
**Source:** https://vitepress.dev/reference/default-theme-home-page

### Registering Global Components
```typescript
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import Timeline from './components/Timeline.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Timeline', Timeline)
  }
}
```
**Source:** https://vitepress.dev/guide/extending-default-theme

### Using Heroicons in Vue Component
```vue
<script setup>
import { RocketLaunchIcon, CalendarIcon, LightBulbIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="grid grid-cols-3 gap-6">
    <a href="/setup" class="card">
      <RocketLaunchIcon class="w-8 h-8 text-blue-600" />
      <h3>Get Started</h3>
    </a>
  </div>
</template>
```
**Source:** https://github.com/tailwindlabs/heroicons

### Command Output Verification Table
```markdown
| Command | Expected Output |
|---------|----------------|
| `git --version` | `git version 2.x.x` |
| `code --version` | `1.x.x` followed by commit hash |
| `node --version` | `v20.x.x` or higher |
```

### VitePress Custom Container
```markdown
::: info Setup Time
This setup takes approximately 15-20 minutes if you haven't installed these tools before.
:::

::: warning Prerequisites
You'll need administrator/sudo access to install some of these tools.
:::
```
**Source:** https://vitepress.dev/guide/markdown

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Tabs for platform instructions | Visible headings for all platforms | 2024-2025 | Better SEO, no JavaScript required, easier to scan |
| Custom CSS for everything | Tailwind utility classes | 2023-2024 | Faster development, smaller CSS bundles, better consistency |
| Verbose troubleshooting sections | Link to official docs only | 2025-2026 | Reduced maintenance, forces users to engage with authoritative sources |
| Formal academic tone | Conversational "you" voice | 2024-2026 | More approachable for mixed audiences, better engagement |
| Tailwind v3 PostCSS | Tailwind v4 Vite plugin | 2025-2026 | Simpler config, better performance, native CSS imports |

**Deprecated/outdated:**
- **Tabs for platform-specific content:** Modern documentation prefers visible headings for better accessibility and SEO. Search engines can't index hidden content.
- **Screenshot-heavy setup guides:** Screenshots require constant updates and don't work well on mobile. Link-and-verify pattern is now standard.
- **Emoji-only icons:** Professional documentation sites use SVG icon libraries (Heroicons, Lucide) for better control and consistency.

## Open Questions

Things that couldn't be fully resolved:

1. **Exact icon choices for CTA cards**
   - What we know: Heroicons and Lucide are both excellent choices with Vue components
   - What's unclear: Which specific icons best represent "Setup", "Agenda", and "Ideas" concepts
   - Recommendation: User marked this as Claude's discretion. Suggest: RocketLaunchIcon (setup), CalendarIcon (agenda), LightBulbIcon (ideas) from Heroicons 24/outline set.

2. **"What to expect" section wording**
   - What we know: Should be brief, below CTAs, casual tone
   - What's unclear: Specific content depends on event goals beyond requirements
   - Recommendation: Focus on setting expectations: "This is a hands-on session", "No prior AI experience needed", "Bring your laptop with setup complete"

3. **Timeline CSS vs. Vue component approach**
   - What we know: Both CSS-only and Vue component approaches exist
   - What's unclear: Requirements specify "vertical timeline visual" but not complexity level
   - Recommendation: Use Vue component for flexibility and reusability. Easier to maintain and extend if agenda structure changes.

## Sources

### Primary (HIGH confidence)
- VitePress Official Documentation - https://vitepress.dev/guide/markdown (Markdown extensions, Vue in markdown)
- VitePress Official Documentation - https://vitepress.dev/reference/default-theme-home-page (Hero/features configuration)
- VitePress Official Documentation - https://vitepress.dev/guide/extending-default-theme (Custom components, theming)
- VitePress Official Documentation - https://vitepress.dev/reference/frontmatter-config (Frontmatter options)
- Flowbite Tailwind Components - https://flowbite.com/docs/components/timeline/ (Timeline patterns)
- Google Developer Documentation Style - https://developers.google.com/tech-writing/one/audience (Audience targeting)
- Google Developer Documentation Style - https://developers.google.com/style/tone (Voice and tone)
- VS Code Official Download - https://code.visualstudio.com/download (Installation links)
- GitHub Education Pack - https://education.github.com/pack (Free Copilot for students)
- Heroicons GitHub - https://github.com/tailwindlabs/heroicons (SVG icons)

### Secondary (MEDIUM confidence)
- Technical Writing Trends 2026 - https://www.timelytext.com/technical-writing-trends-for-2026/ (Industry trends verified with Google style guide)
- Tailwind + VitePress Setup - https://olets.dev/posts/styling-vitepress-with-tailwind/ (Integration patterns verified with official VitePress docs)
- Open Source Icon Libraries - https://lineicons.com/blog/best-open-source-icon-libraries (Icon options verified with official repos)
- CSS Timeline Patterns - https://uicookies.com/css-timeline/ (Design patterns verified with Flowbite)
- VitePress Valence Components - https://github.com/cynber/vitepress-valence (Community component library)

### Tertiary (LOW confidence)
- None - all key findings were verified with official documentation or multiple credible sources

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - VitePress, Tailwind, Vue are all verified from official docs and Phase 1 decisions
- Architecture patterns: HIGH - All patterns sourced from official VitePress and Flowbite documentation
- Pitfalls: HIGH - Derived from official VitePress documentation and Google's verified style guides
- Icon recommendations: MEDIUM - Multiple good options exist; specific choice is subjective but all are industry-standard
- Timeline implementation: HIGH - Clear pattern from Flowbite, adaptable to VitePress Vue components

**Research date:** 2026-02-16
**Valid until:** 2026-03-18 (30 days - stable documentation domain, but VitePress updates regularly)
