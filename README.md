# EzNote

<p align="center">
  <img src="ReadMe%20Asset/banner.jpg" alt="EzNote Banner" width="100%">
</p>

<p align="center">
  <strong>A simple, modern, and distraction-free desktop note-taking application.</strong>
</p>

<p align="center">
  Built with Electron, Node.js, HTML, CSS, and Vanilla JavaScript.
</p>

---

## About

**EzNote** is a desktop note-taking application designed to keep writing simple and focused.

It provides a clean three-panel interface for managing notes, editing content, and organizing your workspace without requiring an online account or cloud service.

EzNote stores your notes locally on your device, making it suitable for users who prefer a simple and local-first note-taking experience.

## Features

* Three-panel note-taking interface
* Create, edit, and delete notes
* Automatic note saving
* Search notes by title and content
* Favorite notes
* Trash and restore system
* Light and dark themes
* Keyboard shortcuts
* Local data storage
* No account required
* No cloud dependency

## Application Interface

<p align="center">
  <img src="ReadMe%20Asset/application-interface.jpg" alt="EzNote Application Interface" width="900">
</p>

EzNote is built around a simple three-panel workflow:

**Navigation**
Access your notes, favorites, and trash.

**Notes**
Browse and search through your existing notes.

**Editor**
Write and edit your selected note without unnecessary distractions.

---

## Requirements

Before installing EzNote, make sure you have:

* **Node.js** installed
* **npm** installed
* Git installed if you are cloning the repository

EzNote requires **Node.js** to install its dependencies and run the Electron application.

You can get Node.js from the official website:

https://nodejs.org/

To verify your installation:

```bash
node --version
npm --version
```

Both commands should return a version number.

---

## Download

### Clone with Git

Open a terminal and run:

```bash
git clone https://github.com/brechq/EzNote.git
```

Then enter the project directory:

```bash
cd EzNote
```

### Or Download ZIP

You can also download the repository as a ZIP file from GitHub.

After downloading:

1. Extract the ZIP file.
2. Open the extracted `EzNote` folder.
3. Open a terminal inside the folder.

---

## Installation

Install the required Node.js dependencies:

```bash
npm install
```

This will install the packages required by EzNote, including Electron and its development dependencies.

---

## Running EzNote

After installing the dependencies, start the application with:

```bash
npm start
```

Electron will launch EzNote as a desktop application.

---

## Project Structure

```text
EzNote/
├── ReadMe Asset/
│   ├── application-interface.jpg
│   ├── banner.jpg
│   └── contributor.jpg
│
├── icon/
├── src/
├── main.js
├── package.json
├── package-lock.json
├── README.md
└── LICENSE
```

The project is primarily built using:

* **Electron** for the desktop application runtime
* **Node.js** for the application environment and package management
* **HTML** for the application structure
* **CSS** for the interface and styling
* **Vanilla JavaScript** for application logic

No frontend framework is required.

---

## Development

To run EzNote during development:

```bash
npm install
npm start
```

After making changes to the source code, restart the Electron application when necessary to apply the changes.

---

## Data & Privacy

EzNote is designed around local data storage.

Your notes are stored locally on your device rather than being uploaded to a remote server. EzNote does not require an account or cloud synchronization to function.

Because your data is stored locally, consider keeping your own backups if your notes are important.

---

## License

EzNote is released under the **MIT License**.

You are free to use, modify, distribute, and build upon the project in accordance with the terms of the license.

See the [LICENSE](LICENSE) file for the complete license text.

---

## Contributing

Contributions are welcome.

If you find a bug, have an improvement, or want to contribute code:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Test your changes.
5. Open a Pull Request.

Please keep contributions focused and consistent with the project's goal of maintaining a clean and simple note-taking experience.

---

## Contributors

<p align="center">
  <img src="ReadMe%20Asset/contributor.jpg" alt="EzNote Contributors" width="900">
</p>

<p align="center">
  Built and maintained by the EzNote contributors.
</p>

---

<p align="center">
  <strong>EzNote</strong><br>
  Simple notes. Local data. Less distraction.
</p>
