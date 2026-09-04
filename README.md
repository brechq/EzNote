# EzNote (v1.0.0) 📝

**EzNote** adalah aplikasi pencatat desktop yang dirancang dengan konsep minimalis, cepat, dan bebas distraksi. Dibangun menggunakan Electron murni, HTML5, CSS modern, dan vanilla JavaScript tanpa ketergantungan library/framework yang berat.

---

## ✨ Fitur Utama

- **Antarmuka Tiga Panel**: Navigasi sidebar, daftar catatan, dan area penulisan yang proporsional dan responsif.
- **Autosave Real-time**: Catatan tersimpan secara otomatis langsung saat mengetik tanpa perlu repot menekan save manual.
- **Penyimpanan Lokal Persisten**: Data tersimpan aman di disk lokal pengguna (`localStorage`), tetap ada saat aplikasi ditutup dan dibuka kembali.
- **Manajemen Catatan Lengkap**:
  - Buat catatan baru secara instan
  - Tandai catatan penting (**Favorites**)
  - Tempat sampah (**Trash**) dengan fitur *Restore* dan *Permanent Delete*
- **Pencarian Cepat**: Filter judul dan isi catatan secara instan saat mengetik di kolom pencarian.
- **Tema Gelap & Terang**: Dukungan dark mode dan light mode bawaan yang mengingat preferensi pengguna.
- **Keyboard-Friendly**: Didukung pintasan tombol untuk navigasi dan penulisan yang cepat.

---

## ⌨️ Pintasan Keyboard (Shortcuts)

| Shortcut | Fungsi |
| :--- | :--- |
| `Ctrl + N` / `Cmd + N` | Membuat catatan baru |
| `Ctrl + F` / `Cmd + F` | Fokus ke kolom pencarian |
| `Ctrl + B` / `Cmd + B` | Format teks tebal (*Bold*) |
| `Ctrl + I` / `Cmd + I` | Format teks miring (*Italic*) |
| `Escape` | Mengosongkan pencarian / membatalkan seleksi |
| `Delete` / `Backspace` | Menghapus catatan aktif (saat tidak fokus mengetik) |

---

## 🚀 Menjalankan dari Source Code

Pastikan sudah menginstal [Node.js](https://nodejs.org/) di perangkat kamu.

1. **Clone atau unduh repositori ini:**
   ```bash
   git clone [https://github.com/username/EzNote.git](https://github.com/username/EzNote.git)
   cd EzNote

```

2. **Instal dependensi:**
```bash
npm install

```


3. **Jalankan aplikasi (Development mode):**
```bash
npm start

```



---

## 📦 Membangun File Installer (.exe)

Untuk mem-package aplikasi menjadi standalone executable Windows:

```bash
npm run dist

```

Hasil installer (`EzNote Setup 1.0.0.exe`) dan versi portable (`EzNote 1.0.0.exe`) akan otomatis tersimpan di dalam folder `dist/`.

---

## 🛠️ Tech Stack

* **Runtime:** [Electron](https://www.electronjs.org/)
* **Frontend:** HTML5, Semantic Elements
* **Styling:** Modern CSS (CSS Variables, Flexbox, Custom Scrollbars)
* **Logic:** Vanilla JavaScript (ES6+)
* **Packaging:** Electron Builder

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi [MIT](https://www.google.com/search?q=LICENSE).

```

```
