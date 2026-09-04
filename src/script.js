// State
let notes = JSON.parse(localStorage.getItem('eznote_data')) || [];
let currentView = 'all'; // 'all', 'favorites', 'trash'
let activeNoteId = null;
let searchQuery = '';

// DOM Elements
const els = {
    btnNewNote: document.getElementById('btn-new-note'),
    navItems: document.querySelectorAll('.nav-item[data-view]'),
    notesList: document.getElementById('notes-list'),
    searchInput: document.getElementById('search-input'),
    
    // Editor
    editorEmpty: document.getElementById('editor-empty'),
    editorActive: document.getElementById('editor-active'),
    editorTitle: document.getElementById('editor-title'),
    editorBody: document.getElementById('editor-body'),
    editorMeta: document.getElementById('editor-meta'),
    
    // Actions
    btnFav: document.getElementById('btn-favorite'),
    btnDel: document.getElementById('btn-delete'),
    btnRestore: document.getElementById('btn-restore'),
    btnHardDel: document.getElementById('btn-hard-delete'),
    
    // Theme & Badges
    btnTheme: document.getElementById('btn-theme-toggle'),
    countAll: document.getElementById('count-all'),
    countFavs: document.getElementById('count-favs'),
    countTrash: document.getElementById('count-trash')
};

// Initialize
function init() {
    initTheme();
    updateBadges();
    renderNotesList();
    setupEventListeners();
}

// Data Management
function saveNotes() {
    localStorage.setItem('eznote_data', JSON.stringify(notes));
    updateBadges();
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function formatDate(ts) {
    const date = new Date(ts);
    const now = new Date();
    if (date.toDateString() === now.toDateString()) {
        return `Today at ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
    }
    return date.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
}

// Logic
function createNote() {
    const newNote = {
        id: generateId(),
        title: '',
        content: '',
        preview: '',
        updatedAt: Date.now(),
        isFavorite: false,
        isTrash: false
    };
    notes.unshift(newNote);
    saveNotes();
    
    if (currentView === 'trash') switchView('all');
    
    searchQuery = '';
    els.searchInput.value = '';
    
    renderNotesList();
    selectNote(newNote.id);
    els.editorTitle.focus();
}

function updateActiveNote() {
    if (!activeNoteId) return;
    const note = notes.find(n => n.id === activeNoteId);
    if (!note) return;

    note.title = els.editorTitle.innerText.trim();
    // Use innerHTML to preserve basic native rich text (bold, italic from OS shortcuts)
    note.content = els.editorBody.innerHTML;
    // Create a plain text preview
    note.preview = els.editorBody.innerText.substring(0, 80).replace(/\n/g, ' ');
    note.updatedAt = Date.now();

    saveNotes();
    
    // Update list UI without full re-render to keep focus seamless
    const listItem = document.querySelector(`.note-item[data-id="${note.id}"]`);
    if (listItem) {
        listItem.querySelector('.note-item-title').innerText = note.title || 'Untitled Note';
        listItem.querySelector('.note-item-preview').innerText = note.preview || 'No additional text';
        listItem.querySelector('.note-item-meta').innerText = formatDate(note.updatedAt);
    }
    
    els.editorMeta.innerText = `Last edited just now`;
}

function deleteNote() {
    if (!activeNoteId) return;
    const note = notes.find(n => n.id === activeNoteId);
    if (!note) return;

    if (currentView === 'trash') {
        // Soft delete was already applied, logic handled by hard delete
        return; 
    }

    note.isTrash = true;
    note.isFavorite = false;
    note.updatedAt = Date.now();
    saveNotes();
    
    activeNoteId = null;
    renderNotesList();
    renderEditor();
}

function restoreNote() {
    if (!activeNoteId) return;
    const note = notes.find(n => n.id === activeNoteId);
    if (!note) return;

    note.isTrash = false;
    note.updatedAt = Date.now();
    saveNotes();
    
    activeNoteId = null;
    renderNotesList();
    renderEditor();
}

function hardDeleteNote() {
    if (!activeNoteId) return;
    if (confirm("Are you sure you want to permanently delete this note? This cannot be undone.")) {
        notes = notes.filter(n => n.id !== activeNoteId);
        saveNotes();
        activeNoteId = null;
        renderNotesList();
        renderEditor();
    }
}

function toggleFavorite() {
    if (!activeNoteId) return;
    const note = notes.find(n => n.id === activeNoteId);
    if (!note) return;

    note.isFavorite = !note.isFavorite;
    saveNotes();
    
    if (note.isFavorite) {
        els.btnFav.classList.add('active');
    } else {
        els.btnFav.classList.remove('active');
        if (currentView === 'favorites') {
            activeNoteId = null;
            renderNotesList();
            renderEditor();
        }
    }
}

function switchView(view) {
    currentView = view;
    els.navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.view === view);
    });
    activeNoteId = null;
    renderNotesList();
    renderEditor();
}

// Rendering
function getFilteredNotes() {
    let filtered = notes;
    
    if (currentView === 'all') filtered = notes.filter(n => !n.isTrash);
    if (currentView === 'favorites') filtered = notes.filter(n => !n.isTrash && n.isFavorite);
    if (currentView === 'trash') filtered = notes.filter(n => n.isTrash);

    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(n => 
            (n.title && n.title.toLowerCase().includes(q)) || 
            (n.preview && n.preview.toLowerCase().includes(q))
        );
    }

    return filtered.sort((a, b) => b.updatedAt - a.updatedAt);
}

function updateBadges() {
    els.countAll.innerText = notes.filter(n => !n.isTrash).length;
    els.countFavs.innerText = notes.filter(n => !n.isTrash && n.isFavorite).length;
    els.countTrash.innerText = notes.filter(n => n.isTrash).length;
}

function renderNotesList() {
    const filtered = getFilteredNotes();
    els.notesList.innerHTML = '';

    if (filtered.length === 0) {
        els.notesList.innerHTML = `<div class="empty-list-state">
            ${searchQuery ? 'No matching notes.' : 'No notes found.'}
        </div>`;
        return;
    }

    filtered.forEach(note => {
        const div = document.createElement('div');
        div.className = `note-item ${note.id === activeNoteId ? 'active' : ''}`;
        div.dataset.id = note.id;
        
        div.innerHTML = `
            <div class="note-item-title">${note.title || 'Untitled Note'}</div>
            <div class="note-item-preview">${note.preview || 'No additional text'}</div>
            <div class="note-item-meta">${formatDate(note.updatedAt)}</div>
        `;
        
        div.addEventListener('click', () => selectNote(note.id));
        els.notesList.appendChild(div);
    });
}

function selectNote(id) {
    activeNoteId = id;
    document.querySelectorAll('.note-item').forEach(el => el.classList.remove('active'));
    const activeEl = document.querySelector(`.note-item[data-id="${id}"]`);
    if (activeEl) activeEl.classList.add('active');
    
    renderEditor();
}

function renderEditor() {
    const note = notes.find(n => n.id === activeNoteId);
    
    if (!note) {
        els.editorEmpty.classList.remove('hidden');
        els.editorActive.classList.add('hidden');
        return;
    }

    els.editorEmpty.classList.add('hidden');
    els.editorActive.classList.remove('hidden');

    // Populate data
    els.editorTitle.innerText = note.title;
    els.editorBody.innerHTML = note.content;
    els.editorMeta.innerText = `Last edited ${formatDate(note.updatedAt)}`;

    // Configure Toolbar based on view
    if (note.isTrash) {
        els.editorTitle.contentEditable = "false";
        els.editorBody.contentEditable = "false";
        els.btnFav.classList.add('hidden');
        els.btnDel.classList.add('hidden');
        els.btnRestore.classList.remove('hidden');
        els.btnHardDel.classList.remove('hidden');
    } else {
        els.editorTitle.contentEditable = "true";
        els.editorBody.contentEditable = "true";
        els.btnFav.classList.remove('hidden');
        els.btnDel.classList.remove('hidden');
        els.btnRestore.classList.add('hidden');
        els.btnHardDel.classList.add('hidden');
        
        if (note.isFavorite) els.btnFav.classList.add('active');
        else els.btnFav.classList.remove('active');
    }
}

// Theme
function initTheme() {
    const savedTheme = localStorage.getItem('eznote_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const target = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', target);
    localStorage.setItem('eznote_theme', target);
}

// Event Listeners
function setupEventListeners() {
    els.btnNewNote.addEventListener('click', createNote);
    
    els.navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            switchView(item.dataset.view);
        });
    });

    els.searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderNotesList();
    });

    // Editor Auto-save (Debounce not strictly needed for local data, but input listener works best)
    els.editorTitle.addEventListener('input', updateActiveNote);
    els.editorBody.addEventListener('input', updateActiveNote);
    
    // Toolbar Actions
    els.btnFav.addEventListener('click', toggleFavorite);
    els.btnDel.addEventListener('click', deleteNote);
    els.btnRestore.addEventListener('click', restoreNote);
    els.btnHardDel.addEventListener('click', hardDeleteNote);
    
    // Theme
    els.btnTheme.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
    });

    // Global Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

        // Cmd/Ctrl + N: New Note
        if (cmdOrCtrl && e.key.toLowerCase() === 'n') {
            e.preventDefault();
            createNote();
        }
        
        // Cmd/Ctrl + F: Search
        if (cmdOrCtrl && e.key.toLowerCase() === 'f') {
            e.preventDefault();
            els.searchInput.focus();
        }

        // Cmd/Ctrl + S: Force Save (already autosaves, just prevent default browser popup)
        if (cmdOrCtrl && e.key.toLowerCase() === 's') {
            e.preventDefault();
        }

        // Escape: Close search or clear active note
        if (e.key === 'Escape') {
            if (document.activeElement === els.searchInput) {
                els.searchInput.blur();
                els.searchInput.value = '';
                searchQuery = '';
                renderNotesList();
            } else {
                activeNoteId = null;
                renderNotesList();
                renderEditor();
            }
        }
        
        // Backspace/Delete to trash a note IF focus is not in the editor or search
        if ((e.key === 'Backspace' || e.key === 'Delete') && activeNoteId) {
            const ae = document.activeElement;
            if (ae !== els.editorTitle && ae !== els.editorBody && ae !== els.searchInput) {
                deleteNote();
            }
        }
    });
}

// Start
init();