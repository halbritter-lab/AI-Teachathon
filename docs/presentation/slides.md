---
marp: true
theme: teachathon
class: invert
size: 16:9
paginate: true
header: 'AI-Teachathon | Halbritter Lab'
footer: 'Git, GitHub and AI Tools'
---

<!-- _class: lead -->
<!-- _paginate: false -->

# Git, GitHub and AI Tools

AI-Teachathon | Halbritter Lab / CeRKiD
February 17, 2025

<!-- Welcome everyone. We're going to spend the next 30 minutes talking about version control, AI tools, and why they work so well together. Then we'll jump into hands-on coding. -->

---

# We've All Been Here

final_v3.docx
final_v3_REALLY_final.docx
final_v3_REALLY_final_reviewed.docx
final_v3_REALLY_final_reviewed_comments_addressed.docx

<!-- This is the traditional approach to version control. You know this system. It works until it doesn't. The problem: which version has the correct analysis? Which one did you send to the collaborator? -->

---

# There's a Better Way

* And it's not just about avoiding filename chaos
* It's the foundation for working effectively with AI
* Version control lets you experiment, fail safely, and iterate fast

<!-- That's the hook. Version control is how you unlock AI's potential. You need to track what the AI changed, roll back when it makes mistakes, and maintain a clear history of your project. -->

---

# Real Consequences

**Scenario:** You need to reproduce results from 6 months ago.

* Which version of the script did you use?
* What were the exact parameters?
* Which dataset version?

**Without version control:** Good luck.
**With version control:** `git checkout` and you're there.

<!-- This is not hypothetical. Reviewers ask for this. Reproducibility is essential. Version control makes it possible. -->

---

<!-- _class: lead -->

# Part 1: Git Basics

---

# What is a Repository?

Think of it as a **lab notebook for your code**.

* Every change is tracked automatically
* You can see who changed what and when
* You can jump back to any previous state

A repository (or "repo") is just a folder with a `.git` directory that stores the history.

<!-- From here on, we use real terms, not research analogies. A repo is a folder with history. That's it. -->

---

# Commits: Snapshots of Your Project

* A **commit** is a save point
* It captures the exact state of all files at that moment
* Each commit has a unique ID and a message describing what changed

Think of commits as save points in a game. You can always go back.

<!-- Commits are the building blocks of Git. You make changes, stage them, commit them with a message. Simple. -->

---

# Why Commit Messages Matter

**Bad commit message:**
"fixed stuff"

**Good commit message:**
"fix: correct gene ID validation to handle ENSG format"

* Commit messages tell the story of your project
* They help you (and others) understand what changed and why
* Write them for your future self

<!-- You'll thank yourself later. Trust me. -->

---

# Branches: Parallel Experiments

* A **branch** is like running a parallel experiment
* The main branch stays safe and stable
* You work on your branch, test your changes, then merge when ready

**Example:**
* `main` branch: the stable version
* `add-visualization` branch: your new feature

<!-- This is the second and last research analogy. After this, we use real terms. Branches let you try things without breaking the main project. -->

---

# Pull Requests: Proposing Changes

* You've finished work on your branch
* Now you want to merge it into `main`
* You open a **pull request** (PR)

**What happens:**
* Someone reviews your code
* You discuss, make changes if needed
* Once approved, you merge

This is how teams collaborate.

<!-- PRs are where collaboration happens. Code review. Discussion. Then merge. This is the workflow you'll follow today. -->

---

# Git vs GitHub

**Git:**
* The version control tool on your computer
* Tracks changes, creates commits, manages branches
* Works offline

**GitHub:**
* A website for hosting Git repositories
* Enables collaboration, pull requests, issue tracking
* Where you share your code

<!-- Brief, clear distinction. Git is the tool. GitHub is the platform. You need both. -->

---

<!-- _class: lead -->

# Part 2: Why Version Control Matters with AI

---

# AI Generates Code Fast

* AI tools can write hundreds of lines of code in seconds
* You need to track what changed and why
* You need to review AI-generated code carefully

**Version control gives you:**
* A clear history of what the AI added
* The ability to roll back if something breaks
* Confidence to try bold experiments

<!-- AI is powerful but not perfect. Version control is your safety net. -->

---

# Experiment Freely, Fail Safely

* AI makes suggestions. Some are great. Some are wrong.
* With version control, you can try anything
* If it doesn't work, `git reset` and you're back to safety

**The combination: Git + AI = you can be bold**

<!-- This is the key insight. Version control unlocks AI's potential because you can experiment without fear. -->

---

<!-- _class: lead -->

# Part 3: The AI Revolution Timeline

---

# 2022-2026: Rapid Acceleration

* **November 2022:** ChatGPT launches, goes viral
* **2022-2023:** GitHub Copilot gains adoption
* **2023:** GPT-4, Claude, Gemini released
* **2024-2025:** Cursor, Claude Code, Windsurf emerge
* **2026:** AI writes significant portions of production code

**The pace is accelerating. That's why we're here today.**

<!-- This is moving fast. Two years ago, GitHub Copilot was cutting edge. Now we have AI agents that write entire features. You need to keep up. -->

---

<!-- _class: lead -->

# Part 4: The Tool Landscape

---

# The Spectrum of AI Coding Tools

**Three categories:**
1. **Chat-based:** ChatGPT, Claude.ai
2. **IDE sidebar:** GitHub Copilot, Cursor
3. **CLI agents:** Claude Code, Codex CLI

Each has strengths. Choose based on your workflow.

<!-- This is the overview. Next slides break down each category. -->

---

# Chat-Based Tools

**Examples:** ChatGPT, Claude.ai, Gemini

**Good for:**
* Explaining concepts
* Writing small code snippets
* Debugging errors
* Planning architecture

**Limitation:** You copy/paste code manually.

<!-- Chat tools are great for learning and quick questions. Not ideal for writing large codebases because of the copy/paste friction. -->

---

# IDE Sidebar Tools

**Examples:** GitHub Copilot, Cursor, Cody

**Good for:**
* Autocomplete while you type
* Inline suggestions
* Editing existing code
* Staying in your editor

**Benefit:** Tight integration with your workflow.

<!-- Sidebar tools are the sweet spot for many developers. Suggestions appear as you type. You stay in your editor. This is what most people use daily. -->

---

# CLI Agent Tools

**Examples:** Claude Code, Codex CLI, Aider

**Good for:**
* Autonomous tasks ("build a login page")
* Multi-file refactoring
* Following complex instructions
* Running terminal commands

**Tradeoff:** Less control, more automation.

<!-- CLI agents are powerful but require trust. They can modify multiple files, run commands, even commit to Git. Advanced users love them. Beginners should start with chat or sidebar. -->

---

# Choose Your Tool

**For today's hands-on session:**
* You can use any tool you prefer
* Chat-based is fine
* Sidebar is fine
* CLI is fine

**No single right answer.** Use what feels comfortable.

<!-- The goal is to learn the workflow, not master a specific tool. Pick what works for you. -->

---

# Where to Learn More

**The AI Tools page on the course site has:**
* Detailed comparisons
* Setup instructions for each tool
* Pros and cons
* Recommendations based on experience level

**Link:** https://berntpopp.github.io/AI-Teachathon/

<!-- We won't cover every detail now. The site has everything. Bookmark it. -->

---

<!-- _class: lead -->

# Part 5: What We'll Do Today

---

# KidneyQuest: The Project

**A simple browser game where the CeRKiD zebra collects genes.**

* Built with HTML, CSS, and JavaScript
* Runs in your browser, no server needed
* Simple enough to complete in 2 hours
* Real enough to teach you the workflow

<!-- This is the hands-on project. It's simple but it covers all the concepts: cloning, branching, coding with AI, opening a PR, reviewing, and merging. -->

---

# The Workflow You'll Follow

1. **Clone the repo:** Get the code on your computer
2. **Create a branch:** Work safely without affecting main
3. **Code with AI assistance:** Add a feature or fix a bug
4. **Open a Pull Request:** Propose your changes
5. **Review and merge:** Collaborate with a partner

**Each step is simple. This is easier than it looks.**

<!-- This is the workflow. Five steps. You'll repeat this pattern for the rest of your career. It's the foundation of modern software development. -->

---

# Step 1: Clone the Repo

**Command:** `git clone https://github.com/berntpopp/KidneyQuest.git`

This downloads the project to your computer.

<!-- We'll walk through this together. No one gets left behind. -->

---

# Step 2: Create a Branch

**Command:** `git checkout -b add-new-gene`

Now you're working on your own branch. Main is safe.

<!-- Branching is the key to safe experimentation. You can't break main when you're on your own branch. -->

---

# Step 3: Code with AI

* Ask your AI tool to add a feature
* Review the code it generates
* Test it in the browser
* Iterate until it works

**You are the pilot. AI is the copilot.**

<!-- AI will make mistakes. That's normal. Your job is to review, test, and iterate. You're in control. -->

---

# Step 4: Open a Pull Request

* Push your branch to GitHub
* Open a PR from your branch to main
* Write a description of what you changed

**This is where collaboration happens.**

<!-- PRs are the core of team workflows. You'll do this dozens of times in the hands-on session. Practice makes perfect. -->

---

# Step 5: Review and Merge

* A partner reviews your PR
* You discuss, make changes if needed
* Once approved, merge into main

**Congratulations. You've contributed to the project.**

<!-- This is the full cycle. Clone, branch, code, PR, merge. You'll repeat this pattern for every feature. -->

---

<!-- _class: lead -->

# Let's Get Started!

**Course site:** https://berntpopp.github.io/AI-Teachathon/

<!-- Time to jump into the hands-on session. You've got this. -->
