# Domain Pitfalls

**Domain:** Workshop website for non-technical audience, deployed to GitHub Pages under extreme time pressure
**Researched:** 2026-02-16
**Context:** AI Teachathon at Halbritter Lab, event is Feb 17 2026. Audience is researchers/clinicians, not developers.

---

## Critical Pitfalls

Mistakes that cause the site to be unusable at event time. These are the ones that will ruin your day.

---

### Pitfall 1: Base Path / `baseurl` Misconfiguration (Broken Site on GitHub Pages)

**What goes wrong:** The site works perfectly on `localhost` but every CSS file, JS script, image, and internal link is broken when deployed to `https://berntpopp.github.io/AI-Teachathon/`. The page loads as unstyled HTML or shows a blank white page.

**Why it happens:** GitHub Pages project sites serve from a subpath (`/AI-Teachathon/`), not from root (`/`). Locally, you develop at `localhost:4000/` with no subpath. Any absolute path like `/assets/css/style.css` resolves to `berntpopp.github.io/assets/css/style.css` instead of `berntpopp.github.io/AI-Teachathon/assets/css/style.css`. This is the single most common GitHub Pages deployment failure.

**Consequences:** Site appears completely broken -- no styling, no images, broken navigation. To anyone visiting, the site looks like it failed to load. Panic ensues the night before the event.

**Prevention:**
- Set `baseurl: "/AI-Teachathon"` in `_config.yml` (with the leading slash, no trailing slash)
- Set `url: "https://berntpopp.github.io"` in `_config.yml`
- In all templates and markdown, use `{{ site.baseurl }}` prefix or relative paths, never bare absolute paths
- For the just-the-docs theme: the theme handles this internally if `baseurl` is set correctly
- For the standalone Reveal.js `presentation.html`: use only CDN URLs (absolute external) and relative paths for any local assets -- do NOT use root-relative paths like `/assets/...`
- **Test locally with**: `bundle exec jekyll serve --baseurl "/AI-Teachathon"` to simulate the deployed path

**Warning signs:**
- Site looks great locally but blank or unstyled after deploy
- Browser console shows 404 errors for CSS/JS/image files
- Links navigate to `github.io/page` instead of `github.io/AI-Teachathon/page`

**Affects:** Entire deployment pipeline. Must be correct from the start.

**Confidence:** HIGH -- This is the most widely documented GitHub Pages issue across multiple authoritative sources.

---

### Pitfall 2: GitHub Pages Source Not Set to "GitHub Actions"

**What goes wrong:** You push the code, the GitHub Actions workflow runs, but the site either shows a 404 or shows the README instead of the built Jekyll site.

**Why it happens:** GitHub Pages defaults to deploying from a branch (usually `main` or `gh-pages`), serving raw files. The just-the-docs workflow uses `actions/deploy-pages` which requires the Pages source to be set to "GitHub Actions" in repo settings. If you forget this step, the workflow uploads artifacts but GitHub never actually serves them.

**Consequences:** Site shows 404. You see a green checkmark on the Actions workflow but nothing is live. You waste 30+ minutes debugging the wrong thing.

**Prevention:**
- Immediately after first push, go to **Settings > Pages > Build and deployment > Source** and select **"GitHub Actions"** (not "Deploy from a branch")
- Verify this BEFORE your first deploy attempt
- Check the Actions tab -- the workflow should show both "build" and "deploy" steps completing

**Warning signs:**
- Actions workflow shows green but site is 404
- Only the "build" job runs, no "deploy" job
- `pages build and deployment` workflow shows as a separate workflow from your custom one

**Affects:** Initial deployment. One-time setup but easy to forget.

**Confidence:** HIGH -- Official GitHub documentation confirms this is required for custom workflows.

---

### Pitfall 3: just-the-docs Remote Theme Fails Silently

**What goes wrong:** The Jekyll build succeeds but the site renders with no theme -- plain unstyled HTML, missing navigation, no search. Or the build fails entirely with "The just-the-docs theme could not be found."

**Why it happens:** just-the-docs is NOT one of the themes natively supported by GitHub Pages. You must use one of two approaches:
1. `remote_theme: just-the-docs/just-the-docs` with the `jekyll-remote-theme` plugin (builds on GitHub's infrastructure)
2. GitHub Actions workflow that installs the gem directly (the template approach)

Using `theme: just-the-docs` without the gem in the Gemfile works locally if you installed it, but fails on GitHub Pages because the gem is not in GitHub's allow-list. The `remote_theme` approach requires the `jekyll-remote-theme` plugin to be declared in BOTH `_config.yml` AND `Gemfile`.

**Consequences:** Either a build failure (site never deploys) or a site with no styling (looks broken).

**Prevention:**
- Use the just-the-docs template's GitHub Actions workflow directly -- it installs the gem as part of the build, avoiding remote_theme issues entirely
- If using `remote_theme`, ensure BOTH of these are present:
  - In `_config.yml`: `remote_theme: just-the-docs/just-the-docs` AND `plugins: [jekyll-remote-theme]`
  - In `Gemfile`: `gem "jekyll-remote-theme"`
- **Recommended approach:** Use the GitHub Actions workflow from `just-the-docs/just-the-docs-template` repo. It uses the gem directly, which is more reliable.

**Warning signs:**
- Build log shows "Theme could not be found"
- Site deploys but has no navigation sidebar, no search, plain HTML
- Build log shows "remote_theme" warnings

**Affects:** Site appearance and functionality. Must be addressed in initial scaffold.

**Confidence:** HIGH -- Multiple GitHub discussions document this exact issue.

---

### Pitfall 4: Reveal.js Presentation Fails to Load (CDN/Path Issues)

**What goes wrong:** The standalone `presentation.html` file shows a blank page or unstyled HTML when accessed on GitHub Pages. Reveal.js fails to initialize.

**Why it happens:** Several possible causes:
1. CDN URL is wrong or outdated -- using an old version URL that no longer exists
2. Mixed content issues -- if the CDN uses HTTP instead of HTTPS
3. The HTML file has Jekyll front matter (e.g., `layout: null`) and Jekyll processing corrupts it
4. The file references local reveal.js files that don't exist on the deployed site
5. Browser console shows CORS or 404 errors for reveal.js resources

**Consequences:** The presentation -- the centerpiece of the first 30 minutes of the event -- does not work. You fall back to... talking without slides?

**Prevention:**
- Use the jsDelivr CDN with a specific version pin: `https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/dist/reveal.js` (verify the exact latest version)
- Do NOT add any Jekyll front matter to the HTML file. A raw `.html` file with no front matter is passed through by Jekyll as-is. Adding `---` at the top triggers Liquid processing, which can break JavaScript template literals.
- Test the presentation URL directly after deploy: `https://berntpopp.github.io/AI-Teachathon/presentation.html`
- Load reveal.js CSS AND JS from CDN -- do not mix local and CDN resources
- Test in an incognito window to avoid cache issues

**Warning signs:**
- Blank white page when opening presentation.html
- Browser console shows 404 for reveal.js resources
- Slide content visible but not formatted (CSS failed to load)
- JavaScript errors mentioning "Reveal is not defined"

**Affects:** Presentation delivery. Must be tested before the event.

**Confidence:** HIGH -- Documented in reveal.js issues and GitHub Pages discussions.

---

### Pitfall 5: Site Not Updating After Push (CDN Cache / Build Failure)

**What goes wrong:** You push a fix, wait, refresh the site, and the old version is still showing. You push again. Still old. Panic.

**Why it happens:** Three possible causes:
1. **Browser cache:** Your browser cached the old version aggressively
2. **GitHub CDN cache:** GitHub Pages is served via CDN with a cache TTL of up to 10-30 minutes
3. **Build failure:** The Actions workflow failed silently, so the old version remains deployed

**Consequences:** During last-minute fixes the night before, you cannot tell if your changes are live. You might "fix" something that was already fixed, or miss a real problem.

**Prevention:**
- Always check the **Actions tab** after pushing to verify the build succeeded
- Use **Ctrl+Shift+R** (Windows/Linux) or **Cmd+Shift+R** (Mac) to hard-refresh
- Test in an **incognito/private window** which has no cache
- Append a cache-busting query parameter: `?v=2` to the URL when testing
- If truly stuck: `git commit --allow-empty -m "trigger rebuild" && git push`

**Warning signs:**
- Changes not appearing after 5+ minutes
- Actions tab shows red X or no new workflow run
- Different content in incognito vs regular window

**Affects:** Every iteration cycle during last-minute development.

**Confidence:** HIGH -- Extremely well-documented across GitHub community discussions.

---

## Moderate Pitfalls

Mistakes that cause confusion, delays, or poor experience but are recoverable.

---

### Pitfall 6: Content Overload for Non-Technical Audience

**What goes wrong:** Setup guides and tool descriptions are written at a developer level. Pages have dense paragraphs of text. Researchers see a wall of terminal commands and their eyes glaze over. They arrive at the event having skipped the setup entirely because the instructions felt intimidating.

**Why it happens:** The person writing the site (a developer) writes at their own comprehension level. Jargon, acronyms (CLI, SSH, PATH, npm), and assumed knowledge creep in. "Just run `git config --global user.name`" is not "just" anything to someone who has never opened a terminal.

**Consequences:** Participants arrive unprepared. The first hour of the event is consumed by installations and troubleshooting instead of learning. The event's core value proposition is undermined.

**Prevention:**
- **One concept per section.** Break instructions into small, numbered steps.
- **Screenshot everything.** Show what the screen should look like after each step.
- **Explain WHY before HOW.** "We need Git because it tracks changes to your files (like Track Changes in Word, but much better)" -- then install it.
- **Platform-specific tabs or sections.** Do not give one instruction that only works on Mac. Label Windows/Mac/Linux explicitly.
- **Provide escape hatches.** "If this does not work, do not worry -- we will help you at the start of the event."
- **Test with a non-technical person.** Ask a labmate who has never used Git to follow the setup guide. Watch where they get stuck.
- **Avoid these words without explanation:** repository, clone, commit, push, pull, branch, merge, terminal, CLI, npm, node, gem, bundle, PATH

**Warning signs:**
- Setup page is more than 3 scroll-lengths on a phone
- Instructions contain unexplained terminal commands
- No screenshots
- No "if this does not work" fallback guidance

**Affects:** Setup guide page, tool landscape page, hands-on guide.

**Confidence:** HIGH -- Well-established in pedagogy research (PLOS Computational Biology "Ten quick tips for teaching programming").

---

### Pitfall 7: Setup Instructions That Assume a Clean Machine

**What goes wrong:** Instructions say "Install Git" and link to the download page. But the researcher already has an ancient version of Git from 2018 that does not support features you need. Or they are on a managed institutional Windows machine where they cannot run installers without admin rights. Or they are on macOS and `git` opens an Xcode Command Line Tools popup that takes 20 minutes.

**Why it happens:** Setup guides are written and tested on the author's own machine, which already has everything configured. The guide has never been tested on a fresh machine or an institutional machine.

**Consequences:** Participants hit unexpected errors. The "15 minutes of setup" becomes 45 minutes of debugging. Charité hospital laptops may have restrictive IT policies.

**Prevention:**
- **Specify minimum versions.** "You need Git version 2.x or newer. Check with `git --version`."
- **Warn about institutional machines.** "If you are using a Charité/university-managed computer, you may need IT approval to install software. Contact [person] if you hit permission issues."
- **Provide alternative paths.** GitHub Codespaces or github.dev as browser-based fallback that requires zero local installation.
- **macOS gotcha:** Mention that the first time you run `git` on macOS, it may ask to install Xcode Command Line Tools, which takes ~10 minutes. This is normal.
- **Windows gotcha:** Git for Windows includes Git Bash. Recommend it as the terminal to use, and mention that Windows PowerShell and cmd.exe behave differently.
- **Pre-event check:** Send a "Please verify your setup" email/message 2-3 days before, not the night before.

**Warning signs:**
- No version numbers specified
- Only tested on one operating system
- No mention of permissions/admin requirements
- No fallback for people who cannot install

**Affects:** Setup guide page. Has downstream impact on the entire hands-on session.

**Confidence:** HIGH -- Universal experience from every coding workshop ever held.

---

### Pitfall 8: Presentation Too Technical for the Audience

**What goes wrong:** The Reveal.js presentation about "Why AI and What is Git" uses developer language, shows code snippets too early, or dives into technical details. The clinicians in the room disengage within 5 minutes. You lose them for the rest of the event.

**Why it happens:** The presenter knows the material deeply and forgets what it is like to not know it (the "curse of knowledge"). Slides are written to be technically accurate rather than engaging.

**Consequences:** The foundational motivation for the workshop is lost. Participants go through the motions of the hands-on but do not understand WHY they are doing it.

**Prevention:**
- **Start with a story, not a definition.** "Have you ever emailed a file called 'paper_final_v3_REALLY_final.docx' to a colleague?" -- this is relatable to every researcher.
- **One idea per slide.** Large text. Minimal words. If a slide has more than 20 words, it has too many.
- **Use analogies from their world:** Git = lab notebook. Branch = running an experiment in parallel. Merge = combining results. Repository = project folder with history.
- **No code on presentation slides.** Save code for the hands-on portion. The presentation is about motivation and concepts.
- **Build in interaction.** Ask questions. Do a quick poll. "Who has accidentally overwritten an important file?" (everyone raises hand)
- **Maximum 15-20 slides for 30 minutes.** That is 1.5-2 minutes per slide. Anything more is too fast.

**Warning signs:**
- Slides have code blocks
- Slides use developer jargon without analogy
- More than 25 slides for a 30-minute talk
- No audience participation moments

**Affects:** Presentation content (presentation.html).

**Confidence:** HIGH -- Standard presentation design principles, well-researched in communication literature.

---

### Pitfall 9: Jekyll Build Fails Due to YAML/Liquid Syntax Errors

**What goes wrong:** A push triggers the GitHub Actions workflow and the Jekyll build fails. The site remains on the old version (or shows 404 if it is the first deploy). You get a cryptic error about "Liquid syntax" or "invalid YAML."

**Why it happens:** Common triggers:
1. **Colons in titles:** YAML treats colons specially. A title like `title: "AI: What You Need to Know"` without quotes breaks YAML parsing. Even with quotes, nested quotes can fail.
2. **Liquid template syntax in markdown:** If you write something like `{{ variable }}` in your markdown content (common when writing about code), Jekyll tries to process it as Liquid. This causes "unknown tag" or "undefined variable" errors.
3. **Tabs in YAML:** YAML requires spaces, not tabs. Many editors auto-insert tabs.
4. **Special characters:** Non-UTF-8 characters in content (common when copying from Word documents or PDFs) break the build.

**Consequences:** Build fails, site does not deploy, and the error message is often unhelpful ("Liquid syntax error" with no line number).

**Prevention:**
- **Always quote YAML string values** that contain special characters: `title: "AI: A Guide"`
- **Escape Liquid in markdown:** Use `{% raw %}{{ example }}{% endraw %}` or use code fences (triple backticks) which automatically escape Liquid
- **Use spaces, never tabs** in YAML files. Configure your editor accordingly.
- **Validate YAML before pushing:** Use an online YAML validator or `ruby -e "require 'yaml'; YAML.load_file('_config.yml')"`
- **Check the Actions tab immediately after pushing.** Do not assume the build succeeded.

**Warning signs:**
- Red X on the Actions workflow
- Build log mentions "Liquid syntax error" or "YAML parse error"
- Content copied from Word/PDF documents

**Affects:** Every content edit. Must be vigilant throughout development.

**Confidence:** HIGH -- Documented in official GitHub Pages troubleshooting docs.

---

### Pitfall 10: Responsive Design Fails on Projector

**What goes wrong:** The site looks great on your laptop. Then you connect to the conference room projector (typically 1024x768 or 1280x720) and the layout breaks. Navigation overlaps content. Font is too small to read from the back of the room. The presentation slides are cut off.

**Why it happens:** Developers test on high-resolution screens. Projectors often run at lower resolutions and have different aspect ratios. Additionally, projector brightness washes out low-contrast text.

**Consequences:** During the live event, the presenter is fighting with layout issues instead of teaching. Participants cannot read what is on screen.

**Prevention:**
- **Test at 1024x768 resolution.** Use browser dev tools to simulate this viewport.
- **Minimum font size for projected content: 24px.** Body text on projected pages should be at least 20px. Slide content should be 32px+.
- **High contrast colors.** Dark text on light background works better on projectors than light text on dark background (projector bulbs wash out dark themes). However, Reveal.js dark themes work well if the contrast is strong enough.
- **For the just-the-docs theme:** The sidebar navigation collapses on narrow viewports. Test that the hamburger menu works.
- **For Reveal.js:** Test the presentation in fullscreen mode (F key in Reveal.js). Make sure nothing is cut off.
- **Avoid thin fonts.** Use medium or bold weight for projected content.

**Warning signs:**
- Small body text (under 16px)
- Low contrast between text and background
- Layout depends on wide viewport
- Never tested below 1920px width

**Affects:** All pages, but especially the presentation and any page that will be projected.

**Confidence:** MEDIUM -- Based on typography guidelines and presentation best practices. Specific projector behavior varies.

---

### Pitfall 11: Links to External Resources Are Broken or Changed

**What goes wrong:** The resources page links to a VS Code download, a GitHub Education page, a specific tutorial, or a CDN-hosted library. One or more of these links are dead or redirect to an unexpected page by event day.

**Why it happens:** External URLs change without notice. CDN versioning can shift. GitHub Education application flow may change. Download pages get reorganized.

**Consequences:** Participants click a link during the event and get a 404 or a confusing redirect. Momentum is lost. The presenter has to improvise.

**Prevention:**
- **Verify every external link the day of the event.** Manually click through each one.
- **Pin CDN versions.** Use `https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/` not `https://cdn.jsdelivr.net/npm/reveal.js@latest/` -- "latest" can break your presentation if a new version ships overnight.
- **Use canonical/stable URLs.** `https://code.visualstudio.com/Download` is more stable than a blog post URL.
- **Have fallback instructions.** "If this link does not work, search for [X] on [Y]."

**Warning signs:**
- Any link using "latest" or "current" in the URL
- Links to blog posts or articles (can be taken down)
- Links to specific GitHub releases (can be yanked)
- No link testing before the event

**Affects:** Resources page, setup page, presentation slides.

**Confidence:** HIGH -- Universal web content issue.

---

## Minor Pitfalls

Mistakes that cause annoyance but are quickly fixable.

---

### Pitfall 12: Forgetting `.nojekyll` or Underscore-Prefixed Directories

**What goes wrong:** Files in directories starting with underscore (`_`) or dot (`.`) are excluded from the built site. If you have important content in a folder like `_guides/` or assets in `.hidden/`, they will not appear in the deployed site.

**Why it happens:** Jekyll treats underscore-prefixed directories as special (collections, includes, etc.). Dot-prefixed directories are excluded by default. If you are using a GitHub Actions workflow with Jekyll, this is handled correctly for Jekyll directories like `_includes`, but custom underscore directories may be excluded.

**Prevention:**
- Avoid underscore-prefixed directories for content unless they are Jekyll collections defined in `_config.yml`
- If you must include dot-prefixed files, add a `.nojekyll` file to the root OR configure the exclude/include in `_config.yml`
- For the GitHub Actions workflow approach (recommended), this is less of an issue since the build is explicit

**Affects:** Asset organization, directory naming.

**Confidence:** MEDIUM -- Well-documented but less likely to be an issue with standard project structure.

---

### Pitfall 13: Missing Favicon / Generic Browser Tab

**What goes wrong:** The browser tab shows a generic document icon and "localhost:4000" or a long URL. It looks unprofessional and makes it hard to find the tab among many open tabs.

**Why it happens:** Nobody remembers to add a favicon until the site is "done," and then it is too low priority to fix.

**Prevention:**
- Add a simple favicon early. A 32x32 PNG is sufficient.
- In `_includes/head_custom.html` (just-the-docs supports this): `<link rel="icon" type="image/png" href="{{ '/assets/images/favicon.png' | relative_url }}">`
- Note: Use `relative_url` filter to ensure the baseurl is prepended.

**Affects:** Polish. Minor but visible.

**Confidence:** HIGH -- Simple and well-documented.

---

### Pitfall 14: Navigation Order Wrong or Pages Missing from Sidebar

**What goes wrong:** Pages appear in the wrong order in the just-the-docs sidebar, or some pages do not appear at all. The agenda appears before the setup guide. The ideas page is missing.

**Why it happens:** just-the-docs uses `nav_order` in front matter to sort pages. If you forget `nav_order`, the page may appear in alphabetical order or not at all. If two pages have the same `nav_order`, the order is undefined.

**Prevention:**
- Set `nav_order` explicitly on EVERY page
- Use sequential integers: 1, 2, 3, 4, 5 (not 10, 20, 30 -- though spacing works too)
- Pages without `layout: default` or without front matter will not appear in navigation
- `presentation.html` should NOT have front matter (it is standalone) -- it will not appear in nav, which is correct; link to it from the agenda page instead.

**Affects:** Site navigation and information architecture.

**Confidence:** HIGH -- Documented in just-the-docs docs.

---

### Pitfall 15: Mobile Visitors Cannot Use the Site

**What goes wrong:** Participants try to access the setup guide on their phone (during their commute, or because they do not have their laptop handy) and the site is unusable. Text is tiny, code blocks overflow, or the navigation is broken.

**Why it happens:** just-the-docs is responsive by default, but custom CSS or custom HTML (like the presentation) can break responsive layout. Code blocks with long lines overflow on mobile.

**Prevention:**
- **just-the-docs handles this well by default.** Do not override its responsive CSS without testing.
- **Code blocks:** Keep command-line examples short. Break long commands onto multiple lines with `\`.
- **Tables:** Avoid wide tables. Use lists or description lists instead.
- **Test on a phone** (or use browser dev tools mobile simulation) before the event.
- **The presentation (Reveal.js) works on mobile** but is not ideal for small screens. This is acceptable -- presentations are meant for projection.

**Affects:** Setup page (critical for pre-event access on mobile), all content pages.

**Confidence:** MEDIUM -- just-the-docs handles most of this, but custom content can break it.

---

## Time Pressure-Specific Pitfalls

These pitfalls are specifically amplified when building the night before.

---

### Pitfall 16: Scope Creep Under Pressure

**What goes wrong:** You start building "just one more page" or "one more feature" at 2 AM. The site gets more complex. A bug appears. You try to fix it, introduce another bug. By 4 AM, the site is worse than it was at midnight.

**Why it happens:** Adrenaline and the desire for perfection. "It would be so cool if..." thinking at 1 AM.

**Consequences:** Sleep-deprived presenter. Buggy site. Features half-implemented. Worse outcome than a simpler, finished site.

**Prevention:**
- **Define "done" before you start.** Write down the 5 pages that must work. Everything else is a bonus.
- **Ship the MVP by midnight.** Deploy a working site with basic content FIRST. Then improve.
- **The "one more thing" rule:** After midnight, you may make ONE more improvement. Then stop.
- **Good enough is perfect.** A working site with plain content is infinitely better than a broken site with fancy features.

**Warning signs:**
- It is past midnight and you are adding new features
- You are debugging a feature that did not exist 2 hours ago
- You have not tested the deployed site in the last hour

**Affects:** Everything. This is the meta-pitfall.

**Confidence:** HIGH -- Universal experience of anyone who has built anything under deadline.

---

### Pitfall 17: Not Deploying Until "It is Ready"

**What goes wrong:** You build locally for hours, perfecting every page. Then at 11 PM you push for the first time and discover the deployment is broken. Now you are debugging deployment infrastructure instead of polishing content.

**Why it happens:** "I will deploy when it is ready" feels logical. But deployment issues are a separate category of problems from content problems, and you do not discover them until you deploy.

**Consequences:** First deploy at 11 PM reveals base path issues, theme loading failures, broken Actions workflow. These take 30+ minutes to debug. Now you are behind.

**Prevention:**
- **Deploy within the first 30 minutes.** Push a minimal `index.md` with "Hello World" and verify the full pipeline works: push -> Actions build -> site live at correct URL.
- **Then iterate.** Every subsequent push adds content to an already-working deployment.
- **Front-load infrastructure risk.** Content problems are easy to fix. Deployment problems are hard to diagnose.

**Warning signs:**
- You have been building for more than 1 hour without pushing
- You have not verified the live URL yet
- You keep saying "I will deploy after I finish this page"

**Affects:** Deployment. This pitfall interacts with every other deployment pitfall on this list.

**Confidence:** HIGH -- Fundamental software development principle.

---

### Pitfall 18: Forgetting to Test the Presentation in Presentation Mode

**What goes wrong:** You build the Reveal.js presentation, check it looks fine in a normal browser window, and consider it done. At the event, you go fullscreen and discover: slides are cut off, fonts are too small, speaker notes do not work, or navigation (arrow keys) conflicts with browser shortcuts.

**Why it happens:** During development you scroll through slides in a small browser window. Reveal.js behaves differently in fullscreen/presentation mode.

**Prevention:**
- **Press F in Reveal.js** to enter fullscreen. Test every slide.
- **Press S to open speaker notes** view. Speaker notes via CDN may NOT work (known reveal.js issue -- the `notes.html` file is missing from CDN distributions). If you need speaker notes, include the notes plugin files locally.
- **Test with arrow keys** for navigation. Ensure the browser is focused on the presentation (not the URL bar).
- **Test the Overview mode** (press O) to see all slides at once.

**Warning signs:**
- Never opened the presentation in fullscreen
- Never tested speaker notes
- Presentation works differently in different browsers

**Affects:** Presentation delivery during the event.

**Confidence:** HIGH -- Known reveal.js CDN limitation documented in issue tracker.

---

## Phase-Specific Warnings

| Phase / Task | Likely Pitfall | Mitigation |
|---|---|---|
| Initial scaffold | Pitfall 2 (Pages source not set to Actions) | Set GitHub Actions as source IMMEDIATELY after first push |
| Initial scaffold | Pitfall 3 (just-the-docs theme fails) | Use the official template workflow, not DIY |
| Initial scaffold | Pitfall 17 (not deploying early) | Deploy "Hello World" within 30 minutes |
| Jekyll config | Pitfall 1 (baseurl wrong) | Set `baseurl: "/AI-Teachathon"` from the start, test locally with same flag |
| Content writing | Pitfall 6 (too technical) | Write for your aunt, not your colleague |
| Content writing | Pitfall 9 (YAML/Liquid errors) | Quote all YAML values with special characters |
| Setup page | Pitfall 7 (assumes clean machine) | Add platform-specific sections, version checks, fallback |
| Setup page | Pitfall 11 (broken links) | Pin versions, verify all links |
| Presentation | Pitfall 4 (Reveal.js CDN fails) | Pin CDN version, no Jekyll front matter |
| Presentation | Pitfall 8 (too technical) | One idea per slide, no code, use analogies |
| Presentation | Pitfall 18 (not tested fullscreen) | Test in fullscreen and speaker notes mode |
| Styling | Pitfall 10 (projector issues) | Test at 1024x768, verify contrast |
| Iteration | Pitfall 5 (cache / site not updating) | Hard refresh, check Actions tab, incognito |
| Late night | Pitfall 16 (scope creep) | Define "done" list, ship MVP by midnight |

---

## Quick Pre-Event Checklist

Run through this checklist on the morning of Feb 17, before the event:

- [ ] Site loads at `https://berntpopp.github.io/AI-Teachathon/`
- [ ] All navigation links work (click every sidebar item)
- [ ] Presentation loads at `.../AI-Teachathon/presentation.html`
- [ ] Presentation works in fullscreen (press F)
- [ ] Every external link on setup page works (click each one)
- [ ] Every external link on resources page works
- [ ] Site is readable on mobile (check on your phone)
- [ ] Site is readable at 1024x768 (browser dev tools)
- [ ] Setup instructions are understandable by a non-developer (ask someone)
- [ ] No "lorem ipsum" or placeholder content remaining
- [ ] `git push` still triggers a successful build (check Actions tab)
- [ ] Hard refresh (Ctrl+Shift+R) shows latest content

---

## Sources

### GitHub Pages Deployment
- [GitHub Docs: Troubleshooting Jekyll build errors](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-build-errors-for-github-pages-sites) -- HIGH confidence
- [Maxim Orlov: Deploying to GitHub Pages, Don't Forget Links](https://maximorlov.com/deploying-to-github-pages-dont-forget-to-fix-your-links/) -- MEDIUM confidence
- [GitHub Pages Relative Paths (codestudy.net)](https://www.codestudy.net/blog/github-pages-and-relative-paths/) -- MEDIUM confidence
- [just-the-docs Discussion #516: Not supported by GitHub Pages](https://github.com/just-the-docs/just-the-docs/discussions/516) -- HIGH confidence
- [just-the-docs template repository](https://github.com/just-the-docs/just-the-docs-template) -- HIGH confidence
- [GitHub Community: Pages not updating after push](https://github.com/orgs/community/discussions/152753) -- MEDIUM confidence

### Reveal.js
- [Reveal.js Issue #2722: CDN missing CSS files](https://github.com/hakimel/reveal.js/issues/2722) -- HIGH confidence
- [Reveal.js Issue #2232: Speaker notes not working with CDN](https://github.com/hakimel/reveal.js/issues/2232) -- HIGH confidence

### Pedagogy and Content
- [PLOS Comp Bio: Ten quick tips for teaching programming](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1006023) -- HIGH confidence
- [Mindtools: 10 Common Presentation Mistakes](https://www.mindtools.com/avmnivr/10-common-presentation-mistakes/) -- MEDIUM confidence
- [Communicating Tech to Non-Technical Audiences (Artech)](https://www.artech.com/artech-blogs/communicating-tech-concepts-to-non-technical-audience/) -- MEDIUM confidence

### Typography and Responsive Design
- [LearnUI: Responsive Font Size Guidelines](https://www.learnui.design/blog/mobile-desktop-website-font-size-guidelines.html) -- MEDIUM confidence
- [Superchart: Presentation Font Size Guide](https://www.superchart.io/blog/presentation-font-size) -- MEDIUM confidence
