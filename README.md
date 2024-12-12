# ZephCode CSS

ZephCode CSS adalah sebuah framework CSS modern, modular, dan fleksibel yang memudahkan pengembangan UI responsif, mudah di-theme, dan mudah diperluas.  
Dibuat dengan SCSS, didukung oleh tooling modern (Sass, PostCSS, Rollup, Vite), serta dilengkapi utilities ala framework populer.

## Fitur

- **Struktur Modular SCSS**:  
  Kode terorganisir dalam `abstracts`, `base`, `layout`, `components`, `utilities`, dan `themes`.
  
- **Theming & Dark Mode**:  
  Gunakan `_default.scss` dan `_dark.scss` di folder `themes` untuk mengatur tema. Beralih antara light/dark hanya dengan menambahkan class `.dark-theme` pada `<html>` atau `<body>`.

- **Utilities Lengkap**:  
  `utilities` folder menyediakan utilities untuk spacing, colors, display, flex, text, dsb. Memudahkan styling cepat tanpa menulis CSS kustom.

- **Components Siap Pakai**:  
  Tersedia komponen seperti buttons, forms, navbar, modal, tables, alerts, badges, dsb. Mudah digunakan dan dimodifikasi.

- **Tooling Modern**:  
  Menggunakan `sass`, `postcss` (autoprefixer, cssnano), `rollup` untuk JS bundling, dan `vite` untuk dev server yang cepat.

## Instalasi

### Via NPM

```bash
npm install zephcode-css
