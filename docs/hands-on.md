# Hands-On Guide

This is the main event. You'll work through a real coding workflow using Git, GitHub, and AI tools. There are two phases - first we'll practice together, then you'll work on your own project. Work at your own pace; instructors are here to help.

::: info Before You Start
Make sure you've completed the [setup guide](/setup). You'll need VS Code, Git, and a GitHub account ready to go.
:::

## How This Session Works

We're using a two-phase approach to help you learn the Git workflow step by step:

- **Phase 1: Follow Along** - Everyone works on the AI-Teachathon repository together. This teaches the Git workflow in a safe, familiar environment (you've already seen this website).
- **Phase 2: On Your Own** - Graduate to KidneyQuest or your own project. Same workflow, new challenge.

## Phase 1: Follow Along

We'll start with this website's repository - the one you've been reading. You'll fork it, make a small change, and submit a pull request. This is the exact workflow used by developers and researchers worldwide.

### Step 1: Fork the Repository

A fork creates your personal copy of the repository on GitHub. This way you can make changes without affecting the original project.

1. Go to [github.com/berntpopp/AI-Teachathon](https://github.com/berntpopp/AI-Teachathon)
2. Click the "Fork" button in the top-right corner
3. GitHub will create a copy at `github.com/YOUR-USERNAME/AI-Teachathon`

**Verify it worked:**

You should see your fork listed on your GitHub profile at `github.com/YOUR-USERNAME?tab=repositories`.

::: details If something went wrong

**Problem:** Can't find the Fork button
**Solution:** Make sure you're signed in to GitHub. The Fork button only appears when you're logged in.

**Problem:** Fork button is grayed out
**Solution:** You might already have a fork. Check your repositories list - if you see "AI-Teachathon" there, you're all set.

:::

Now you have your own copy to work with. Let's get it on your computer.

### Step 2: Clone Your Fork

Cloning downloads the repository to your local machine so you can edit the files.

```bash
git clone https://github.com/YOUR-USERNAME/AI-Teachathon.git
cd AI-Teachathon
```

Replace `YOUR-USERNAME` with your actual GitHub username.

**Verify it worked:**

```bash
git remote -v
```

You should see your fork's URL listed as `origin`.

::: details If something went wrong

**Problem:** "repository not found" error
**Solution:** Double-check the URL. Make sure you're using YOUR username, not "berntpopp". The URL should be `https://github.com/YOUR-USERNAME/AI-Teachathon.git`.

**Problem:** Authentication error (username/password prompt)
**Solution:** GitHub no longer accepts passwords for Git operations. Use a personal access token instead:

1. Go to GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Generate a new token with "repo" scope
3. Use the token as your password when prompted

Alternatively, use GitHub CLI (`gh auth login`) to handle authentication.

**Problem:** Permission denied (Windows)
**Solution:** Make sure you're running Git Bash or Command Prompt as yourself, not as administrator. Git might not find your SSH keys when running as admin.

:::

::: tip Platform Note
These commands work the same on Windows (Git Bash or Command Prompt), macOS, and Linux. Just make sure you're in a terminal window.
:::

### Step 3: Create a Feature Branch

Branches let you work on changes without affecting the main codebase. Think of it as making a copy of the project where you can experiment safely.

```bash
git checkout -b feature/add-your-name
```

This creates a new branch called `feature/add-your-name` and switches to it.

**Verify it worked:**

```bash
git branch
```

You should see an asterisk next to `feature/add-your-name`, showing it's your active branch.

::: details If something went wrong

**Problem:** "not a git repository" error
**Solution:** You're not in the AI-Teachathon directory. Run `cd AI-Teachathon` to enter the project folder, then try again.

**Problem:** Branch already exists
**Solution:** You already have a branch with that name. Either use a different name (`feature/my-contribution`) or delete the old branch with `git branch -d feature/add-your-name` and try again.

:::

Now you have a safe place to make changes. Let's add something.

### Step 4: Make a Change with AI Help

Time to edit a file. We'll add your idea to the ideas page - a small contribution to show how the workflow works.

Open the project in VS Code:

```bash
code .
```

The `.` means "current directory" - this opens the entire AI-Teachathon folder.

Now navigate to `docs/ideas.md` in VS Code's file explorer. This is where participants can suggest improvements or new features for future workshops.

Here's where your AI tool shines. Instead of writing the markdown yourself, ask your AI assistant to help. Try this prompt:

```text
I'm contributing to a VitePress website about an AI workshop. I want to add my idea to the ideas page. The file is docs/ideas.md and it uses markdown bullet points. My idea is: [describe your idea - maybe a workshop topic, a tool to cover, or a format suggestion].

Show me what markdown to add to the file.
```

Copy the AI's suggestion into `docs/ideas.md`, save the file (Ctrl+S or Cmd+S), and you've made your first change.

::: tip Using AI Effectively
Notice how the prompt gives context (VitePress website, workshop topic), specifies the format (markdown bullet points), and asks for a specific output (what to add). This helps the AI give you exactly what you need. We'll cover more prompting tips later.
:::

::: details If something went wrong

**Problem:** VS Code won't open with `code .` command
**Solution:** VS Code might not be in your PATH. On Windows, you can open VS Code from the Start menu, then use File > Open Folder. On macOS, open VS Code and run "Shell Command: Install 'code' command in PATH" from the Command Palette (Cmd+Shift+P).

**Problem:** Can't find `docs/ideas.md` in VS Code
**Solution:** Make sure you opened the entire AI-Teachathon folder, not just a single file. The folder structure should show in the left sidebar. If you don't see it, click the Explorer icon (top-left) or press Ctrl+Shift+E (Cmd+Shift+E on macOS).

**Problem:** AI suggested code instead of markdown
**Solution:** Refine your prompt to specify "markdown bullet points" or "plain text entry". You can also show the AI an example from the existing file.

:::

### Step 5: Stage Your Changes

Staging prepares your changes for the next commit. It's like packing items into a box before shipping it - you choose what to include.

```bash
git add docs/ideas.md
```

This tells Git you want to include changes to `docs/ideas.md` in your next commit.

**Verify it worked:**

```bash
git status
```

You should see `docs/ideas.md` listed in green under "Changes to be committed".

::: details If something went wrong

**Problem:** "nothing to commit" message
**Solution:** You might have forgotten to save the file in VS Code. Check if there's a dot next to the filename in VS Code's tab - that means unsaved changes. Press Ctrl+S (or Cmd+S) to save, then try `git add` again.

**Problem:** File shows as "modified" but not "staged"
**Solution:** You might have mistyped the filename. Git is case-sensitive. Try `git add docs/ideas.md` exactly as written.

:::

Your change is now staged and ready to commit.

### Step 6: Commit Your Changes

A commit is like a save point in a game - it records your changes with a description of what you did and why.

```bash
git commit -m "Add idea for future workshop improvements"
```

Replace the message with a brief description of what you changed. Good commit messages are clear and concise.

**Verify it worked:**

```bash
git log --oneline
```

You should see your commit message at the top of the list.

::: details If something went wrong

**Problem:** "Please tell me who you are" error
**Solution:** Git needs to know your name and email. Run these commands (replace with your actual info):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Then try the commit again. See the [setup guide](/setup) for more details.

**Problem:** Commit message editor opens instead
**Solution:** You might have forgotten the `-m` flag. If a text editor opens (like Vim or Nano), you can exit by typing `:q` and pressing Enter (Vim) or Ctrl+X (Nano). Then try the command again with `-m "your message"`.

:::

Your change is now saved in your local Git history. Let's send it to GitHub.

### Step 7: Push to GitHub

Pushing sends your local commits to your fork on GitHub. This makes your changes visible online and backs them up.

```bash
git push origin feature/add-your-name
```

This uploads your `feature/add-your-name` branch to your fork (called `origin`).

**Verify it worked:**

Visit your fork on GitHub (`github.com/YOUR-USERNAME/AI-Teachathon`) and look for a yellow banner saying "feature/add-your-name had recent pushes". You should also see the branch in the branches dropdown.

::: details If something went wrong

**Problem:** "Updates were rejected" error
**Solution:** Someone (maybe you in a previous attempt) already pushed to this branch. Try pulling first: `git pull origin feature/add-your-name`, then push again.

**Problem:** Authentication error
**Solution:** Same as Step 2 - use a personal access token instead of your password, or set up GitHub CLI with `gh auth login`.

**Problem:** "src refspec does not match any"
**Solution:** You might not have committed anything yet. Go back to Step 6 and make sure `git log` shows your commit.

:::

Your changes are now on GitHub. Time to ask the original project to include them.

### Step 8: Open a Pull Request

A pull request (PR) asks the original repository to review and merge your changes. It's like saying "Hey, I improved something - want to include it?"

1. Go to your fork on GitHub
2. You should see a green "Compare & pull request" button - click it
3. Add a title like "Add workshop improvement idea"
4. Write a brief description of what you changed and why
5. Click "Create pull request"

**Verify it worked:**

You should be redirected to the pull request page, which shows your changes and a discussion thread. The project maintainers can now review your contribution.

::: details If something went wrong

**Problem:** Can't find "Compare & pull request" button
**Solution:** Click the "Pull requests" tab at the top, then click "New pull request". Change the "head repository" to your fork and the "compare" branch to `feature/add-your-name`.

**Problem:** "No changes" message
**Solution:** Make sure you pushed to the correct branch. Check that your branch name matches what you created in Step 3.

**Problem:** Pull request shows changes you didn't make
**Solution:** Your fork might be out of sync with the original repository. This is OK for learning, but in real projects you'd sync your fork first: `git fetch upstream && git merge upstream/main`.

:::

Congratulations! You've just completed the full Git workflow.

::: tip Congratulations!
You've just completed a full Git workflow - the same process used by millions of developers every day. Fork, clone, branch, edit, commit, push, PR. That's the whole cycle.
:::

## Phase 2: On Your Own

Now that you know the workflow, it's time to tackle a real project. You have two options:

### Option A: KidneyQuest

KidneyQuest is a browser game starring the CeRKiD zebra. CeRKiD stands for Center for Rare Kidney Diseases at Charite - that's the Halbritter Lab where this workshop is being organized. The zebra is the rare disease mascot, and now it's the star of a game.

Think of Chrome's dinosaur game (the one that appears when your internet is down) but with a zebra jumping through a kidney-themed world. The tech stack is deliberately simple: vanilla HTML5 Canvas with zero dependencies. Just open `index.html` in a browser and it runs.

The repository will be available during the session. Your instructors will share the link and walk through the available issues - things like adding obstacles, improving jump physics, creating new backgrounds, or adding a score counter.

The workflow is identical to Phase 1:

1. **Fork** the KidneyQuest repository
2. **Clone** your fork to your computer
3. **Pick an issue** from the issue tracker
4. **Create a branch** for your feature
5. **Make changes** with AI help (this is where it gets fun)
6. **Commit** your changes
7. **Push** to your fork
8. **Open a PR** for review

::: info Setting Expectations
You probably won't build a complete game in 90 minutes - and that's fine. The goal is to practice the workflow (Git + AI tools) on a real project. Even adding a single feature or fixing one issue is a great outcome.
:::

### Option B: Your Own Project

If you have your own repository or project idea, apply the same workflow. Fork or clone it, create a branch, code with AI assistance, commit, push, and open a PR. This is your chance to build something you actually want or need.

## How to Prompt AI Effectively

Whether you're using a chatbot, Copilot, or a CLI agent, how you ask matters. Here are the key principles.

### 1. Be Specific About What You Want

Vague requests produce vague results. Compare these two prompts:

Bad:

```text
Make this better
```

Good:

```text
Refactor this function to validate email addresses using a regex pattern. Return true for valid emails, false otherwise.
```

The second prompt tells the AI exactly what to do, how to do it, and what output you expect.

### 2. Give Context

Tell the AI what project you're working on, what language you're using, and what you're trying to accomplish.

Bad:

```text
Add a jump feature
```

Good:

```text
I'm building KidneyQuest, a browser game using vanilla JavaScript and HTML5 Canvas. It's a side-scrolling jump game like Chrome's dino game. Add a jump mechanic: spacebar press makes the zebra rise 150px over 300ms, then gravity pulls it back down. Prevent double-jumping.
```

The context helps the AI understand constraints (vanilla JS, Canvas API), the style (Chrome dino), and edge cases (no double-jumping).

### 3. Specify the Output Format

Ask for what you need: "Return just the function" or "Explain each line with comments" or "Give me the terminal command to run".

Examples:

```text
Return just the function, no explanations.
```

```text
Show me the code with inline comments explaining what each section does.
```

```text
Give me the exact git command to undo my last commit.
```

This prevents the AI from writing an essay when you just need code, or vice versa.

### 4. Iterate on Results

First response not quite right? Refine it:

```
That's close, but also handle the case where the user is already jumping.
```

AI coding is a conversation, not a single request. You can ask follow-up questions, request changes, or ask for explanations.

### Tips for Claude

Claude works best with a structured 4-block pattern:

1. **Context** - what you're working on
2. **Task** - what specific thing you want
3. **Constraints** - limitations or requirements
4. **Output format** - how the result should look

Example prompt for KidneyQuest:

```
Context: I'm building KidneyQuest, a browser game using vanilla JavaScript and HTML5 Canvas. It's a side-scrolling jump game where a zebra character runs and jumps over obstacles.

Task: Add a scoring system that increases by 1 point every second the zebra survives. Display the score in the top-right corner of the canvas.

Constraints: Use vanilla JavaScript only - no libraries. The game loop runs at 60 FPS using requestAnimationFrame.

Output: Provide the complete scoring code as a JavaScript function, with comments explaining the logic.
```

Learn more: [Claude Prompting Best Practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-4-best-practices)

### Tips for Gemini

Gemini prefers direct, concise instructions. Keep it to one clear sentence per instruction, and put constraints at the beginning.

Example prompt for the same task:

```
Using vanilla JavaScript and HTML5 Canvas (no libraries), add a scoring system to this game. Increment the score by 1 every second. Display the score in the top-right corner using the fillText method. Return the code as a commented function.
```

Learn more: [Gemini Prompting Strategies](https://ai.google.dev/gemini-api/docs/prompting-strategies)

## Example Prompts for Common Tasks

Here are ready-to-use prompts you can copy and adapt. Replace the bracketed placeholders with your specifics.

**1. Understanding a codebase:**

```
I just cloned [repository name]. Explain the project structure and what each file does. I'm new to [language/framework].
```

**2. Writing a commit message:**

```
I changed [filename] to [describe what you did]. Write a clear, concise Git commit message following conventional commit format.
```

**3. Fixing an error:**

```
I'm getting this error: [paste error message]. The file is [filename] written in [language]. What's causing this and how do I fix it?
```

**4. Adding a game feature (KidneyQuest):**

```
I'm building KidneyQuest, a browser game using vanilla JavaScript and HTML5 Canvas. It's a side-scrolling jump game like Chrome's dino game. Add [specific feature - e.g., "a cloud parallax background" or "obstacle collision detection"]. Use only vanilla JavaScript, no libraries.
```

**5. Writing documentation:**

```
I added [feature description] to [project name]. Write a brief description for the README explaining what it does and how to use it.
```

**6. Reviewing code:**

```
Review this code for bugs, readability, and best practices. Suggest improvements:

[paste code here]
```

## What You've Learned

By the end of this session, you've practiced:

- The complete Git workflow: fork, clone, branch, edit, commit, push, PR
- How to use AI tools to assist with coding tasks
- How to write effective prompts for AI coding assistants
- How to contribute to open-source projects

Check out the [AI tools overview](/ai-tools) for a deeper look at what's available, or browse the resources page for further learning.
