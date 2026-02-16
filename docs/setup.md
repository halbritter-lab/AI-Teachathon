# Setup Guide

You'll need a few tools ready before the workshop. Don't worry — everything here is free and takes about 15-20 minutes to set up.

::: info Before You Start
You'll need administrator access on your computer to install some of these tools. If you're using a work laptop with restrictions, ask your IT department for help.
:::

## 1. VS Code (SETUP-01)

VS Code is a modern code editor that supports AI assistants and has tons of helpful extensions. We'll use it throughout the workshop.

Download from [code.visualstudio.com/download](https://code.visualstudio.com/download) — pick your operating system and run the installer.

### Recommended Extensions

After installing, open VS Code and install these extensions (click the Extensions icon in the sidebar or press `Ctrl+Shift+X` / `Cmd+Shift+X`):

- **GitHub Copilot** — AI code suggestions (free with GitHub Education Pack)
- **Markdown Preview Enhanced** — for viewing .md files

**Verify:** Open VS Code. If you see the Welcome tab, you're good.

## 2. Git (SETUP-02)

Git is a version control system that tracks changes to your files so you can undo mistakes and collaborate with others. It's like a super-powered undo button for code.

### Windows

Download from [git-scm.com/download/win](https://git-scm.com/download/win) and run the installer. Use the default options — they work fine.

### macOS

Open Terminal (you can find it with Spotlight — press `Cmd+Space` and type "Terminal") and run:

```bash
xcode-select --install
```

This installs Git along with other developer tools. Alternatively, if you have Homebrew installed, run `brew install git`.

### Linux (Ubuntu/Debian)

Open a terminal and run:

```bash
sudo apt-get update && sudo apt-get install git
```

For other Linux distributions, check [git-scm.com/download/linux](https://git-scm.com/download/linux).

### Configure Git (all platforms)

After installing Git, you need to tell it who you are. Open a terminal (or Git Bash on Windows) and run these commands:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Replace "Your Name" with your actual name and use the email you'll use for GitHub.

## 3. GitHub Account (SETUP-03)

GitHub is where code lives online — think of it like Google Drive for code, but with powerful collaboration features. You'll use it to save your work and share it with others.

1. Go to [github.com](https://github.com) and click "Sign up"
2. Use your university email if you have one (this unlocks free tools)
3. Complete the signup process

### GitHub Education Pack (recommended)

If you have a university email (.edu or institutional email), you can get free access to GitHub Copilot and other premium tools:

- Visit [education.github.com/pack](https://education.github.com/pack)
- Sign up with your university email
- This gives you **free GitHub Copilot** access (normally $10/month)

The approval usually happens within a few hours, but can take up to a few days. It's worth applying even if you don't get approved before the workshop — you can use it for future projects.

## 4. Node.js (Optional) (SETUP-04)

Node.js is only needed if you want to use Claude Code (an AI coding tool) during the hands-on session. Most participants won't need this.

::: tip Optional
Node.js is only needed if you want to try Claude Code during the workshop. You can skip this if you're not sure.
:::

Download the LTS version from [nodejs.org](https://nodejs.org) and run the installer. The LTS (Long Term Support) version is the most stable.

## 5. Verification Checklist (SETUP-05)

Let's make sure everything is working. Open a terminal (Terminal app on macOS/Linux, Git Bash or Command Prompt on Windows) and run each command:

| Command            | Expected Output                              |
| ------------------ | -------------------------------------------- |
| `git --version`    | `git version 2.x.x` (any 2.x version is fine) |
| `code --version`   | A version number like `1.x.x`                |
| `node --version`   | `v20.x.x` or higher (only if you installed Node.js) |

If any command says "not found" or doesn't work, try closing and reopening your terminal. Sometimes you need to restart your terminal for new installations to work.

## Ready to Go!

Here's your final checklist:

- [ ] VS Code installed and opens
- [ ] Git installed and `git --version` works
- [ ] Git configured with your name and email
- [ ] GitHub account created
- [ ] (Optional) GitHub Education Pack applied for Copilot access
- [ ] (Optional) Node.js installed

If everything checks out, you're all set for the workshop! If you run into any issues, don't worry — we'll have time at the start of the event to help with setup.
