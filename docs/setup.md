# Setup Guide

You'll need a few tools ready before the workshop. Don't worry - everything here is free and takes about **15-20 minutes** to set up.

::: info No Admin Rights? No Problem!
If you're on a Charite-managed laptop (or any machine where you can't install software the normal way), jump straight to the [No Admin Rights?](#no-admin-rights-use-scoop) section - we have you covered.
:::

<div class="quick-links">
  <a href="#_1-vs-code">VS Code</a>
  <a href="#_2-git">Git</a>
  <a href="#_3-github-account">GitHub Account</a>
  <a href="#node-js-optional">Node.js (Optional)</a>
  <a href="#_5-google-account-optional">Google (Optional)</a>
  <a href="#existing-ai-subscriptions">AI Subscriptions</a>
  <a href="#no-admin-rights-use-scoop">No Admin?</a>
  <a href="#verification-checklist">Checklist</a>
</div>

## What You'll Need

<div class="card-grid">
  <div class="project-card">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <strong>VS Code</strong>
      <span class="time-badge">~5 min</span>
    </div>
    <p style="margin:0.5rem 0 0; font-size:0.95rem; color:var(--vp-c-text-2);">
      A modern code editor with built-in AI support. This is where you'll write and edit code during the workshop.
    </p>
    <div class="card-badges">
      <span class="card-badge card-badge-accent">Required</span>
    </div>
  </div>
  <div class="project-card">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <strong>Git</strong>
      <span class="time-badge">~5 min</span>
    </div>
    <p style="margin:0.5rem 0 0; font-size:0.95rem; color:var(--vp-c-text-2);">
      Version control that tracks your changes - like a super-powered undo button for code.
    </p>
    <div class="card-badges">
      <span class="card-badge card-badge-accent">Required</span>
    </div>
  </div>
  <div class="project-card">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <strong>GitHub Account</strong>
      <span class="time-badge">~5 min</span>
    </div>
    <p style="margin:0.5rem 0 0; font-size:0.95rem; color:var(--vp-c-text-2);">
      Where code lives online - like Google Drive for code, with powerful collaboration features.
    </p>
    <div class="card-badges">
      <span class="card-badge card-badge-accent">Required</span>
    </div>
  </div>
  <div class="project-card">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <strong>Node.js</strong>
      <span class="time-badge">~5 min</span>
    </div>
    <p style="margin:0.5rem 0 0; font-size:0.95rem; color:var(--vp-c-text-2);">
      Only needed if you want to try Claude Code during the hands-on session.
    </p>
    <div class="card-badges">
      <span class="card-badge">Optional</span>
    </div>
  </div>
  <div class="project-card">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <strong>Google Account</strong>
      <span class="time-badge">~2 min</span>
    </div>
    <p style="margin:0.5rem 0 0; font-size:0.95rem; color:var(--vp-c-text-2);">
      Needed for Gemini CLI - Google's free AI coding assistant that runs in your terminal.
    </p>
    <div class="card-badges">
      <span class="card-badge">Optional</span>
    </div>
  </div>
  <div class="project-card">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <strong>AI Subscriptions</strong>
      <span class="time-badge">~1 min</span>
    </div>
    <p style="margin:0.5rem 0 0; font-size:0.95rem; color:var(--vp-c-text-2);">
      Already pay for Claude Pro, ChatGPT Plus, or similar? Bring your login - you'll get more out of the workshop.
    </p>
    <div class="card-badges">
      <span class="card-badge">Optional</span>
    </div>
  </div>
</div>

## 1. VS Code

A free code editor from Microsoft that supports AI assistants and has tons of helpful extensions. We'll use it throughout the workshop.

::: code-group

```powershell [Windows]
winget install Microsoft.VisualStudio.Code
```

```bash [macOS]
brew install --cask visual-studio-code
```

```bash [Linux (Ubuntu/Debian)]
sudo snap install code --classic
```

:::

**Or download manually:** Go to [code.visualstudio.com/download](https://code.visualstudio.com/download), pick your operating system, and run the installer.

::: tip Windows Without Admin Rights?
Download the **User Installer** from the VS Code download page (look for "User Installer" under Windows). It installs to your user folder and doesn't need admin access.
:::

**Verify:** Open VS Code. If you see the Welcome tab, you're good.

### Recommended Extensions

After installing, open VS Code and install these extensions (click the Extensions icon in the sidebar or press `Ctrl+Shift+X` / `Cmd+Shift+X`):

- **GitHub Copilot** - AI code suggestions (free with GitHub Education Pack)
- **Markdown Preview Enhanced** - for viewing .md files

<details>
<summary><strong>Troubleshooting: VS Code</strong></summary>

- **"winget is not recognized"** - Winget comes with modern Windows 10/11. If you don't have it, download VS Code manually from the website instead.
- **VS Code opens but looks wrong** - Try `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac), type "Color Theme", and pick a theme you like.
- **Can't install extensions** - Make sure you have an internet connection. If you're behind a corporate proxy, see [VS Code proxy settings](https://code.visualstudio.com/docs/setup/network).

</details>

## 2. Git

Git tracks changes to your files so you can undo mistakes and collaborate with others. It's the standard tool for version control in software development.

::: code-group

```powershell [Windows]
winget install Git.Git
```

```bash [macOS]
xcode-select --install
```

```bash [Linux (Ubuntu/Debian)]
sudo apt-get update && sudo apt-get install git
```

:::

**Windows alternative:** Download from [git-scm.com/download/win](https://git-scm.com/download/win) and run the installer. Use the default options - they work fine.

**macOS alternative:** If you have Homebrew, run `brew install git`.

**Linux:** For other distributions, check [git-scm.com/download/linux](https://git-scm.com/download/linux).

**Verify:** Open a terminal (or Git Bash on Windows) and run:

```bash
git --version
```

You should see something like `git version 2.x.x`. Any 2.x version is fine.

### Configure Git (all platforms)

After installing, tell Git who you are. Open a terminal and run:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Replace "Your Name" with your actual name and use the email you'll use for GitHub.

<details>
<summary><strong>Troubleshooting: Git</strong></summary>

- **"git is not recognized"** - Close and reopen your terminal. If it still doesn't work, you may need to restart your computer.
- **Windows: "winget is not recognized"** - Download Git manually from [git-scm.com](https://git-scm.com/download/win) instead.
- **macOS: Xcode install stuck** - The download can be large. Be patient, or try `brew install git` if you have Homebrew.
- **Permission errors on Linux** - Make sure you include `sudo` before the install command.

</details>

## 3. GitHub Account

GitHub is where code lives online. You'll use it to save your work and share it with others.

1. Go to [github.com](https://github.com) and click "Sign up"
2. Use your university email if you have one (this unlocks free tools)
3. Complete the signup process

### GitHub Education Pack (recommended)

If you have a university email (.edu or institutional email), you can get free access to GitHub Copilot and other premium tools:

- Visit [education.github.com/pack](https://education.github.com/pack)
- Sign up with your university email
- This gives you **free GitHub Copilot** access (normally $10/month)

The approval usually happens within a few hours, but can take up to a few days. It's worth applying even if you don't get approved before the workshop - you can use it for future projects.

## 4. Node.js (Optional) {#node-js-optional}

::: tip Optional
Node.js is only needed if you want to try **Claude Code** during the workshop. You can safely skip this step if you're not sure.
:::

Node.js lets you run JavaScript outside of a browser. Claude Code needs it to work.

::: code-group

```powershell [Windows]
winget install OpenJS.NodeJS.LTS
```

```bash [macOS]
brew install node@22
```

```bash [Linux (Ubuntu/Debian)]
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
```

:::

**Or download manually:** Go to [nodejs.org](https://nodejs.org) and download the LTS (Long Term Support) version.

**Verify:** Open a terminal and run:

```bash
node --version
```

You should see `v20.x.x` or higher.

<details>
<summary><strong>Troubleshooting: Node.js</strong></summary>

- **"node is not recognized"** - Close and reopen your terminal. If it still doesn't work, restart your computer.
- **Old version showing** - You may have a previous installation. Uninstall the old version first, then install the new one.
- **Linux permission errors** - Don't install Node.js with `sudo npm`. Use the NodeSource setup script shown above, or use [nvm](https://github.com/nvm-sh/nvm) instead.

</details>

## 5. Google Account (Optional)

::: tip Optional
A Google account is only needed if you want to try **Gemini CLI** - Google's free AI coding assistant that runs in your terminal. You can skip this if you're not sure.
:::

Gemini CLI is an open-source command-line AI tool from Google. It's free to use and just needs a Google account to authenticate.

### Already Have a Google Account?

If you use Gmail, Google Drive, or any Google service, you're all set. You'll sign in with that account when you first run Gemini CLI during the workshop.

### Create a Google Account

If you don't have one yet:

1. Go to [accounts.google.com/signup](https://accounts.google.com/signup)
2. Fill in your details and complete the signup
3. No special plan or subscription needed - the free tier is enough

### Install Gemini CLI

Gemini CLI requires Node.js (see [step 4](#node-js-optional) above). Once Node.js is installed:

```bash
npm install -g @google/gemini-cli
```

::: info No Install Needed
You can also run Gemini CLI without installing it globally using `npx`:

```bash
npx @google/gemini-cli
```

:::

**Verify:** Run `gemini --version` in your terminal. On first launch, it will open a browser window to sign in with your Google account.

<details>
<summary><strong>Troubleshooting: Gemini CLI</strong></summary>

- **"npm is not recognized"** - You need to install Node.js first (see [step 4](#node-js-optional)).
- **Browser doesn't open for login** - Copy the URL shown in the terminal and paste it into your browser manually.
- **Permission errors during install** - On macOS/Linux, try `sudo npm install -g @google/gemini-cli`. On Windows, run your terminal as administrator or use the `npx` approach instead.

</details>

## Existing AI Subscriptions (Optional) {#existing-ai-subscriptions}

::: tip Optional
This is not something you need to set up - just a reminder to bring what you already have!
:::

If you already pay for an AI assistant, **bring your login credentials** to the workshop. A paid subscription gives you access to more powerful models and higher usage limits, which can make the hands-on session more productive.

Subscriptions that are useful for the workshop:

- **Claude Pro / Team** ([claude.ai](https://claude.ai)) - access to Claude's most capable models and Claude Code
- **ChatGPT Plus / Team** ([chat.openai.com](https://chat.openai.com)) - access to GPT-4o and advanced features
- **GitHub Copilot** (free with [Education Pack](#github-education-pack-recommended)) - AI code completion in VS Code
- **Google Gemini Advanced** ([gemini.google.com](https://gemini.google.com)) - enhanced Gemini models
- **Cursor Pro** ([cursor.com](https://cursor.com)) - AI-powered code editor

**Before the workshop:** Make sure you can log in to your account. That's it - no other setup needed.

::: info No Subscription? No Problem!
All the core workshop activities work with **free tools**. Paid subscriptions are a nice bonus, not a requirement.
:::

## No Admin Rights? Use Scoop {#no-admin-rights-use-scoop}

<div class="featured-card">

**Scoop** is a command-line installer for Windows that doesn't need admin rights. It installs everything to your user folder.

### Install Scoop

Open **PowerShell** (not Command Prompt) and run:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

::: warning ExecutionPolicy Blocked?
If your IT department has locked down PowerShell execution policies, the first command may fail. Try this instead:

```powershell
Invoke-RestMethod -Uri https://get.scoop.sh -OutFile install.ps1
powershell -ExecutionPolicy Bypass -File install.ps1
Remove-Item install.ps1
```

If that also fails, use the **VS Code User Installer** (see the VS Code section above) and download Git manually from [git-scm.com](https://git-scm.com/download/win) using the "Portable" version.
:::

### Install Workshop Tools with Scoop

Once Scoop is installed, you can install everything you need in one go:

```powershell
scoop bucket add extras
scoop install git extras/vscode nodejs-lts
```

**Verify:** Run `scoop list` to see what's installed.

</div>

## Verification Checklist

Let's make sure everything is working. Open a terminal (Terminal on macOS/Linux, Git Bash or PowerShell on Windows) and run each command:

| Command          | Expected Output                                     |
| ---------------- | --------------------------------------------------- |
| `git --version`  | `git version 2.x.x` (any recent version works)      |
| `code --version` | A version number like `1.x.x`                       |
| `node --version` | `v20.x.x` or higher (only if you installed Node.js) |

If any command says "not found", try closing and reopening your terminal. Sometimes you need to restart for new installations to be recognized.

## Ready to Go

Here's your final checklist:

- [ ] VS Code installed and opens
- [ ] Git installed and `git --version` works
- [ ] Git configured with your name and email
- [ ] GitHub account created
- [ ] (Optional) GitHub Education Pack applied for Copilot access
- [ ] (Optional) Node.js installed
- [ ] (Optional) Google account ready for Gemini CLI
- [ ] (Optional) AI subscription login tested (Claude, ChatGPT, etc.)

If everything checks out, you're all set for the workshop! If you run into any issues, don't worry - **we'll have time at the start of the event to help with setup**.
