---
marp: true
theme: gaia
class: lead
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
style: |
  section.lead h1 {
    text-align: center;
    font-size: 3em;
    color: #2c3e50;
  }
  section.lead p {
    text-align: center;
    color: #555;
  }
  /* Custom class for documentation pages */
  section.doc {
    text-align: left;
    font-size: 0.8em;
    background-image: none;
    background-color: white;
    padding: 40px;
    display: block;
  }
  /* Badge styling */
  .badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    color: #fff;
    background-color: #6c757d;
  }
  .badge-primary { background-color: #007bff; }
  .badge-success { background-color: #28a745; }
  .badge-info { background-color: #17a2b8; }
  
  /* Mermaid centering */
  .mermaid { display: flex; justify-content: center; }
---

<!-- _class: lead -->

# AI-Teachathon 🧬
### Halbritter Lab / CeRKiD

Please open this file in **VS Code** with the `Marp` extension to view as a presentation.
Or simply read on for documentation.

<span class="badge badge-primary">v1.0</span> <span class="badge badge-success">Planning Phase</span>

---

## 🎯 **The Goal**

> To empower the lab with **AI-assisted coding tools**, **Git**, and **GitHub** skills through a hands-on hackathon.

**Why?**
*   🧬 **Reproducibility**: No more `final_v3.docx`.
*   🤖 **Acceleration**: AI writes the boilerplate; you do the science.
*   🌍 **Collaboration**: Open source your research tools.

---

## 🗺️ **The Landscape**

```mermaid
graph LR
    A[User] -->|Prompts| B(AI Agent);
    B -->|Code| C{Git Repo};
    C -->|Push| D[GitHub];
    D -->|Deploy| E[Pages/Docs];
    style A fill:#f9f,stroke:#333,stroke-width:4px
    style B fill:#bbf,stroke:#333,stroke-width:2px
    style D fill:#faa,stroke:#333,stroke-width:2px
```

---

## 📅 **Agenda**

1.  **[Setup & Prep](../setup.md)** <span class="badge badge-info">Pre-req</span>
    *   Install VS Code, Git, GitHub Account.
2.  **Theory (30m)**
    *   Presentation: "Why Version Control?"
    *   Tool Landscape: ChatGPT vs. Claude vs. Agents.
3.  **[Hands-On](../hands-on.md)** <span class="badge badge-success">2 Hours</span>
    *   Project: **KidneyQuest** (Zebra needs to collect genes!).
    *   Activity: Clone -> Branch -> Prompt -> PR -> Merge.

---

<!-- _class: doc -->

## 📚 **Documentation & Resources**

This section is detailed documentation intended effectively as a "handout" or reference guide.

### 📂 **Project Structure**

| File | Purpose |
| :--- | :--- |
| `index.md` | The landing page for the Teachathon site. |
| `setup.md` | Instructions for participants to prepare their laptops. |
| `agenda.md` | The schedule for the workshop. |
| `hands-on.md` | The guide for the **KidneyQuest** session. |
| `presentation.html` | The Reveal.js slide deck for the intro talk. |

<details>
<summary><strong>Click to see original prompt content</strong></summary>

The original prompt used to generate this structure has been archived to `start_original_prompt.md`.
You can view it [here](../.planning/start_original_prompt.md).

</details>

---

<!-- _class: doc -->

## 🛠️ **Tools We Use**

*   **VS Code**: The editor.
*   **Git**: The time machine.
*   **GitHub**: The collaboration hub.
*   **Claude Code / Copilot**: The AI pair programmer.

### 💡 **Quick Tips**
1.  **Commit often**: Like saving a game before a boss fight.
2.  **Write clear prompts**: "Make the zebra jump" vs "Add a physics-based jump mechanic with gravity 9.8".
3.  **Review AI code**: It hallucinates. You are the pilot.

---

<!-- _class: lead -->

# 🚀 **Let's Start!**

[Open Agenda](../agenda.md) | [Open KidneyQuest Repo](https://github.com/berntpopp/KidneyQuest)

---
