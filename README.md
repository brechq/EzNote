# EzNote

> **A simple, fast, and distraction-free desktop note-taking app.**

**EzNote v1.0.0** is a lightweight desktop note-taking application built with Electron, modern HTML5, CSS, and vanilla JavaScript. It focuses on keeping note-taking fast, clean, local, and free from unnecessary complexity.

---

## ✨ Features

### 📝 Note Management

* Create notes instantly
* Edit notes with real-time autosave
* Mark notes as **Favorites**
* Move notes to **Trash**
* Restore deleted notes
* Permanently delete notes

### 🔎 Fast Search

Search through your notes instantly by:

* Note title
* Note content

### 💾 Local & Persistent Storage

Your notes are stored locally on your device using `localStorage`.

No account.
No cloud dependency.
No unnecessary data syncing.

Your notes remain available after restarting the application.

### 🎨 Light & Dark Mode

Built-in **Light Mode** and **Dark Mode** with your preference automatically saved.

### 🖥️ Three-Panel Interface

EzNote uses a clean three-panel layout:

```text
┌──────────────┬──────────────────┬─────────────────────────┐
│              │                  │                         │
│   Sidebar    │    Note List     │      Note Editor        │
│              │                  │                         │
│  Navigation  │   Your Notes     │    Write & Edit         │
│              │                  │                         │
└──────────────┴──────────────────┴─────────────────────────┘
```

The layout is designed to keep navigation, notes, and editing accessible without clutter.

### ⌨️ Keyboard-Friendly

Designed with keyboard shortcuts for faster navigation and editing.

---

## ⌨️ Keyboard Shortcuts

| Shortcut               | Action                                                |
| ---------------------- | ----------------------------------------------------- |
| `Ctrl + N` / `Cmd + N` | Create a new note                                     |
| `Ctrl + F` / `Cmd + F` | Focus the search field                                |
| `Ctrl + B` / `Cmd + B` | Toggle **Bold**                                       |
| `Ctrl + I` / `Cmd + I` | Toggle *Italic*                                       |
| `Escape`               | Clear search / cancel selection                       |
| `Delete` / `Backspace` | Delete the active note when the editor is not focused |

> **Note:** macOS uses `Cmd`, while Windows and Linux use `Ctrl`.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** installed on your computer.

[Download Node.js](https://nodejs.org/?utm_source=chatgpt.com)

### 1. Clone the Repository

```bash
git clone https://github.com/username/EzNote.git
cd EzNote
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start EzNote

```bash
npm start
```

EzNote should now launch in development mode.

---

## 📦 Build for Windows

To package EzNote into a standalone Windows application:

```bash
npm run dist
```

The generated files will be placed inside the `dist/` directory.

Typical output:

```text
dist/
├── EzNote Setup 1.0.0.exe
└── EzNote 1.0.0.exe
```

The installer can be used to install EzNote normally, while the portable version can be launched without a traditional installation.

---

## 🛠️ Tech Stack

| Technology             | Purpose                            |
| ---------------------- | ---------------------------------- |
| **Electron**           | Desktop application runtime        |
| **HTML5**              | Application structure              |
| **Modern CSS**         | UI, layout, themes, and styling    |
| **Vanilla JavaScript** | Application logic and interactions |
| **localStorage**       | Local note persistence             |
| **Electron Builder**   | Application packaging              |

### Why Vanilla JavaScript?

EzNote intentionally avoids heavy frontend frameworks and unnecessary dependencies.

The goal is to keep the application:

* Lightweight
* Fast
* Easy to understand
* Easy to modify
* Easy to maintain

---

## 📁 Project Structure

```text
EzNote/
├── index.html
├── style.css
├── script.js
├── main.js
├── package.json
└── assets/
    └── ...
```

> The exact structure may change as the project evolves.

---

## 🔐 Privacy

EzNote is designed around local-first note storage.

Your notes are stored locally on your device rather than being uploaded to a remote server.

There is no required account or cloud database.

---
## 📄 License

EzNote is released under the **MIT License**.

See the [`LICENSE`](LICENSE) file for more information.

---

## ⭐ Support

If you find EzNote useful, consider giving the repository a ⭐ on GitHub.

Every star helps the project grow.
