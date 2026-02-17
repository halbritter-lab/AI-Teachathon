# AI Tools

AI coding tools have evolved incredibly fast over the last few years. Understanding where they came from and how they work helps you pick the right one for what you're trying to do.

## The AI Coding Tool Spectrum

AI coding assistants aren't all the same - they range from simple chatbots to agents that can build entire features on their own. Here's how the field has evolved.

### Level 1: Chat Interfaces (2023-2024)

This is where most people start: you ask a chatbot a question, it gives you code, and you copy-paste it into your editor.

**Tools:** ChatGPT, Claude.ai, Gemini

**Still useful for:**

- Explaining concepts you don't understand
- Debugging error messages
- Writing short code snippets
- Learning new libraries or languages

**Limitation:** It's all manual. You ask, copy, paste, test, repeat. The AI can't see your files or run commands - you're the bridge between the AI and your code.

### Level 2: IDE-Integrated (2024-2025)

Instead of copy-pasting, the AI lives inside your code editor and suggests code as you type.

**Tools:** GitHub Copilot, Cursor, Windsurf

**Best for:**

- Autocomplete on steroids (it predicts what you're about to write)
- Inline suggestions while you code
- Chat panel right in your editor
- Writing boilerplate code faster

**Limitation:** These tools usually work one file at a time. They can't run terminal commands or see your whole project structure - just the file you're editing.

### Level 3: CLI Agents (2025-2026)

CLI agents work directly in your terminal. They can read and edit files across your entire project, run commands, and even use Git.

**Tools:** Claude Code, Gemini CLI, Aider, Codex CLI

**Best for:**

- Multi-file changes (like refactoring across 10 files)
- Running tests and fixing failures
- Git workflows (committing, branching, reviewing diffs)
- Installing packages and debugging environment issues

**Key advance:** The AI sees your whole project, not just one file. It can check if a change in one file breaks something in another file.

### Level 4: Autonomous Agents (Emerging)

Autonomous agents can plan and execute multi-step tasks with minimal supervision. You give them a feature request, and they build it - tests, documentation, everything.

**Tools:** Devin, plan-mode features in Claude Code/Gemini CLI, orchestration plugins (like GSD)

**Still early:** These tools are expensive, sometimes make big mistakes, and work best with experienced developers who can review their work. Think of them as junior developers who need oversight.

**Where it's heading:** The goal is AI as a collaborator - you focus on design decisions, the AI handles implementation details.

::: info During This Workshop
You'll primarily use Level 1 (chat interfaces) and Level 2 (IDE-integrated tools like GitHub Copilot). Level 3 tools are available if you want to try them - check the [setup guide](/setup) for Node.js installation instructions.
:::

## Tool Comparison

Here's a closer look at the tools you're most likely to encounter. Pricing is accurate as of February 2026.

### ChatGPT / GPT-4

**Type:** Chat
**Best for:** Explaining concepts, debugging errors, writing short snippets
**Cost:** Free tier (GPT-4o mini) / $20/month Plus (GPT-4o) / $200/month Pro (GPT-4o and o1-pro)
**What you get:**

- Free tier: GPT-4o mini with rate limits
- Plus: GPT-4o with higher limits, access to Codex CLI (terminal agent)
- Pro: Unlimited GPT-4o, access to o1-pro (advanced reasoning)

### Claude.ai

**Type:** Chat
**Best for:** Longer conversations, complex explanations, code review
**Cost:** Free tier / $20/month Pro
**What you get:**

- Free tier: Claude Sonnet (good quality, rate limited)
- Pro: Claude Opus 4.6 (best model), ~45 prompts per 5-hour window, includes Claude Code CLI access

::: tip Recommended for Workshop
Claude.ai's free tier is great for learning. The explanations are detailed and easy to follow.
:::

### Gemini (Google)

**Type:** Chat
**Best for:** Quick questions, free access to multimodal AI
**Cost:** Free with any Google account
**What you get:**

- Gemini 2.0 Flash (fast, good quality)
- Gemini 2.0 Pro (advanced reasoning, higher rate limits)
- Access to Gemini CLI (terminal agent)

::: tip Recommended for Workshop
Gemini is completely free and works well. Great option if you don't want to pay for other tools.
:::

### GitHub Copilot

**Type:** IDE-integrated
**Best for:** Autocomplete while coding, inline suggestions
**Cost:** Free tier (2,000 completions/month) / $10/month Pro / Free for students via GitHub Education Pack
**What you get:**

- AI code suggestions as you type
- Chat panel in VS Code
- Multi-file context awareness (Pro tier)

::: tip Recommended for Workshop
If you're a student, get this for free with the GitHub Education Pack. It's the most popular AI coding assistant and works great for beginners.
:::

### Cursor

**Type:** IDE-integrated
**Best for:** All-in-one AI editor (based on VS Code)
**Cost:** Free tier (limited usage) / $20/month Pro
**What you get:**

- VS Code fork with built-in AI
- Chat with your codebase
- AI-powered autocomplete and refactoring
- Note: Usage-based costs can exceed the $20 subscription if you use it heavily

### Windsurf

**Type:** IDE-integrated
**Best for:** AI pair programming with flow mode
**Cost:** Free tier / $15/month Pro
**What you get:**

- VS Code-based editor with AI co-pilot
- Flow mode (AI suggests next steps)
- Cascade mode (AI handles complex multi-step tasks)

### Claude Code

**Type:** CLI agent
**Best for:** Multi-file refactoring, running tests, Git workflows
**Cost:** Included with Claude Pro ($20/month)
**What you get:**

- Terminal-based AI agent
- Can read/edit files across your project
- Runs commands and handles Git
- Great for experienced developers

::: tip Recommended for Power Users
If you're comfortable with the command line and want to try an AI agent, Claude Code is excellent. Included with Claude Pro subscription.
:::

### Gemini CLI

**Type:** CLI agent
**Best for:** Free terminal AI agent
**Cost:** Free with any Google account
**What you get:**

- Terminal-based AI agent (similar to Claude Code)
- Can read/edit files and run commands
- Completely free (no subscription needed)

::: tip Recommended as Free CLI Option
Want to try a CLI agent without paying? Gemini CLI is your best bet. Requires Node.js installation (see setup guide).
:::

### Aider

**Type:** CLI agent
**Best for:** Open-source AI coding assistant
**Cost:** Free (bring your own API key)
**What you get:**

- Open-source terminal AI tool
- Works with multiple AI providers (OpenAI, Anthropic, etc.)
- Note: You need to set up and pay for API keys separately

### Codex CLI (OpenAI)

**Type:** CLI agent
**Best for:** Terminal agent with GPT-4 models
**Cost:** Included with ChatGPT Plus ($20/month), temporary free tier available
**What you get:**

- Terminal-based AI agent using GPT models
- Can edit files and run commands
- Currently in beta

### Autonomous Agents

Tools like **Devin** ($20/month) and orchestration plugins are emerging, but they're still experimental. These agents can plan and build entire features independently, but they require developer experience to use effectively. They sometimes make expensive mistakes or go down the wrong path, so you need to supervise their work closely.

We mention them for completeness, but for this workshop (and most day-to-day coding), focus on Levels 1-3.

::: tip Not Sure Where to Start?
**If you're a student:** Get GitHub Copilot for free with the GitHub Education Pack.

**Want to try a CLI agent?** Gemini CLI is free with any Google account.

**Already have a Claude Pro subscription?** Try Claude Code - it's included.

**Just want to learn?** Use the free tiers of ChatGPT, Claude.ai, or Gemini.
:::

## 5 Tips for Working with AI Coding Tools

### 1. Start with a specific question, not "make this better"

Instead of "improve my code," try "refactor this function to use async/await instead of callbacks." The more specific you are, the better the AI can help. Vague requests get vague answers.

### 2. Give context about your project

Tell the AI what language you're using, what framework, and what you're trying to build. For example: "I'm building a REST API in Python with Flask. I need to add user authentication." Context helps the AI give you relevant suggestions instead of generic advice.

### 3. Review AI output before using it

AI makes confident mistakes. It might suggest code that looks right but has bugs, uses deprecated libraries, or doesn't match your project's style. Always read and test AI-generated code before committing it.

### 4. Iterate - if the first response isn't right, refine your prompt

If the AI gives you something that's close but not quite right, don't start over. Say "that's good, but can you change X to Y?" or "this doesn't handle error cases - can you add error handling?" Treat it like a conversation.

### 5. Use AI for learning, not just output

Don't just copy-paste code without understanding it. Ask the AI to explain what it wrote: "Can you walk me through how this works?" or "Why did you use a dictionary here instead of a list?" You'll learn faster and write better code.

## Ready for the Hands-On Session?

Now that you know the landscape - from simple chatbots to autonomous agents - it's time to put these tools to work. Head to the [hands-on guide](/hands-on) to start coding, or check out the [setup guide](/setup) if you need help installing any of these tools.
