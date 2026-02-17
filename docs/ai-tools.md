# AI Tools

AI coding tools range from simple chatbots to agents that can build entire features on their own. Understanding the landscape helps you pick the right tool for the job.

## The AI Coding Tool Spectrum

<div class="card-grid">

<div class="project-card">

### Level 1: Chat Interfaces

Ask a question, get code, copy-paste it into your editor. The AI can't see your files - you're the bridge between the AI and your code.

**Best for:** Explaining concepts, debugging errors, writing snippets

<div class="card-badges">
  <span class="card-badge card-badge-accent">ChatGPT</span>
  <span class="card-badge card-badge-accent">Claude.ai</span>
  <span class="card-badge card-badge-accent">Gemini</span>
</div>

</div>

<div class="project-card">

### Level 2: IDE-Integrated

The AI lives inside your code editor and suggests code as you type. No copy-pasting - it autocompletes and refactors inline.

**Best for:** Autocomplete, inline suggestions, chat within your editor

<div class="card-badges">
  <span class="card-badge card-badge-accent">GitHub Copilot</span>
  <span class="card-badge card-badge-accent">Cursor</span>
  <span class="card-badge card-badge-accent">Windsurf</span>
</div>

</div>

<div class="project-card">

### Level 3: CLI Agents

Terminal-based agents that read and edit files across your whole project, run commands, and handle Git. They see your entire codebase, not just one file.

**Best for:** Multi-file changes, running tests, Git workflows

<div class="card-badges">
  <span class="card-badge card-badge-accent">Claude Code</span>
  <span class="card-badge card-badge-accent">Copilot CLI</span>
  <span class="card-badge card-badge-accent">Codex CLI</span>
  <span class="card-badge card-badge-accent">Gemini CLI</span>
</div>

</div>

<div class="project-card">

### Level 4: Autonomous Agents

Give them a feature request and they plan, build, and test it with minimal supervision. Still early - think of them as junior developers who need oversight.

**Best for:** Experienced developers who can review AI-generated work

<div class="card-badges">
  <span class="card-badge">Emerging</span>
</div>

</div>

</div>

::: info During This Workshop
You'll primarily use **Level 1** (chat interfaces) and **Level 2** (IDE tools like GitHub Copilot). Level 3 CLI agents are available if you want to try them - check the [setup guide](/setup) for Node.js installation.
:::

## Quick Comparison

Pricing and models are accurate as of February 2026.

| Tool           | Type | Frontier Model      | Free Tier                   | Paid               | Best For                       |
| -------------- | ---- | ------------------- | --------------------------- | ------------------ | ------------------------------ |
| ChatGPT        | Chat | GPT-5.2             | GPT-5.2 Instant (limited)   | $20/mo Plus        | Broad knowledge, debugging     |
| Claude.ai      | Chat | Opus 4.6 / Sonnet 5 | Sonnet 4.5 (limited)        | $20/mo Pro         | Deep explanations, code review |
| Gemini         | Chat | Gemini 3 Pro        | **2.5 Flash** (limited Pro) | $19.99/mo AI Pro   | Quick questions, multimodal    |
| GitHub Copilot | IDE  | Multi-model         | 2,000 completions/mo        | $10/mo Pro         | Autocomplete in VS Code        |
| Cursor         | IDE  | Multi-model         | 50 premium requests/mo      | $20/mo Pro         | All-in-one AI editor           |
| Windsurf       | IDE  | Multi-model         | Unlimited autocomplete      | $15/mo Pro         | AI pair programming            |
| Claude Code    | CLI  | Opus 4.6 / Sonnet 5 | None                        | $20/mo (with Pro)  | Multi-file refactoring         |
| Copilot CLI    | CLI  | Claude Sonnet 4.5   | None                        | $10/mo (with Pro)  | Terminal agent (multi-model)   |
| Codex CLI      | CLI  | GPT-5.3-Codex       | None                        | $20/mo (with Plus) | Terminal agent (GPT models)    |
| Gemini CLI     | CLI  | **Gemini 3 Flash**  | **1,000 requests/day**      | Free               | Free terminal AI agent         |

::: tip Not Sure Where to Start?
**Student?** Get GitHub Copilot free via the [GitHub Education Pack](https://education.github.com/pack) and Gemini AI Pro free for a year via [Google for Students](https://gemini.google/students/). **Want free tools?** Gemini (chat) and Gemini CLI (terminal) are completely free. **Just exploring?** All three chat tools (ChatGPT, Claude.ai, Gemini) have free tiers.
:::

## Chat Interfaces

These are the simplest tools to start with - just open a website and ask a question.

<div class="card-grid">

<div class="project-card">

### ChatGPT

The most widely used AI chatbot. Good at explaining concepts, writing code snippets, and debugging errors. Strong general knowledge across programming languages. Currently powered by the **GPT-5.2** model family.

- **Free:** GPT-5.2 Instant (~10 messages/5 hours, then falls back to mini)
- **Plus ($20/mo):** GPT-5.2 Thinking mode, 5x limits, includes Codex CLI
- **Pro ($200/mo):** Unlimited GPT-5.2 Pro, maximum reasoning compute

<div class="card-badges">
  <span class="card-badge card-badge-accent">Chat</span>
  <span class="card-badge">Free tier</span>
  <span class="card-badge">Most popular</span>
</div>

</div>

<div class="project-card">

### Claude.ai

Known for detailed, thoughtful explanations and strong code review. Handles long conversations well thanks to large context windows. Frontier models: **Opus 4.6** (Feb 5) and **Sonnet 5** (Feb 3).

- **Free:** Claude Sonnet 4.5 with dynamic capacity limits
- **Pro ($20/mo):** Sonnet 5, 5x usage, includes Claude Code CLI, extended thinking
- **Max ($100-200/mo):** Opus 4.6 access, agent features, 1M context

<div class="card-badges">
  <span class="card-badge card-badge-accent">Chat</span>
  <span class="card-badge">Free tier</span>
  <span class="card-badge">Best explanations</span>
</div>

</div>

<div class="project-card">

### Gemini

Google's AI assistant with a generous free tier. Supports image and document understanding. The frontier model is **Gemini 3 Pro** (Nov 2025), available on paid plans. Free users get Gemini 2.5 Flash.

- **Free:** Gemini 2.5 Flash + limited 2.5 Pro access
- **AI Pro ($19.99/mo):** Gemini 3 Pro, Deep Search, 2 TB storage
- **AI Ultra ($249.99/mo):** Highest access, video gen, Deep Research
- **Free for students** via [Google for Students](https://gemini.google/students/) (AI Pro for one year)

::: tip Recommended for Workshop
The free tier (2.5 Flash) is plenty for a workshop. No credit card needed, just a Google account. Gemini CLI is also completely free.
:::

<div class="card-badges">
  <span class="card-badge card-badge-accent">Chat</span>
  <span class="card-badge card-badge-accent">Free tier</span>
  <span class="card-badge">Multimodal</span>
</div>

</div>

</div>

## IDE-Integrated Tools

These tools live inside your code editor. They suggest code as you type and can chat about your codebase.

<div class="card-grid">

<div class="project-card">

### GitHub Copilot

The most popular AI coding assistant. Integrates directly into VS Code and suggests code as you type. The free tier is generous enough for learning.

- **Free:** 2,000 completions + 50 chat messages per month
- **Pro ($10/mo):** Unlimited completions, premium models, coding agent
- **Free for students** via [GitHub Education Pack](https://education.github.com/pack)

::: tip Recommended for Workshop
If you're a student, get this for free with the Education Pack. Works seamlessly inside VS Code - the editor you'll already be using.
:::

<div class="card-badges">
  <span class="card-badge card-badge-accent">IDE</span>
  <span class="card-badge">Free tier</span>
  <span class="card-badge card-badge-accent">Free for students</span>
</div>

</div>

<div class="project-card">

### Cursor

A VS Code fork with AI built into every interaction. Uses multiple AI models (Claude, GPT, Gemini) through a credit-based system. Powerful but usage-based pricing can add up.

- **Free:** 50 premium requests + 500 free model requests per month
- **Pro ($20/mo):** ~225 Claude or ~500 GPT requests per month
- Credits vary by model - Claude uses credits 2.4x faster than Gemini

<div class="card-badges">
  <span class="card-badge card-badge-accent">IDE</span>
  <span class="card-badge">Free tier</span>
  <span class="card-badge">Multi-model</span>
</div>

</div>

<div class="project-card">

### Windsurf

VS Code-based editor with the best free tier among IDE tools - unlimited autocomplete forever. Cascade mode handles complex multi-step tasks automatically.

- **Free (forever):** Unlimited autocomplete and chat, 25 prompt credits per month
- **Pro ($15/mo):** 500 prompt credits, premium models
- Formerly known as Codeium

<div class="card-badges">
  <span class="card-badge card-badge-accent">IDE</span>
  <span class="card-badge card-badge-accent">Best free tier</span>
  <span class="card-badge">Cascade mode</span>
</div>

</div>

</div>

## CLI Agents

Terminal-based agents for developers comfortable with the command line. They see your whole project and can edit files, run commands, and handle Git.

<div class="card-grid">

<div class="project-card">

### Claude Code

Anthropic's official CLI agent. Reads and edits files across your entire project, runs terminal commands, and handles Git workflows. Powered by **Opus 4.6** and **Sonnet 5** for multi-file changes.

- **Included with Claude Pro** ($20/mo) - not sold separately
- Also available with Max, Team, and Enterprise plans
- Requires Node.js

<div class="card-badges">
  <span class="card-badge card-badge-accent">CLI</span>
  <span class="card-badge">$20/mo (bundled)</span>
</div>

</div>

<div class="project-card">

### Copilot CLI

GitHub's terminal agent that knows your repositories, issues, and pull requests. Uses Claude Sonnet 4.5 by default with other models available. The lowest-cost paid CLI agent at $10/mo.

- **Included with Copilot Pro** ($10/mo) - also Pro+, Business, Enterprise
- Each prompt draws from your plan's premium request allowance
- Supports custom MCP servers for extensibility

<div class="card-badges">
  <span class="card-badge card-badge-accent">CLI</span>
  <span class="card-badge">$10/mo (bundled)</span>
  <span class="card-badge">GitHub-native</span>
</div>

</div>

<div class="project-card">

### Codex CLI

OpenAI's official terminal agent, open-source and built in Rust. Powered by **GPT-5.3-Codex** - the most capable agentic coding model to date, 25% faster than its predecessor.

- **Included with ChatGPT Plus** ($20/mo) - not sold separately
- Also available with ChatGPT Pro ($200/mo) with higher limits
- macOS and Linux support; Windows is experimental

<div class="card-badges">
  <span class="card-badge card-badge-accent">CLI</span>
  <span class="card-badge">$20/mo (bundled)</span>
  <span class="card-badge">Open source</span>
</div>

</div>

<div class="project-card">

### Gemini CLI

Google's free terminal AI agent. The most generous free CLI tool - 1,000 requests per day with **Gemini 3 Flash** and a 1M token context window. Just needs a Google account.

- **Free:** 1,000 requests/day, 60 requests/minute, Gemini 3 Flash
- No subscription or API key needed
- Open-source, requires Node.js

<div class="card-badges">
  <span class="card-badge card-badge-accent">CLI</span>
  <span class="card-badge card-badge-accent">Free</span>
  <span class="card-badge">1M context</span>
</div>

</div>

</div>

## 6 Tips for Working with AI

<div class="pain-point-grid">

<div class="pain-point-card">

### Plan before you code

Before writing a single line, tell the AI what you want to build and ask it to plan the approach. "Plan how to add a scoring system - what files need to change, what's the data flow?" Planning first prevents wasted effort and wrong turns.

</div>

<div class="pain-point-card">

### Be specific

Instead of "improve my code," say "refactor this function to use async/await." Vague requests get vague answers.

</div>

<div class="pain-point-card">

### Give context

Tell the AI what language, framework, and goal you have. "I'm building a Flask REST API and need auth" beats "add authentication."

</div>

<div class="pain-point-card">

### Always review

AI makes confident mistakes. Read and test generated code before committing it. It might use deprecated libraries or miss edge cases.

</div>

<div class="pain-point-card">

### Iterate

If the first response isn't right, refine: "That's close, but also handle the error case." Treat it like a conversation, not a single query.

</div>

<div class="pain-point-card">

### Learn, don't just copy

Ask "Why did you use a dictionary here instead of a list?" Understanding the code makes you a better developer, not just a faster one.

</div>

</div>

## Ready for the Hands-On Session?

Now that you know the landscape, it's time to put these tools to work. Head to the [hands-on guide](/hands-on) to start coding, or check the [setup guide](/setup) if you still need to install tools.
